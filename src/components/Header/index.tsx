import Profile from '../articleList/profile';
import AddArticle from '../articleList/addArticle';
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import {
  notReadedCounterSelector,
  profileSelector,
} from '../../store/selectors/profile.selector';
import { useLocation } from 'react-router-dom';
import { RouteLink } from '../../constants/route';
import { useNavigation } from '../hooks/useNavigation';

const Header: React.FC = () => {
  const { pathname } = useLocation();

  const { name, avatar, loading } = useSelector(profileSelector);
  const notReadedCounter = useSelector(notReadedCounterSelector);
  const { goBack, goToAddArticle } = useNavigation();

  return (
    <Container>
      <Profile
        loading={loading}
        avatar={avatar}
        name={name}
        notReadedCounter={notReadedCounter}
      />
      <AddArticle
        clickButton={
          pathname === RouteLink.newArticle ? goBack : goToAddArticle
        }
        back={pathname === RouteLink.newArticle}
      />
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
  padding: 20px 0;
  border-bottom: 1px solid ${props => props.theme.colors.borders.white};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  background: ${props => props.theme.colors.background.black};
  z-index: 100;
`;
