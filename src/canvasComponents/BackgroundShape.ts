import Shape from "./Shape";

export default class BackgroundShape extends Shape {
  draw() {
    // A background with brown fill and gray border, with a little transparency
    this.ctx.fillStyle = "rgba(201, 194, 176, 0.651)";
    this.ctx.fillRect(0, 0, 400, 400);
    this.ctx.strokeStyle = "rgba(73, 73, 73, 0.747)";
    this.ctx.lineWidth = 10;
    this.ctx.strokeRect(0, 0, 400, 400);
  }
}