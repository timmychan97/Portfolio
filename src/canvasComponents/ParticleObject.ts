import { lerp, Vector2 } from "../Util";
import ImageObject from "./ImageObject";
import Transform from "./Transform";

export default class ParticleObject extends ImageObject {
  // All time values are in seconds
  speedMultiplier = 2;

  opacity = 0.1;
  opacityTarget = 0.03;
  opacityFadeTimeBeforeEnd = 1;
  opacityFadeTimeAtStart = 0.3;

  scaleTimeBeforeEnd = 2;
  scaleEnd = 1.5;

  initTransform = new Transform(new Vector2(500,700), Math.random()*2*Math.PI, new Vector2(0.3, 0.5));
  initSpeed = Vector2.randomRotation().mul(90);
  rotationSpeed = Math.random()*2 - 1;
  lifeTime = Math.random()*1 + 2;
  initTime = Date.now();
  gravity = -60;
  private gravityVector = new Vector2();

  constructor(ctx: CanvasRenderingContext2D, imgSrc: string) {
    super(ctx, imgSrc);
    this.name = "Particle " + imgSrc;
    this.setPivotAtCenter();
  }
  
  
  update() {
    const time = ((Date.now() - this.initTime)/1000) * this.speedMultiplier;
    this.transform = this.initTransform.copy();
    
    // Apply speed
    this.transform.position.add(Vector2.mul(this.initSpeed, time));

    // Apply rotation
    this.transform.rotation += this.rotationSpeed * time;
    
    // Apply opacity
    this.applyOpacity(time);

    this.applyScaling(time);

    // Update and apply gravity
    this.gravityVector = new Vector2(this.gravityVector.x, time * time * this.gravity);
    this.transform.position.y += this.gravityVector.y;
    
    // Make the position x go back little to the center to where it was at the beginning
    this.transform.position.x += (this.initTransform.position.x - this.transform.position.x)* 0.7;
  }

  applyOpacity(time: number) {
    // Fade in at the right time
    if (time <= this.opacityFadeTimeAtStart) {
      let t = time/this.opacityFadeTimeAtStart;
      this.opacity = lerp(0, this.opacityTarget, t);
    }

    // Fade away at the right time
    if (this.lifeTime - time <= this.opacityFadeTimeBeforeEnd) {
      let t = (time + this.opacityFadeTimeBeforeEnd - this.lifeTime)/this.opacityFadeTimeBeforeEnd;
      this.opacity = Math.max(0, lerp(this.opacityTarget, 0, t));
    }
  }

  applyScaling(time: number) {
    // Scale up a little at the end
    if (this.lifeTime - time <= this.scaleTimeBeforeEnd) {
      let t = (time + this.scaleTimeBeforeEnd - this.lifeTime)/this.scaleTimeBeforeEnd;

      const scaleX = lerp(this.initTransform.scale.x, this.initTransform.scale.x * this.scaleEnd, t);
      const scaleY = lerp(this.initTransform.scale.y, this.initTransform.scale.y * this.scaleEnd, t);
      this.transform.scale = new Vector2(scaleX, scaleY);
    }
  }

  // Change the draw method to draw the shapes with ligther blend mode, and then set it back to default
  draw() {
    this.shape.ctx.globalCompositeOperation = "lighter";
    this.shape.draw && this.shape.draw();
    this.shape.ctx.globalCompositeOperation = "source-over"; // back to default
  }
}