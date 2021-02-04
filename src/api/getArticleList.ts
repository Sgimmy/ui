import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { replaceNull } from '../utils/formatting';
import { Article, CallApiResponse } from '../constants/types';

export type GetArticleListState = CallApiResponse<Article[]>;

export const getArticleList = createAsyncThunk(
  'articles/getArticles',
  async () => {
    const uid = localStorage.getItem('uid');
    const response = await fetch(`http://localhost:5001/article/${uid}`);
    if (!response.ok) throw Error(response.statusText);

    const json: Article[] = await response.json();

    let transformJson: Article[] = json.map(article => ({
      title: article.title,
      id: article.id,
      description: replaceNull(article.description),
      content: article.content,
      thumbnail: replaceNull(article.thumbnail),
      tags: article.tags,
      source: article.source,
      created: article.created,
      updated: article.updated,
    }));

    transformJson = transformJson.sort((a, b) =>
      a.created < b.created ? 1 : b.created < a.created ? -1 : 0
    );

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
