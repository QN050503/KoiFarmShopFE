// import React from 'react'
import AuthenTemplate from "../../components/authen-template";
import { Form, Input } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { gooleProvider } from "../../config/firebase";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  // const [setKois] = useState([]);
  // const api = "https://localhost:44349/api/Auth/login";
  // const fetchKoi = async () => {
  //   const reponse = await axios.get(api);

  //   console.log(reponse.data);
  //   setKois(reponse.data);
  // };
  // useEffect(() => {
  //   //chạy 1 hành động nào đó
  //   //event
  //   //[] => chạy in the first loaded
  //   //[num] => chạy với number thay đổi
  //   fetchKoi();
  // }, []);
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
      <Form labelCol={{ span: 24 }}>
        <Form.Item label="Username" name="username">
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
