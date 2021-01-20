import React, { useState } from 'react';
import styled from 'styled-components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Input: React.FC = () => {
  const [value, setValue] = useState('');

  const clear = () => {
    setValue('');
  };

  return (
    <Container>
      <InputStyled
        placeholder="Inserisci il link da salvare"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value.length > 0 && (
        <InnerIcon onClick={clear}>
          <FontAwesomeIcon icon={faTimes} color="red" size={'2x'} />
        </InnerIcon>
      )}
    </Container>
  );
};

export default Input;

const Container = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

const InputStyled = styled.input`
  padding: 15px;
  padding-right: 45px;
  box-sizing: border-box;
  width: 100%;
`;

const InnerIcon = styled.div`
  position: absolute;
  text-align: center;
  width: 32px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
