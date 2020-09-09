import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import List from './components/list';

const Root = () => {
  return (
    <Container>
      <Route path="/" component={List} />
      {/*<Route path="/article/:id" component={Reader}*/}
    </Container>
  );
}

export default Root;

const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.background.black};
  color: ${props => props.theme.colors.text.white};
  font-family: ${props => props.theme.fontFamily}
`;
