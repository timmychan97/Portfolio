import { Vector2 } from "../Util";

export default class Mouse {
  canvas: HTMLCanvasElement;
  localPos: Vector2 = new Vector2(-1000, -1000); // Defaults it far outside of the canvas
  globalPos: Vector2 = new Vector2();

  isLeftDown: boolean = false;
  isRightDown: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.bindMouseEvents();
  }

  bindMouseEvents() {
    this.canvas.addEventListener("mousedown", this.onMouseDown);
    window.addEventListener("mousemove", this.onMouseMove);
    window.addEventListener("mouseup", this.onMouseUp);

    this.canvas.addEventListener("touchstart", this.onMouseDown);
    window.addEventListener("touchmove", this.onMouseMove);
    window.addEventListener("touchend", this.onMouseUp);
  }

  unbindMouseEvents() {
    this.canvas.removeEventListener("mousedown", this.onMouseDown);
    window.removeEventListener("mousemove", this.onMouseMove);
    window.removeEventListener("mouseup", this.onMouseUp);

    this.canvas.removeEventListener("touchstart", this.onMouseDown);
    window.removeEventListener("touchmove", this.onMouseMove);
    window.removeEventListener("touchend", this.onMouseUp);
  }

  /**
   * Check if the event is a mouse or touch
   * Use the last touch as the mouse pos.
   * Note: this does not support multi-touch
   */
  getMouseRepresentation = (e: MouseEvent | TouchEvent) => {
    // https://www.w3schools.com/JSREF/event_touch_touches.asp
    // https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent/changedTouches
    const touchEvent = e as TouchEvent;
    const mouseEvent = e as MouseEvent;
    return touchEvent.changedTouches ? touchEvent.changedTouches[0] : mouseEvent;
  }

  getMousePosScreenSpace = (e: MouseEvent | TouchEvent) => {
    const mouseRep = this.getMouseRepresentation(e);
    return new Vector2(mouseRep.clientX, mouseRep.clientY);
  }

  getLocalMousePosScreenSpace = (e: MouseEvent | TouchEvent) => {
    let mousePosScreenSpace = this.getMousePosScreenSpace(e);
    const c = this.canvas;
    const canvasDefinedSize = new Vector2(c.width, c.height);
    const canvasActualSize = new Vector2(c.getBoundingClientRect().width, c.getBoundingClientRect().height);
    const canvasPosScreenSpace = new Vector2(c.getBoundingClientRect().left, c.getBoundingClientRect().top);

    const localMousePosScreenSpace = Vector2.sub(mousePosScreenSpace, canvasPosScreenSpace);
    const localPosX = localMousePosScreenSpace.x / canvasActualSize.x * canvasDefinedSize.x;
    const localPosY = localMousePosScreenSpace.y / canvasActualSize.y * canvasDefinedSize.y;
    const localPos = new Vector2(localPosX, localPosY)
    return localPos
  }

  updateMousePos = (e: MouseEvent | TouchEvent) => {
    this.globalPos = this.getMousePosScreenSpace(e);
    this.localPos = this.getLocalMousePosScreenSpace(e);
  }

  private onMouseMove = (e: MouseEvent | TouchEvent) => {
    this.updateMousePos(e);
  }

  private onMouseDown = (e: MouseEvent | TouchEvent) => {
    this.updateMousePos(e);
    this.isLeftDown = true;
  }

  private onMouseUp = (e: MouseEvent | TouchEvent) => {
    this.updateMousePos(e);
    this.isLeftDown = false;
  }
}
