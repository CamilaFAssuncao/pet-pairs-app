import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyleCategory = styled.div`
  width: 100%;
  font-family: "Roboto mono", monospace;

  .category-filter {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .category-icons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    width: 48px;
    height: 48px;
    border-radius: 2px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .category-name {
    text-align: center; /* Center the category name */
  }
`;

const Category = ({ data, onFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (category) => {
    // Toggle the selected category
    if (selectedCategories.includes(category.name)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category.name));
    } else {
      setSelectedCategories([...selectedCategories, category.name]);
    }
  };

  const applyFilter = () => {
    // Filter your data based on selectedCategories
    const filteredData = data.filter((item) =>
      selectedCategories.every((category) => item.categories.includes(category))
    );
    onFilter(filteredData); // Call a callback function to apply the filter
  };

  return (
    <StyleCategory>
      <div className="category-filter">
        <div className="category-icons">
          {data.map((category) => (
            <div
              key={category.name}
              className={`category-icon ${selectedCategories.includes(category.name) ? 'selected' : ''}`}
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.image} alt={category.name} onClick={applyFilter} />
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </StyleCategory>
  );
};

export default Category;

