import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "./firebase-config";
import { addDoc, collection } from "firebase/firestore";
const FirebaseAuth = () => {
  //   const auth = getAuth();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfor] = useState("");
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      setUserInfor(currentUser);
    } else {
      setUserInfor("");
    }
  });

  function handleInputChange(e) {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  }
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await updateProfile(auth.currentUser, {
        displayName: "le Dinh Duong",
      });
      setUserInfor(cred);
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: cred.user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    setUserInfor(cred);
    console.log("login sucessfully");
  };

  return (
    <div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10 ">
        <form action="" onSubmit={handleCreateUser}>
          <input
            onChange={handleInputChange}
            type="email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            name="email"
            placeholder="Enter your email address"
          />
          <input
            onChange={handleInputChange}
            type="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-blue-500 rounded-lg "
          >
            Sign up
          </button>
        </form>
        <div className="flex items-center mt-10 gap-x-5">
          <span>{userInfo?.email}</span>
          <button
            type="submit"
            className="p-3 text-sm font-medium text-white bg-purple-500 rounded-lg "
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-white shadow-lg p-5 mb-10 ">
        <form action="" onSubmit={handleLogin}>
          <input
            onChange={handleInputChange}
            type="email"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            name="email"
            placeholder="Enter your email address"
          />
          <input
            onChange={handleInputChange}
            type="password"
            className="w-full p-3 mb-5 border border-gray-200 rounded outline-none focus:border-blue-500"
            placeholder="Enter your password"
            name="password"
          />
          <button
            type="submit"
            className="w-full p-3 text-sm font-medium text-white bg-pink-500 rounded-lg "
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default FirebaseAuth;
