import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  //   to check the current logged in user
  //   console.log(auth?.currentUser?.email);
  //   console.log(auth?.currentUser?.providerData[0].displayName);

  const handleSigninWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>Firebase Auth</div>
      <input
        placeholder="Email.."
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {auth?.currentUser?.uid ? (
        <button onClick={handleSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleSignIn}>Sign in</button>
          <button onClick={handleSigninWithGoogle}>Signin With Google</button>
        </>
      )}
    </div>
  );
}
