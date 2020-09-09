import React from 'react';
import styled from 'styled-components';

const Profile = () => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/00/0077323c71c812138270223504eed8cccdad41b2_full.jpg"
          alt="This is your avatar" />
      </ImageContainer>
      <Text>
        Ciao Teddy, hai 5 articoli da leggere
      </Text>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.borders};
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  max-width:70px;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
`;

const Text = styled.p`
  padding-left: 20px;
`;
