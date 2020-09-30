import Shape from "./Shape";

export default class FullScreenRectShape extends Shape {
  color?: string;
  draw() {
    // A background with brown fill and gray border, with a little transparency
    this.ctx.fillStyle = this.color ?? "black";
    this.ctx.fillRect(0, 0, 1000, 1000);
  }
}