import React from "react";

export default class SvgRoot extends React.Component {
    render() {
        return (
            <svg {...this.props}>
                {this.props.children}
            </svg>
        );
    }
}

// Default values.
// This allows us to to use the simple spread bit of code.
SvgRoot.defaultProps = {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    baseProfile: "full",
    width: "100",
    height: "100"
};