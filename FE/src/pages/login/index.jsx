// import React from 'react'
import AuthenTemplate from "../../components/authen-template";
import { Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../config/axios";
import { toast } from "react-toastify";
// import { gooleProvider } from "../../config/firebase";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  const handleLogin = async (values) => {
    try {
      const respone = await api.post("login", values);
      console.log(respone);
    } catch (err) {
      toast.error(err.respone.data);
    }
  };

  // const handleLoginGoole = () => {
  //   const auth = getAuth();
  //   signInWithPopup(auth, gooleProvider)
  //     .then((result) => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;

  //       console.log(user);
  //       // IdP data available using getAdditionalUserInfo(result)
  //       // ...
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       // Handle Errors here.
  //       // const errorCode = error.code;
  //       // const errorMessage = error.message;

  //       // The email of the user's account used.
  //       // const email = error.customData.email;
  //       // The AuthCredential type that was used.
  //       // const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
  //  };
  return (
    <AuthenTemplate>
      <Form labelCol={{ span: 24 }} onFinish={handleLogin}>
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        {/* //link react router dom */}
        <Link to="/register">Register new account</Link>

        <button type="primary" htmlType="submit">
          Login
        </button>
        {/* <button onClick={handleLoginGoole}>Login Goole</button> */}
      </Form>
    </AuthenTemplate>
  );
}

export default LoginPage;
