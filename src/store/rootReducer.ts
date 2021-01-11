import { combineReducers } from 'redux';
import profileReducer from './reducers/profile.reducer';
import { articleListReducer } from '../api/getArticleList';
import { articleReducer } from '../api/getArticle';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rootReducer = () =>
  combineReducers({
    profile: profileReducer,
    articleList: articleListReducer,
    article: articleReducer,
  });

export type ReduxState = ReturnType<ReturnType<typeof rootReducer>>;
