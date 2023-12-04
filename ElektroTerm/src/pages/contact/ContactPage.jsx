import "./contactPage.scss";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from '../../admin/api/posts.jsx';


const ContactPage = () => {

  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("settings");
        setAboutData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  return (
    <>
      <div className="contactPage">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Əlaqə
          </motion.h1>
        </div>
        <div className="whyChooseUs">
          <div className="boxes">
            <motion.div
            initial={{opacity:0, x:-150}}
            whileInView ={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
            viewport={{once:true,amaount:1}}
             className="box">
              <div className="labIcon">
                <span>
                  <FaMapLocationDot />
                </span>
              </div>
              <div className="address">
                {/* <h1>About Krowd</h1> */}
                <p>Bakı şəhər, Nərimanov rayonu, <br /> Ələsgər Qayıbov 12 22</p>
              </div>
            </motion.div>
            <motion.div
             initial={{opacity:0, x:150}}
             whileInView ={{opacity:1, x:0}}
             transition={{duration:1.3, delay:0.3}}
             viewport={{once:true,amaount:1}}
             className="box">
              <div className="labIcon">
                <span>
                  <FaMailBulk />
                </span>
              </div>
              <div className="address">
                {/* <h1>Address</h1> */}
                <p>{aboutData?.email}</p>
                <p>{aboutData?.phone_1}</p>
                <p>{aboutData?.phone_2}</p>
              </div>
            </motion.div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12149.849936129462!2d49.8786396!3d40.420757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403089a3b0fde691%3A0x38ac3991190cca0!2sAgro%20Bitki%20Klinikas%C4%B1%20-%20Fitolab!5e0!3m2!1str!2saz!4v1698134293423!5m2!1str!2saz"></iframe>
      </div>
    </>
  );
};

export default ContactPage;
