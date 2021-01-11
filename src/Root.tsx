import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import ListView from './view/ListView';
import Header from './components/Header';
import { RouteLink } from './constants/route';
import ArticleDetailView from './view/ArticleDetailView';
import './reset.css';

const Root: React.FC = () => {
  return (
    <Container>
      <Header />
      <Route path={RouteLink.listArticle} component={ListView} exact />
      <Route
        path={RouteLink.articleDetail}
        component={ArticleDetailView}
        exact
      />
    </Container>
  );
};

export default Root;

const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.background.black};
  color: ${props => props.theme.colors.text.white};
  font-family: ${props => props.theme.fontFamily};
`;
