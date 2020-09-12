import React, { Fragment } from 'react';
import styled from 'styled-components';

interface ProfileProps {
  name?: string;
  avatar?: string;
  notReadedCounter?: number;
  loading: boolean;
}

const Profile: React.FC<ProfileProps> = ({
  loading,
  name,
  avatar,
  notReadedCounter,
}) => {
  const sentence =
    notReadedCounter === 0
      ? 'non ci sono articoli da leggere'
      : notReadedCounter === 1
      ? `hai un solo articolo da leggere`
      : `hai ${notReadedCounter} articoli da leggere`;
  return (
    <Container>
      {loading ? (
        <div>loader</div>
      ) : (
        <Fragment>
          <ImageContainer>
            <Image src={avatar} alt="This is your avatar" />
          </ImageContainer>
          <Text>
            Ciao {name}, {sentence}
          </Text>
        </Fragment>
      )}
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
  max-width: 70px;
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
