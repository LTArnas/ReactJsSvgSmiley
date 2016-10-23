import ReactDOM from "react-dom";

import SvgRoot from "./components/SvgRoot";
import TestComponent from "./components/TestComponent.js";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SvgRoot style={{borderStyle:"solid"}}>
        <circle cx="50" cy="50" r="50" fill="yellow" />
        <circle cx="20" cy="30" r="5" fill="black" />
        <circle cx="80" cy="30" r="5" fill="grey" />
        <path d="M 19 50
                a 10 10 0 0 0 70 0
                z"
                stroke="red"
                ref={(el) => this.mouthPathElement = el}/>
      </SvgRoot>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById("AppContainer")
);
