import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { replaceNull } from '../utils/formatting';
import { Article, CallApiResponse } from '../constants/types';
import { clearStoreArticleDetailAction } from '../store/actions/articleDetail.action';

export type GetArticleState = CallApiResponse<Article | undefined>;

export const getArticle = createAsyncThunk(
  'article/getArticle',
  async (id: string) => {
    const response = await fetch(`http://localhost:5001/article/${id}`);
    if (!response.ok) throw Error(response.statusText);

    const json: Article = await response.json();

    const transformJson: Article = {
      title: json.title,
      id: json.id,
      description: replaceNull(json.description),
      content: json.content,
      thumbnail: replaceNull(json.thumbnail),
      source: json.source,
      created: json.created,
      updated: json.updated,
    };

    return transformJson;
  }
);

export const articleSlice = createSlice({
  name: 'article',
  initialState: {
    loading: true,
    error: undefined,
    data: undefined,
  } as GetArticleState,
  reducers: {},
  extraReducers: {
    [getArticle.pending.type]: state => {
      return {
        ...state,
        loading: true,
      };
    },
    [getArticle.rejected.type]: (state, action) => {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    },
    [getArticle.fulfilled.type]: (state, action) => {
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

export const articleReducer = articleSlice.reducer;
