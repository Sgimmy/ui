import { ReduxState } from '../rootReducer';
import { createSelector } from '@reduxjs/toolkit';
import { GetTagsState } from '../../api/getTags';

const tagsStore = (state: ReduxState): GetTagsState => state.tags;

export const tagsSelector = createSelector(tagsStore, tags => {
  return tags.data.tags;
});

export const selectedTagSelector = createSelector(tagsStore, tags => {
  return tags.data.selectedTag;
});
