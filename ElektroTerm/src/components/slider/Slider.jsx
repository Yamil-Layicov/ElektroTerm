import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import "./slider.scss";
import api from "../../admin/api/posts";
import TruncatedText from "../../helper/TruncatedText.jsx";

const Slider = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("sliders");
        setAboutData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      prevPage === aboutData.length - 1 ? 0 : prevPage + 1
    );
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? aboutData.length - 1 : prevPage - 1
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
              src={aboutData[currentPage]?.image}
              alt={`Slide ${currentPage + 1}`}
            />
          </div>
          <div className="sliderText">
            <motion.h1
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {aboutData[currentPage]?.title && (
                <TruncatedText text={aboutData[currentPage]?.title || ""} />
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
  );
};

export default Slider;
