import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../Context/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../../ImageSrc/logo.png"
import '../../CssCollection/ComponentsCss/navBar.css';
import api from "../../api-config/axiosConfig.js";

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/'
  },
  {
    id: 2,
    title: 'Status List',
    url: '/status'
  }
];

export default function Navbar() {
  const { setAuth } = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setLoggedIn(false);
      sessionStorage.clear();
      setAuth({});
      const response = await api.post("/auth/logout");
      if (response?.status === 200) {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  })

  return (
    <div className='top-navigation-bar-container'>
      <nav className='navigation-links'>
        <img src={logo} alt='' className='navigation-logo-img' onClick={() => navigate("/")} />
        <NavLink to={'/'} className='navigation-logo'>DEP. OF ENV.</NavLink>
        {links.map((item) => (
          <NavLink key={item.id} to={item.url} className='navigation-link'>{item.title}</NavLink>
        ))}
        {
          loggedIn ?
            (
              <button onClick={handleLogout} className='navigation-button'>
                Log Out
              </button>
            )
            :
            (
              <>
                <button onClick={() => navigate("/login")} className='navigation-button'>
                  Log In
                </button>
                <button onClick={() => navigate("/register")} className='navigation-button'>
                  Register
                </button>
              </>
            )
        }
      </nav>
    </div>
  )
}
