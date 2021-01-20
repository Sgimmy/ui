import React from 'react';
import Input from '../ui/Input';
import styled from 'styled-components';
import InputTags from '../ui/InputTags';

const FormAddUrl: React.FC = () => {
  return (
    <Container>
      <Input />
      <InputTags />
    </Container>
  );
};

const Container = styled.div``;

export default FormAddUrl;
