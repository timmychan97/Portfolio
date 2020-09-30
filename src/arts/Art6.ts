import Art from "../canvasComponents/Art";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";
import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Shape from "../canvasComponents/Shape";
import Transform from "../canvasComponents/Transform";
import { Vector2 } from "../Util";

export function Art6(): Art {
  let art = new Art();
  art.id = 6;
  art.title = "Table Cloth"
  art.sound = {
    'chillMusic': '/music/Horizon Flare.mp3',
  }
  art.publicProperties = {
    'Rotation speed': '1',
    'Refresh rate': '3.17',
    'Color background': "rgba(201, 13, 52, 0.11)",
    'Color strokes': "rgba(73, 173, 233, 0.747)",
  }
  const poetryUrl = "https://poetrydb.org/title/Funeral%20Of%20Youth,%20The:%20Threnody/lines.json";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.scene = new Scene(ctx);
    art.playSound('chillMusic', true);

    function createCircle() {
      let shape = new Shape(ctx);
      shape.draw = () => {
        let colorFill = art.publicProperties['Color background'];
        let colorStrokes = art.publicProperties['Color strokes'];
        ctx.beginPath();
        ctx.fillStyle = colorFill;
        ctx.strokeStyle = colorStrokes;
        ctx.lineWidth = 10;
        const circleRadius = 10;
        ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
      }
      let obj = new SceneObject(shape);

      let prevDrawTime = Date.now();

      // Instantiate obj with random position within the visible plane
      let randX = Math.random() * 1000;
      let randY = Math.random() * 1000;
      let randTransform = new Transform(new Vector2(randX, randY));
      obj.transform = randTransform;

      // For each frame
      obj.update = () => {
        let rotationSpeed = +(art.publicProperties['Rotation speed']);
        let refreshRate = +(art.publicProperties['Refresh rate']);
        if (Date.now() - prevDrawTime > refreshRate * 1000) {
          randX = Math.random() * 1000;
          randY = Math.random() * 1000;
          prevDrawTime = Date.now();
        }
        obj.transform.position = new Vector2(randX, randY);
        obj.transform.scale = new Vector2(randX, randY);
        obj.transform.rotation = rotationSpeed * 0.2 * (Date.now()-prevDrawTime)/1000;
      }
      return obj
    }

    for (let i = 0; i < 10; i++) {
      const obj = createCircle();
      art.scene.addObject(obj);
    }

    const poetryObj = new PoetryObjectLineByLine(art.scene, poetryUrl);
    poetryObj.cooldownDuration = 3.17;  // Follow music

    art.scene.addObject(poetryObj);
  }
  return art;
}
