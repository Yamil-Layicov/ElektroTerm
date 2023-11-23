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
        <div className="formBox">
          <h4>
            <span></span> Əlaqə Saxlayın
          </h4>
          <h1>Mesaj göndərin</h1>
          <motion.form
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amaount: 1 }}
          >
            <div className="inputs">
              <input type="text" placeholder="ad" />
              <input type="text" placeholder="soyad" />
              <input type="text" placeholder="nomre" />
              <input type="text" placeholder="email" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="qeyd"
            ></textarea>
            <div>
              <button>mesaj göndərin</button>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  )
}

export default IcarePage