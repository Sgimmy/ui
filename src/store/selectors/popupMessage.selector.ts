import { ReduxState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';
import { PopupMessage } from '../reducers/popupMessage.reducer';

const popupMessageStore = (state: ReduxState): PopupMessage =>
  state.popupMessage;

export const popupMessageStoreSelector = createSelector(
  popupMessageStore,
  popupMessage => popupMessage
);
