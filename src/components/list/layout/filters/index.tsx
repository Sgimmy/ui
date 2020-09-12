import React from 'react';
import styled from 'styled-components';
import {firstLetterUpperCase} from "../../../../utils/formatting";

interface FiltersProps {
  options: string[];
  action: (value: string) => void
}

const Filters: React.FC<FiltersProps> = ({action, options}) => {

  const onChangeAction = (value: React.FormEvent<HTMLSelectElement>) => {
    action(value.currentTarget.value)
  }

  return (
    <Container>
      <Select onChange={onChangeAction}>
        <option value="all">Tutte le categorie</option>
          { options.map((option) => {
            return <option key={option} value={option}>{firstLetterUpperCase(option)}</option>
          })}
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
