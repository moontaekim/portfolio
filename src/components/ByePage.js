import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-size: 80px;
  color: white;
  text-align: center;
`
const StyledByepage = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const StyledLinkIcon = styled.a`
  color:white;
  :hover{
    color: white;
  }

`

export default class ByePage extends Component {
  render() {
    return (
      <StyledByepage>
        <div>
        <StyledHeader>Thank you for stopping by!</StyledHeader>
        </div>
        <StyledLinkIcon href="mailto:moontae1992@email.com">
        <i className='mail link huge icon'/>
        </StyledLinkIcon>
      </StyledByepage>
    )
  }
}
