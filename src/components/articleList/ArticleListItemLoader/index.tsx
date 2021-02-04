import React from 'react';
import styled from 'styled-components';

const ArticleListItemLoader: React.FC = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};

export default ArticleListItemLoader;

const Container = styled.div`
  margin-top: 20px;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.borders};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
`;

const Loader = styled.div`
  height: 30px;
  width: 30px;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
