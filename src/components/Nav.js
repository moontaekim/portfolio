import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'


const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  background: rgb(255,255,255, 0.6);
`
const StyledNavComponent = styled(Link)`
  margin-left: 5px;
  color: white;
  letter-spacing: 2.5px;
  font-weight: bold;
  padding-right: 7px;
  :hover{
    text-decoration:underline;
    color: white;
  }
`

const StyledNavTop = styled(Link)`
 margin-right: 770px;
 color: white;
  letter-spacing: 2.5px;
  font-weight: bold;
  :hover{
    text-decoration:underline;
    color: white;
  }
`
export default class Nav extends Component {
  render() {
    return (
      <StyledNavbar>
        <StyledNavTop activeClass="active" to="homepage" spy={true} smooth={true} duration={500}>Top</StyledNavTop>
        <StyledNavComponent activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</StyledNavComponent>
        <StyledNavComponent activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</StyledNavComponent>
        <StyledNavComponent activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</StyledNavComponent>
      </StyledNavbar>
    )
  }
}
