import React, { Component } from 'react';
import Homepage from './components/Homepage';
import styled from 'styled-components'
import Skills from './components/Skills';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import ByePage from './components/ByePage';

const StyledParallax = styled.div`
  background-color: #ff6e67;
  background-image: url("https://scontent.fatl1-1.fna.fbcdn.net/v/t1.0-9/32130289_599465307087368_1080941718196453376_n.jpg?_nc_cat=110&_nc_ht=scontent.fatl1-1.fna&oh=4494ce729a244d7bb54056e8ade109c4&oe=5C6CF80D");  
  height: 100vh; 
  background-attachment: fixed;
  height:100vh;
  background-position: center;
`




class App extends Component {
  render() {
    return (
      <div>
        <StyledParallax >
          <Nav />
          <Homepage />
        </StyledParallax>
        <Skills />
        <About />
        <Projects />
        <StyledParallax>
          <ByePage/>
        </StyledParallax>
      </div>
    );
  }
}

export default App;