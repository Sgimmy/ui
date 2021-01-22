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
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value.length > 0 && (
        <InnerIcon onClick={clear}>
          <FontAwesomeIcon icon={faTimes} color="red" size={'2x'} />
        </InnerIcon>
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

const InputStyled = styled.input`
  padding: 15px;
  padding-right: 45px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 8px;

  &:focus {
    outline: none;
  }
`;

const InnerIcon = styled.div`
  position: absolute;
  text-align: center;
  width: 32px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  padding-top: 5px;
`;
