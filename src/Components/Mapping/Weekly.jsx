import React from 'react'

export default function Weekly({ weeklyList }) {
  return (
    <div className='weekly-container'>
      {
        weeklyList.map((item) => {
          return (
            <div key={item.roomNumber} className='weekly-item'>
              Room Number : {(item.roomNumber).toString().substring(12)}<br />
              {Object.entries(item.dates).map((listed) => {
                return (
                  <p key={listed[0]} className='weekly-info'>- {listed[1]}<br /></p>
                )
              })}
              <br />
              <br />
            </div>
          )
        })
      }
    </div>
  )
}
