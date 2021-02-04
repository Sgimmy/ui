import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import './addArticle.scss';

interface AddArticleProps {
  clickButton: () => void;
  back: boolean;
}

const AddArticle: React.FC<AddArticleProps> = ({ clickButton, back }) => {
  return (
    <Container onClick={clickButton} className="glow-on-hover">
      {back ? (
        <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" />
      ) : (
        <FontAwesomeIcon icon={faPlus} color="white" size="2x" />
      )}
    </Container>
  );
};

export default AddArticle;

const Container = styled.div`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid ${props => props.theme.colors.borders.grey};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
