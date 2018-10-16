import React, { Component } from 'react'
import styled from 'styled-components'

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;
  display:flex;
  align-items: center;
  justify-content: flex-end;
  background: rgb(0,0,0, 0.3);

`
const StyledNavComponent = styled.a`
  margin-left: 5px;
  text-decoration: none;
`
export default class Nav extends Component {
  render() {
    return (
      <StyledNavbar>
        <StyledNavComponent>SkillZ</StyledNavComponent>
        <StyledNavComponent>About</StyledNavComponent>
        <StyledNavComponent>Portfolio</StyledNavComponent>
      </StyledNavbar>
    )
  }
}
