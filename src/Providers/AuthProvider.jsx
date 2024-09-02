import PropTypes from "prop-types";

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logOut = () => {
    return signOut(auth);
  };

  //sign in with google
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //sign in with github
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("user in the auth state changed", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    googleSignIn,
    githubSignIn,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
