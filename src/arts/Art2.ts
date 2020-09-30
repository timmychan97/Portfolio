import Art from "../canvasComponents/Art";
import Shape from "../canvasComponents/Shape";
import ParticleObject from "../canvasComponents/ParticleObject";
import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import { lerp, Vector2 } from "../Util";
import FullScreenRectShape from "../canvasComponents/FullScreenRectShape";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";

export function Art2(): Art {
  let art = new Art();
  art.id = 2;
  art.title = "Morning Fire";
  art.sound = {
    'fire': "/music/fire.mp3",
  }
  art.publicProperties = {
    "Gravity": "-60",
    "Speed": "2",
    "Size": "1",
  }
  
  const poetryUrl = "https://poetrydb.org/title/The%20Clepington%20Catastrophe/lines.json";
  const cloudImgSrc = "img/cloudUnit.png";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.scene = new Scene(ctx);

    // Play looping sound with buggy delay limitation of html5
    art.playSound("fire", true, true);

    // Create Particle system
    const particleSystem = new SceneObject(new Shape(ctx));

    let nextMoveTime = 0;
    let coolDown = 2;
    let targetPosition = new Vector2();
    particleSystem.update = () => {
      const mousePos = art.linkedCanvas?.mouse?.localPos as Vector2;
      const time = Date.now() / 1000;
      if (isInside(mousePos)) {
        // Make this system follow mouse
        particleSystem.transform.position = mousePos;
      }
      else {
        if (time > nextMoveTime) {
          nextMoveTime = time + coolDown;
          // Pick a random position to move to
          targetPosition = new Vector2(Math.random() * 600 + 200, Math.random() * 600 + 300);
        }
        const prevMoveTime = nextMoveTime - coolDown;
        particleSystem.transform.position.x = lerp(particleSystem.transform.position.x, targetPosition.x, Math.min((time - prevMoveTime) / 2, 1));
        particleSystem.transform.position.y = lerp(particleSystem.transform.position.y, targetPosition.y, Math.min((time - prevMoveTime) / 2, 1));
      }

      createClouds();
    }

    // Creates particles of clouds, which will animate itselves.
    function createClouds() {
      for (let i = 0; i < 2; i++) {
        const cloudObj = new ParticleObject(ctx, cloudImgSrc);
        cloudObj.initTransform.position = particleSystem.transform.position.copy();

        // Apply properties from panel
        cloudObj.gravity = +art.publicProperties["Gravity"];
        cloudObj.speedMultiplier = +art.publicProperties["Speed"];
        cloudObj.initTransform.scale.mul(+art.publicProperties["Size"]);

        // Run its update function, to update it, as the drawingCanvas 
        // would not run its update at this very first frame
        cloudObj.update();

        // Add to scene
        art.scene?.addObject(cloudObj);

        // Destroy it after lifetime
        setTimeout(() => { art.scene?.removeObject(cloudObj) }, cloudObj.lifeTime * 1000);
      }
    }
    art.scene.addObject(particleSystem);


    // Create background
    const bgShape = new FullScreenRectShape(ctx);
    bgShape.color = "rgb(222, 133, 94)";
    art.scene.addObject(new SceneObject(bgShape));


    // Create Poetry
    const poetryObj = new PoetryObjectLineByLine(art.scene, poetryUrl);
    poetryObj.centerPos = new Vector2(500, 100);
    art.scene.addObject(poetryObj);
  }
  return art;
}


const boundsOffset = 100;
// Checks if a position is inside the canvas, with an offset
function isInside(pos: Vector2) {
  if (pos.x > -boundsOffset && pos.x < 1000 + boundsOffset) {
    if (pos.y > -boundsOffset && pos.y < 1000 + boundsOffset)
      return true;
  }
  return false;
}