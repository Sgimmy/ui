import { createAsyncThunk } from '@reduxjs/toolkit';
import { replaceNull } from '../utils/formatting';
import { Article } from '../constants/types';

export const getFilteredArticleList = createAsyncThunk(
  'articles/filteredArticles',
  async (value: string) => {
    const uid = localStorage.getItem('uid');
    const response = await fetch(
      `http://localhost:5001/article/${uid}/${value}`
    );
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
