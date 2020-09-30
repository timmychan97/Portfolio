import Shape from "./Shape";
import SceneObject from "./SceneObject";
import { PoetryAPI, Vector2 } from "../Util";
import Scene from "./Scene";
import TextShape from "./TextShape";

export default class PoetryObject extends SceneObject {
  scene: Scene;
  url: string;
  poetryLines: string[] = [];
  poetryTextObjects: SceneObject[] = [];

  topLeftPos: Vector2 = new Vector2(50, 50);
  lineSpacing = 5;
  fontSize = 24;
  textAlign = "left";


  constructor(scene: Scene, url: string) {
    super(new Shape(scene.ctx));
    this.scene = scene;
    this.url = url;

    PoetryAPI.getLines(url).then(lines => {
      this.poetryLines = lines;
      this.onPoetryReady(lines);
    });
  }
  
  createTextObject = (text: string, pos: Vector2) => {
    const textShape = new TextShape(this.scene.ctx);
    textShape.text = text;
    textShape.fontSize = this.fontSize;
    textShape.textAlign = this.textAlign as CanvasTextAlign;

    const textObject = new SceneObject(textShape);
    textObject.transform.position = pos;
    return textObject;
  }

  onPoetryReady = (lines: string[]) => {
    // Create text objects for each line in the poetry
    let count = 0;
    lines.forEach(line => {
      const textObject = this.createTextObject(line, new Vector2(this.topLeftPos.x, this.topLeftPos.y + count * (this.fontSize + this.lineSpacing)));
      this.poetryTextObjects.push(textObject);
      count++;
    })
    this.scene.addObjects(this.poetryTextObjects);
  }
}