import Navbar from "../../components/navbar/Navbar";
import "./newsPage.scss";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";

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
];

const NewsPage = () => {

  const navigate = useNavigate();

  const handleId = (id) => {
    console.log(id);
    navigate(`${id}`);
    window.scrollTo({
      top: 0,
    });
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
            {boxes.map((box) => (
                <div key={box.id} className="box">
                  <div className="imgBox">
                    <img src={box.img} alt="" />
                  </div>
                  <div className="textBox">
                    <p className="date">{box.date}</p>
                    <p className="title">{box.title}</p>
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
