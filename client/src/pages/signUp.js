import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    email: "",
    password: "",
    aboutMe: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpCreds({ ...signUpCreds, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("signup", signUpCreds);

    axios
      .post("/api/users", {
        username: signUpCreds.username,
        email: signUpCreds.email,
        password: signUpCreds.password,
        aboutMe: signUpCreds.aboutMe,
      })
      .then((response) => {
        if (!response.data.error) {
          history.replace("/login");
        } else {
          console.log("USERNAME TAKEN");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container text-center">
      <h4>Sign Up</h4>
      <form className="form-signin">
        <label htmlFor="inputUsername" className="sr-only">
          Username
        </label>
        <input
          type="username"
          id="inputUsername"
          className="form-control"
          name="username"
          placeholder="Username"
          value={signUpCreds.username}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="inputEmail" className="sr-only">
          Email Address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control"
          name="email"
          placeholder="Email address"
          value={signUpCreds.email}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control"
          name="password"
          placeholder="Password"
          value={signUpCreds.password}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="inputaboutMe" className="sr-only">
          Write Something About You!
        </label>
        <textarea
          className="form-text container"
          type="aboutMe"
          id="inputaboutMe"
          name="aboutMe"
          placeholder="aboutMe"
          value={signUpCreds.aboutMe}
          onChange={handleChange}
        ></textarea>

        <button
          className="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
