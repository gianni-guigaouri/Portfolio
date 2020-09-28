import React, { useState } from 'react'
import ReactShadowScroll from 'react-shadow-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles'
import cv from '../../CV_GIANNI-GUIGAOURI.pdf'
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink,
  NavBlockBtn,
  NavBlock
} from './Navbar.elements'

function Navbar () {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <IconContext.Provider value={{ color: '#34495e' }}>
        <Nav>
          <NavbarContainer>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavBlock>
                <NavItem>
                  <NavLinks
                    onClick={closeMobileMenu}
                    to='main'
                    spy
                    smooth='easeInOutQuint'
                    offset={-100}
                    duration={700}
                  >
                  HOME
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    to='xp'
                    spy
                    smooth='easeInOutQuint'
                    offset={0}
                    duration={700}
                    onClick={closeMobileMenu}
                  >
                  XP
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    onClick={closeMobileMenu}
                    to='portofolio'
                    spy
                    smooth='easeInOutQuint'
                    offset={-70}
                    duration={700}
                  >
                  PORTFOLIO
                  </NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks
                    onClick={closeMobileMenu}
                    to='contact'
                    spy
                    smooth='easeInOutQuint'
                    offset={0}
                    duration={700}
                  >
                  CONTACT
                  </NavLinks>
                </NavItem>
              </NavBlock>
              <NavBlockBtn>
                <NavItemBtn>
                  <NavBtnLink>
                    <Button
                      primary
                      fontBig
                      href={cv}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      Mon CV
                    </Button>
                  </NavBtnLink>
                </NavItemBtn>
              </NavBlockBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
