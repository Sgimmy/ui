import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions';

export const showPopupMessageAction = createAction<string>(
  Actions.showPopupMessage
);

export const hidePopupMessageAction = createAction(Actions.hidePopupMessage);
