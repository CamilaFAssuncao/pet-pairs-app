import React from 'react';
import { styled } from "styled-components";
import babygroot from "../gifs/babygroot.gif";
import logo from "../images/logo.png";

const GetAPlant = () => {
  return (
    <StyledGetAPlant>
      <div className="getaplant-container">
        <img className='logoimg' src={logo} alt="Logo" />
        <div className="main-content">
          <h3>Too many filters selected. That's too much pressure for a furry friend!</h3>
          <img className='gif' src={babygroot} alt="Plant gif" />
          <h3>Have you considered getting a plant instead?</h3>
        </div>
        {/* <Navbar /> */}
      </div>
    </StyledGetAPlant>
  );
};

export default GetAPlant;

const StyledGetAPlant = styled.div`
  font-family: 'Roboto mono', monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .logoimg {
    width: 40%;
    max-width: 300px;
  }

  .gif {
    max-width: 600px;
    width: 70%;
    border-radius: 8px;
  }

  h3 {
    color: #030303;
    font-size: 24px;
    font-weight: 400;
    line-height: 31px;
    text-align: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
