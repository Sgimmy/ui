import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions';

export const clearStoreArticleDetailAction = createAction(
  Actions.clearStoreArticleDetail
);
