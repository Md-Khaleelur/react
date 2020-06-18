import React, { Component } from 'react'

export default class TextArea extends Component {
    render() {
        return (
            <div>

            <label for={this.props.for}>{this.props.content}</label>
            <textarea id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} rows={this.props.rows} cols={this.props.cols}></textarea>
                
            </div>
        )
    }
}
