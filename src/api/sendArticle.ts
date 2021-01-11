import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CallApiResponse, SendArticle } from '../constants/types';
import { clearStoreArticleDetailAction } from '../store/actions/articleDetail.action';
import axios from 'axios';

export type GetArticleState = CallApiResponse<SendArticle | undefined>;

export const sendArticle = createAsyncThunk(
  'article/sendArticle',
  async (article: SendArticle) => {
    const response = await axios.post('/article', article);
    if (!response.data) throw Error(response.statusText);

    return response.data;
  }
);

export const sendArticleSlice = createSlice({
  name: 'sendArticle',
  initialState: {
    loading: true,
    error: undefined,
    data: undefined,
  } as GetArticleState,
  reducers: {},
  extraReducers: {
    [sendArticle.pending.type]: state => {
      return {
        ...state,
        loading: true,
      };
    },
    [sendArticle.rejected.type]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
    [sendArticle.fulfilled.type]: (state, action) => {
      return {
        ...state,
        loading: true,
        data: action.payload,
      };
    },
    [clearStoreArticleDetailAction.type]: () => {
      return {
        error: undefined,
        loading: false,
        data: undefined,
      };
    },
  },
});

export const modalSendArticleReducer = sendArticleSlice.reducer;
