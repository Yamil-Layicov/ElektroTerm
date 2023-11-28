import "./news.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";


// const images = [
//   {
//     id: 1,
//     title: img1,
//     h3: "Gülnar Kazımova",
//     h6: "Herboloq",
//   },
//   {
//     id: 2,
//     title: img2,
//     h3: "Aysun Babayeva",
//     h6: "N/Q-mütəxəssis",
//   },
//   {
//     id: 3,
//     title: img3,
//     h3: "İlahə Salmanova",
//     h6: "Virusoloq",
//   },
//   {
//     id: 4,
//     title: img4,
//     h3: "Jalə Hüseynova",
//     h6: "Laborant",
//   },
//   {
//     id: 5,
//     title: img5,
//     h3: "Sara Fərzəliyeva",
//     h6: "Fitohelmintor",
//   },
//   {
//     id: 6,
//     title: img6,
//     h3: "Telli Mahmudova",
//     h6: "Bakterioloq",
//   },
//   {
//     id: 7,
//     title: img7,
//     h3: "Təravət Tağızadə",
//     h6: "Entemoloq",
//   },
//   {
//     id: 8,
//     title: img8,
//     h3: "Üftadə Güner",
//     h6: "Laboratoriya müdiri",
//   },
//   {
//     id: 9,
//     title: img9,
//     h3: "Ulduz Səfərli",
//     h6: "Mikoloq",
//   },
// ];

const boxes = [
  {
    id: 1,
    img: "https://layerdrops.com/krowd/assets/images/news-item-1.jpg",
    date: "1 APRIL, 2020",
    title: "A day in the life of entrepreneur & co-founders",
  },
  {
    id: 2,
    img: "https://layerdrops.com/krowd/assets/images/news-item-1.jpg",
    date: "2 APRIL, 2020",
    title: "A day in the life of entrepreneur & co-founders",
  },
  {
    id: 3,
    img: "https://layerdrops.com/krowd/assets/images/news-item-1.jpg",
    date: "3 APRIL, 2020",
    title: "A day in the life of entrepreneur & co-founders",
  },
  {
    id: 4,
    img: "https://layerdrops.com/krowd/assets/images/news-item-1.jpg",
    date: "4 APRIL, 2020",
    title: "A day in the life of entrepreneur & co-founders",
  },
  {
    id: 5,
    img: "https://layerdrops.com/krowd/assets/images/news-item-1.jpg",
    date: "4 APRIL, 2020",
    title: "A day in the life of entrepreneur & co-founders",
  },
];

const News = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const navigate = useNavigate();

  const handleNews = () => {
    navigate(`xəbərlər`);
    window.scrollTo({
      top: 0,
    });
  };

  
  return (
    <motion.div
    initial={{ opacity: 0, y: 120 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.2 }}
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
              {boxes.map((box, index) => (
                <motion.div key={index} className={`item`}>
                  <img src={box.img} alt={`Item ${index}`} />
                  <div className="deatilSpecialist">
                    <p className="date">{box.date}</p>
                    <h6>{box.title}</h6>
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

// style={{display:"flex", flexWrap:"wrap"}}