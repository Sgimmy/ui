import { combineReducers } from 'redux';
import profileReducer from "./reducers/profile.reducer";

export const rootReducer = () => combineReducers({
  profile: profileReducer
});

export type ReduxState = ReturnType<ReturnType<typeof rootReducer>>;
