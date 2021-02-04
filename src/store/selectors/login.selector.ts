import { ReduxState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';
import { Login } from '../reducers/login.reducer';

const loginStore = (state: ReduxState): Login => state.login;

const localStorageAuth = localStorage.getItem('isAuthenticated');

export const isAuthenticatedSelector = createSelector(
  loginStore,
  isAuthenticated => localStorageAuth ?? isAuthenticated.authenticated
);
