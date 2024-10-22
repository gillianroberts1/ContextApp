import { Component, createContext } from "react";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme })
  }
  render() {
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
        {/* // eslint-disable-next-line react/prop-types */}
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
