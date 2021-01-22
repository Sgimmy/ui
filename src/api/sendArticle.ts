import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CallApiResponseSendArticle, SendArticle } from '../constants/types';
import axios from 'axios';

export type SendArticleState = CallApiResponseSendArticle<
  SendArticle | undefined
>;

export const sendArticle = createAsyncThunk(
  'article/sendArticle',
  async (article: SendArticle) => {
    const response = await axios.post('http://localhost:5001/article', article);
    if (!response.data) throw Error(response.statusText);

    return response.data;
  }
);

export const sendArticleSlice = createSlice({
  name: 'sendArticle',
  initialState: {
    loading: false,
    error: undefined,
    data: undefined,
    clearForm: undefined,
  } as SendArticleState,
  reducers: {},
  extraReducers: {
    [sendArticle.pending.type]: state => {
      return {
        ...state,
        loading: true,
        clearForm: undefined,
      };
    },
    [sendArticle.rejected.type]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
        clearForm: undefined,
      };
    },
    [sendArticle.fulfilled.type]: state => {
      return {
        ...state,
        loading: false,
        data: undefined,
        clearForm: true,
      };
    },
  },
});

export const sendArticleReducer = sendArticleSlice.reducer;
