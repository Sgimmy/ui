import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface TagProps {
  tag: string;
  removeTag: (tag: string) => void;
}

const Tag: React.FC<TagProps> = ({ tag, removeTag }) => {
  const onClickIcon = () => {
    removeTag(tag);
  };

  return (
    <Outer>
      <InnerText>{tag}</InnerText>
      <InnerIcon onClick={onClickIcon}>
        <FontAwesomeIcon icon={faTimes} color="red" size={'1x'} />
      </InnerIcon>
    </Outer>
  );
};

export default Tag;

const Outer = styled.div`
  padding: 5px 10px;
  height: 20px;
  background: ${props => props.theme.colors.background.white};
  color: black;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const InnerIcon = styled.div`
  padding-left: 5px;
  cursor: pointer;
`;

const InnerText = styled.div`
  text-align: center;
`;
