import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import paw from "../images/paw.png";


const StyleCategory = styled.div`
  width: 100%;
  font-family: "Roboto mono", monospace;

  button {
    font-family: 'Roboto mono', monospace;
    background-color: #25938f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    transition: all 0.3s;
    text-decoration: none;
    font-size: 1rem;
    width: 150px; 
    text-align: center;
    cursor: url(${paw}), auto;
  }

  button:hover {
    background-color: white; 
      color: #25938f; 
      border: 4px solid #25938f; 
  }

  .category-icons {
    display: flex;
    justify-content: space-evenly;
    padding: 1em;

    .category-icon {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80px; 
      height: 80px; 
      cursor: url(${paw}), auto;

      img {
        width: 60px;
        height: 60px;
        border-radius: 2px;
        background-position: center center;
        background-size: cover;
        background-repeat: no-repeat;
        border: 2px solid transparent;
      }

      .category-name {
        text-align: center; /* Center the category name */
      }
    }

    .category-icon.selected { /* Style for selected category */
      img {
        border-color: #25938f; /* Add the desired border color */
        padding: 5px; /* Add the desired padding */
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
  const navigate = useNavigate(); // Initialize the navigate function

  const genderMapping = {
    male: "M",
    female: "F",
  };

  const handleCategoryClick = (category) => {
    // Map the category name to the database value for gender categories
    if (category.name === "male" || category.name === "female") {
      category = { ...category, name: genderMapping[category.name] };
    }

    // Toggle the selected category
    if (selectedCategories.includes(category.name)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category.name)
      );
    } else {
      setSelectedCategories([...selectedCategories, category.name]);
    }
  };

  const applyFilter = () => {
    // Call the onFilter callback to apply the filter
    const filteredData = data.filter((item) => {
      if (
        selectedCategories.includes("male") ||
        selectedCategories.includes("female")
      ) {
        return (
          (item.gender && selectedCategories.includes(item.gender)) ||
          selectedCategories.includes(item.name)
        );
      } else {
        return selectedCategories.includes(item.name);
      }
    });

    onFilter(filteredData);

    // If all filters are selected, use navigate to redirect to the "Get a Plant" page
    if (selectedCategories.length === data.length) {
      navigate("/GetAPlant");
    }
  };

  return (
    <StyleCategory>
      <div className="category-filter">
        <div className="category-icons">
          {data.map((category) => (
            <div
              key={category.name}
              className={`category-icon ${
                selectedCategories.includes(category.name) ? "selected" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <img src={category.image} alt={category.name} />
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
        <button onClick={applyFilter}>Apply Filter</button>
      </div>
    </StyleCategory>
  );
};

export default Category;

