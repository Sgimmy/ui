import React from 'react';
import styled from 'styled-components';

const Filters = () => {
  return (
    <Container>
      <Select>
        <option value="all">Tutte le categorie</option>
        <option value="react">React</option>
        <option value="redux">Redux</option>
        <option value="angular">Angular</option>
        <option value="ngrx">NgRx</option>
        <option value="rxjs">RxJS</option>
      </Select>
    </Container>
  );
};

export default Filters;

const Container = styled.div`
  margin-top: 20px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borders};
  overflow: hidden;
`;

const Select = styled.select`
  padding: 15px;
  width: 100%;
`;
