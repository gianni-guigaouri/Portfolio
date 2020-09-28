import React, { Component } from 'react'
import Tags from './Tags'

export default class ItemPortfolio extends Component {
  render () {
    return (
      <div className='isotope-item animated col-12 col-lg-4 js'>
        <div className='card rounded-0 border-0 shadow-sm mb-5'>
          <div className='card-img-container position-relative'>
            <img className='card-img-top rounded-0' src={require(`../img/cover/${this.props.item.image}`)} alt='' />
            <div className='card-img-overlay overlay-logo text-center' />
            <a className='card-img-overlay overlay-content text-left p-lg-4' href={this.props.item.link} target='_blank' rel='noopener noreferrer'>
              <h5 className='card-title font-weight-bold text-center'>{this.props.item.title}</h5>
              <p className='card-text'>{this.props.item.info}</p>
            </a>
          </div>
          <div className='card-body pb-0'>
            <h4 className='card-title text-truncate text-center mb-0'><a href={this.props.item.link} target='_blank' rel='noopener noreferrer'>{this.props.item.title}</a></h4>
          </div>

          <div className='card-footer border-0 text-center bg-white pb-4'>
            <ul className='list-inline mb-0 mx-auto'>
              {
                this.props.item.tags.map((tag) => <Tags key={tag} tag={tag} />)
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
