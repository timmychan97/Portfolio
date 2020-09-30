import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Art from "../canvasComponents/Art";
import { Vector2 } from "../Util";
import Shape from "../canvasComponents/Shape";

/**
 * Returns sample art with mouse click controls
 */
export function SampleArt3(): Art {
  let art = new Art();
  art.id = -3;
  art.title = "Sample 3 Clicks";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    function createObject() {
      let shape = new Shape(ctx);
      shape.draw = () => {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(73, 173, 233, 0.747)";
        ctx.lineWidth = 10;
        const circleRadius = 10;
        ctx.arc(0, 0, circleRadius, 0, 2 * Math.PI);
        ctx.stroke();
      }
      let obj = new SceneObject(shape);

      obj.transform.scale = new Vector2(0.5, 0.5);

      return obj;
    }

    art.scene = new Scene(ctx);

    // Create empty scene object to handle mouse clicks
    let clickHandlingObj = new SceneObject(new Shape(ctx));

    let text = false;

    clickHandlingObj.shape.draw = () => {
      ctx.fillStyle = "white";
      ctx.font = "30px Arial";
      ctx.fillText(" Clicked: " + text, 10, 50);
    }

    let prevMouseDown = false;
    clickHandlingObj.update = () => {
      if (art.linkedCanvas && art.linkedCanvas.mouse) {
        const curMouseDown = art.linkedCanvas.mouse.isLeftDown;
        text = curMouseDown;

        if (curMouseDown !== prevMouseDown && curMouseDown === true) {
          // The mouse is clicked
          let obj = createObject();
          obj.transform.position = art.linkedCanvas.mouse.localPos;
          art.scene?.addObject(obj);
        }
        prevMouseDown = curMouseDown;
      } else {
        text = !text;
      }
    }

    art.scene.addObject(clickHandlingObj);
  }
  return art;
}