import React from "react";

export default class Mouth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pathData : this.props.d
        };
    }

    render() {
        return (
            <path d={this.state.pathData} />
        );
    }
}