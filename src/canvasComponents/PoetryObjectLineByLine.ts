import { lerp, Vector2 } from "../Util";
import PoetryObject from "./PoetryObject";
import TextShape from "./TextShape";

export default class PoetryObjectLineByLine extends PoetryObject {
  centerPos = new Vector2(500,500);

  // Styling for the textShape. Overrides those in base
  fontSize = 33;
  textAlign = "center";

  // Create a text object at the center of the scene
  createTextObjectAtCenter = (text: string) => {
    const textObj = this.createTextObject(text, this.centerPos)
    textObj.name = text;

    const initTime = Date.now();
    const initOpacity = 0;
    const duration = 1 * 1000;
    const textShape = (textObj.shape as TextShape);
    textShape.color = "#00000000"
    textObj.update = () => {
      const time = Date.now() - initTime;
      textShape.color = "rgba(255,255,255," + lerp(initOpacity, 1, Math.min(time / duration, 1)) + ")";
    }
    return textObj;
  }

  // Prevent creating all textObjects at once
  onPoetryReady = () => {};

  
  // Generate lines of text one by one
  * textGenerator() {
    for (let line of this.poetryLines) {
      const textObj = this.createTextObjectAtCenter(line);
      this.scene.addObject(textObj);
      yield
      this.scene.removeObject(textObj);
    }
  }

  // Iterator for the textGenerator
  textGenerate = this.textGenerator();

  nextSpawnTime = Date.now();
  cooldownDuration = 3;
  update = () => {
    // If poetry lines are not ready yet
    if (this.poetryLines.length === 0) return;

    if (Date.now() > this.nextSpawnTime) {
      this.nextSpawnTime = Date.now() + this.cooldownDuration * 1000;
      this.textGenerate.next();
    }
  }
}