import React, { Component } from 'react'

export default class Tags extends Component {
  render () {
    return (
      (this.props.tag === 'ALL' ? '' : <li className='list-inline-item'><span className='badge badge-secondary badge-pill'>{this.props.tag}</span></li>)
    )
  }
}
