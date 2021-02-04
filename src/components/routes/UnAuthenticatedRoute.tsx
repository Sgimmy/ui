import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';
import React from 'react';
import { useSelector } from 'react-redux';
import { RouteLink } from '../../constants/route';
import { isAuthenticatedSelector } from '../../store/selectors/login.selector';

export interface AuthenticatedRouteProps extends RouteProps {
  component: React.FC<RouteComponentProps>;
}

export const UnAuthenticatedRoute: React.FC<AuthenticatedRouteProps> = ({
  component: Component,
  ...rest
}) => {
  const authenticated = useSelector(isAuthenticatedSelector);

  return (
    <Route
      {...rest}
      render={props =>
        authenticated ? (
          <Redirect to={RouteLink.listArticle} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};