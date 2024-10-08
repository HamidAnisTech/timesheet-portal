// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_YOUR_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//User Registration

export const register = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const userId = user.uid;
    return Promise.resolve(userId);
  } catch (error) {
    console.error("Error Registering on auth:", error);
    return Promise.reject(error);
  }
};

//User Authentication
export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    let user = userCredential.user;
    const token = await user.getIdToken();
    user = { ...user, token };
    return Promise.resolve(user);
  } catch (error) {
    console.error("Error logging in: ", error);
    return Promise.reject(error);
  }
};

export const logout = () => {
  return signOut(auth);
};
