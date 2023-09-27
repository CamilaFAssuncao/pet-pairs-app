import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://petadopt-431a50d84aab.herokuapp.com/api/pets/';

const PetResults = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedPetId, setExpandedPetId] = useState(null);

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

  const handlePetClick = (id) => {
    if (id === expandedPetId) {
      setExpandedPetId(null);
    } else {
      setExpandedPetId(id);
    }
  };

  return (
    <div>
      <h1>Find your perfect pet</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul>
          {pets.map((pet) => (
            <li key={pet.id}>
              <span onClick={() => handlePetClick(pet.id)}>
                {pet.name} ({pet.pet_type}) - {pet.location}
              </span>
              {expandedPetId === pet.id && (
                <div className="pet-details">
                  <img src={pet.img} alt={pet.name} />
                  <p>Characteristics: {pet.characteristics}</p>
                  <p>Age: {pet.age}</p>
                  <p>Gender: {pet.gender}</p>
                  <p>Description: {pet.description}</p>
                  <p>Status: {pet.status}</p>
                  <p>Location: {pet.location}</p>
                  <p>Date Posted: {pet.date_posted}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PetResults;
