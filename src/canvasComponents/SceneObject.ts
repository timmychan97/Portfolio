import Shape from "./Shape";
import Transform from "./Transform";

export default class SceneObject {
  shape: Shape;
  transform: Transform;
  name: string;

  constructor(shape: Shape, transform: Transform = new Transform(), name = "No name") {
    this.shape = shape;
    this.transform = transform;
    this.name = name;
  }

  update?(): void;
  draw() {
    this.shape.draw && this.shape.draw();
  }
}