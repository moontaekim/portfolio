import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSkills = styled.div`
  height: 100vh;
  background: green;
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`
const StyledImg = styled.i`
  font-size: 200px;
  margin: 30px;
`
export default class Skills extends Component {
  render() {
    return (
      <StyledSkills>
        <StyledImg className="devicon-html5-plain colored"></StyledImg>
        <StyledImg className="devicon-css3-plain colored"></StyledImg>
        <StyledImg className="devicon-react-original colored"></StyledImg>
        <StyledImg className="devicon-mongodb-plain colored"></StyledImg>
        <StyledImg className="devicon-express-original colored"></StyledImg>
        <StyledImg className="devicon-nodejs-plain colored"></StyledImg>
        <StyledImg className="devicon-javascript-plain colored"></StyledImg>
        <StyledImg className="devicon-ruby-plain colored"></StyledImg>
        <StyledImg className="devicon-rails-plain colored"></StyledImg>
      </StyledSkills>
    )
  }
}
