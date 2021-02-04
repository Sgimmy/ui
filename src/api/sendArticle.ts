import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CallApiResponseSendArticle, SendArticle } from '../constants/types';
import axios from 'axios';
import { clearStateReduxSendArticleAction } from '../store/actions/sendFormAddArticle.action';

const initialState: SendArticleState = {
  loading: false,
  error: undefined,
  data: undefined,
  clearForm: undefined,
  sending: undefined,
};

export type SendArticleState = CallApiResponseSendArticle<
  SendArticle | undefined
>;

export const sendArticle = createAsyncThunk(
  'article/sendArticle',
  async (article: SendArticle) => {
    const uid = localStorage.getItem('uid');

    const request = { ...article, uid: uid };

    const response = await axios.post('http://localhost:5001/article', request);
    if (!response.data) throw Error(response.statusText);

    return response.data;
  }
);

export const sendArticleSlice = createSlice({
  name: 'sendArticle',
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [sendArticle.pending.type]: state => {
      return {
        ...state,
        loading: true,
        clearForm: undefined,
        sending: false,
      };
    },
    [sendArticle.rejected.type]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
        clearForm: undefined,
        sending: false,
      };
    },
    [sendArticle.fulfilled.type]: state => {
      return {
        ...state,
        sending: true,
        loading: false,
        data: undefined,
        clearForm: true,
      };
    },
    [clearStateReduxSendArticleAction.type]: () => {
      return {
        ...initialState,
      };
    },
  },
});

export const sendArticleReducer = sendArticleSlice.reducer;
