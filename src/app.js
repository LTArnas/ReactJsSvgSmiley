import ReactDOM from "react-dom";

import SvgRoot from "./components/SvgRoot";
import TestComponent from "./components/TestComponent.js";
import React from "react";
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.skullAnimation = this.skullElement.animate(this.props.skullKeyframes, this.props.timing);
    this.leftEyeAnimation = this.leftEyeElement.animate(this.props.leftEyeKeyframes, this.props.timing);
    this.rightEyeAnimation = this.rightEyeElement.animate(this.props.rightEyeKeyframes, this.props.timing);
    this.mouthAnimation = this.mouthElement.animate(this.props.mouthKeyframes, this.props.timing);
    //this.skullAnimation.pause();
    //this.leftEyeAnimation.pause();
    //this.rightEyeAnimation.pause();
    //this.mouthAnimation.pause();
  }

  render() {
    return (
      <SvgRoot style={{borderStyle:"solid"}}>
        <circle cx="50" cy="50" r="50" fill="#ff9900" ref={(el) => this.skullElement = el} />
        <circle cx="20" cy="30" r="5" fill="black" ref={(el) => this.leftEyeElement = el} />
        <circle cx="80" cy="30" r="5" fill="grey" ref={(el) => this.rightEyeElement = el} />
        <path d="M 19 50
                a 10 10 0 0 0 70 0
                z"
                stroke="red"
                strokeWidth="3"
                ref={(el) => this.mouthElement = el} />
      </SvgRoot>
    );
  }
}

//let skullKeyframes = {transform: "scale(0.9, 0.9)"};

let skullKeyframes = [
  {transform: "rotateY(1deg)", transformOrigin: "center"},
  {transform: "rotateY(180deg)", transformOrigin: "center"}
];

let mouthKeyframes = [
  {transform: "rotateY(1deg)", transformOrigin: "center"},
  {transform: "rotateY(180deg)", transformOrigin: "center"}
];

let leftEyeKeyframes = [
  {transform: "translate(1%,1%)"},
  {transform: "translate(70%,-100%)"}
];

let rightEyeKeyframes = [
  {transform: "translate(1%,1%)"},
  {transform: "translate(-70%,70%)"}
];

let timing = {
  duration: 3000,
  fill: "both",
  iterations: Infinity
};


ReactDOM.render(
  <App skullKeyframes={skullKeyframes} mouthKeyframes={mouthKeyframes} leftEyeKeyframes={leftEyeKeyframes} rightEyeKeyframes={rightEyeKeyframes} timing={timing} />,
  document.getElementById("AppContainer")
);
