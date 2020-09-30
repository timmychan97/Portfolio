import { Vector2 } from "../Util";

export default class Transform {
  position: Vector2;
  rotation: number; // Radians
  scale: Vector2;

  constructor(position = new Vector2(), rotation = 0, scale = new Vector2(1, 1)) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }

  copy() {
    return new Transform(this.position.copy(), this.rotation, this.scale.copy());
  }
}