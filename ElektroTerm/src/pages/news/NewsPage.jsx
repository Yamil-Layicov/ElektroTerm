import Navbar from '../../components/navbar/Navbar';
import './newsPage.scss';
import {motion} from "framer-motion";

const NewsPage = () => {
  return (
    <>
      <Navbar color={"#1C1F2E"}/>
      <div className='newsPage'>
      <div className="imgBanner">
          <motion.h1
           initial={{opacity:0, x:-150}}
           animate={{opacity:1, x:0}}
           transition={{duration:1}}
          >Xəbərlər</motion.h1>
        </div>
      </div>
    </>
  )
}

export default NewsPage