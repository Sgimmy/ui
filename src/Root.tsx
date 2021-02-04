import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';
import ListView from './view/ListView';
import { RouteLink } from './constants/route';
import ArticleDetailView from './view/ArticleDetailView';
import './reset.css';
import './Root.scss';
import NewArticleView from './view/NewArticleView';
import PopupMessage from './components/ui/popupMessage';
import { usePopupMessage } from './components/hooks/usePopupMessage';
import { AnimatePresence } from 'framer-motion';
import LoginView from './view/LoginView';
import RegisterView from './view/RegisterView';
import { UnAuthenticatedRoute } from './components/routes/UnAuthenticatedRoute';
import { AuthenticatedRoute } from './components/routes/AuthenticatedRoute';
import { useSelector } from 'react-redux';
import { isAuthenticatedSelector } from './store/selectors/login.selector';

const Root: React.FC = () => {
  const { popupMessageStore } = usePopupMessage();
  const authenticated = useSelector(isAuthenticatedSelector);

  return (
    <Container>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Switch>
          <UnAuthenticatedRoute path={RouteLink.login} component={LoginView} />
          <UnAuthenticatedRoute
            path={RouteLink.register}
            component={RegisterView}
          />
          <AuthenticatedRoute
            path={RouteLink.listArticle}
            component={ListView}
            exact
          />
          <AuthenticatedRoute
            path={RouteLink.articleDetail}
            component={ArticleDetailView}
            exact
          />
          <AuthenticatedRoute
            path={RouteLink.newArticle}
            component={NewArticleView}
            exact
          />
          <Route path={RouteLink.all}>
            {authenticated ? (
              <Redirect to={RouteLink.listArticle} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </AnimatePresence>
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
