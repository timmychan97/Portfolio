import Transform from "../canvasComponents/Transform";
import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Shape from "../canvasComponents/Shape";
import { Vector2 } from "../Util";
import Art from "../canvasComponents/Art";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";

export function Art3(): Art {
  let art = new Art();
  art.id = 3;
  art.title = "Pendel";
  art.sound = {
    'bgMusic': '/music/Tick-DeepFrozenApps-397275646.mp3',
  }
  art.publicProperties = {
    'String length': '500',
    'Pendel color': 'rgba(250, 250, 250, 1)',
    'Pendel size': '60',
  }

  const poetryUrl = "https://poetrydb.org/title/A%20Poem%20Sacred%20to%20the%20Memory%20of%20Sir%20Isaac%20Newton/lines.json";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.scene = new Scene(ctx);

    let pendelShape = new Shape(ctx);
    pendelShape.draw = () => {
      let pendelSize = parseInt(art.publicProperties['Pendel size']);
      ctx.strokeStyle = "rgba(150, 150, 150, 1)";
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, parseInt(art.publicProperties['String length']));
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.fillStyle = art.publicProperties['Pendel color'];
      ctx.fillRect(-(pendelSize / 2), parseInt(art.publicProperties['String length']), pendelSize, pendelSize);
    }

    //Create click handling object to get info about mouse position
    let clickHandlingObj = new SceneObject(new Shape(ctx));
    let isClicked = false;
    let mouseXpos = 0;
    let mouseYpos = 0;

    clickHandlingObj.update = () => {
      if (art.linkedCanvas && art.linkedCanvas.mouse) {
        isClicked = art.linkedCanvas.mouse.isLeftDown;
        mouseXpos = art.linkedCanvas.mouse.localPos.x;
        mouseYpos = art.linkedCanvas.mouse.localPos.y;
      }
    }

    //Define the basic info about transformation
    let acceleration = 0.001;
    let speed = 0.005;
    let radian = 0.5;
    let prevRadian = 1;

    let pendelTransform = new Transform();
    let pendel = new SceneObject(pendelShape, pendelTransform);
    pendel.update = () => {

      // Play sound when the pendel passes radian=0
      if (Math.sign(prevRadian * radian) === -1) {
        art.playSound("bgMusic", false);
      }
      prevRadian = radian;

      // Reset radian when the canvas was clicked
      if (isClicked) {
        if (mouseYpos > 200) {
          radian = -Math.atan((mouseXpos - 500) / (mouseYpos - 200));
        } else if (mouseXpos < 500) {
          radian = (Math.PI / 2) + Math.atan((mouseYpos - 200) / (mouseXpos - 500));
        } else {
          radian = - (Math.PI / 2) + Math.atan((mouseYpos - 200) / (mouseXpos - 500));
        }
        speed = 0;
      } else {
        // The position of the pendel calculated using speed and acceleration
        speed = speed + acceleration;
        radian = radian + speed;
        if (radian > 0) {
          acceleration = -0.0005;
        } else {
          acceleration = 0.0005;
        }
      }

      pendel.transform.position = new Vector2(500, 200);
      pendel.transform.rotation = radian;
    }

    art.scene.addObject(pendel);
    art.scene.addObject(clickHandlingObj);
    art.scene.addObject(new PoetryObjectLineByLine(art.scene, poetryUrl));
  }

  return art;
}