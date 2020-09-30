import Shape from "./Shape";
import SceneObject from "./SceneObject";
import { Vector2 } from "../Util";

export default class ImageObject extends SceneObject {
  img: HTMLImageElement;
  opacity = 1;

  constructor(ctx: CanvasRenderingContext2D, imgSrc: string) {
    super(new Shape(ctx));
    this.name = "image, src:" + imgSrc;
    this.img = new Image();
    this.img.src = imgSrc;
    this.shape.draw = () => {
      ctx.globalAlpha = this.opacity;
      ctx.drawImage(this.img, 0, 0);
      ctx.globalAlpha = 1;
    }
  }

  setPivotAtCenter() {
    this.shape.transformOrigin = new Vector2(this.img.width/2, this.img.height/2);
  }
}