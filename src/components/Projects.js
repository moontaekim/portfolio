import React, { Component } from 'react'
import styled from 'styled-components'
import { Image, TextArea } from 'semantic-ui-react';

const StyledProjectsPage = styled.div`
  height: 100%;
  display:flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background: #8297BE;
`
const StyledImage = styled(Image)`
&&&{
  margin-top: 50px;
  width: 30vw;
}
`
const StyledImageContainer = styled.div`
  text-align: center;
  width: 30vw;
`
const StyledProjectDescription = styled.span`
  font-size: 12px;
`

export default class Projects extends Component {
  render() {
    return (
      <StyledProjectsPage name="projects">
        <StyledImageContainer>
          <a target="_blank" href="https://elated-wozniak-878f5f.netlify.com/">
            <StyledImage className='ui medium rounded image'
              src="https://i.imgur.com/uYjfvUQ.png" />
          </a>
          <StyledProjectDescription>This game is an interpretation of hangman. The theme is Marvel superheros.
            There are 11 heros fighting against Thanos, the super villan that is trying to obtain all of the
            infiniti stones. Guess the name of the hero that will be the one to take down Thanos once and for 
            all. Be careful, you only have 6 lives! Dont worry if you lose, you have stolen the time stone 
            and can activate it by clicking "activate time stone".
          </StyledProjectDescription>
        </StyledImageContainer>

        <StyledImageContainer>
          <a taget="_blank" href="https://murmuring-hamlet-79842.herokuapp.com/guitarists">
            <StyledImage className='ui medium rounded image'
              src="https://i.imgur.com/jYV27uX.png" />
          </a>
          <StyledProjectDescription>
            Have you ever listented a song and wondered "how in the world is this guitarist getting that sound?".
            Well now you have a guide. Pedal Doctor is a full stack application/forum that allows users to
            share their findings. You can create a guitarist, add songs, and even add what pedals you think
            they used for that song.
          </StyledProjectDescription>
        </StyledImageContainer>

        <StyledImageContainer>
          <a target="_blank" href="https://project-threeeee.herokuapp.com/">
            <StyledImage className='ui medium rounded image'
              src="https://i.imgur.com/ROHKOdl.png" />
          </a>
          <StyledProjectDescription>
            Who doesn't love eating? Are you a fan of Man vs Food? Fat Camp is an application that allows 
            you to find the details of food challenges in Georgia. If you complete the challenge, click 
            "complete" to rack up some fat points and compare with your friends. If you discover a food 
            challenge and want to share with your friends, simply create a new challenge and every user 
            will be able to view your discovery.
          </StyledProjectDescription>
        </StyledImageContainer>

        <StyledImageContainer>
          <a target="_blank" href="https://ancient-shelf-94397.herokuapp.com/">
            <StyledImage className='ui medium rounded image'
              src="https://i.imgur.com/tNEW2gb.png" />
          </a>
          <StyledProjectDescription>Fit Camp is a simple application to track your calories. If you forgot to check the nutrition 
            facts on your meal, dont worry! Fit Camp is linked to the Nutritionix Data Base. Search your 
            food and enter the servings and it will automatically populate.
          </StyledProjectDescription>
        </StyledImageContainer>
      </StyledProjectsPage>
    )
  }
}
