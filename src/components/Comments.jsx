import React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const CommentText = styled.p`
  font-size: 16px;
`;

const CommentDate = styled.span`
  font-size: 14px;
  color: #888;
  margin-left: 10px;
`;

const Comments = ({ text, date_commented }) => {
  return (
    <CommentContainer>
      <CommentText>{text}</CommentText>
      <CommentDate>{date_commented}</CommentDate>
    </CommentContainer>
  );
};

export default Comments;
