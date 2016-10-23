import React from "react";

export default class SvgRoot extends React.Component {
    render() {
        console.log(this);
        return (
            <svg {...this.props}>
                {this.props.children}
            </svg>
        );
    }
}

SvgRoot.defaultProps = {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    baseProfile: "full",
    width: "100",
    height: "100"
};