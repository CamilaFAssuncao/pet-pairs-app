import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Welcome = () => {
  return (
    <StyledContainer>
    <div className="welcome-container">
      <div className="logo">
        <img className='logoimg' src="images/logo.png" alt="Logo" />
      </div>

      <h1>Welcome to Pet Pairs</h1>
      <h3>Find your perfect furry friend!</h3>
      <div className="image">
        <img className='welcomeimg' src="images/welcomeimg.png" alt="Welcome image" />
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
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

.logoimg {
  width: 40%;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;}

  h1 {
    font-size: 2rem;
    color: #25938f;
    align-items: center;
    justify-content: center;
  }

  .welcomeimg {
    max-width: 80%;
  }

  .register-button, .login-button {
    background-color: #25938f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: pointer;
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
`;