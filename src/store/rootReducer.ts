import { combineReducers } from 'redux';
import profileReducer from './reducers/profile.reducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rootReducer = () =>
  combineReducers({
    profile: profileReducer,
  });

export type ReduxState = ReturnType<ReturnType<typeof rootReducer>>;
