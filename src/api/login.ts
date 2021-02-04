import { userAuthenticatedAction } from '../store/actions/login.action';
import { Dispatch } from 'redux';
import firebaseConfig from '../firebaseConfig';

/*
 eslint-disable @typescript-eslint/explicit-module-boundary-types
*/

export const loginSendingCredentials = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => (dispatch: Dispatch) => {
  firebaseConfig
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('uid', user?.user?.uid ?? '');
      dispatch(userAuthenticatedAction());
    })
    .catch(e => {
      console.log(e);
    });
};
