import "./aboutPage.scss";
import { motion } from "framer-motion";
import "./aboutPage.scss";
import { useEffect, useState } from "react";
import api from "../../admin/api/posts";
import TruncatedText2 from "../../helper/TruncatedText2";
import { useQuery } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";

const AboutPage = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("about");
        setAboutData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["banner"],
    queryFn: () => api.get("banners/about"),
  });


  return (
    <>
      {isLoading ? (
        <div
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
        </div>
      ) : (
        <div className="aboutPage">
          <div
            className="imgBanner"
            style={{
              backgroundImage: `url(${data?.data?.image})`,
              width: "100%",
              height: "360px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <motion.h1
              initial={{ opacity: 0, x: -150 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Haqqımızda
            </motion.h1>
          </div>
          <div className="aboutContent">
            <motion.div
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, amaount: 1 }}
              className="imgContainer"
            >
              <div className="imgOne">
                <img src={aboutData.image_1} alt="" />
              </div>
              <div>
                <div className="imgTwo">
                  <img src={aboutData.image_2} alt="" />
                </div>
                <div className="imgThree">
                  <img src={aboutData.image_3} alt="" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 150 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.3, delay: 0.3 }}
              viewport={{ once: true, amaount: 1 }}
              className="textContainer"
            >
              <h1>{aboutData.title}</h1>
              <div className="second">
                {aboutData?.content?.split("\r\n").map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
              <div className="doneBoxes">
                <div className="doneBox">
                  {aboutData?.category && (
                    <TruncatedText2 text={aboutData?.category} />
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
