import { createSelector } from '@reduxjs/toolkit';
import { ReduxState } from '../rootReducer';
import { Profile } from '../reducers/profile.reducer';

const profile = (state: ReduxState): Profile => state.profile;

export const profileSelector = createSelector(profile, (profile: Profile) => {
  return {
    name: profile.name,
    avatar: profile.avatar,
    surname: profile.surname,
    loading: profile.loading,
  };
});

export const notReadedCounterSelector = createSelector(
  profile,
  (profile: Profile) => profile.notReadedCounter
);
