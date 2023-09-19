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
      <div className="image">
        <img className='welcomeimg' src="images/welcomeimg.png" alt="Welcome image" />
      </div>

      <p>Find your perfect furry friend!</p>

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

  h1 {
    font-size: 2rem;
    color: #25938f;
    align-items: center;
    justify-content: center;
  }

  .welcomeimg {
    max-width: 80%;
  }
`;