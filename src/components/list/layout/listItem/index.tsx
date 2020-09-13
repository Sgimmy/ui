import React from 'react';
import styled from 'styled-components';

const ListItem: React.FC = () => {
  return (
    <Container>
      <Article>
        <Header>
          <h3>Titolo dell'articolo</h3>
        </Header>
        <Main>
          <p>Estratto dell'articolo</p>
        </Main>
        <Footer>
          <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
          </ul>
        </Footer>
      </Article>
    </Container>
  );
};

export default ListItem;

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
