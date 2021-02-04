import React from 'react';
import styled from 'styled-components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage } from '../Typography';

interface InputProps {
  placeholder: string;
  value?: string;
  setValue: (val: string) => void;
  clear: () => void;
  errorMessage?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value = '',
  setValue,
  clear,
  errorMessage,
}) => {
  return (
    <Container>
      <input
        className="genericInput"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value.length > 0 && (
        <div className="genericInputIcon" onClick={clear}>
          <FontAwesomeIcon icon={faTimes} color="red" size={'2x'} />
        </div>
      )}
      {errorMessage && <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  margin-top: 20px;
  overflow: hidden;
  position: relative;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  padding-top: 5px;
`;
