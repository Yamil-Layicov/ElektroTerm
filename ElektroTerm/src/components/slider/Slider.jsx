import "./slider.scss";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import img1 from "./imgs/a1.jpg";
import img2 from "./imgs/a2.jpg";


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
            <div className="img">
              <img src={img1} alt="" />
            </div>
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                SƏYAHƏTƏ QOŞULUN <br />
                İDEYADAN BAZARA
              </motion.h1>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                onClick={moveToReservPage}
              >
                <span>daha ətraflı</span>
              </motion.button>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="firstBox">
            <div className="img">
              <img src={img2} alt="" />
            </div>
            <div className="sliderText">
              <motion.h1
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                SƏYAHƏTƏ QOŞULUN <br />
                İDEYADAN BAZARA
              </motion.h1>
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                onClick={moveToReservPage}
              >
                <span>daha ətraflı</span>
              </motion.button>
            </div>
          </div>
        )}
      </div>
      <div className="moveBtns">
      <div className="leftBtn" onClick={handlePrevious}>
        <GoArrowLeft />
      </div>
      <div className="rightBtn" onClick={handleNext}>
        <GoArrowRight />
      </div>
      </div>
    </div>
  );
};

export default Slider;
