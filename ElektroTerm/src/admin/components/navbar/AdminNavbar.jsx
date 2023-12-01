import './adminNavbar.scss'
import {useAuth} from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import {motion } from 'framer-motion'
import { useState } from 'react';


const AdminNavbar = () => {
  const navigate = useNavigate();
  const {setUser} = useAuth()

  const[showLog, setShowLog] = useState(false)

  const handleLogout = () => {
    setUser(false)
    navigate('/')
  }

  const user = useAuth()

  function toggleFullscreen(elem) {
    console.log("Asd");
    elem = elem || document.documentElement;
    if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }


  return (
    <div className="adminNavbar">
    <div className="logo">
      <img src="/logo.svg" alt="" />
      <span>ElektroTerm</span>
    </div>
    <div className="icons">
      <img onClick={() => toggleFullscreen(this)} src="/expand.svg" className="expandIcon icon"></img>
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src='/noavatar.png' alt="" />
        <span>{user.user.name}</span>
      </div>
      <div onClick={() => setShowLog(!showLog)} className='logOutAdmin'>
        <img src="/setting.svg" className="icon"/>
             {showLog && <motion.div
              initial={{opacity:0, y:-10}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.3}}
              exit={{y:-10, opacity:0}}
              onClick={handleLogout} className='logOutBtn'>Çıxış</motion.div>}
      </div>
    </div>
  </div>
  )
}

export default AdminNavbar