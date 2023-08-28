import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../CssCollection/PagesCss/register.css"
import axiosConfig from '../api-config/axiosConfig.js';
const REGISTER_URL = '/auth/register';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const roles = ["ADMIN"];
  const [errorMessage, setErrorMessage] = useState('');

  const usernameRef = useRef();
  const errorMessageRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosConfig.post(
        REGISTER_URL,
        JSON.stringify(
          {
            username: username,
            role: roles,
            password: password
          }
        ),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      console.log(response.data)
      console.log(roles);
      setUsername('');
      setPassword('');
      navigate('/login');
    } catch (error) {
      if (!error?.response) {
        setErrorMessage('No Server Response');
      } else if (error.response?.status === 400) {
        setErrorMessage('Missing Credentials');
      } else {
        setErrorMessage('Register Failed');
      }
      errorMessageRef.current.focus();
    }
  }

  return (
    <div className='register-container'>
      <section>
        <p
          ref={errorMessageRef}
          className={errorMessage ? 'errmsg' : 'offscreen'}
          aria-live='assertive'
        >
          {errorMessage}
        </p>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='username'
            ref={usernameRef}
            autoComplete='off'
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            placeholder='Username'
          />
          <input
            type='password'
            className='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            placeholder='Password'
          />
          <button>Sign Up</button>
          <button type='button' onClick={() => navigate("/")} className='navigate-home'>Go Back Home</button>
        </form>
      </section>
    </div>
  )
}

export default Register
