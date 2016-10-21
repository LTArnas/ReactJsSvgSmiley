import React from 'react'

export default class TestComponent extends React.Component {
    render() {
        return (
            <div>hello from {this.props.name}</div>
        );
    }
}
