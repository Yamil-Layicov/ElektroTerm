import { MdDone } from "react-icons/md";
import "./about.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import api from "../../admin/api/posts";


const About = () => {

  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("about");
        setAboutData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  return (
    <div className="aboutComponent">
      <motion.div
         initial={{opacity:0, x:-150}}
         whileInView ={{opacity:1, x:0}}
         transition={{duration:1, delay:0.2}}
         viewport={{once:true,amaount:1}}
         className="left"
      >
        <div className="bigImg">
          <div className="boxes">
            <div></div>
            <div></div>
          </div>
          <div className="img">
            <img
              src={aboutData?.image_1}
              alt=""
            />
          </div>
        </div>
        <div className="smallImg">
          <div className="img">
          <img
            src={aboutData?.image_2}
            alt=""
          />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{opacity:0, x:150}}
        whileInView ={{opacity:1, x:0}}
        transition={{duration:1.3, delay:0.3}}
        viewport={{once:true,amaount:1}}
       className="right">
        <p className="h1">
          {aboutData?.title}
        </p>
        <p className="h4">
          {aboutData?.content}
        </p>
        <div className="bigBox">
          <div className="doneBoxes">
            <div className="doneBox">
              <span>
                <MdDone />
              </span>
              <span>Nsectetur cing elit.</span>
            </div>
            <div className="doneBox">
              <span>
                <MdDone />
              </span>
              <span>Nsectetur cing elit.</span>
            </div>
            <div className="doneBox">
              <span>
                <MdDone />
              </span>
              <span>Nsectetur cing elit.</span>
            </div>
            <div className="doneBox">
              <span>
                <MdDone />
              </span>
              <span>Nsectetur cing elit.</span>
            </div>
            <div className="doneBox">
              <span>
                <MdDone />
              </span>
              <span>Nsectetur cing elit.</span>
            </div>
          </div>
          {/* <div className="experineceBox">
          </div> */}
        </div>
        <button>daha ətraflı</button>
      </motion.div>
    </div>
  );
};

export default About;
