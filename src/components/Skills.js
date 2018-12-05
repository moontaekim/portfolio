import React, { Component } from 'react'
import styled from 'styled-components'

const StyledSkills = styled.div`
  height: 100%;
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-top:50px;
`
const StyledSkillsPage = styled.div`
  height: 100vh;
  background: #7B909d;
`
const StyledImg = styled.i`
  font-size: 13vw;
  margin: 30px;
`
const StyledCaption = styled.span`
  display:block;
  color:white;
`
const StyledItem = styled.div`
    text-align: center;
    margin-top: 20px;
`
const StyledDot = styled.span`
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  margin-top:10px;
`
const StyledDotColor = styled.span`
  height: 25px;
  width: 25px;
  background-color: #3E4867;
  border-radius: 50%;
  display: inline-block;
  margin-top:10px;
`
export default class Skills extends Component {
  render() {
    return (
      <StyledSkillsPage>
        <StyledSkills name="skills">
          <StyledItem>
            <StyledImg className="devicon-html5-plain colored"></StyledImg>
            <StyledCaption>HTML5</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
            </StyledCaption>
          </StyledItem>

          <StyledItem>
            <StyledImg className="devicon-css3-plain colored"></StyledImg>
            <StyledCaption>CSS3</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
            </StyledCaption>
          </StyledItem>

          <StyledItem>
            <StyledImg className="devicon-react-original colored"></StyledImg>
            <StyledCaption>React</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>
          <StyledItem>

            <StyledImg className="devicon-mongodb-plain colored"></StyledImg>
            <StyledCaption>MongoDB</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>
          <StyledItem>

            <StyledImg className="devicon-express-original colored"></StyledImg>
            <StyledCaption>Express</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>
          <StyledItem>

            <StyledImg className="devicon-nodejs-plain colored"></StyledImg>
            <StyledCaption>Node.js</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>
          <StyledItem>

            <StyledImg className="devicon-javascript-plain colored"></StyledImg>
            <StyledCaption>Javascript</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>
          <StyledItem>

            <StyledImg className="devicon-ruby-plain colored"></StyledImg>
            <StyledCaption>Ruby</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>
          <StyledItem>

            <StyledImg className="devicon-rails-plain colored"></StyledImg>
            <StyledCaption>Rails</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledItem>

          <StyledImg className="devicon-d3js-plain colored">
            <StyledCaption>D3</StyledCaption>
            <StyledCaption>
              <StyledDotColor />
              <StyledDotColor />
              <StyledDot />
              <StyledDot />
              <StyledDot />
            </StyledCaption>
          </StyledImg>


        </StyledSkills>
      </StyledSkillsPage>
    )
  }
}
