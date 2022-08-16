import React, { useState } from "react";
import "./Login.css";
import { User, userLocalStorageKey } from "../model/User";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  /**
   * TODO
   *
   * Login page UI:
   *
   * 1. Add inputs for username and password
   *    - keep username and password in component state (use useState() hook)
   * 2. Add button which will call logIn() function
   *    - button will be disabled if either username or password is empty
   * 3. Add whatever you like to make it look pretty :)
   *
   * Login page functionality:
   *
   * 1. Implement logIn() function that will:
   *    - create object of type User (see src/model/User.ts) for a person: John Doe, 12.12.1986, 86kg, 185cm, with 2 diagnoses: Arthritis and Diabetes
   *    - store user object in browser localStorage (use userLocalStorageKey constant from src/model/User.ts)
   *    - navigate to Home component (use useNavigate() hook). Route to Home component is "/".
   */

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const loginForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const patient1: User = {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "12. 12. 1986",
      weight: 86,
      height: 185,
      diagnoses: "Arthritis and Diabetes",
    };

    localStorage.setItem(userLocalStorageKey, JSON.stringify(patient1));

    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={loginForm}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(event) => {
            const vstup = event.target.value;
            setUsername(vstup);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(event) => {
            const vstup = event.target.value;
            setPassword(vstup);
          }}
        />
        <button type="submit" className="login-btn" disabled={username === "" || password === ""}>
          Sign In
        </button>
      </form>
      <div className="login-links">
        <a href="#">Forgot Username / Password?</a>
        <p>
          Don’t have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
