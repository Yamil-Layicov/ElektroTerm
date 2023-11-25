import "./footer.scss";
import fb from "../../assets/socials/facebook_icon.svg";
import insta from "../../assets/socials/instagram_icon.svg";
import {BiLogoTelegram} from 'react-icons/bi'
import { useEffect, useState } from "react";
import api from '../../admin/api/posts';
import {useNavigate} from 'react-router-dom';

const Footer = () => {

  const [navData, setNavData] = useState([])
  // const [inputData, setInputData] = useState('')
  // const [show, setShow] = useState(false)

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("settings");
        console.log(response.data);
        setNavData(response.data)
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };


  const navigate = useNavigate();
  const navigate1 = () => {
    navigate("/");
    moveToTop();
  };
  const navigate2 = () => {
    navigate("haqqımızda");
    moveToTop();
  };
  const navigate3 = () => {
    navigate("xəbərlər");
    moveToTop();
  };
  const navigate4 = () => {
    navigate("İcarə");
    moveToTop();
  };
  const navigate5 = () => {
    navigate("əlaqə");
    moveToTop();
  };


  return (
    <div className="footer">
      <div className="boxes">
        <div className="firstBox">
          <p>
          Lorem quas utamur delicata qui, vix ei prima mentitum omnesque. Duo corrumpit cotidieque ne.
          </p>
          <div className="socials">
            <a href={navData.facebook} rel="noreferrer" target="_blank"><img src={fb}  alt="" /></a> 
            <a href={navData?.instagram} rel="noreferrer" target="_blank" ><img src={insta}  alt="" /></a>
          </div>
        </div>
        <div className="secondBox">
          <h4 >Faydalı bağlantılar</h4>
          <p onClick={navigate1}>Ana səhifə</p> 
          <p onClick={navigate2}>Haqqımızda</p>
          <p onClick={navigate3}>Xəbərlər</p>
          <p onClick={navigate4}>İcarə</p>
          <p onClick={navigate5}>Əlaqə</p> 
        </div>
        <div className="thirdBox">
          <h4>Əlaqə məlumatı</h4>
          <p>Bakı şəhər, Nərimanov rayonu, <br /> Ələsgər Qayıbov 12 22</p>
          <p>{navData?.home_phone}</p>
          <p>{navData?.email}</p>
        </div>
        <div className="subcriber">
          <h4>Yeni xəbərlər üçün Abunə olun </h4>
          {/* {show && <span className="errorMesg">E-poçt  qeyd olunmalıdır</span>} */}
          <div className="inputMsg">
            <input  type="text" placeholder="E-Poçt daxil edin " />
            <div  className="sendBox"><BiLogoTelegram/></div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          © Copyright {navData?.rights}
        </span>
        <div className="right">
          {/* <span>Terms and conditions</span>
          <span>Privacy policy</span>
          <span>Pricing</span> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;