import React, { Component } from 'react'

export default class FilterTags extends Component {
  render () {
    return (
      <li
        className={this.props.data === this.props.activeLink ? 'type active' : 'type'}
        onClick={() => this.props.onClick(this.props.data)}
      >{this.props.data}
      </li>
    )
  }
}
