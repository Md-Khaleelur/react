import React, { Component } from 'react';
import "../template/styles.css";

export default class Title extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}
