import { useEffect, useState } from "react";
import "./newsDetail.scss";
import api from "../../../admin/api/posts";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../../components/navbar/Navbar";

const NewsDetail = () => {
  const [serviceData, setServiceData] = useState([]);
  const { id } = useParams();

  // useEffect(() => {
  //   const fetchSettings = async () => {
  //     try {
  //       const response = await api.get(`services/${id}`);
  //       setServiceData(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchSettings();
  // }, []);

  return (
    <>
      <Navbar color={"#1C1F2E"} />
      <div className="newsPageDetail">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Xəbər {id}
          </motion.h1>
        </div>
        <div className="newsDetailBox">
          <div className="newsDetailBoxInto">
            <div className="img">
              <img
                src="https://layerdrops.com/krowd/assets/images/blog-details-thumb.jpg"
                alt=""
              />
            </div>
            <p className="date">3 APRIL, 2020</p>
            <p className="title">
              A day in the life of entrepreneur & co-founders
            </p>
            <p className="content">
              Aelltes port lacus quis enim var sed efficitur turpis gilla sed
              sit amet finibus eros. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              ndustry standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries. Lorem
              Ipsum is simply dummy text of the new design printng and type
              setting Ipsum Take a look at our round up of the best shows coming
              soon to your telly box has been the is industrys. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has industr standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetail;
