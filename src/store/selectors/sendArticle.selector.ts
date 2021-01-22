import { ReduxState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';
import { SendArticleState } from '../../api/sendArticle';

const sendArticleStore = (state: ReduxState): SendArticleState =>
  state.sendArticle;

export const sendArticleSelector = createSelector(
  sendArticleStore,
  sendArticle => {
    return sendArticle;
  }
);
