import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import ListView from './view/ListView';
import Header from './components/Header';
import { RouteLink } from './constants/route';
import ArticleDetailView from './view/ArticleDetailView';
import './reset.css';
import NewArticleView from './view/NewArticleView';
import PopupMessage from './components/ui/popupMessage';
import { usePopupMessage } from './components/hooks/usePopupMessage';

const Root: React.FC = () => {
  const { popupMessageStore } = usePopupMessage();

  return (
    <Container>
      <Header />
      <Route path={RouteLink.listArticle} component={ListView} exact />
      <Route
        path={RouteLink.articleDetail}
        component={ArticleDetailView}
        exact
      />
      <Route path={RouteLink.newArticle} component={NewArticleView} exact />
      {popupMessageStore.visible && (
        <PopupMessage text={popupMessageStore.message} />
      )}
    </Container>
  );
};

export default Root;

const Container = styled.div`
  padding: 0px 20px 20px;
  background-color: ${props => props.theme.colors.background.black};
  color: ${props => props.theme.colors.text.white};
  font-family: ${props => props.theme.fontFamily};
`;
