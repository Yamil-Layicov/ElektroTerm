import { useState } from "react";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./slider.scss";
import TruncatedText from "../../helper/TruncatedText.jsx";

const Slider = ({data}) => {

  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === data?.length - 1 ? 0 : prevPage + 1
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? data?.length - 1 : prevPage - 1
    );
  };

  const moveToReservPage = () => {
    navigate("/haqqımızda");
  };

  const renderSliderContent = () => {
    const slideButtonDelay = 0.5;

    return (
      <div className="sliderContent">
        <div className="firstBox">
          <div className="img">
            <img
              src={data[currentPage]?.image}
              alt={`Slide ${currentPage + 1}`}
            />
          </div>
          <div className="sliderText">
            <motion.h1
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {data[currentPage]?.title && (
                <TruncatedText text={data[currentPage]?.title || ""} />
              )}
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: slideButtonDelay }}
              onClick={moveToReservPage}
            >
              <span>daha ətraflı</span>
            </motion.button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
        <div className="slider">
          {renderSliderContent()}
          <div className="moveBtns">
            <div className="leftBtn" onClick={handlePrevious}>
              <GoArrowLeft />
            </div>
            <div className="rightBtn" onClick={handleNext}>
              <GoArrowRight />
            </div>
          </div>
        </div>
    </>
  );
};

export default Slider;
