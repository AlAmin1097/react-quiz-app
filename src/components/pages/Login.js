import React from "react";
import Illustration from "../Illustration";
import LoginForm from "../LoginForm";
import loginImage from "../../assets/images/login.svg";

function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration image={loginImage}/>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
