import React from 'react'

export default function Final({ finalList }) {
  return (
    <div className='final-container'>
      {
        Object.entries(finalList).map((item) => (
          <div key={item[0]} className='final-item'>{(item[1].roomNumber).toString().substring(12) + ":" + " " + (item[1].qualified ? "상점이 추천됩니다!!!" : "상점이 추천되지 않습니다...")}
            <div>------------------------------------------------------------------------------------------------------------------------------------</div>
            <br />
          </div>
        ))
      }
    </div>
  )
}
