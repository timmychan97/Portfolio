import BackgroundShape from "../canvasComponents/BackgroundShape";
import Scene from "../canvasComponents/Scene";
import SceneObject from "../canvasComponents/SceneObject";
import Art from "../canvasComponents/Art";
import { Vector2 } from "../Util";
import PoetryObjectLineByLine from "../canvasComponents/PoetryObjectLineByLine";

/**
 * Returns sample art with mouse controls
 */
export function SampleArt4(): Art {
  let art = new Art();
  art.id = -4;
  art.title = "Sample 4 Poetry";

  const url = "https://poetrydb.org/title/Ballade%20of%20Dead%20Actors/lines.json";

  art.createScene = (ctx: CanvasRenderingContext2D) => {
    art.scene = new Scene(ctx);

    var shape = new BackgroundShape(ctx);
    shape.transformOrigin = new Vector2(200, 200);

    var obj = new SceneObject(shape);
    const now = Date.now();
    obj.update = () => {
      // Set position based on public properties. If value is NaN, make it 0 instead
      let a = art.linkedCanvas?.mouse?.localPos || new Vector2(0, 0);
      obj.transform.position = a;
      obj.transform.rotation = (Date.now() - now) / 1000;
    }

    const poetryObj = new PoetryObjectLineByLine(art.scene, url);

    art.scene.addObject(obj);
    art.scene.addObject(poetryObj);
  }
  return art;
}

