import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import welcomeimg from "../images/welcomeimg.png";
import paw from "../images/paw.png";
import Navbar from '../components/NavBar';


const Welcome = () => {
  return (
    <StyledContainer>
      <Navbar />
    <div className="welcome-container">
      
    <div className="title-image">

      <div className="title">
      <h1>Welcome to Pet Pairs</h1>
      <h3>Find your fur-ever friend today</h3>
      </div>

      <div className="image">
        <img className='welcomeimg' src={welcomeimg} alt="Welcome image" />
      </div>
      </div>
      {/* Buttons */}
      <div className="buttons">
        <Link to="/login" className="login-button">
          Login
        </Link>
        <Link to="/register" className="register-button">
          Register
        </Link>
      </div>
    </div>
    </StyledContainer>
  );
};

export default Welcome;

const StyledContainer = styled.div`
font-family: 'Roboto mono', monospace;
width: 100%;

.welcome-container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
}

.logoimg {
  width: 40%;
  max-width: 300px;
}

.buttons {
  padding-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  
}

  h1 {
    font-size: 2rem;
    color: #25938f;
    align-items: center;
    justify-content: center;
  }

  .welcomeimg {
    max-width: 600px;
    width: 100%;
  }

  .register-button, .login-button {
    background-color: #25938f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: url(${paw}), auto;
    transition: all 0.3s;
    text-decoration: none;
    font-size: 1.5rem;
    width: 150px; 
    text-align: center;
    
  }
  .register-button:hover, .login-button:hover {
    background-color: white; 
    color: #25938f; 
    border: 4px solid #25938f; /
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;