import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PetProfile from '../components/PetProfile'; 
import Category from '../components/Category';
import Navbar from '../components/NavBar';

const PetProfilePage = () => {
  const categoryData = [
    { name: 'cat', image: 'src/images/cat.png' },
    { name: 'dog', image: 'src/images/dog.png' },
    { name: 'male', image: 'src/images/male.png' },
    { name: 'female', image: 'src/images/female.png' },
    { name: 'energetic', image: 'src/images/energetic.png' },
    { name: 'calm', image: 'src/images/calm.png' },
    { name: 'friendly', image: 'src/images/friendly.png' },
    { name: 'cuddly', image: 'src/images/cuddly.png' },
  ];

  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]); // Initialize selectedCategories
  const navigate = useNavigate();

  // Define a function to handle filtering
  const handleFilter = (filteredPets) => {
    setFilteredData(filteredPets);
  };

  // Handle the case when all filters are selected
  const handleAllFiltersSelected = () => {
    navigate('/GetAPlant');
  }

  return (
    <>
      <Navbar /> {/* Render the Navbar component */}
      <div className="petprofile-page">
        <Category data={categoryData} onFilter={handleFilter} onAllFiltersSelected={handleAllFiltersSelected} />
        {/* Pass selectedCategories to PetProfile */}
        <PetProfile data={filteredData} selectedCategories={selectedCategories} />
      </div>
    </>
  );
};

export default PetProfilePage;

