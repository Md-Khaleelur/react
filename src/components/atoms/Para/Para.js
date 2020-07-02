import React, { Component } from 'react';

export default class Para extends Component {
    render() {
        return (
            <div 
             data-testid="para"
            >
                <p>{this.props.paragraph}</p>
            </div>
        )
    }
}
