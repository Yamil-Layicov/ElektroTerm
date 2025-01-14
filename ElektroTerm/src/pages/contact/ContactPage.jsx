import "./contactPage.scss";
import { motion } from "framer-motion";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaMailBulk } from "react-icons/fa";
import { useEffect, useState } from "react";
import api from '../../admin/api/posts.jsx';
import { useQuery } from "@tanstack/react-query";
import { ThreeCircles } from "react-loader-spinner";


const ContactPage = () => {

  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("settings");
        setAboutData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const { isLoading, data } = useQuery({
    queryKey: ["banner"],
    queryFn: () => api.get("banners/contact"),
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
      </div> : <div className="contactPage">
        <div className="imgBanner"  style={{
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
            Əlaqə
          </motion.h1>
        </div>
        <div className="whyChooseUs">
          <div className="boxes">
            <motion.div
            initial={{opacity:0, x:-150}}
            whileInView ={{opacity:1, x:0}}
            transition={{duration:1, delay:0.2}}
            viewport={{once:true,amaount:1}}
             className="box">
              <div className="labIcon">
                <span>
                  <FaMapLocationDot />
                </span>
              </div>
              <div className="address">
                {/* <h1>About Krowd</h1> */}
                <p>Bakı şəhər, Nərimanov rayonu, <br /> Ələsgər Qayıbov 12/22</p>
              </div>
            </motion.div>
            <motion.div
             initial={{opacity:0, x:150}}
             whileInView ={{opacity:1, x:0}}
             transition={{duration:1.3, delay:0.3}}
             viewport={{once:true,amaount:1}}
             className="box">
              <div className="labIcon">
                <span>
                  <FaMailBulk />
                </span>
              </div>
              <div className="address">
                {/* <h1>Address</h1> */}
                <p>{aboutData?.email}</p>
                <p>{aboutData?.phone_1}</p>
                <p>{aboutData?.phone_2}</p>
              </div>
            </motion.div>
          </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.4117649482155!2d49.8782499!3d40.4218803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308937452dca6f%3A0xbbbb8a603a36b897!2sElektroterm%20MMC!5e0!3m2!1sen!2saz!4v1736832118592!5m2!1sen!2saz"></iframe>
      </div>
      }
    </>
  );
};

export default ContactPage;
