import React, { useState } from 'react';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <StyleHome>
      <div className="home-container">
        <header>
          <i className="menu"></i>
          <h3>Homepage</h3>
          <i className="search"></i>
        </header>

      </div>
    </StyleHome>
  );
};

export default Home;

const StyleHome = styled.div`
  font-family: 'Roboto mono', monospace;
  header {
    display: flex;
    justify-content: space-between;
  }
`;
