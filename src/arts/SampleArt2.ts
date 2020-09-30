import BackgroundShape from "../canvasComponents/BackgroundShape";
import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Art from "../canvasComponents/Art";
import { Vector2 } from "../Util";

/**
 * Returns sample art with mouse controls
 */
export function SampleArt2(): Art {
  let art = new Art();
  art.id = -2;
  art.title = "Sample 2";
  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.scene = new Scene(ctx);

    var shape = new BackgroundShape(ctx);
    shape.transformOrigin = new Vector2(200, 200);

    var obj = new SceneObject(shape);
    const now = Date.now();
    obj.update = () => {
      let a = art.linkedCanvas?.mouse?.localPos || new Vector2(0, 0);
      // Set position based on public properties. If value is NaN, make it 0 instead
      obj.transform.position = a;
      obj.transform.rotation = (Date.now() - now) / 1000;
    }

    art.scene.addObject(obj);
  }
  return art;
}