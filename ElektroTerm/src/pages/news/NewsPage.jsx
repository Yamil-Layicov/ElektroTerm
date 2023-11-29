import "./newsPage.scss";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import api from "../../admin/api/posts";
import { useEffect, useState } from "react";


const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const navigate = useNavigate();

  const handleId = (id) => {
    console.log(id);
    navigate(`${id}`);
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("blogs");
        setNewsData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");

      if (lastSpaceIndex !== -1 && lastSpaceIndex < maxLength - 1) {
        return truncatedText.slice(0, lastSpaceIndex);
      } else {
        return truncatedText;
      }
    }
  };

  return (
    <>
      <div className="newsPage">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Xəbərlər
          </motion.h1>
        </div>
        <div className="newsBoxes">
          <div className="boxes">
            {newsData.map((box) => (
                <div key={box.id} className="box">
                  <div className="imgBox">
                    <img src={box.image} alt="" />
                  </div>
                  <div className="textBox">
                    <p className="date">1 APRIL, 2020</p>
                    <p className="title">{truncateText(box?.title, 110)}</p>
                    <button onClick={() => handleId(box.id)}>
                      <GoArrowRight />
                    </button>
                  </div>  
                </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
