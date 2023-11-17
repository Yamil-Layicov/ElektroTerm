import "./slider.scss";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from './imgs/a1.jpg'
import img2 from './imgs/a2.jpg'
import InstagramIcon from '@mui/icons-material/Instagram';


const Slider = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleNext = () => {
    setCurrentPage(currentPage === 2 ? 1 : currentPage + 1);
  };

  const handlePrevious = () => {
    setCurrentPage(currentPage === 1 ? 2 : currentPage - 1);
  };

  const navigate = useNavigate();

  const moveToReservPage = () => {
    navigate("/reservation");
  };

  return (
    <div className="slider">
      <div className="sliderContent">
        {currentPage === 1 && (
          <div className="firstBox">
            <img
              src={img1}
              alt=""
            />
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Join the Journey <br /> From Idea to Market 
              </motion.h1>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: .7, delay: 0.5 }}
                onClick={moveToReservPage}
              >
                <span>
                  daha ətraflı
                </span>
              </motion.button>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="secondBox">
            <img
              src={img2}
              alt=""
            />
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, delay: 0.1 }}
              >
                Taste <br /> Uique Food
              </motion.h1>
              <motion.h4
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                Cooking delicuos food since 2005
              </motion.h4>
              <motion.button
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2, delay: 0.8 }}
                onClick={moveToReservPage}
              >
                Rezerv edin
              </motion.button>
            </div>
          </div>
        )}
      </div>
      {/* <div className="rightBtn" onClick={handleNext}>
        <FaChevronRight />
      </div>
      <div className="leftBtn" onClick={handlePrevious}>
        <FaChevronLeft />
      </div> */}
    </div>
  );
};

export default Slider;