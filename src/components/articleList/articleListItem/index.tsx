import React from 'react';
import styled from 'styled-components';
import { Article } from '../../../constants/types';
import placeHolder from '../../../assets/img/img-placeholder.png';
import { H2, P } from '../../ui/Typography';

interface ListItem {
  article: Article;
  tags?: string[];
}

const ArticleListItem: React.FC<ListItem> = ({ article, tags }) => {
  const navigateToArticle = () => window.open(article.source, '_blank');

  return (
    <Container>
      <ArticleContent onClick={navigateToArticle}>
        <ImageContainer>
          <Image src={article.thumbnail ?? placeHolder} alt="image" />
        </ImageContainer>
        <Inner>
          <H2>{article.title}</H2>
          {article.description && (
            <InnerDescription>
              <P>{article.description}</P>
            </InnerDescription>
          )}
          {!!tags && (
            <InnerTags>
              {tags.map(tag => (
                <Tags key={tag}>{tag}</Tags>
              ))}
            </InnerTags>
          )}
        </Inner>
      </ArticleContent>
    </Container>
  );
};

export default ArticleListItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const ArticleContent = styled.article`
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.borders.grey};
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 70px;
  padding-right: 15px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  border-radius: 15px;
`;

const Inner = styled.div`
  width: 100%;
  justify-content: space-between;
`;

const InnerTags = styled.div`
  display: flex;
  padding-top: 5px;
`;

const InnerDescription = styled.div`
  padding-top: 5px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const Tags = styled.p`
  padding-left: 5px;

  &:nth-child(1) {
    padding-left: 0px;
  }
`;
