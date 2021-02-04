import React, { useState } from 'react';
import styled from 'styled-components/';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { ErrorMessage } from '../Typography';

interface InputPasswordProps {
  placeholder: string;
  value?: string;
  setValue: (val: string) => void;
  errorMessage?: string;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  placeholder,
  value = '',
  setValue,
  errorMessage,
}) => {
  const [seePassword, setSeePassword] = useState<boolean>(false);

  const clickSeePassword = () => {
    setSeePassword(!seePassword);
  };

  return (
    <Container>
      <input
        type={seePassword ? 'text' : 'password'}
        className="genericInput"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {value.length > 0 && (
        <InnerIcon
          className="genericInputIcon"
          seePassword={seePassword}
          onClick={clickSeePassword}
        >
          {seePassword ? (
            <FontAwesomeIcon icon={faEyeSlash} color="black" size={'2x'} />
          ) : (
            <FontAwesomeIcon icon={faEye} color="black" size={'2x'} />
          )}
        </InnerIcon>
      )}
      {errorMessage && <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>}
    </Container>
  );
};

export default InputPassword;

const Container = styled.div`
  margin-top: 20px;
  overflow: hidden;
  position: relative;
`;

interface InnerIconProps {
  seePassword?: boolean;
}

const InnerIcon = styled.div<InnerIconProps>`
  right: ${props => (props.seePassword ? '20px' : '18px')};
`;

const ErrorMessageStyled = styled(ErrorMessage)`
  padding-top: 5px;
`;
