import React from 'react';

function PetProfile({ imageSrc, location, name, age, personalityKeywords, description, personalityTags }) {
  return (
    <div className="pet-profile">
      <div className="pet-image">
        <img src={imageSrc} alt={name} />
      </div>
      <div className="pet-info">
        <div className="location">{location}</div>
        <h2>{name}</h2>
        <p>{`Age: ${age}`}</p>
        <div className="personality-keywords">
          <strong>Personality Keywords:</strong>
          <ul>
            {personalityKeywords.map((keyword) => (
              <li key={keyword}>{keyword}</li>
            ))}
          </ul>
        </div>
        <p>{description}</p>
        <div className="personality-tags">
          <strong>Personality Tags:</strong>
          {personalityTags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PetProfile;
