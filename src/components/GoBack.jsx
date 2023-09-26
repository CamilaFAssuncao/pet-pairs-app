import React from "react";
import styled from "styled-components";
import { ArrowLeft } from "lucide-react";

const GoBack = () => {
  const goBack = () => {
    // Check if there's a referrer URL (previous page)
    if (document.referrer) {
      window.history.back(); // Go back to the previous page
    } else {
      // If there's no referrer, navigate to the home page
      window.location.href = "/";
    }
  };

  return (
    <StyledGoBack>
      <button onClick={goBack}>
        <ArrowLeft /> Back
      </button>
    </StyledGoBack>
  );
};

export default GoBack;

const StyledGoBack = styled.div`
  padding: 2rem 0;

  button {
    display: flex;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #201f1d;
    background: none;
    border: none;
    cursor: pointer;
    text-decoration: underline;
  }
`;
