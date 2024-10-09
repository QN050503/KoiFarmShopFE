// import React from 'react'
import AuthenTemplate from "../../components/authen-template";
import { Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { gooleProvider } from "../../config/firebase";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  const api = "http://localhost:5158/api/Auth/login";

  const onFinish = async ({ email, password }) => {
    const reponse = await axios.post(
      api,
      {
        email,
        password,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
        },
      }
    );
    console.log(reponse.data);
  };
  useEffect(() => {}, []);

  return (
    <AuthenTemplate>
      <Form labelCol={{ span: 24 }} onFinish={onFinish}>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        {/* //link react router dom */}
        <Link to="/register">Register new account</Link>

        <button>Login</button>
        {/* <button onClick={handleLoginGoole}>Login Goole</button> */}
      </Form>
    </AuthenTemplate>
  );
}

export default LoginPage;
