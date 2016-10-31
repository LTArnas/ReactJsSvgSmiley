import React from "react";

export default class Eye extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <circle cx={this.props.x}
                    cy={this.props.y}
                    r={this.props.r}
                    fill={this.props.fill}
                    ref={(el) => this.eyeElement = el} />
        );
    }
}