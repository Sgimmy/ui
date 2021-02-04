import styled from 'styled-components/';
import React from 'react';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface PrimaryButtonProps {
  onClick: () => void;
  text: string;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  text,
  loading,
  disabled,
  className,
}) => {
  return (
    <Button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={className}
    >
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} pulse color="white" />
      ) : (
        text
      )}
    </Button>
  );
};

interface ButtonProps {
  disabled?: boolean;
}

const Button = styled.div<ButtonProps>`
  color: ${props =>
    props.disabled
      ? props.theme.colors.text.grey
      : props.theme.colors.button.white};
  padding: 5px 10px;
  background: ${props =>
    props.disabled
      ? props.theme.colors.button.disabled
      : props.theme.colors.button.primary};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  cursor: pointer;
`;

export default PrimaryButton;
