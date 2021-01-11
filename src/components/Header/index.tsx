import Profile from '../articleList/profile';
import AddArticle from '../articleList/addArticle';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  notReadedCounterSelector,
  profileSelector,
} from '../../store/selectors/profile.selector';

const Header: React.FC = () => {
  const { name, avatar, loading } = useSelector(profileSelector);
  const notReadedCounter = useSelector(notReadedCounterSelector);

  return (
    <Container>
      <Profile
        loading={loading}
        avatar={avatar}
        name={name}
        notReadedCounter={notReadedCounter}
      />
      <AddArticle />
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;
