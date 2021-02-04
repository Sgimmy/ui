import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CallApiResponse, Tags } from '../constants/types';
import { selectedTagAction } from '../store/actions/tags.action';

export type GetTagsState = CallApiResponse<Tags>;

export const getTags = createAsyncThunk('articles/getTags', async () => {
  const uid = localStorage.getItem('uid');
  const response = await fetch(`http://localhost:5001/article/tags/${uid}`);
  if (!response.ok) throw Error(response.statusText);

  const json: { tags: string[] } = await response.json();

  const transformJson: string[] = json.tags.map(tags => tags);

  return transformJson;
});

export const getTagsSlice = createSlice({
  reducers: {},
  name: 'tags',
  initialState: {
    loading: true,
    error: undefined,
    data: {
      tags: [],
      selectedTag: '',
    },
  } as GetTagsState,
  extraReducers: {
    [getTags.pending.type]: state => {
      return { ...state, loading: true };
    },
    [getTags.rejected.type]: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    [getTags.fulfilled.type]: (state, action) => {
      return {
        error: undefined,
        data: { ...state.data, tags: action.payload },
        loading: false,
      };
    },
    [selectedTagAction.type]: (state, action) => {
      return {
        error: undefined,
        data: {
          ...state.data,
          selectedTag: action.payload,
        },
        loading: false,
      };
    },
  },
});

export const TagsReducer = getTagsSlice.reducer;
