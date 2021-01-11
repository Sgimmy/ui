import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions';

export const userPressedRetryAction = createAction(Actions.userPressedRetry);
