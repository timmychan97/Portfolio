import { Vector2 } from "../Util";
import ImageObject from "./ImageObject";

export default class CloudObject extends ImageObject {
  xPos = 0;
  yPos = 0;
  speed = 1700 / 8;
  
  cloudStartX = -400;
  lifeTime = 8;

  rotationNum = 0;

  scaleX = 1;
  scaleY = 1;

  opacity = 0.2;

  constructor(ctx: CanvasRenderingContext2D, imgSrc: string) {
    super(ctx, imgSrc);
    this.setPivotAtCenter();
  }

  convertTimeToLifeTime(time: number, cloudNum: number, totalCloudNum: number) {
    let cloudCycle = time % this.lifeTime;
    if (cloudCycle < (this.lifeTime - cloudNum / (totalCloudNum / this.lifeTime))) {
      this.xPos =  (((cloudNum / (totalCloudNum / this.lifeTime)) + cloudCycle) * this.speed) + this.cloudStartX;
    } else {
      this.xPos = ((cloudCycle - (this.lifeTime - cloudNum / (totalCloudNum / this.lifeTime))) * this.speed) + this.cloudStartX;
    }
  }

  setSpeed(speed: number) {
    this.speed = speed * 1700 / 8;
    this.lifeTime = 8 / speed;
  }

  setYPos(num: number) {
    this.yPos = num;
  }

  update() {
    this.transform.position = new Vector2(this.xPos, this.yPos);
    this.transform.rotation = this.rotationNum;
    this.transform.scale = new Vector2(this.scaleX, this.scaleY);
  }
}