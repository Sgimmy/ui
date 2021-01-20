import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { replaceNull } from '../utils/formatting';
import { Article, CallApiResponse } from '../constants/types';

export type GetArticleListState = CallApiResponse<Article[]>;

export const getArticleList = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const response = await fetch('http://localhost:5001/article');
    if (!response.ok) throw Error(response.statusText);

    const json: Article[] = await response.json();

    const transformJson: Article[] = json.map(article => ({
      title: article.title,
      id: article.id,
      description: replaceNull(article.description),
      content: article.content,
      thumbnail: replaceNull(article.thumbnail),
      source: article.source,
      created: article.created,
      updated: article.updated,
    }));

    return transformJson;
  }
);

export const articleListSlice = createSlice({
  reducers: {},
  name: 'articleList',
  initialState: {
    loading: true,
    error: undefined,
    data: [],
  } as GetArticleListState,
  extraReducers: {
    [getArticleList.pending.type]: state => {
      return { ...state, loading: true };
    },
    [getArticleList.rejected.type]: (state, action) => {
      return { ...state, loading: false, error: action.payload };
    },
    [getArticleList.fulfilled.type]: (state, action) => {
      return {
        error: undefined,
        data: action.payload,
        loading: false,
      };
    },
  },
});

export const articleListReducer = articleListSlice.reducer;
