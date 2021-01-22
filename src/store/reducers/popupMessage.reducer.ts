import { createReducer } from '@reduxjs/toolkit';
import {
  hidePopupMessageAction,
  showPopupMessageAction,
} from '../actions/popupMessage.action';

export interface PopupMessage {
  visible: boolean;
  message?: string;
}

const defaultState: PopupMessage = {
  visible: false,
  message: undefined,
};

const popupMessageReducer = createReducer<PopupMessage>(defaultState, {
  [showPopupMessageAction.type]: (state, action) => ({
    visible: true,
    message: action.payload,
  }),
  [hidePopupMessageAction.type]: () => ({
    visible: false,
    message: undefined,
  }),
});

export default popupMessageReducer;
