import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from '../Context/AuthProvider.js';
import "../CssCollection/PagesCss/login.css";

import axiosConfig from '../api-config/axiosConfig.js';
import { useNavigate } from 'react-router-dom';
const LOGIN_URL = '/auth/login';

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const usernameRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd]);

  useEffect(() => {
    if (!(sessionStorage.getItem('username') === '') && !(sessionStorage.getItem('username') === null)) {
      navigate("/");
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosConfig.post(
        LOGIN_URL,
        JSON.stringify(
          {
            username: username,
            password: pwd
          }
        ),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      const cookie = response?.headers?.get("set-cookie")
      const roles = response?.data?.roles;
      setAuth({ "username": username, "password": pwd, "roles": roles, "cookie": cookie });
      setUsername('');
      setPwd('');
      sessionStorage.setItem("username", username);
      navigate("/")
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <div className='login-container'>
      {!(sessionStorage.getItem('username') === '' || sessionStorage.getItem('username') === null) ? (<h1>Already Logged In</h1>) :
        <section>
          <p
            ref={errRef}
            className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="username"
              ref={usernameRef}
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
              placeholder='Username'
            />
            <input
              type="password"
              className="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              placeholder='Password'
            />
            <button>Sign In</button>
            <button type='button' onClick={() => navigate("/")} className='navigate-home'>Go Back Home</button>
          </form>
        </section>
      }
    </div>
  );
};

export default Login;
