import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterPets = ({ onFilter }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagsData, setTagsData] = useState([]); // State to store tags from the API
  const [petsData, setPetsData] = useState([]); // State to store pets from the API

  useEffect(() => {
    // Fetch tags from the API when the component mounts
    axios.get('/api/tags/')
      .then((response) => {
        setTagsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tags:', error);
      });

    // Fetch pets from the API when the component mounts
    axios.get('/api/pets/')
      .then((response) => {
        setPetsData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching pets:', error);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleApplyFilters = () => {
    // Construct a filter object based on selected options
    const filters = {
      gender: selectedGender,
      type: selectedType,
      tags: selectedTags,
    };

    // Filter pets based on selected options
    const filteredPets = petsData.filter((pet) => {
      let isMatching = true;

      if (filters.gender && pet.gender !== filters.gender) {
        isMatching = false;
      }

      if (filters.type && pet.pet_type !== filters.type) {
        isMatching = false;
      }

      if (filters.tags.length > 0) {
        const petTags = pet.tags.map((tagId) => tagId.toString());
        const selectedTagIds = filters.tags.map((tag) => tag.id.toString());
        const hasMatchingTag = selectedTagIds.every((tagId) => petTags.includes(tagId));

        if (!hasMatchingTag) {
          isMatching = false;
        }
      }

      return isMatching;
    });

    // Invoke the callback to notify the parent component
    onFilter(filteredPets);
  };

  // ... JSX for rendering filter options ...

  return (
    <div>
      {/* Render filter options (gender, type, tags) */}
      {/* You can use the tagsData state to populate the tags options */}
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterPets;


