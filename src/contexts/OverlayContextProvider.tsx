import React, { Component, createContext } from 'react';
import Art from '../canvasComponents/Art';

export const OverlayContext = createContext({
  art: new Art(),
  isVisible: false,
  setArt: (_: Art) => { },
  toggleVisibility: () => { },
});

interface States {
  art: Art,
  isVisible: boolean,
}

export default class OverlayContextProvider extends Component<{}, States> {
  setArt = (art: Art) => {
    art.replaceArtPropByStorage();
    art.isMuted = false;
    this.setState({ art: art });
  }
  toggleVisibility = () => this.setState({ isVisible: !this.state.isVisible });

  state = {
    art: new Art(),
    isVisible: false,
    setArt: this.setArt,
    toggleVisibility: this.toggleVisibility,
  };

  render() {
    return (
      <OverlayContext.Provider value={this.state}>
        {this.props.children}
      </OverlayContext.Provider>
    );
  }
}
