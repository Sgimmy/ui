import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

interface ListItem {
  title: string;
  description?: string;
  tags: string[];
  id: number;
}

const ArticleListItem: React.FC<ListItem> = ({
  title,
  description = 'Anteprima non disponibile',
  tags,
  id,
}) => {
  const history = useHistory();
  const navigateToArticle = () => history.push(`/listItem/${id}`);

  return (
    <Container>
      <Article onClick={navigateToArticle}>
        <Header>
          <h3>{title}</h3>
        </Header>
        <Main>
          <p>{description}</p>
        </Main>
        <Footer>
          {!!tags && (
            <ul>
              {tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          )}
        </Footer>
      </Article>
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

const Article = styled.article`
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  border: 1px solid ${props => props.theme.colors.borders};
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 20px;
`;

const Header = styled.header``;

const Main = styled.main``;

const Footer = styled.footer``;
