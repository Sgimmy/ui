import styled from 'styled-components/';
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PrimaryButtonProps {
  onClick: () => void;
  text: string;
  loading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  text,
  loading,
}) => {
  return (
    <Container onClick={onClick}>
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} pulse color="white" />
      ) : (
        text
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 5px 10px;
  background: ${props => props.theme.colors.button.primary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  cursor: pointer;
`;

export default PrimaryButton;
