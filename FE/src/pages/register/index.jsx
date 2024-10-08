/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import AuthenTemplate from "../../components/authen-template";
import { Form, Input, message } from "antd";

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (values) => {
    // Send POST request to your API
    axios
      .post("https://localhost:44349/api/Auth/register", {
        username: values.username,
        password: values.password,
        fullname: values.fullname,
        phone: values.phone,
        email: values.email,
      })
      .then((response) => {
        message.success("Registration successful!");
        navigate("/login"); // Redirect to login page after success
      })
      .catch((error) => {
        message.error("Registration failed. Please try again.");
        console.error(error);
      });
  };

  return (
    <AuthenTemplate>
      <Form labelCol={{ span: 24 }} onFinish={handleRegister}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password",
            },
            {
              min: 6,
              message: "Password must be at least 6 characters long",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Fullname"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your fullname",
            },
            {
              pattern: /^[a-zA-Z\s]+$/,
              message: "Fullname can only contain letters and spaces",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number",
            },
            {
              pattern: /^\d{10,11}$/,
              message: "Phone number must be 10-11 digits",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email",
            },
            {
              type: "email",
              message: "Please enter a valid email address",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Link to="/login">Already have account? Let's Login</Link>

        <Form.Item>
          <button>Regist</button>
        </Form.Item>
      </Form>
    </AuthenTemplate>
  );
}

export default RegisterPage;
