import React from 'react';
import { ThemeContext } from '../contexts/ThemeContextProvider';
import Art from '../canvasComponents/Art';
import Canvas from './Canvas';
import '../css/Card.css';
import { OverlayContext } from '../contexts/OverlayContextProvider';

interface Props {
  art?: () => Art;
}

class Card extends React.Component<Props> {
  static contextType = OverlayContext;    // Showing you usage of class component context consuming
  title: string;

  // Need art definition to create a new art instance when clicked
  artDefinition: () => Art;

  art: Art;

  constructor(props: Props) {
    super(props);
    // Create an empty art if the art is not passed in
    this.artDefinition = props.art ?? (() => new Art());
    this.art = this.artDefinition();
    this.title = this.art.title;
  }

  onClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.context.toggleVisibility();
    this.context.setArt(this.artDefinition());
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {themeContext => (
          <div className={"Card " + themeContext.theme} onClick={event => this.onClick(event)}>
            <div className="thumbnail">
              <div className="canvas-wrapper">
                <Canvas art={this.art ?? ''}></Canvas>
              </div>
            </div>
            <h3 className="title">{this.title}</h3>
            <div className="caption">View Fullscreen</div>
          </div >
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default Card;