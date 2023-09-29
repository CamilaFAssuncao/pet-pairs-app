import React, { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const StyleCategory = styled.div`
  width: 100%;
  font-family: "Roboto mono", monospace;

  .category-icons {
    display: flex;
    justify-content: space-evenly;
    padding: 1em;
    
    .category-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80px; /* Set a fixed width */
      height: 80px; /* Set a fixed height */
      
      img {
        width: 60px;
        height: 60px;
        border-radius: 2px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      
      .category-name {
        text-align: center; /* Center the category name */
      }
    }
    
      @media (max-width: 768px) {
        .category-icon {
          width: 60px; /* Adjust the width for smaller screens */
          height: 60px; /* Adjust the height for smaller screens */
          
          img {
            width: 40px; /* Adjust the width for smaller screens */
            height: 40px; /* Adjust the height for smaller screens */
          }
          
          .category-name {
            font-size: 11px; /* Adjust the font size for smaller screens */
          }
        }
      }
    
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
    // Call the onFilter callback to apply the filter
    const filteredData = data.filter((item) =>
      selectedCategories.every((category) => item.name === category)
    );
    onFilter(filteredData);
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
              <img src={category.image} alt={category.name} />
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      
      </div>
    </StyleCategory>
  );
};


export default Category;

