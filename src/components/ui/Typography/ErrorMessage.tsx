import styled from 'styled-components/';

export const ErrorMessage = styled.p`
  color: ${props => props.theme.colors.text.errorMessage};
  height: 20px;

  &:before {
    display: inline;
    content: '⚠ ';
  }
`;
