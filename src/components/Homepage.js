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
        <div>
        <i className="devicon-github-plain colored"></i>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-png-transparent-background.png" alt="linkedin"/>
        </div>
      </StyledHomepage>
    )
  }
}
