import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Art from "../canvasComponents/Art";
import { lerp, Vector2 } from "../Util";
import Shape from "../canvasComponents/Shape";
import FullScreenRectShape from "../canvasComponents/FullScreenRectShape";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";


export function Art1(): Art {
  let art = new Art();
  art.id = 1;
  art.title = "Rainy Days";
  art.sound = {
    'bgMusic': '/music/the_field_of_dreams.mp3',
  }
  art.publicProperties = {
    'Ripples per second': '4',
    'Ripples size': '1',
    'Background color': '#512843',
  }

  const poetryUrl = "https://poetrydb.org/title/Ballade%20of%20Dead%20Actors/lines.json";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.playSound("bgMusic", true);

    function createRing(pos: Vector2, size: number = 1) {
      const shape = new Shape(ctx);

      const lifeTime = 2; // secs
      const beginTime = Date.now();

      let initOpacity = 0.5 * size;
      let opacity = initOpacity;

      let initLineWidth = 5 * size;
      let lineWidth = initLineWidth;

      shape.draw = () => {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255," + opacity + ")";
        ctx.lineWidth = lineWidth * +art.publicProperties['Ripples size'];
        const circleRadius = 40 * size * +art.publicProperties['Ripples size'];
        ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        ctx.stroke();
      }
      let obj = new SceneObject(shape);

      obj.transform.scale = new Vector2();

      obj.transform.position = pos;
      obj.update = () => {
        const time = (Date.now() - beginTime) / 1000;
        obj.transform.scale = Vector2.mul(new Vector2(1, 1), 5 * time);

        opacity = lerp(initOpacity, 0, time / lifeTime);
        lineWidth = lerp(initLineWidth, 2, time / lifeTime);

        // If lifetime reached, destroy the object from scene
        if (time > lifeTime) {
          art.scene?.removeObject(obj);
        }
      }
      art.scene?.addObject(obj);

      return obj;
    }

    function createRipple(pos: Vector2, size: number = 1) {
      createRing(pos, size);
      setTimeout(() => art.linkedCanvas?.mouse && createRing(pos, size), 50);
      setTimeout(() => art.linkedCanvas?.mouse && createRing(pos, size), 150);
      setTimeout(() => art.linkedCanvas?.mouse && createRing(pos, size), 300);
    }

    art.scene = new Scene(ctx);

    const bgShape = new FullScreenRectShape(ctx);
    bgShape.color = art.publicProperties['Background color'];

    const bgObject = new SceneObject(bgShape)

    // Use the background scene object as mouse click handler
    let prevTime = Date.now();
    let prevMouseDown = false;
    bgObject.update = () => {

      bgShape.color = art.publicProperties['Background color'];
      if (art.linkedCanvas && art.linkedCanvas.mouse) {
        const curMouseDown = art.linkedCanvas.mouse.isLeftDown;
        if (curMouseDown !== prevMouseDown && curMouseDown === true) {
          // The mouse is clicked
          let pos = art.linkedCanvas.mouse.localPos;
          createRipple(pos);
        }
        prevMouseDown = curMouseDown;
      }

      if ((Date.now() - prevTime) / 1000 > 1 / (+art.publicProperties['Ripples per second'])) {
        prevTime = Date.now();
        let randomPos = new Vector2(Math.random() * 1000, Math.random() * 1000);
        createRipple(randomPos, Math.random() * 0.5 + 0.2);
      }
    }

    art.scene.addObject(bgObject);
    art.scene.addObject(new PoetryObjectLineByLine(art.scene, poetryUrl));
  }
  return art;
}