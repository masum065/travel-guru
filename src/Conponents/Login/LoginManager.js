import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './Firebase.config';

export const initializeLogginApp = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleFAcebooksignIn = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(facebookProvider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const singedInUser = {
        isSignedIn: true,
        name: displayName,
        photo: photoURL,
        email: email,
        successful: true,
      };

      return singedInUser;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
};

export const handleGoogleSingIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const singedInUser = {
        isSignedIn: true,
        name: displayName,
        photo: photoURL,
        email: email,
        successful: true,
      };

      return singedInUser;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const handleGoogleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      const singOutUser = {
        isSignedIn: false,
        name: '',
        photo: '',
        email: '',
        error: '',
        successful: false,
      };

      return singOutUser;
    })
    .catch((error) => {
      // An error happened.
    });
};

export const createUserWithEmailAndPassword = (email, password, name) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((response) => {
      const newUserInfo = response;
      newUserInfo.error = '';
      newUserInfo.successful = true;
      updateUser(name);
      return newUserInfo;
    })
    .catch((error) => {
      // Handle Errors here.
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.successful = false;
      return newUserInfo;
    });
};

export const signInWithEmailPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((response) => {
      const newUserInfo = response.user;
      newUserInfo.error = '';
      newUserInfo.successful = true;
      return newUserInfo;
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.successful = false;
      return newUserInfo;
    });
};

const updateUser = (upUser) => {
  const user = firebase.auth().currentUser;

  user
    .updateProfile({
      displayName: upUser,
    })
    .then(() => {
      console.log('Update User Succesfully');
    })
    .catch(function (error) {
      console.log(error);
    });
};
