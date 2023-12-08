import "./newsPage.scss";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import api from "../../admin/api/posts";
import { useEffect, useState } from "react";
import { convertDate } from "../../helper/DateFns";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";

const NewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [search] = useSearchParams();

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
        setLoading(true);
        const response = await api.get("blogs");

        if (response) {
          setNewsData(
            search.get("category")
              ? response.data.filter(
                  (item) =>
                    Number(item.category_id) === Number(search.get("category"))
                )
              : response.data
          );
          setLoading(false);
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, [search.get("category")]);

  const { isLoading, data } = useQuery({
    queryFn: () => api.get("banners/news"),
  });

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
    <>
      {isLoading ? (
        <Loader color={"#092635"}/>
      ) : (
        <div className="newsPage">
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
              Xəbərlər
            </motion.h1>
          </div>

          <div className="newsBoxes">
            {loading ? (
              <Loader color={"white"}/>
            ) : newsData.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  margin: "auto",
                }}
              >
                <img
                  style={{ width: "200px", height: "200px", margin: "auto" }}
                  src="/notResult.jpg"
                  alt=""
                />
                <h1>Məlumat tapılmadı</h1>
                <Link onClick={() => navigate(-1)}>
                  <button className="button">
                  Geri Qayit
                  </button>
                </Link>
              </div>
            ) : (
              <div className="boxes">
                {newsData.map((box) => (
                  <div key={box.id} className="box">
                    <div className="imgBox">
                      <img src={box.image} alt="" />
                    </div>
                    <div className="textBox">
                      <p className="date">{convertDate(box?.created_at)}</p>
                      <p className="title">{truncateText(box?.title, 110)}</p>
                      <button onClick={() => handleId(box.id)}>
                        <GoArrowRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default NewsPage;
