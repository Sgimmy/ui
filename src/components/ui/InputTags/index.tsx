import React, { useState } from 'react';
import styled from 'styled-components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const InputTags: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const addTag = () => {
    const tag = value.split('');
    setValue('');
    setTags([...tags, ...tag]);
  };

  const enterAddTag = (e: React.KeyboardEvent<HTMLDivElement>) => {
    console.log(e);
    if (e.key === 'Enter') {
      addTag();
    }
  };

  return (
    <Container>
      <ContainerInput>
        <InputStyled
          placeholder="Inserisci il link da salvare"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        {value.length > 0 && (
          <InnerIcon onClick={addTag} onKeyDown={enterAddTag}>
            <FontAwesomeIcon icon={faArrowRight} color="green" size="2x" />
          </InnerIcon>
        )}
      </ContainerInput>
      {tags && (
        <ContainerTags>
          {tags.map(tag => (
            <div>{tag}</div>
          ))}
        </ContainerTags>
      )}
    </Container>
  );
};

export default InputTags;

const Container = styled.div`
  margin-top: 20px;
`;

const ContainerTags = styled.div`
  margin-top: 20px;
  display: flex;
`;

const ContainerInput = styled.div`
  border-radius: 8px;
  overflow: hidden;
  max-width: 40%;
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
