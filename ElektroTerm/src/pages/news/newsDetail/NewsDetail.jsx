import { useEffect, useState } from "react";
import "./newsDetail.scss";
import api from "../../../admin/api/posts";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { convertDate } from "../../../helper/DateFns";
import TruncatedText from '../../../helper/TruncatedText';
import { useQuery } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";



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

  const { isLoading, data } = useQuery({
    queryFn: () => api.get("banners/news"),
  });


  return (
    <>
      {
        isLoading ? <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#092635",
          position: "fixed",
          zIndex: "999",
        }}
      >
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div> : <div className="newsPageDetail">
        <div className="imgBanner" style={{
              backgroundImage: `url(${data?.data?.image})`,
              width: "100%",
              height: "360px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>
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
      }
    </>
  );
};

export default NewsDetail;
