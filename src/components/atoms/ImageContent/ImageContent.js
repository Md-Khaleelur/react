import React, { Component } from 'react';


export default class ImageContent extends Component {
    render() {
        return (
            <div          
                data-testid="imageContent"
            >
                <img src={this.props.sourceName} alt="img-miss" />
            </div>
        )
    }
}
