import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArticle } from '../api/getArticle';
import { useGetArticle } from '../components/hooks/useGetArticle';
import { Loader } from '../components/ui/Loader';
import ViewAnimation from '../components/ui/animation/viewAnimation';

interface TParams {
  id?: string;
}

const ArticleDetailView: React.FC<RouteComponentProps<TParams>> = ({
  match,
}) => {
  const dispatch = useDispatch();
  const { id } = match.params;

  useEffect(() => {
    if (id) dispatch(getArticle(id));
  }, [id]);
  const { article } = useGetArticle();

  if (article.loading) {
    return <Loader />;
  }

  return (
    <ViewAnimation>
      {!!article.data?.content && (
        <div dangerouslySetInnerHTML={{ __html: article.data.content }} />
      )}
    </ViewAnimation>
  );
};

export default ArticleDetailView;
