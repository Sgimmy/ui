import React from 'react';
import Input from '../ui/Input';
import InputPassword from '../ui/InputPassword';
import PrimaryButton from '../ui/button/PrimaryButton';

interface LoginFormProps {
  email: string;
  setEmail: (username: string) => void;
  password: string;
  setPassword: (password: string) => void;
  onClickButton: () => void;
  textButton: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  textButton,
  password,
  email,
  setPassword,
  setEmail,
  onClickButton,
}) => {
  const clearUsername = () => {
    setEmail('');
  };

  return (
    <div>
      <Input
        value={email}
        setValue={setEmail}
        placeholder="Inserisci la mail"
        clear={clearUsername}
      />
      <InputPassword
        value={password}
        setValue={setPassword}
        placeholder="Inserisci la password"
      />
      <PrimaryButton
        className="mt-20"
        onClick={onClickButton}
        text={textButton}
      />
    </div>
  );
};

export default LoginForm;
