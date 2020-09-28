import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Xp.css'
import book from '../../img/book.png'
import codeIcon from '../../img/code.png'

export default class Xp extends Component {
  render () {
    return (
      <>
        <section className='xp--page' id='xp'>
          <div className='container'>
            <div className='xp--page-header-text'>
              <h3>Salut moi c'est Gianni. Ravis de vous rencontrer.</h3>
              <p> Depuis que j'ai commencé à me former pour devenir développeur, la perspective d'un nouveau métier est devenue une véritable passion.
                    Travailler sur des projets, ne pas voir le temps passer et se rendre compte que la journée arrive déjà à son terme. Quelle frustration !
                    Ma devise à ce jour,  "Tu ne connais pas la réponse ? Pas grave tu la trouveras sur internet." <span className='span-text-color'>#stackoverflow</span>
              </p>
            </div>
          </div>
          {/* XP BTN ANIMATION */}
          <div className='animation-xp--btn' id='btn-xp'>
            <p className='text-center'>
              <Link
                activeClass='active'
                className='nav-link'
                to='xpNext'
                spy
                smooth
                offset={-90}
                duration={500}
              >
                <button type='button' className='btn-round btn btn-primary'>
                  <i className='fas fa-arrow-down' /> XP
                </button>
              </Link>
            </p>
          </div>
          <div className='animation-xp--btn-shadow justify-content-center' />
        </section>
        <section className='section xp text-center'>
          <div className='row justify-content-center'>
            <div className='column col-lg-6' id='xpNext'>
              <figure className='image'>
                <img className='is-skill-icon' src={codeIcon} id='xp-content' alt='code icon' />
              </figure>
              <h1 className='title is-size-4 is-spaced'>Front-end | Back-end</h1>
              <div className='hr-style' />
              <p className='list-title has-text-primary has-text-weight-normal'>Languages :
              </p>
              <p>HTML, CSS, JS, AJAX, PHP, MYSQL</p>
              <p className='list-title has-text-primary has-text-weight-normal'>Dev Tools:</p>
              <ul>
                <li>Sublime Text</li>
                <li>VsCode</li>
                <li>Bootstrap</li>
                <li>Mamp</li>
                <li>Git</li>
                <li>Terminal</li>
                <li>Postman</li>
              </ul>
            </div>
            <div className='column col-lg-6'>
              <figure className='image'>
                <img className='is-skill-icon' src={book} alt='book' />
              </figure>
              <h1 className='title is-size-4 is-spaced'>Framworks & autre</h1>
              <div className='hr-style' />
              <ul>
                <li>React Js</li>
                <li>Node Js</li>
                <li>Express</li>
                <li>Symfony 5</li>
                <li>Mongo DB</li>
                <li>Firebase</li>
                <li>Heroku</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    )
  }
}
