import BackgroundShape from "../canvasComponents/BackgroundShape";
import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Art from "../canvasComponents/Art";
import { Vector2 } from "../Util";

/**
 * Returns sample art
 * Not using class extends Art because that would be strange creating a new class for each art.
 */
export function SampleArt1(): Art {
  let art = new Art();
  art.id = -1;
  art.title = "Sample 1";
  art.publicProperties["X Pos"] = "500";
  art.publicProperties["Y Pos"] = "500";
  
  // If there existing properties stored in the session stored, use them
  art.replaceArtPropByStorage();

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.scene = new Scene(ctx);

    var shape = new BackgroundShape(ctx);
    shape.transformOrigin = new Vector2(200, 200);

    var obj = new SceneObject(shape);
    const now = Date.now();
    obj.update = () => {      
      // Set position based on public properties. If value is NaN, make it 0 instead
      obj.transform.position = new Vector2(parseInt(art.publicProperties["X Pos"]) || 0, parseInt(art.publicProperties["Y Pos"]) || 0);
      obj.transform.rotation = (Date.now() - now) / 1000;
    }

    art.scene.addObject(obj);
  }
  return art;
}


