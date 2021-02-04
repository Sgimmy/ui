import { createReducer } from '@reduxjs/toolkit';
import { XHRRequest } from './common';
import { userPressedSendArticleAction } from '../actions/user.action';
import {
  userAuthenticatedAction,
  userNotAuthenticatedAction,
} from '../actions/login.action';

export interface Login extends XHRRequest {
  authenticated: boolean;
}

const defaultState: Login = {
  errorMessage: undefined,
  loading: false,
  authenticated: false,
};

const loginReducer = createReducer<Login>(defaultState, {
  [userPressedSendArticleAction.type]: state => ({
    ...state,
    loading: true,
  }),
  [userAuthenticatedAction.type]: state => ({
    ...state,
    loading: false,
    authenticated: true,
  }),
  [userNotAuthenticatedAction.type]: (state, action) => ({
    ...state,
    loading: false,
    authenticated: false,
    errorMessage: action.payload,
  }),
});

export default loginReducer;
