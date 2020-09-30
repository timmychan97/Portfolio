import React from 'react';
import Art from '../canvasComponents/Art';
import Mouse from '../canvasComponents/Mouse';
import Scene from '../canvasComponents/Scene';
import DrawingCanvas from '../canvasComponents/DrawingCanvas';
import { Vector2 } from '../Util';

interface Props {
  art: Art,
}

// The canvasCount will be twice as much as the actual count of canvas elements.
// This is caused by the Strict mode in React, and this only happens in dev mode
// The count will be correct in release build
let canvasCount = 0;

export default class Canvas extends React.Component<Props> {
  size: Vector2 = new Vector2(1000, 1000);
  id: number;

  art: Art;
  drawingCanvas?: DrawingCanvas;
  mouse?: Mouse;
  canvasElement?: HTMLCanvasElement;
  canvasRef: React.RefObject<HTMLCanvasElement>;

  constructor(props: Props) {
    super(props);
    canvasCount += 1;
    this.id = canvasCount;
    this.art = props.art;
    this.art.linkedCanvas = this;
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.createArtScene();
    this.updateArtScene();
  }

  componentDidUpdate = () => this.updateArtScene();

  componentWillUnmount() {
    console.log("Unmounting canvas" + this.id);
    this.unmountCleanUp();
  }

  createArtScene() {
    this.unmountCleanUp();  // Destroy stuff if it exist. We need to rerender the canvas when sessionStorage is changed

    this.canvasElement = this.canvasRef.current as HTMLCanvasElement;
    const ctx = this.canvasElement.getContext("2d") as CanvasRenderingContext2D;

    // If there is no scenes in the art, create an empty scene
    this.art.linkedCanvas = this;
    this.art.createScene(ctx);
    const scene = this.art.scene ?? new Scene(ctx);

    this.mouse = new Mouse(ctx.canvas);
    this.drawingCanvas = new DrawingCanvas(ctx, scene);
  }

  updateArtScene() {
    this.art.replaceArtPropByStorage();
  }

  unmountCleanUp() {
    this.mouse && this.mouse.unbindMouseEvents();
    this.drawingCanvas && this.drawingCanvas.onDestroy();
  }

  render() {
    return (
      <canvas ref={this.canvasRef} id={"canvas" + this.id} width={this.size.x} height={this.size.y} />
    );
  }
}
