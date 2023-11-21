import Navbar from '../../components/Navbar/Navbar';
import './aboutPage.scss';
import {motion} from "framer-motion";


const AboutPage = () => {
  return (
    <>
    <Navbar color={"#1C1F2E"}/>
    <div className='abouttPage'>
        <div className="imgBanner">
          <motion.h1
           initial={{opacity:0, x:-150}}
           animate={{opacity:1, x:0}}
           transition={{duration:1}}
          >Haqqımızda</motion.h1>
        </div>
      </div>
    </>
  )
}

export default AboutPage