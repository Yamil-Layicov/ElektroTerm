import './adminNavbar.scss'
import {useAuth} from '../../../context/AuthContext'
import { useNavigate } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion'
import { useState } from 'react';


const AdminNavbar = () => {
  const navigate = useNavigate();
  const {setUser} = useAuth()

  const[showLog, setShowLog] = useState(false)

  const handleLogout = () => {
    setUser(false)
    navigate('/')
  }

  return (
    <div className="adminNavbar">
    <div className="logo">
      <img src="/logo.svg" alt="" />
      <span>admin</span>
    </div>
    <div className="icons">
      <img src="/search.svg" className="icon"></img>
      <img src="/app.svg" className="icon"></img>
      <img src="/expand.svg" className="icon"></img>
      <div className="notification">
        <img src="/notifications.svg" alt="" />
        <span>1</span>
      </div>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <span>Jafar</span>
      </div>
      <div onClick={() => setShowLog(!showLog)} className='logOutAdmin'>
        <img src="/setting.svg" className="icon"/>
        <AnimatePresence>
             {showLog && <motion.div
              initial={{opacity:0, y:-10}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.3}}
              exit={{y:-10, opacity:0}}
              onClick={handleLogout} className='logOutBtn'>Çıxış</motion.div>}
        </AnimatePresence>
      </div>
    </div>
  </div>
  )
}

export default AdminNavbar