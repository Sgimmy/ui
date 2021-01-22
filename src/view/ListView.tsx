import React, { useEffect } from 'react';
import ArticleListItems from '../components/articleList/articleListItems';
import Filters from '../components/articleList/filters';
import { useGetArticleList } from '../components/hooks/useGetArticleList';
import { getArticleList } from '../api/getArticleList';
import { useDispatch } from 'react-redux';
import { clearStoreArticleDetailAction } from '../store/actions/articleDetail.action';
import ViewAnimation from '../components/ui/animation/ViewAnimation';

const ListView: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleList());
    dispatch(clearStoreArticleDetailAction());
  }, [dispatch]);

  const { articleList } = useGetArticleList();

  return (
    <ViewAnimation>
      <Filters action={console.log} options={['pippo', 'pluto']} />
      <ArticleListItems
        articlesList={articleList.data}
        loading={articleList.loading}
      />
    </ViewAnimation>
  );
};

export default ListView;
