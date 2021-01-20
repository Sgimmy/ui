import React from 'react';
import styled from 'styled-components';
import ArticleListItem from '../articleListItem';
import { Article } from '../../../constants/types';
import ArticleListItemLoader from '../ArticleListItemLoader';
import { P } from '../../ui/Typography';

interface ArticleList {
  articlesList: Article[];
  loading: boolean;
}

const ArticleListItems: React.FC<ArticleList> = ({ articlesList, loading }) => {
  if (articlesList.length <= 0 && loading) {
    return (
      <Container>
        <ArticleListItemLoader />
      </Container>
    );
  }

  return (
    <Container>
      {articlesList ? (
        articlesList.map(article => (
          <ArticleListItem article={article} tags={['prova1', 'prova2']} />
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
