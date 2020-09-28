import React, { Component } from 'react'
import axios from 'axios'
import './Contact.css'
import Loader from './Loader'

export default class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      errors: {},
      successSpinner: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    axios({
      method: 'POST',
      url: 'https://siriuscreation.fr/api/',
      headers: { 'Content-Type': 'application/json' },
      data: this.state
    }).then((res) => {
      if (res.data.status === 'success') {
        this.setState({ successSpinner: true })
        setTimeout(() => {
          this.setState({ successSpinner: false, successMail: 'Votre message a bien été envoyé' })
        }, 2000)
        setTimeout(() => {
          this.setState({ successMail: '' })
        }, 5000)
        this.resetForm()
      } else if (res.data.status === 'fail') {
        this.setState({ errors: res.data.error })
      }
    }).catch((err) => {
      console.log(err)
      this.setState({ successMail: 'Veuillez essayer ultérieurement.' })
    })
  }

  resetForm () {
    this.setState({ name: '', email: '', phone: '', message: '', errors: '' })
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <section className='section' id='contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>Contact</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form id='contactForm' method='POST' onSubmit={this.handleSubmit} noValidate='novalidate'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input className='form-control' id='name' name='name' type='text' placeholder='Nom ..' required='required' value={this.state.name} onChange={this.handleChange} />
                      <p className='help-block'>{this.state.errors.name}</p>
                    </div>
                    <div className='form-group'>
                      <input className='form-control' id='email' name='email' type='email' placeholder='Email .. ' required='required' value={this.state.email} onChange={this.handleChange} />
                      <p className='help-block'>{this.state.errors.email}</p>
                    </div>
                    <div className='form-group'>
                      <input className='form-control' id='phone' name='phone' type='tel' placeholder='Telephone ..' required='required' value={this.state.phone} onChange={this.handleChange} />
                      <p className='help-block'>{this.state.errors.phone}</p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <textarea className='form-control' id='message' name='message' placeholder='Votre Message ..' required='required' value={this.state.message} onChange={this.handleChange} />
                      <p className='help-block'>{this.state.errors.message}</p>
                    </div>
                  </div>
                  <div className='clearfix' />
                  <div className='col-lg-12 text-center'>
                    {this.state.successSpinner ? (
                      <Loader />
                    ) : ''}
                    <div id='success'><p className='help-block text-success'>{this.state.successMail}</p></div>
                    <button id='sendMessageButton' className='btn btn-round btn btn-primary text-uppercase' type='submit'>Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
