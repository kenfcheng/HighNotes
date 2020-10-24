import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const history = useHistory();

  const [signUpCreds, setSignUpCreds] = useState({
    username: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    aboutMe: "",
    faveSong: "",
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
        city: signUpCreds.city,
        state: signUpCreds.state,
        country: signUpCreds.country,
        aboutMe: signUpCreds.aboutMe,
        faveSong: signUpCreds.faveSong,
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

    axios
      .post("/api/userprofile", {
        username: signUpCreds.username,
        email: signUpCreds.email,

        city: signUpCreds.city,
        state: signUpCreds.state,
        country: signUpCreds.country,
        aboutMe: signUpCreds.aboutMe,
        faveSong: signUpCreds.faveSong,
      })
      .then((res) => {
        console.log("UserProfile", res);
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
        <div className="container center row-1">
          <label htmlFor="inputCity" className="sr-only container row-1 col-1">
            City
          </label>
          <input
            className="form-control"
            name="city"
            placeholder="City"
            type="city"
            value={signUpCreds.city}
            onChange={handleChange}
          />
          <label htmlFor="inputState" className="sr-only container row-1 col-2">
            State
          </label>
          <input
            className="form-control"
            name="state"
            placeholder="State"
            type="state"
            value={signUpCreds.state}
            onChange={handleChange}
          />
          <label
            htmlFor="inputCountry"
            className="sr-only container row-1 col-2"
          >
            Country
          </label>
          <input
            className="form-control"
            name="country"
            placeholder="Country"
            type="country"
            value={signUpCreds.country}
            onChange={handleChange}
          />
        </div>
        <br></br>
        <label htmFor="inputaboutMe" className="sr-only">
          Write About Yourself!
        </label>
        <textarea
          className="form-text container"
          type="aboutMe"
          id="aboutMe"
          name="aboutMe"
          placeholder="About Me"
          value={signUpCreds.aboutMe}
          onChange={handleChange}
        ></textarea>
        <br></br>
        <label htmFor="inputfaveSong" className="sr-only">
          Write About Yourself!
        </label>
        <textarea
          className="form-text container"
          type="faveSong"
          id="faveSong"
          name="faveSong"
          placeholder="Favorite Song(s)"
          value={signUpCreds.faveSong}
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
