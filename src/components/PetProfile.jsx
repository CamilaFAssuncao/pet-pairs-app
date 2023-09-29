import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import paw from '../images/paw.png';
import Comments from '../components/Comments';
import axios from 'axios';

const API_URL = 'https://petadopt-431a50d84aab.herokuapp.com/api/pets/';

const StyledPetProfile = styled.div`
  font-family: 'Roboto mono', monospace;
  display: flex;
  flex-direction: column;

  .petprofile-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .pet-picture {
    width: 250px;
    height: 300px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    padding: 1rem;
  }

  .pet-info {
    margin: 0;
    align-self: flex-start;
    padding: 1rem;
    h4 {
      color: #030303;
      font-size: 16px;
      font-weight: 600;
      line-height: 21px;
      margin: 0;
    }
    h3 {
      color: #030303;
      font-size: 18px;
      font-weight: 600;
      line-height: 22px;
      margin: 0;
    }
  }

  .pet-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 335px;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    box-shadow: 1px 2px 10px #25938f;
    border-radius: 5px;
    border: none;
    box-sizing: border-box;
    cursor: url(${paw}), auto;

    h4 {
      margin: 0;
      align-self: center;
    }

    p {
      align-self: flex-end;
      padding: 0.5rem;
      margin: 0;
      font-size: 12px;
    }

    /* Style for when additional info is open */
    .additional-info.open {
      display: block;
    }

    /* Style for when additional info is closed */
    .additional-info.closed {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .pet-card {
      //   max-width: 100%; /* Max width for mobile */
    }
  }
`;

const calculateAgeInYears = (ageInMonths) => {
  if (ageInMonths >= 12) {
    const years = Math.floor(ageInMonths / 12);
    const remainingMonths = ageInMonths % 12;

    if (remainingMonths === 0) {
      if (years === 1) {
        return '1 year';
      } else {
        return `${years} years`;
      }
    } else {
      if (years === 1) {
        return `1 year and ${remainingMonths} months`;
      } else {
        return `${years} years and ${remainingMonths} months`;
      }
    }
  } else {
    if (ageInMonths === 1) {
      return '1 month';
    } else {
      return `${ageInMonths} months`;
    }
  }
};

const PetProfile = () => {
    const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState({}); // State to track info display

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setPets(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  const fetchCommentsForPet = async (petID) => {
    try {
      const response = await axios.get(`${API_URL}${petID}/comments/`);
      return response.data;
    } catch (err) {
      console.error(`Error fetching comments for pet ${petID}:`, err);
      return [];
    }
  };

  const toggleInfo = async (petID) => {
    if (!showInfo[petID]) {
      // Fetch comments for the pet if they haven't been fetched yet
      const comments = await fetchCommentsForPet(petID);

      // Update the showInfo state with comments
      setShowInfo((prevShowInfo) => ({
        ...prevShowInfo,
        [petID]: { comments },
      }));
    } else {
      // Toggle the value for the pet
      setShowInfo((prevShowInfo) => ({
        ...prevShowInfo,
        [petID]: !prevShowInfo[petID],
      }));
    }
  };


  return (
    <StyledPetProfile>
      <div className="petprofile-container">

        {pets.map((pet) => {
          const ageInYearsAndMonths = calculateAgeInYears(pet.age);

          return (
            <div
              key={pet.petID}
              className={`pet-card ${
                showInfo[pet.petID] ? 'open' : 'closed'
              }`}
              onClick={() => toggleInfo(pet.petID)} // Toggle info on click
            >
              <img className="pet-picture" src={pet.img} alt="" />
              <p className="location">📍{pet.location}</p>
              <div className="pet-info">
                <h3 className="name-age">
                  {pet.name}, {ageInYearsAndMonths}
                </h3>
                {/* <h5 className="characteristics">
                  {pet.gender}, {pet.type}
                </h5> */}
              </div>
              <div className={`additional-info ${showInfo[pet.petID] ? 'open' : 'closed'}`}>
                <h4 className="description">{pet.description}</h4>
                <p className="status">{pet.status}</p>

                <div className="comments-container">
                  {showInfo[pet.petID] && showInfo[pet.petID].comments && (
                    showInfo[pet.petID].comments.map((comment) => (
                      <Comments
                        key={comment.id}
                        userPicture={comment.userPicture}
                        commentText={comment.commentText}
                        username={comment.username}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StyledPetProfile>
  );
};

export default PetProfile;

