import { combineReducers } from 'redux';

export const rootReducer = () => combineReducers({});

export type ReduxState = ReturnType<ReturnType<typeof rootReducer>>;
