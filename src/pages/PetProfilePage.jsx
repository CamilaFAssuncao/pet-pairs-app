import React, { useState } from 'react';
import PetProfile from '../components/PetProfile'; 
import Category from '../components/Category';

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

  const [filteredData, setFilteredData] = useState(categoryData);

  // Define a function to handle filtering
  const handleFilter = (filteredData) => {
    setFilteredData(filteredData);
  };

  return (
    <div className="petprofile-page">
      <Category data={categoryData} onFilter={handleFilter} />
      <PetProfile data={filteredData} />
    </div>
  );
};

export default PetProfilePage;

