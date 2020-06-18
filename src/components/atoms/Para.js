import React, { Component } from 'react';
import "../template/styles.css";

export default class Para extends Component {
    render() {
        return (
            <div>
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}
