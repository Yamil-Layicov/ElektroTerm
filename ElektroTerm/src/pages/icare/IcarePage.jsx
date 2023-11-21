import Navbar from '../../components/navbar/Navbar';
import './icarePage.scss';
import {motion} from "framer-motion";

const IcarePage = () => {
  return (
    <>
      <Navbar color={"#1C1F2E"}/>
      <div className='icarePage'>
        <div className="imgBanner">
          <motion.h1
           initial={{opacity:0, x:-150}}
           animate={{opacity:1, x:0}}
           transition={{duration:1}}
          >İcarə</motion.h1>
        </div>
        
      </div>
    </>
  )
}

export default IcarePage