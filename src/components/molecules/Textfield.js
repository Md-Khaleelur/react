import React, { Component } from 'react'

export default class Textfield extends Component {
    render() {
        return (
            <div>
                <label for={this.props.for}>{this.props.content}</label>
                <input type={this.props.type} id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} required/>
            </div>
        )
    }
}
