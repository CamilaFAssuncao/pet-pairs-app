import React, { useState } from 'react';
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import catdog from "../gifs/catdog.gif";
import logo from "../images/logo.png";
import paw from "../images/paw.png";
import axios from "axios";

const StyleLogin = styled.div`
  font-family: 'Roboto mono', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .logoimg {
    width: 40%;
  }

  form {
    display: flex;
    flex-direction: row;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: #161616;
  }

.form-container {
  display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
}

  input {
    text-align: left;
    padding: 0.7rem;
    background-color: white;
    margin: 0.5rem 0;
    width: 200px;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 2px 10px #25938f;
  }

button {
  background-color: #25938f;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 15px;
    cursor: url(${paw}), auto;
    transition: all 0.3s;
    text-decoration: none;
    font-size: 1rem;
    width: 150px; 
    text-align: center;
}

button:hover {
  background-color: white; 
    color: #25938f; 
    border: 4px solid #25938f; 
}

.gif {
  width: 250px;
    height: 250px;
    border-radius: 100000px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

  @media only screen and (max-width: 599px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center; 
     
    }

    .image {
    display: flex;
    justify-content: center;
    align-items: center;
    }

  }
  
}`;

const initialState = {
  username: "",
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false); // Define isLoading
  const [error, setError] = useState(""); // Define error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set isLoading to true while processing
    try {
      // Your login logic here
      // Example: await login(form);
      setForm(initialState);
    } catch (err) {
      setError(err.message || "An error occurred"); // Set error message
    } finally {
      setIsLoading(false); // Set isLoading back to false
    }
  };

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <StyleLogin>
      <div className="login-container">

      <div className="logo">
        <img className='logoimg' src={logo} alt="Logo" />
      </div>

      <div className="form-container">
      <div className="image">
        <img className='gif' src={catdog} alt="Your GIF" />
      </div>

      <form className='form'>
        <h1>Find your puurfect furry friend</h1>
        <input
          type="username"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.username}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={form.email}
          required
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
        />
        <p>Forgot Password?</p>
        <button onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"} {/* Display loading message */}
        </button>
        {error ? <div className="error">{error}</div> : null}
        <p className="registerHere">
          Don't have an account yet? <Link to="/register">Register here</Link>
        </p>
      </form>
      </div>
      </div>
    </StyleLogin>
  );
};

export default Login;


