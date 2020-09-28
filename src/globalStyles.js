import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 25px;
  padding-left: 25px;
  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`

export const Button = styled.a`
  border-radius: 50px;
  background: #1abc9c;
  min-width: 130px;
  min-height: 50px;
  padding: 10px;
  color: white !important;
  text-decoration: none !important;
  font-size: 18px;
  font-family: 'Play', sans-serif;
  font-weight: 700; 
  outline: none !important;
  border: none;
  cursor: pointer;
  box-shadow: 1px 1px 1px rgba(0,0,0,.25);
  text-shadow: 1px 1px 1px rgba(0,0,0,.25);
  transition: all 0.3s ease;
  &:hover {
    background: #fff;
    background-color: #9b59b6;
  }
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export default GlobalStyle
