import React, { useState, useEffect } from 'react'
import Navbar from '../Components/Navigation/Navbar.jsx';
import BottomNav from '../Components/Navigation/BottomNav.jsx';
import "../CssCollection/PagesCss/home.css";
import Scanner from "../Components/DataRecording/Scanner.jsx";

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    if (username === '' || username === null) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  })

  return (
    <div className='topHomePage-container'>
      <Navbar />
      <main className='homePage-container page-content'>
        <h1 className='homePage-title'>민족사관고등학교 환경부 분리수거 상점 추천제도</h1>
        <div className={loggedIn ? "homePage-content" : "homePage-no-user"}>
        {
          loggedIn ? 
          (
            <>
              <Scanner/>
            </>
          ) : (
            <p className={"explanation"}>
              <b>분리 수거 상점 추천 기준:</b><br/><br/>
              - 일주일 간 총 2회 이상 분리 수거 배출<br/>
              - 위와 같은 기준을 2주 연속 충족시켜서 분리 수거<br/><br/>
              이렇게 분리 수거를 할 경우, 그 해당 방에 있는 <mark>총원 모두에게 상점 1점</mark> 추천
            </p>
          )
        }
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

export default Home;
