import Transform from './Transform';
import Logger from './Logger';
import Scene from './Scene';
import { Vector2 } from '../Util';

export default class DrawingCanvas {
  ctx: CanvasRenderingContext2D;

  logger: Logger;
  scene: Scene;
  stop: boolean;

  constructor(ctx: CanvasRenderingContext2D, scene: Scene) {
    this.ctx = ctx;
    this.scene = scene;
    this.logger = new Logger(false);
    this.stop = false;

    // Need arrow function to keep have correct reference to "this" in update function
    this.startAnimating();
  }

  onDestroy() {
    this.stop = true;
  }

  startAnimating = () => {
    if (this.stop) return;
    requestAnimationFrame(this.startAnimating);

    this.update();
  }

  /**
   * Main loop
   */
  update() {
    this.clearCanvas();
    this.updateObjectStates();
    this.updateDrawing();
  }

  updateObjectStates() {
    // Loop through all the objects and run their update function
    this.scene.objects.forEach(obj => {
      if (obj.update) {
        this.logger.log(`Running update method of ${obj.name}`);
        obj.update();
      }
    });
  }

  updateDrawing() {
    this.scene.objects.forEach(obj => {
      // Start of each object drawing
      this.logger.log(`Running draw method of ${obj.name}`);

      let ctx = this.ctx;
      ctx.save();

      // Move the context to match the transform of the object
      this.transformContext(obj.transform, obj.shape.transformOrigin);

      obj.draw();

      // Restore the transformed context
      ctx.restore();
    });
  }

  /**
     * Transforms the canvas context, based on a pivot point defined in transformOrigin
     * This should be called before running ctx.drawX()
     * @param ctx Canvas context
     * @param {Transform} transform
     * @param {Vector2} transformOrigin
     */
  transformContext(transform: Transform, transformOrigin: Vector2) {
    let ctx = this.ctx;
    ctx.translate(transform.position.x, transform.position.y);
    ctx.translate(-transformOrigin.x, -transformOrigin.y);

    // Rotate around arbitrary point
    // Inspired by https://stackoverflow.com/questions/4649836/using-html5-canvas-rotate-image-about-arbitrary-point
    ctx.translate(transformOrigin.x, transformOrigin.y);
    ctx.rotate(transform.rotation); // Radians
    ctx.translate(-transformOrigin.x, -transformOrigin.y);

    ctx.translate(transformOrigin.x, transformOrigin.y);
    ctx.scale(transform.scale.x, transform.scale.y);
    ctx.translate(-transformOrigin.x, -transformOrigin.y);
  }

  clearContextTransformation() {
    // Reset the transformed context
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  clearCanvas() {
    this.clearContextTransformation();
    // Clear all pixels of the resetted context
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}
