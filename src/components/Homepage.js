import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  font-size: 80px;
  color: white;
`
const StyledHomepage = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const StyledSubHeader = styled.h2`
  color: white;
  font-size:40px;
`
const StyledLinkIcon = styled.a`
  color:white;
  :hover{
    color: white;
  }

`


export default class Homepage extends Component {
  render() {
    return (
      <StyledHomepage name="homepage">
        <div>
        <StyledHeader size='huge'>Hello, I'm Moon-Tae </StyledHeader>
        </div>
        <div>
        <StyledSubHeader>Full Stack Developer | Musician</StyledSubHeader>
        </div>
        <div>
        <StyledLinkIcon target='_blank' href='https://github.com/moontaekim'>
        <i className="github link huge icon"/>
        </StyledLinkIcon>
        <StyledLinkIcon target='_blank' href='https://www.linkedin.com/in/moon-tae-kim/'>
        <i className='linkedin link huge icon'/>
        </StyledLinkIcon>
        <StyledLinkIcon href="mailto:moontae1992@email.com">
        <i className='mail link huge icon'/>
        </StyledLinkIcon>
        
        </div>
      </StyledHomepage>
    )
  }
}
