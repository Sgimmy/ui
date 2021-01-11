import { ReduxState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';
import { GetArticleState } from '../../api/getArticle';

const articleListStore = (state: ReduxState): GetArticleState => state.article;

export const articleSelector = createSelector(articleListStore, articleList => {
  return articleList;
});
