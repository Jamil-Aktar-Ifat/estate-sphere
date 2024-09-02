import { createContext } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  const authInfo = {
    createUser,
    signIn,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
