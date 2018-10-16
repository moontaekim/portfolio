import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  font-size: 5.285714em;
`
const StyledHomepage = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`
const StyledSubHeader = styled.div`
  font-size:2.285714em;
`


export default class Homepage extends Component {
  render() {
    return (
      <StyledHomepage>
        <StyledHeader size='huge'>Hello, I'm Moon-Tae </StyledHeader>
        <StyledSubHeader>Full Stack Developer | Musician</StyledSubHeader>
      </StyledHomepage>
    )
  }
}
