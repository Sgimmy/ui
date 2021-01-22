import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getArticle } from '../api/getArticle';
import { useGetArticle } from '../components/hooks/useGetArticle';
import { Loader } from '../components/ui/Loader';

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
    <>
      {!!article.data?.content && (
        <div dangerouslySetInnerHTML={{ __html: article.data.content }} />
      )}
    </>
  );
};

export default ArticleDetailView;
