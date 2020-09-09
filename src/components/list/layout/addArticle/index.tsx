import React from 'react';
import styled from 'styled-components';

const AddArticle = () => {
  return (
    <Container>
      <Add>&#43;</Add>
    </Container>
  );
};

export default AddArticle;

const Container = styled.div`
  cursor: pointer;
  width: 70px;
  height: 70px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.borders};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const Add = styled.p`
  font-size: 4rem;
`;
