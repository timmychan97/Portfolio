import React, { Fragment } from 'react';
import { OverlayContext } from '../contexts/OverlayContextProvider';
import ArtPropertyPanel from './ArtPropertyPanel';
import Canvas from './Canvas';
import '../css/Overlay.css';

export default class Overlay extends React.Component {
  static contextType = OverlayContext;
  canvasRef: React.RefObject<Canvas>;

  constructor(props: {}) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate = () => {
    this.canvasRef.current?.canvasElement && (this.canvasRef.current.canvasElement.onclick = (e) => e.stopPropagation());
  }

  render() {
    return (
      <div className={"Overlay" + ((this.context.isVisible) ? "" : " closed")} onClick={() => this.context.toggleVisibility()}>
        <div className="closeButton" onClick={() => this.context.toggleVisibility()}><span /><span /></div>
        {this.context.isVisible ?
          <Fragment>

            {Object.keys(this.context.art.sound).map((soundName, i) =>
              <audio key={i} preload="auto" id={"artid" + this.context.art.id + "-" + soundName} src={this.context.art.sound[soundName]} />
            )}

            <Canvas ref={this.canvasRef} art={this.context.art} />
            <ArtPropertyPanel art={this.context.art} />

          </Fragment>
          : null
        }
      </div>
    );
  }
}
