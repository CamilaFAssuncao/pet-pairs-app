import React, { useState } from 'react';
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import catcomputer from "../gifs/catcomputer.gif";
import paw from "../images/paw.png";
import Navbar from '../components/NavBar';
import axios from "axios";

const StyledRegister = styled.div`
  font-family: 'Roboto mono', monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  form {
    display: flex;
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

  .gif {
    width: 70%;
    border-radius: 5px;
  }

  input {
    text-align: left;
    padding: 0.7rem;
    background-color: white;
    margin: 0.5rem 0;
    width: 300px; /* Adjust the width as needed */
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
    margin-top: 1rem;
  }

  button:hover {
    background-color: white;
    color: #25938f;
    border: 4px solid #25938f;
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

`;

const initialState = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
  password: "",
};

const Register = () => {
  const [form, setForm] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post('https://petadopt-431a50d84aab.herokuapp.com/api/users/register/', form);

      if (response.status === 200 || response.status === 201) {
        setError('');
        navigate('/petprofilepage'); // Redirect to the desired page after successful registration
      }
    } catch (error) {
      setError(error.response ? error.response.data : 'An error occurred during registration.');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <StyledRegister>
      <Navbar />
      <div className="register-container">

      <div className="form-container">

      <div className="image">
        <img className='gif' src={catcomputer} alt="Your GIF" />
      </div>


      <form onSubmit={handleSubmit}>
      <h1>Register</h1>
        <input
          type="text"
          id="first_name"
          placeholder="First Name"
          onChange={handleChange}
          value={form.first_name}
          required
        />
        <input
          type="text"
          id="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          value={form.last_name}
          required
        />
        <input
          type="text"
          id="username"
          placeholder="Username"
          onChange={handleChange}
          value={form.location}
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
        <button type="submit">Register
        </button>
        {error ? <div className="error">{error}</div> : null}
        <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      </form>
      </div>
      </div>
    </StyledRegister>
  );
};

export default Register;


