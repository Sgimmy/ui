import React, { useState } from 'react';
import styled from 'styled-components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Tag from './partials/tag';
import { ErrorMessage } from '../Typography';

interface TagsProps {
  tags: string[];
  setTags: (tags: string[]) => void;
  errorMessage?: string;
}

const InputTags: React.FC<TagsProps> = ({
  setTags,
  tags = [],
  errorMessage,
}) => {
  const [value, setValue] = useState<string>('');

  const addTag = () => {
    const tag = value.replace(',', ' ').split(' ');
    setValue('');
    setTags(Array.from(new Set(tags.concat(tag))));
  };

  const enterAddTag = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };

  const deleteTag = (tag: string) => {
    const newTags = tags.filter(el => el !== tag);
    setTags(newTags);
  };

  return (
    <Container>
      <ContainerInput>
        <InputStyled
          placeholder="Inserisci i tag"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={enterAddTag}
        />
        {errorMessage && (
          <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>
        )}

        {value.length > 0 && (
          <InnerIcon onClick={addTag}>
            <FontAwesomeIcon icon={faPlusCircle} color="green" size="2x" />
          </InnerIcon>
        )}
      </ContainerInput>
      {tags.length > 0 && (
        <ContainerTags>
          {tags.map(tag => (
            <Tag removeTag={deleteTag} key={tag} tag={tag} />
          ))}
        </ContainerTags>
      )}
    </Container>
  );
};

export default InputTags;

const ErrorMessageStyled = styled(ErrorMessage)`
  padding-top: 5px;
`;

const Container = styled.div`
  margin: 20px 0px;
  min-height: 110px;
`;

const ContainerTags = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const ContainerInput = styled.div`
  overflow: hidden;
  max-width: 40%;
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
