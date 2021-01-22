import { combineReducers } from 'redux';
import profileReducer from './reducers/profile.reducer';
import { articleListReducer } from '../api/getArticleList';
import { articleReducer } from '../api/getArticle';
import { sendArticleReducer } from '../api/sendArticle';
import popupMessageReducer from './reducers/popupMessage.reducer';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const rootReducer = () =>
  combineReducers({
    profile: profileReducer,
    articleList: articleListReducer,
    article: articleReducer,
    sendArticle: sendArticleReducer,
    popupMessage: popupMessageReducer,
  });

export type ReduxState = ReturnType<ReturnType<typeof rootReducer>>;
