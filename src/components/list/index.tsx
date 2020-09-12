import React from 'react';
import styled from 'styled-components';
import AddArticle from './layout/addArticle';
import Profile from './layout/profile';
import Filters from './layout/filters';
import ListItems from './layout/listItems';

const List = () => {

  return (
    <Container>
      <Header>
        <Profile
          avatar='https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/0077323c71c812138270223504eed8cccdad41b2_full.jpg'
          name='Simone'
          notReadedCounter={0}
        />
        <AddArticle />
      </Header>
      <Filters action={console.log} options={['pippo','pluto']}/>
      <ListItems />
    </Container>
  );
};

export default List;

const Container = styled.div`

`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;
