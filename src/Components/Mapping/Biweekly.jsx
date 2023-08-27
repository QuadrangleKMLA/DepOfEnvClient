import React from 'react'

export default function Biweekly({ biweeklyList }) {
  return (
    <div className='biweekly-container'>
      {
        biweeklyList.map((item) => {
          return (
            <div key={item.id} className='biweekly-item'>
              Room Number : {(item.roomNumber).toString().substring(12)}
              {
                Object.entries(item.dates).map((key) => {
                  return (
                    <>
                      <p key={key[0]} className='biweekly-info'>{key[0]} - {key[1]}</p>
                      <br />
                    </>
                  )
                })
              }
              <br />
              <br />
            </div>
          )
        })
      }
    </div>
  )
}
