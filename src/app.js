import ReactDOM from "react-dom";

import SvgRoot from "./components/svg/SvgRoot";
import PathData from "./PathData";
import Morph from "./Morph";
import React from "react";

import Smiley from "./components/smiley/Smiley"
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mousePositionX : "50%",
      mousePositionY : "50%"
    };

    this.onMouseMoveCapture = this.onMouseMoveCapture.bind(this);
  }

  componentDidMount() {
    //this.tingAnimation = this.tingElement.animate(this.props.tingKeyframes, this.props.timing);
    /*
    this.skullAnimation = this.skullElement.animate(this.props.skullKeyframes, this.props.timing);
    this.leftEyeAnimation = this.leftEyeElement.animate(this.props.leftEyeKeyframes, this.props.timing);
    this.rightEyeAnimation = this.rightEyeElement.animate(this.props.rightEyeKeyframes, this.props.timing);
    this.mouthAnimation = this.mouthElement.animate(this.props.mouthKeyframes, this.props.timing);
    //this.skullAnimation.pause();
    //this.leftEyeAnimation.pause();
    //this.rightEyeAnimation.pause();
    //this.mouthAnimation.pause();

    this.toPathArray = PathData.pathConvert(this.props.toPathData);
    this.animationOmgId = setInterval(() => this.animationOmg(), 100);
    */
  }

  componentWillUnmount() {
    /*
    clearInterval(this.animationOmgId);
    */
  }
/*
  animationOmg() {
    this.setState((prevState, props) => {
      let fromPath = PathData.pathConvert(prevState.animatedPathData);
      let toPath = PathData.pathConvert(props.toPathData);
      let newPath = [];
      for (let i = 0; i < fromPath.length; i++) {
        newPath.push(Morph.commandLinear(fromPath[i], toPath[i], 0.05));
      }
      let newAnimatedPath = "";
      for (let c = 0; c < newPath.length; c++) {
        newAnimatedPath += newPath[c].join(" ")+" ";
      }
      return {animatedPathData: newAnimatedPath};
    });
  }
*/
// Ok, so we just draw a circle for the eye, then we use gradient to do iris, and move it around via that. ...the cool thing is, that this method lets us define the gradient elsewhere, and change it.

  onMouseMoveCapture(e) {
        let x = (e.clientX / window.innerWidth);
        let y = (e.clientY / window.innerHeight);
        this.setState(() => {
          return {
            mousePositionX : x,
            mousePositionY : y
          };
        });
  }

  render() {
    return (
      <div onMouseMove={this.onMouseMoveCapture}
            style={{
              borderStyle: "solid",
              width: window.innerWidth,
              height: window.innerHeight
            }}
            ref={(el) => this.tingElement = el}>
        <SvgRoot>
          <Smiley eyeX={this.state.mousePositionX}
                  eyeY={this.state.mousePositionY}/>
        </SvgRoot>
      </div>
    );
  }
}

let tingKeyframes = [
  {transform: "rotateY(1deg)", transformOrigin: "center"},
  {transform: "rotateY(180deg)", transformOrigin: "center"}
];

let skullKeyframes = [
  {transform: "rotateY(1deg)", transformOrigin: "center"},
  {transform: "rotateY(180deg)", transformOrigin: "center"}
];

let mouthKeyframes = [
  {transform: "rotateY(1deg)", transformOrigin: "center"},
  {transform: "rotateY(180deg)", transformOrigin: "center"}
];

let leftEyeKeyframes = [
  {transform: "translate(0px,0px)rotateY(1deg)",transformOrigin: "center"},
  {transform: "translate(20px,0px)rotateY(180deg)",transformOrigin: "center"}
];

let rightEyeKeyframes = [
  {transform: "translate(0px,0px)rotateY(1deg)",transformOrigin: "center"},
  {transform: "translate(-20px,0px)rotateY(180deg)",transformOrigin: "center"}
];

let timing = {
  duration: 3000,
  fill: "both",
  iterations: Infinity
};

ReactDOM.render(
  <App tingKeyframes={tingKeyframes} timing={timing} />,
  document.getElementById("AppContainer")
);
