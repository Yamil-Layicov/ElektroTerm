import { MdDone } from "react-icons/md";
import "./about.scss";
import { motion } from "framer-motion";


const About = () => {

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
              src="https://layerdrops.com/krowd/assets/images/about-thumb-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="smallImg">
          <img
            src="https://layerdrops.com/krowd/assets/images/about-thumb-2.jpg"
            alt=""
          />
        </div>
      </motion.div>
      <motion.div
        initial={{opacity:0, x:150}}
        whileInView ={{opacity:1, x:0}}
        transition={{duration:1.3, delay:0.3}}
        viewport={{once:true,amaount:1}}
       className="right">
        <p className="h1">
          We Help at Every Step From Concept <br /> to Market
        </p>
        <p className="h4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised.
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
