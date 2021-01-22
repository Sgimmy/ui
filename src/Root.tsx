import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import ListView from './view/ListView';
import Header from './components/Header';
import { RouteLink } from './constants/route';
import ArticleDetailView from './view/ArticleDetailView';
import './reset.css';
import NewArticleView from './view/NewArticleView';
import PopupMessage from './components/ui/popupMessage';
import { usePopupMessage } from './components/hooks/usePopupMessage';
import { AnimatePresence } from 'framer-motion';

const Root: React.FC = () => {
  const { popupMessageStore } = usePopupMessage();

  return (
    <Container>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path={RouteLink.listArticle} component={ListView} exact />
              <Route
                path={RouteLink.articleDetail}
                component={ArticleDetailView}
                exact
              />
              <Route
                path={RouteLink.newArticle}
                component={NewArticleView}
                exact
              />
              <Route path={RouteLink.all}>
                <Redirect to={RouteLink.listArticle} />
              </Route>
            </Switch>
          </AnimatePresence>
        )}
      />
      {popupMessageStore.message && (
        <PopupMessage text={popupMessageStore.message} />
      )}
    </Container>
  );
};

export default Root;

const Container = styled.div`
  padding: 0px 20px 20px;
  color: ${props => props.theme.colors.text.white};
  font-family: ${props => props.theme.fontFamily};
`;
