import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutPage = styled.div`
  height: 100vh;
  background: #3E4867;
  display:flex;
  justify-content:center;
  align-items:center;
`
const AboutMe = styled.div`
  color: white;
  width: 75vw;
  font-size:20px;  
  text-align:center;
  letter-spacing:3px;
  line-height: 25px;
`

export default class About extends Component {
  render() {
    return (
      <StyledAboutPage name="about">
        <AboutMe>
        Im a full-stack web developer by day and song-writer/musician by night. I graduated from the 
        University of Georgia (Go Dawgs!) with a bachelor's degree in Biology. I love the creative process and 
        finding new ways to inspire myself and those around me. I'm always looking into new technologies to expand my 
        depth of knowledge in web development. I currently enjoy doing front end development using react. In my free time 
        you can find me playing music with my band, trying new foods/beers, or just about anything that brings me into a social environment.
        I enjoy bringing my own flare and personality to any task at hand. Go ahead and reach out and get to know me!
        </AboutMe>
      </StyledAboutPage>
    )
  }
}
