import { MdDone } from "react-icons/md";
import "./about.scss";

const About = () => {
  return (
    <div className="aboutComponent">
      <div className="left">
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
      </div>
      <div className="right">
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
      </div>
    </div>
  );
};

export default About;
