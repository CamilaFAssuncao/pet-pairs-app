import React from 'react';

function FilterComponent({ useImages, filterOptions, selectedFilter, onFilterChange }) {
  // Conditional rendering based on the 'useImages' prop
  const renderFilters = () => {
    if (useImages) {
      return (
        <div className="image-filter-container">
          {filterOptions.map((option) => (
            <img
              key={option}
              src={option.imageSrc}
              alt={option.label}
              className={`filter-button ${selectedFilter === option.value ? 'active' : ''}`}
              onClick={() => onFilterChange(option.value)}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div className="button-filter-container">
          {filterOptions.map((option) => (
            <button
              key={option}
              className={`filter-button ${selectedFilter === option.value ? 'active' : ''}`}
              onClick={() => onFilterChange(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="filter-component">
      <h2>Filter:</h2>
      {renderFilters()}
    </div>
  );
}

export default FilterComponent;

