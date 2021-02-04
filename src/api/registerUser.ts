import { userAuthenticatedAction } from '../store/actions/login.action';
import { Dispatch } from 'redux';
import firebaseConfig from '../firebaseConfig';

/*
 eslint-disable @typescript-eslint/explicit-module-boundary-types
*/

export const registerSendingCredentials = ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => (dispatch: Dispatch) => {
  const databaseRef = firebaseConfig.database().ref();

  const userDetailsRef = databaseRef.child('user-details');

  firebaseConfig
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function (user) {
      userDetailsRef.push().set({ userId: user.user?.uid, userName: name });
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('uid', user?.user?.uid ?? '');
      dispatch(userAuthenticatedAction());
    })
    .catch(e => {
      console.log(e);
    });
};
