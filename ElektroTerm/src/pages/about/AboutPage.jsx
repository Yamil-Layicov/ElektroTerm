import "./aboutPage.scss";
import { motion } from "framer-motion";
import "./aboutPage.scss";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import { useEffect, useState } from "react";
import api from "../../admin/api/posts";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("about");
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
      <div className="aboutPage">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Haqqımızda
          </motion.h1>
        </div>
        <div className="aboutContent">
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true, amaount: 1 }}
            className="imgContainer"
          >
            <div className="imgOne">
              <img src={aboutData.image_1} alt="" />
            </div>
            <div>
              <div className="imgTwo">
                <img src={aboutData.image_2} alt="" />
              </div>
              <div className="imgThree">
                <img src={aboutData.image_3} alt="" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.3, delay: 0.3 }}
            viewport={{ once: true, amaount: 1 }}
            className="textContainer"
          >
            <h1>{aboutData.title}</h1>
            <p className="first">Nə üçün biz?</p>
            <div className="second">
              {aboutData?.content?.split("\r\n").map((item, index) => (
                  <p key={index}>{item}</p>
              ))}
            </div>
            <div className="doneBox">
              <span className="spanIcon">
                <DoneOutlinedIcon />
              </span>
              <span>Yüksək Keyfiyyətli Xidmətlər</span>
            </div>
            <div className="doneBox">
              <span className="spanIcon">
                <DoneOutlinedIcon />
              </span>
              <span>Sürətli İş Prosesi</span>
            </div>
            <div className="doneBox">
              <span className="spanIcon">
                <DoneOutlinedIcon />
              </span>
              <span>24/7 əlçatanlıq</span>
            </div>
            <div className="doneBox">
              <span className="spanIcon">
                <DoneOutlinedIcon />
              </span>
              <span>Mütəxəssislərdən ibarət komanda</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
