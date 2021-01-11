import React from 'react';
import styled from 'styled-components';

interface AddArticleProps {
  clickAddButton: () => void;
}

const AddArticle: React.FC<AddArticleProps> = ({ clickAddButton }) => {
  return (
    <Container onClick={clickAddButton}>
      <Add>&#43;</Add>
    </Container>
  );
};

export default AddArticle;

const Container = styled.div`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.borders};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Add = styled.p`
  margin-top: -5px;
  font-size: 50px;
  text-align: center;
`;
