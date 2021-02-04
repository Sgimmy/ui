import React from 'react';
import styled from 'styled-components';
import ArticleListItem from '../articleListItem';
import { Article } from '../../../constants/types';
import ArticleListItemLoader from '../ArticleListItemLoader';
import LazyLoad from 'react-lazyload';
import { P } from '../../ui/Typography';

interface ArticleList {
  articlesList: Article[];
  loading: boolean;
}

const ArticleListItems: React.FC<ArticleList> = ({ articlesList, loading }) => {
  if (articlesList.length <= 0 && loading) {
    return <ArticleListItemLoader />;
  }

  return (
    <Container>
      {articlesList.length > 0 ? (
        articlesList.map(article => (
          <LazyLoad
            key={article.id}
            placeholder={<ArticleListItemLoader />}
            offset={120}
          >
            <ArticleListItem
              key={article.id}
              article={article}
              tags={article.tags}
            />
          </LazyLoad>
        ))
      ) : (
        <P>Lista vuota</P>
      )}
    </Container>
  );
};

export default ArticleListItems;

const Container = styled.div`
  margin-top: 20px;
`;
