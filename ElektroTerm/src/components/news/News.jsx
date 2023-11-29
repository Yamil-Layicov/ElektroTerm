import "./news.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import api from "../../admin/api/posts";
import { convertDate } from "../../helper/DateFns";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("blogs");
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  const handleNews = () => {
    navigate(`xəbərlər`);
    window.scrollTo({
      top: 0,
    });
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");

      if (lastSpaceIndex !== -1 && lastSpaceIndex < maxLength - 1) {
        return truncatedText.slice(0, lastSpaceIndex) + "...";
      } else {
        return truncatedText + "...";
      }
    }
  };
  
  return (
    <motion.div
    initial={{ opacity: 0, y: 120 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true, amaount: 1 }}
     className="news">
      <div className="newsHeader">
        <span></span>
        <h1>Xəbərlər</h1>
      </div>
      <div className="gallerySlider">
        <div className="motionCarousel">
          <motion.div
            ref={carousel}
            whileTap={{ cursor: "grabbing" }}
            className="carousel"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="inner-carousel"
            >
              {newsData && newsData.map((box, index) => (
                <motion.div key={index} className={`item`}>
                  <img src={box.image} alt={`Item ${index}`} />
                  <div className="deatilSpecialist">
                    <p className="date">{convertDate(box?.created_at)}</p>
                    <h6>{truncateText(box.title, 110)}</h6>
                    <button onClick={() => handleNews()}>
                      <GoArrowRight />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default News;
