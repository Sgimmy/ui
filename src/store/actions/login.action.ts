import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions';

export const userPressedSendArticleAction = createAction(Actions.pressedLogin);

export const userAuthenticatedAction = createAction(Actions.userAuthenticated);

export const userNotAuthenticatedAction = createAction<string>(
  Actions.userNotAuthenticated
);
