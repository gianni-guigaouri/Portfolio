import React from 'react'
import './App.css'
import itemsData from './itemsData'
import GlobalStyle from './globalStyles'
import { withResizeDetector } from 'react-resize-detector'
// components
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import Xp from './components/Xp/Xp'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const AdaptiveWithDetector = withResizeDetector(Header)

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: itemsData
    }
  }

  render () {
    return (
      <>
        <GlobalStyle />
        <Navbar />
        <AdaptiveWithDetector />
        <Xp />
        <Portfolio items={this.state.items} />
        <Contact />
        <Footer />
      </>
    )
  }
}
