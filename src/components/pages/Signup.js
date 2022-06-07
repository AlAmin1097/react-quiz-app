import React from "react";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";
import signupImage from "../../assets/images/signup.svg";

function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signupImage} />
        <SignupForm />
      </div>
    </>
  );
}

export default Signup;

