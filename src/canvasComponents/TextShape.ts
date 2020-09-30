import Shape from "./Shape";

export default class TextShape extends Shape {
  text: string = "Loading text...";
  fontSize = 24;
  color = "#ffffff";
  textAlign: CanvasTextAlign = "left";
  maxWidth = 1000;

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.textBaseline = 'top';
    this.ctx.textAlign = this.textAlign;
    this.ctx.font = this.fontSize + "px Arial";
    this.ctx.fillText(this.text, this.transformOrigin.x, this.transformOrigin.y, this.maxWidth);
  }
}