import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
  margin: 0;
  background: white;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.42) 0px 3px 10px 0px;
`

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 75px;
  ${Container}
`
export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 970px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  margin: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
    @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
    justify-content: unset;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 75px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: white;
  }
`
export const NavBlock = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 970px) {
    display: flex;
    flex-direction: column;
  } 

`

export const NavBlockBtn = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`

export const NavItem = styled.li`
  height: 75px;
  @media screen and (max-width: 970px) {
    width: 100%;
  }
`

export const NavItemBtn = styled.li`
  @media screen and (max-width: 970px) {
    margin-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: 'Play', sans-serif;
  font-weight: 700; 
  color: #34495e !important;
  font-size: 16px;
  cursor: pointer;
  &:hover {
      color:#9b59b6 !important;
      transition: all 0.4s ease;
    }
  @media screen and (max-width: 970px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`

export const NavBtnLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`
