import {createReducer} from "@reduxjs/toolkit";
import {XHRRequest} from "./common";
import {
  profileErrorAction,
  retrieveProfileAction,
  storeProfileAction,
} from "../actions/profile.action";

export interface Profile extends XHRRequest {
  name?: string;
  surname?: string;
  notReadedCounter?: number;
  avatar?: string;
}

/*export const defaultState: Profile = {
  name: undefined,
  surname: undefined,
  notReadedCounter: undefined,
  avatar: undefined,
  errorMessage: undefined,
  loading: false
};*/

const defaultState: Profile = {
  name: 'Mario',
  surname: 'Pacella',
  notReadedCounter: 5,
  avatar: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/0077323c71c812138270223504eed8cccdad41b2_full.jpg',
  errorMessage: undefined,
  loading: false
}

const profileReducer = createReducer<Profile>(defaultState, {
  [retrieveProfileAction.type]: (state) => ({
    ...state,
    loading: true,
  }),
  [storeProfileAction.type]: (state, action) => ({
    ...state,
    loading: false,
    ...action.payload
  }),
  [profileErrorAction.type]: (state, action) => ({
    ...state,
    errorMessage: action.payload
  }),
});

export default profileReducer;
