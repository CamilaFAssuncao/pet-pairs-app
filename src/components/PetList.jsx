import React, { useState, useEffect } from "react";

const PetList = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // Use fetch to fetch data from the JSON file
    fetch("/mock_data.json") // Make sure pets.json is in the public folder
      .then((response) => response.json())
      .then((data) => {
        setPets(data); // Update the state with the fetched data
      })
      .catch((error) => {
        console.error("Error fetching data from JSON file:", error);
      });
  }, []); // The empty dependency array ensures this only runs once, when the component mounts

  return (
    <div>
      <h2>List of Available Pets</h2>
      <ul>
        {pets.map((pet) => (
          <li key={pet.petID}>
            <strong>Name:</strong> {pet.name}
            <br />
            <strong>Type:</strong> {pet.type}
            <br />
            <strong>Characteristics:</strong> {pet.characteristics}
            <br />
            <strong>Age:</strong> {pet.age} years
            <br />
            <strong>Gender:</strong> {pet.gender}
            <br />
            <strong>Description:</strong> {pet.description}
            <br />
            <strong>Status:</strong> {pet.status}
            <br />
            <strong>Location:</strong> {pet.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetList;
