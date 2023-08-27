import React, { useState } from 'react';
import Daily from '../Components/Mapping/Daily.jsx';
import Weekly from '../Components/Mapping/Weekly.jsx';
import Biweekly from '../Components/Mapping/Biweekly.jsx';
import Final from '../Components/Mapping/Final.jsx';
import Navbar from '../Components/Navigation/Navbar.jsx';
import BottomNav from '../Components/Navigation/BottomNav.jsx';
import "../CssCollection/PagesCss/status.css";

const Status = ({ dailyList, weeklyList, biweeklyList, finalList }) => {
  const [visibleD, setVisibleD] = useState(true);
  const [visibleW, setVisibleW] = useState(false);
  const [visibleBW, setVisibleBW] = useState(false);
  const [visibleF, setVisibleF] = useState(false);
  return (
    <div className='topStatus-container'>
      <Navbar />
      <main className='status-container page-content'>
        <div className='status-side-tab'>
          <button className={visibleD ? 'side-tab-link-active' : 'side-tab-link'} onClick={() => { setVisibleD(true); setVisibleW(false); setVisibleBW(false); setVisibleF(false); }}>Daily</button>
          <button className={visibleW ? 'side-tab-link-active' : 'side-tab-link'} onClick={() => { setVisibleD(false); setVisibleW(true); setVisibleBW(false); setVisibleF(false); }}>Weekly</button>
          <button className={visibleBW ? 'side-tab-link-active' : 'side-tab-link'} onClick={() => { setVisibleD(false); setVisibleW(false); setVisibleBW(true); setVisibleF(false); }}>Biweekly</button>
          <button className={visibleF ? 'side-tab-link-active' : 'side-tab-link'} onClick={() => { setVisibleD(false); setVisibleW(false); setVisibleBW(false); setVisibleF(true); }}>Final</button>
        </div>
        <div className='status-main-tab'>
          {visibleD ?
            (
              <div
                id='Daily'
                className='status-side-tab-content'
              >
                <Daily dailyList={dailyList} />
              </div>
            )
            :
            ""
          }
          {visibleW ?
            (
              <div
                id='Weekly'
                className='status-side-tab-content'
              >
                <Weekly weeklyList={weeklyList} />
              </div>
            )
            :
            ""
          }
          {visibleBW ?
            (
              <div
                id='Biweekly'
                className='status-side-tab-content'
              >
                <Biweekly biweeklyList={biweeklyList} />
              </div>
            )
            :
            ""
          }
          {visibleF ?
            (
              <div
                id='Final'
                className='status-side-tab-content'
              >
                <Final finalList={finalList} />
              </div>
            )
            :
            ""
          }
        </div>
      </main>
      <BottomNav />
    </div>
  )
}

export default Status