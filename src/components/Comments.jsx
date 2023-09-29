import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const API_URL = 'https://petadopt-431a50d84aab.herokuapp.com/api/comments/';

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const UserPicture = styled.img`
  width: 40px; /* Adjust as needed */
  height: 40px; /* Adjust as needed */
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentText = styled.p`
  font-size: 16px;
`;

const Username = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

const Comments = ({ userPicture, commentText, username }) => {
  return (
    <CommentContainer>
      <UserPicture src={userPicture} alt={`${username}'s profile`} />
      <div>
        <Username>{username}:</Username>
        <CommentText>{commentText}</CommentText>
      </div>
    </CommentContainer>
  );
};

export default Comments;
