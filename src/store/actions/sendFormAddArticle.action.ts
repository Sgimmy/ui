import { createAction } from '@reduxjs/toolkit';
import { ChangeFormAddArticle } from '../../constants/types';
import { Actions } from '../../constants/actions';

export const changeFormAddArticleAction = createAction<ChangeFormAddArticle>(
  Actions.changeFormAddArticle
);
