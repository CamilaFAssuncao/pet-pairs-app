import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import Comments from '../components/Comments';

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

  .pet-card {
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    flex:1;
    max-width: calc(33.33% - 20px); 
    box-sizing: border-box;
  }

  .pet-picture {
    width: 200px; 
    height: 200px;
  }

  @media (max-width: 768px) {
    .pet-card {
      max-width: calc(50% - 20px); /* Max width for tablets */
    }
  }

  @media (max-width: 480px) {
    .pet-card {
      max-width: 100%; /* Max width for mobile */
    }
  }

`;



// Function to calculate age in years and months
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
    }
  
const PetProfile = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Import the data dynamically
    import('../data/mock_data.json')
      .then((data) => {
        console.log('Imported Data:', data.default);

        // Check if PetData exists in the imported data
        if (data.default && data.default.PetData) {
          setPets(data.default.PetData);
        } else {
          setError('PetData not found in the imported data.');
        }
      })
      .catch((error) => {
        console.error('Error loading data:', error);
        setError('Error loading data.');
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <StyledPetProfile>
      <div className="petprofile-container">
        {pets.map((pet) => {
          // Calculate age in years and months
          const ageInYearsAndMonths = calculateAgeInYears(pet.age);

          return (
            <div key={pet.petID} className="pet-card">
              <img className="pet-picture" src={pet.image} alt="" />
              <p className="location">{pet.location}</p>
              <h2 className="name-age">
                {pet.name}, {ageInYearsAndMonths} {/* Display age here */}
              </h2>
              <h3 className="characteristics">
                {pet.gender}, {pet.type}
              </h3>
              <h4 className="description">{pet.description}</h4>
              <p className="status">{pet.status}</p>
              <div className="interests">
                <h4>Interests</h4>
                {/* You can add pet interests here if available in your data */}
              </div>
              <div className="comments-container">
                {/* Add comments or additional information here if available in your data */}
              </div>
            </div>
          );
        })}
      </div>
    </StyledPetProfile>
  );
};

export default PetProfile;
