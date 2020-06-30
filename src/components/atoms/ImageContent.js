import React, { Component } from 'react';
import "../template/styles.css";

export default class ImageContent extends Component {
    render() {
        return (
            <div>
                <img src={this.props.sourceName} alt="img-miss" />
            </div>
        )
    }
}
