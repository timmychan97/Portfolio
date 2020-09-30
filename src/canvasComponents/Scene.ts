import SceneObject from "./SceneObject";

export default class Scene {
  ctx: CanvasRenderingContext2D;
  // A list showing which objects is in front of which
  objects: SceneObject[] = [];

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
  }

  /**
   * Add the given object to the scene. Only scene objects will be updated and drawn to the canvas
   * @param obj Object to be added to the scene
   */
  addObject(obj: SceneObject) {
    this.objects.push(obj);
  }

  /**
   * Add objects to the scene in the the order of the Object array
   */
  addObjects(objs: SceneObject[]) {
    objs.forEach(obj => {
      this.objects.push(obj);
    });
  }

  /**
   * Add the given object to the scene. Only scene objects will be updated and drawn to the canvas
   * @param obj Object to be added to the scene
   */
  removeObject(obj: SceneObject) {
    const a = this.objects; // alias
    const index = a.indexOf(obj);

    // If given object exists in the array, move it to the end of the array
    if (index > -1)
      return a.splice(index, 1)[0];
  }

  /**
   * Moves the object to front, over all other sceneObjects
   * @param obj Any object from this.objects
   */
  moveToFront(obj: SceneObject) {
    // Remove the object
    const removedObj = this.removeObject(obj);

    // Add the removed object back to the scene, and it will be the last object on the sceneObjects 
    // array, meaning it will be rendered in front of all other objects.
    if (removedObj)
      this.addObject(removedObj);
  }
}