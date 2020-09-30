import { Vector2 } from "../Util";

export default class Shape {
  ctx: CanvasRenderingContext2D;
  transformOrigin: Vector2 = new Vector2();

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  public draw?(): void;
}