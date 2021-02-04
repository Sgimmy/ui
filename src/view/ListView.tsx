import React, { useEffect } from 'react';
import ArticleListItems from '../components/articleList/articleListItems';
import Filters from '../components/articleList/filters';
import { useGetArticleList } from '../components/hooks/useGetArticleList';
import { getArticleList } from '../api/getArticleList';
import { useDispatch } from 'react-redux';
import { clearStoreArticleDetailAction } from '../store/actions/articleDetail.action';
import ViewAnimation from '../components/ui/animation/ViewAnimation';
import Header from '../components/Header';
import { getTags } from '../api/getTags';
import { useTags } from '../components/hooks/useTags';

const ListView: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticleList());
    dispatch(getTags());
    dispatch(clearStoreArticleDetailAction());
  }, []);

  const { articleList } = useGetArticleList();
  const { tags, selectedTags } = useTags();

  return (
    <React.Fragment>
      <Header />
      <ViewAnimation>
        <Filters action={selectedTags} options={tags} />
        <ArticleListItems
          articlesList={articleList.data}
          loading={articleList.loading}
        />
      </ViewAnimation>
    </React.Fragment>
  );
};

export default ListView;
