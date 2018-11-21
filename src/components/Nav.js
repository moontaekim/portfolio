import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'


const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  height: 3rem;
  display:flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(255,255,255, 0.6);
`
const StyledNavComponent = styled(Link)`
  color: white;
  letter-spacing: 2.5px;
  font-weight: bold;
  padding-right:8px;
  :hover{
    text-decoration:underline;
    color: white;
  }
`
const StyledNavTop = styled(Link)`
  padding-left:10px;
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
        <StyledNavbar className="flex-container">
          <StyledNavTop className="left" activeClass="active" to="homepage" spy={true} smooth={true} duration={500}>Top</StyledNavTop>
          <span></span>
          <div className="right">
          <StyledNavComponent className="flex-item"activeClass="active" to="skills" spy={true} smooth={true} duration={500}>Skills</StyledNavComponent>
          <StyledNavComponent className="flex-item" activeClass="active" to="about" spy={true} smooth={true} duration={500}>About</StyledNavComponent>
          <StyledNavComponent className="flex-item" activeClass="active" to="projects" spy={true} smooth={true} duration={500}>Projects</StyledNavComponent>
          </div>
        </StyledNavbar>
    )
  }
}
