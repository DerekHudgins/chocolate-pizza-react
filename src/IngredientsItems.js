import React, { Component } from 'react'

export default class IngredientsItems extends Component {
    render() {
        return (
            <li>
                {this.props.amount} {this.props.name}
            </li>
        )
    }
}
