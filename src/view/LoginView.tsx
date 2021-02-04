import React, { useState } from 'react';
import ViewAnimation from '../components/ui/animation/ViewAnimation';
import LoginForm from '../components/LoginForm';
import { useDispatch } from 'react-redux';
import { loginSendingCredentials } from '../api/login';

const LoginView: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const pressedLogin = () => {
    dispatch(loginSendingCredentials({ email: email, password: password }));
  };

  return (
    <ViewAnimation>
      <LoginForm
        textButton="Login"
        password={password}
        onClickButton={pressedLogin}
        setPassword={setPassword}
        setEmail={setEmail}
        email={email}
      />
    </ViewAnimation>
  );
};

export default LoginView;
