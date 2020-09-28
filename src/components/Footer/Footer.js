import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
  render () {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <span className='copyright'>Copyright © Gianni GUIGAOURI 2020</span>
            </div>
            <div className='col-lg-4'>
              <ul className='list-inline social-buttons'>
                <li className='list-inline-item'>
                  <a href='https://github.com/gianni-guigaouri' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-github' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='https://www.linkedin.com/in/gianniguigaouri' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-linkedin-in' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
