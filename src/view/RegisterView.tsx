import React, { useState } from 'react';
import ViewAnimation from '../components/ui/animation/ViewAnimation';
import LoginForm from '../components/LoginForm';
import { registerSendingCredentials } from '../api/registerUser';
import { useDispatch } from 'react-redux';
import Input from '../components/ui/Input';

const RegisterView: React.FC = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const clearName = () => {
    setName('');
  };

  const pressedLogin = () => {
    dispatch(
      registerSendingCredentials({
        name: name,
        password: password,
        email: email,
      })
    );
  };

  return (
    <ViewAnimation>
      <Input
        clear={clearName}
        setValue={setName}
        placeholder="Inserisci il Nome"
        value={name}
      />
      <LoginForm
        textButton="Registrati"
        password={password}
        onClickButton={pressedLogin}
        setPassword={setPassword}
        setEmail={setEmail}
        email={email}
      />
    </ViewAnimation>
  );
};

export default RegisterView;
