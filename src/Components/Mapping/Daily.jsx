import React from 'react';

export default function Daily({ dailyList }) {
  return (
    <div className='daily-container'>
      {
        dailyList.map((item) => {
          return (
            <div key={item.id} className='daily-item'>
              Room Number : {(item.roomNumber).toString().substring(12)}<br />
              Recycle : {String(item.recycling)}<br />
              Waste : {String(item.waste)}<br />
              Box : {String(item.box)}
              <br />
              <br />
            </div>
          )
        })
      }
    </div>
  )
}
