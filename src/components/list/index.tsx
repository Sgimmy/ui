import React from 'react';
import styled from 'styled-components';
import AddArticle from './layout/addArticle';
import Profile from './layout/profile';
import Filters from './layout/filters';
import ListItems from './layout/listItems';
import { useSelector } from 'react-redux';
import {
  notReadedCounterSelector,
  profileSelector,
} from '../../store/selectors/profile.selector';

const List: React.FC = () => {
  const { name, avatar, loading } = useSelector(profileSelector);
  const notReadedCounter = useSelector(notReadedCounterSelector);

  return (
    <Container>
      <Header>
        <Profile
          loading={loading}
          avatar={avatar}
          name={name}
          notReadedCounter={notReadedCounter}
        />
        <AddArticle />
      </Header>
      <Filters action={console.log} options={['pippo', 'pluto']} />
      <ListItems />
    </Container>
  );
};

export default List;

const Container = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;
