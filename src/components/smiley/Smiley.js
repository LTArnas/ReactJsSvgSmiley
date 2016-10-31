import React from "react";
import SvgRoot from "../svg/SvgRoot";
import Morph from "../../Morph";
import PathData from "../../PathData";
import Eye from "./Eye";
import Mouth from "./Mouth";

export default class Smiley extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            mouthPathData : "M 20 50 c 0 50 60 50 60 0 Z"
        };
        this.animForward = true;
        this.animLength = 2000;
    }

    componentDidMount() {
        this.mouthAnimationId = setInterval(() => this.mouthAnimation(), 100);
        this.animStart = Date.now();
    }

    mouthAnimation() {
        if (this.animForward) {
            this.setState((prevState, props) => {
                let newAnimatedPath = this.lerpPath(prevState.mouthPathData,
                    "M 20 50 c 10 0 50 0 60 0 Z");
                return {mouthPathData: newAnimatedPath};
            });
        }
        else {
            this.setState((prevState, props) => {
                let newAnimatedPath = this.lerpPath(
                        prevState.mouthPathData,
                        "M 20 50 c 0 50 60 50 60 0 Z",
                        0.1
                    );
                return {mouthPathData: newAnimatedPath};
            });
        }
        if ((Date.now() - this.animStart) > this.animLength) {
            this.animForward = !this.animForward;
            this.animStart = Date.now();
        }
    }

    lerpPath(fromD, toD, factor=0.05) {
        let fromPath = PathData.pathConvert(fromD);
        let toPath = PathData.pathConvert(toD);
        let newPath = [];
        for (let i = 0; i < fromPath.length; i++) {
          newPath.push(Morph.commandLinear(fromPath[i], toPath[i], 0.05));
        }
        let newAnimatedPath = "";
        for (let c = 0; c < newPath.length; c++) {
          newAnimatedPath += newPath[c].join(" ") + " ";
        }
        return newAnimatedPath;
    }

    componentWillUnmount() {
        clearInterval(this.mouthAnimationId);
    }

    render() {
        return (
            <SvgRoot>
                <radialGradient id="eyeFill" cx={this.props.eyeX} cy={this.props.eyeY} r="100%" >
                  <stop offset="10%" stopColor="#1782ed" />
                  <stop offset="13%" stopColor="#efd617" />
                  <stop offset="100%" stopColor="black" opacity="50" />
                </radialGradient>
                <radialGradient id="mouthFill" cx="50%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="#999999" />
                  <stop offset="90%" stopColor="#000000" />
                </radialGradient>
                <radialGradient id="skullFill" cx="50%" cy="50%" r="100%">
                  <stop offset="0%" stopColor="white" />
                  <stop offset="10%" stopColor="#efd617" />
                  <stop offset="100%" stopColor="black" opacity="50" />
                </radialGradient>
                <circle cx="50%" cy="50%" r="50" fill="url(#skullFill)" stroke="black" strokeWidth="1" />
                <circle cx="25%" cy="25%" r="15" fill="url(#eyeFill)" />
                <circle cx="75%" cy="25%" r="15" fill="url(#eyeFill)" />
                <path d={this.state.mouthPathData}
                fill="url(#mouthFill)"
                stroke="black" strokeWidth="1" />
            </SvgRoot>
        );
    }
}