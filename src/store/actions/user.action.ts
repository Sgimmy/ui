import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions';
import { SendArticle } from '../../constants/types';

export const userPressedRetryAction = createAction(Actions.userPressedRetry);

export const userPressedModalOpenAddArticleAction = createAction(
  Actions.userPressedModalOpenAddArticleAction
);

export const userPressedModalCloseAddArticleAction = createAction(
  Actions.userPressedModalCloseAddArticleAction
);

export const userPressedSendArticleAction = createAction<SendArticle>(
  Actions.userPressedSendArticleAction
);
