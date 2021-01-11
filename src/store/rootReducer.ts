import { combineReducers } from 'redux';
import profileReducer from './reducers/profile.reducer';
import { articleListReducer } from '../api/getArticleList';
import { articleReducer } from '../api/getArticle';
import { modalSendArticleReducer } from '../api/sendArticle';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rootReducer = () =>
  combineReducers({
    profile: profileReducer,
    articleList: articleListReducer,
    article: articleReducer,
    modalSendArticle: modalSendArticleReducer,
  });

export type ReduxState = ReturnType<ReturnType<typeof rootReducer>>;
