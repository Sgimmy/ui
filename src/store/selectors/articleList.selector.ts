import { createSelector } from '@reduxjs/toolkit';
import { ReduxState } from '../rootReducer';
import { GetArticleListState } from '../../api/getArticleList';

const articleListStore = (state: ReduxState): GetArticleListState =>
  state.articleList;

export const articleListSelector = createSelector(
  articleListStore,
  articleList => {
    return articleList;
  }
);
