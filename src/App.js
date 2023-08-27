import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import api from './api-config/axiosConfig.js';
import React, { useState, useEffect } from 'react';
import Home from './Pages/Home.jsx';
import Status from './Pages/Status.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { AuthProvider } from './Context/AuthProvider.js';
import { faArrowUpRightFromSquare, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fas, faArrowUpRightFromSquare, faJava, faReact, faDatabase);

function App() {
  const [daily, setDaily] = useState([]);
  const [weekly, setWeekly] = useState([]);
  const [biweekly, setBiweekly] = useState([]);
  const [final, setFinal] = useState([]);
  
  const getDaily = async () => {
    try {
      const response = await api.get("/management/daily");
      setDaily(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getWeekly = async () => {
    try {
      const response = await api.get("/management/weekly");
      setWeekly(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getBiweekly = async () => {
    try {
      const response = await api.get("/management/biweekly");
      setBiweekly(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getFinal = async () => {
    try {
      const response = await api.get("/management/final");
      setFinal(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  
  const evaluate = async () => {
    try {
      const response = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=Asia/Seoul")
    
      const payload = {
        "Daily To Weekly": false,
        "Weekly To Biweekly": false,
        "Biweekly To Final": false,
        "Final Reset?": false
      }
      
      const data = response.body
    
      if (data["time"] === "23:00") {
        payload["Daily To Weekly"] = true;
      }
    
      if (data["dayOfWeek"] === "Monday" && data["time"] === "00:00") {
        payload["Weekly To Biweekly"] = true;
      }
      
      if (data["dayOfWeek"] === "Monday" && data["time"] === "01:30") {
        payload["Biweekly To Final"] = true;
      }
    
      if (data["dayOfWeek"] === "Sunday" && data["time"] === "11:55") {
        payload["Final Reset?"] = true;
      }
      
      const res = await api.put("/management/evaluate", payload);
      console.log(res.status);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    let daily = getDaily();
    let weekly = getWeekly();
    let biweekly = getBiweekly();
    let final = getFinal();
    
    let result = evaluate();
    
    console.log(daily, weekly, biweekly, final, result)
  }, [])

  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/status' element={<Status dailyList={daily} weeklyList={weekly} biweeklyList={biweekly} finalList={final} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
