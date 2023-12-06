import { useEffect, useState } from "react";
import "./newsDetail.scss";
import api from "../../../admin/api/posts";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { convertDate } from "../../../helper/DateFns";
import TruncatedText from '../../../helper/TruncatedText';


const NewsDetail = () => {
  const [newsData, setNewsData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`blogs/${id}`);
        setNewsData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  return (
    <>
      <div className="newsPageDetail">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Xəbərlər
          </motion.h1>
        </div>
        <div className="newsDetailBox">
          <div className="newsDetailBoxInto">
            <div className="img">
              <img
                src={newsData.image}
                alt=""
              />
            </div>
            <p className="date">{convertDate(newsData?.created_at)}</p>
            <p className="title">
              {newsData?.title}
            </p>
            <p className="content">
              {
                newsData?.content && <TruncatedText text = {newsData?.content}/>
              }
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
