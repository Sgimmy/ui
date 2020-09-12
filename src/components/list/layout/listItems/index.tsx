import React from 'react';
import styled from 'styled-components';
import ListItem from '../listItem';

const ListItems = (): React.FC => {
  return (
    <Container>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Container>
  );
};

export default ListItems;

const Container = styled.div`
  margin-top: 20px;
`;
