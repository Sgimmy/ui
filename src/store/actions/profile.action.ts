import { createAction } from '@reduxjs/toolkit';
import { Profile } from '../reducers/profile.reducer';
import { Actions } from '../../constants/actions';

export const retrieveProfileAction = createAction(Actions.retrieveProfile);

export const profileErrorAction = createAction<string>(
  Actions.storeProfileFailed
);

export const storeProfileAction = createAction<Profile>(Actions.storeProfile);
