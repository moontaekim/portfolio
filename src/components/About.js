import React, { Component } from 'react'
import styled from 'styled-components'

const StyledAboutPage = styled.div`
  height: 100vh;
  background: #3E4867;
`

export default class About extends Component {
  render() {
    return (
      <StyledAboutPage name="about">
        Im a full-stack web developer by day and song-writer/musician by night. 
        I deliver my best work througha personal connection to the task at hand. 
      </StyledAboutPage>
    )
  }
}
