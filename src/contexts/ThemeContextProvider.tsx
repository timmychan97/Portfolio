import React, { Component, createContext } from 'react';

export const ThemeContext = createContext({
  theme: "",
  setTheme: (_: string) => { },
});

export class ThemeContextProvider extends Component<{}, { theme: string }> {
  // Must be arrow function for this to point to this instance
  setTheme = (themeString: string) => {
    this.setState({ theme: themeString });
    localStorage.setItem('theme', themeString);
  };

  state = {
    theme: localStorage.getItem('theme') || "",
    setTheme: this.setTheme,
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider >
    );
  }
}
