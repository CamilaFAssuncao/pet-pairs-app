import React, { useState } from 'react';
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const PetProfile = () => {
 return (
    <StyledPetProfile>    
      <div className="petprofile-container">

    <img className="pet-picture" src="" alt="" />
    <p className="location"></p>
    <h1 className="name-age"></h1>
    <h3 className="qualities"></h3>
    <h4 className="about-me"></h4>
    <p className="about-me">

    </p>
    <div className="interests">
    <h4>Interests</h4>
    </div>

    <div className="comments-container">
    <img src="" alt="" className="profile-picture" />
    <p className="username"></p>
    <p className="comment"></p>

    </div>








      </div>
          </StyledPetProfile>
 );
};

export default PetProfile;

const StyledPetProfile = styled.div`
  font-family: 'Roboto mono', monospace;  
  display: flex;
  flex-direction: column;
`;
