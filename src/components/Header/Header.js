import React from 'react'
import { Link } from 'react-scroll'
import header from '../../img/header.jpg'
import headerSmall from '../../img/header-500.jpg'
import headerMiddle from '../../img/header-600.jpg'
import './Header.css'
import { Hr } from './Header.elements'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      background: header,
      animation: false,
      fontSize: '20px'
    }
  }

  componentDidMount () {
    this.setState({ active: !this.state.active, animation: !this.state.animation })
  }

  componentDidUpdate (prevProps) {
    const { width } = this.props
    if (width !== prevProps.width) {
      this.setState({
        background: width < 640 ? width < 509 ? headerSmall : headerMiddle : header
      })
      if (width <= 970) {
        this.setState({ fontSize: '14px' })
      }
    }
  }

  render () {
    return (
      <div className='header' id='main'>
        <div className='header--image'>
          <img className='header--image-resize' id='imgtest' src={this.state.background} alt='design' />
          <div className='header--name animate__animated animate__fadeInDown'>
            <p>GIANNI GUIGAOURI</p>
            <Hr animation={this.state.animation} />
          </div>
          <div className='header--job animate__animated animate__fadeIn'>
            <p>DEV FULL STACK</p>
            <p className='header--job-btn animate__animated animate__pulse'>
              <Link
                activeClass='active'
                className='nav-link'
                to='portofolio'
                spy
                smooth
                offset={-70}
                duration={500}
              >
                <button style={{ fontSize: this.state.fontSize }} type='button' id='portofolio--btn' className='btn-round btn btn-primary'>portfolio</button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
