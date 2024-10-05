// import React from 'react'
import AuthenTemplate from "../../components/authen-template";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import HomePage from "../home";
import api from "../../config/axios";
// import { gooleProvider } from "../../config/firebase";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      const json = JSON.stringify(values);
      const respone = await api.post("/Auth/login", {
        headers: {
          "Content-Type": "application/json",
        },
        params: json,
      });
      console.log(respone);
    } catch (err) {
      toast.error(err.respone);
    }
  };
  // const handleLogin = async (values) => {
  //   try {
  //     const respone = await api.post("/Auth/login", values);
  //     console.log(respone);
  //   } catch (err) {
  //     toast.error(err.respone);
  //   }
  // };

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
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        {/* //link react router dom */}
        <Link to="/register">Register new account</Link>

        <Button type="primary" htmlType="submit">
          Login
        </Button>
        {/* <button onClick={handleLoginGoole}>Login Goole</button> */}
      </Form>
    </AuthenTemplate>
  );
}

export default LoginPage;
