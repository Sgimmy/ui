import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../../constants/actions';

export const selectedTagAction = createAction<string>(Actions.selectedTag);
