import React, { FC } from 'react';
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps,
} from 'react-router-dom';
import { RouteLink } from '../../constants/route';

interface ConditionalRouteProps extends RouteProps {
  component: NonNullable<RouteProps['component']>;
  redirect: boolean;
  fallbackRoute: RouteLink;
}

export const RedirectRoute: FC<ConditionalRouteProps> = ({
  component: Component,
  redirect,
  fallbackRoute,
  ...routeProps
}) => {
  const render = (props: RouteComponentProps) => {
    return redirect ? (
      <Redirect
        to={{
          pathname: fallbackRoute,
          state: { from: props.location },
        }}
      />
    ) : (
      <Component {...props} />
    );
  };

  return <Route render={render} {...routeProps} />;
};
