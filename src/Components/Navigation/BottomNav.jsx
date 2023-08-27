import React from 'react'
import "../../CssCollection/ComponentsCss/bottomNav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function BottomNav() {
  return (
    <div className='bottomnav-container'>
      <div className='bottomnav-social'>
        <div className='bottomnav-copyrights'>
          ©<a href='https://github.com/orgs/QuadrangleKMLA/dashboard' target='blank' id='links'>2023_1_Quadrangle  <FontAwesomeIcon icon="fa-solid fa-arrow-up-right-from-square" /></a>. All Rights Reserved.
        </div>
        <div className='bottomnav-developer-tools'>
          Developed Using <a href='https://www.mysql.com/' target='blank' id='links'><FontAwesomeIcon icon="fa-solid fa-database" /> MySQL</a>, <a href='https://spring.io/' target='blank' id='links'><FontAwesomeIcon icon="fa-brands fa-java" /> Java Spring Boot</a>, and <a href='https://react.dev/' target='blank' id='links'><FontAwesomeIcon icon="fa-brands fa-react" /> ReactJS</a>
        </div>
      </div>
      <span></span>
    </div>
  )
}
