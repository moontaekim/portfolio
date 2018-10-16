import React, { Component } from 'react';
import Homepage from './components/Homepage';
import styled from 'styled-components'
import Skills from './components/Skills';
import Nav from './components/Nav';

const StyledParallax = styled.div`
  background-color: #ff6e67;
  background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.34'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");  height: 100vh; 
  background-attachment: fixed;
  height:100vh;
  background-position: center;
`
const StyledHomepage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`



class App extends Component {
  render() {
    return (
      <div>
        <StyledParallax >
          <Nav/>
          <StyledHomepage>
            <Homepage />
          </StyledHomepage>
        </StyledParallax>
          <Skills />
      </div>
    );
  }
}

export default App;