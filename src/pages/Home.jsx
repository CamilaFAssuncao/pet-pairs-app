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
        <div className="filter-categories">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

      <div className="petcards">
      </div>

      </div>
    </StyleHome>
  );
};

export default Home;

const StyleHome = styled.div`
  font-family: 'Roboto mono', monospace;
`;
