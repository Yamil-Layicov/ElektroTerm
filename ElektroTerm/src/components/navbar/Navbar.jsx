import "./navbar.scss";
import { useEffect, useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { NavLink, useNavigate } from "react-router-dom";
import fb from "../../assets/socials/facebook_icon.svg";
import insta from "../../assets/socials/instagram_icon.svg";
import api from "../../admin/api/posts";
import navImg from "./navImg.png";


const Navbar = ({color}) => {
  const [navbar, setNavbar] = useState(false);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [navData, setNavData] = useState([]);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const openNavbar = () => {
    if (isOpenNavbar) {
      setIsOpenNavbar(false);
      document.body.style.overflow = "hidden";
    } else {
      setIsOpenNavbar(true);
      document.body.style.overflow = "auto";
    }
  };

  const navigate = useNavigate();

  const navigate1 = () => {
    navigate("/");
    setIsOpenNavbar(false);
  };
  const navigate2 = () => {
    navigate("/haqqımızda");
    setIsOpenNavbar(false);
  };
  const navigate3 = () => {
    navigate("/xəbərlər");
    setIsOpenNavbar(false);
  };
  const navigate4 = () => {
    navigate("/İcarə");
    setIsOpenNavbar(false);
  };
  const navigate5 = () => {
    navigate("/əlaqə");
    setIsOpenNavbar(false);
  };

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("settings");
        console.log(response.data);
        setNavData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <>
      <nav className={`${navbar && "navActive"}`} style={{backgroundColor:navbar ? " " : color}}>
        <div className="left">
          <div className="leftLogo">
            <div className="logo">
              <img
                src="https://t4.ftcdn.net/jpg/04/06/62/77/360_F_406627778_aL7egoVcnIuO1dsCGVDjgvdDGa9zJU1k.jpg"
                alt=""
                style={{borderRadius:"20%", width:"70px", height:"70px"}}
              />
            </div>
          </div>
          <div className="centerLinks">
            <div className="links">
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#10D0A1" : "" })}
                onClick={() => moveToTop()}
                to="/"
                className="link"
              >
                Ana səhifə
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#10D0A1" : "" })}
                onClick={() => moveToTop()}
                to="/haqqımızda"
                className="link"
              >
                Haqqımızda
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#10D0A1" : "" })}
                onClick={() => moveToTop()}
                to="/xəbərlər"
                className="link"
              >
                XƏBƏRLƏR 
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#10D0A1" : "" })}
                onClick={() => moveToTop()}
                to="/İcarə"
                className="link"
              >
                İCARƏ
              </NavLink>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "#10D0A1" : "" })}
                onClick={() => moveToTop()}
                to="/əlaqə"
                className="link"
              >
                Əlaqə
              </NavLink>
            </div>
          </div>
        </div>
        {/* <div className="instaIcon">
          <span><InstagramIcon /></span>
        </div> */}
        <div className="mainRight">
          <div className="right">
            <div className="helpdesk">
              <div className="msgImg">
                <img src={navImg} alt="" />
              </div>
              <div className="textCall">
                <div>Zəng Üçün</div>
                <div>{navData?.home_phone}</div>
              </div>
            </div>
          </div>
          <div onClick={openNavbar} className="menuBtn">
            <MenuOutlinedIcon fontSize="large" />
          </div>
        </div>

        <div className={`${isOpenNavbar ? "activeMobileNav" : "mobileNav"}`}>
          <div className="mobileLeft">
            <div className="logo" style={{ height: "40px" }}>
              <img
                style={{ borderRadius:"20%", width:"50px", height:"50px" }}
                src="https://t4.ftcdn.net/jpg/04/06/62/77/360_F_406627778_aL7egoVcnIuO1dsCGVDjgvdDGa9zJU1k.jpg"
                alt=""
              />
              <div onClick={() => setIsOpenNavbar(false)} className="iconMenu">
                <CloseOutlinedIcon />
              </div>
            </div>
            <div className="links">
              <span style={{ cursor: "pointer" }} onClick={navigate1}>
                Ana səhifə
              </span>
              <span style={{ cursor: "pointer" }} onClick={navigate2}>
              Haqqımızda
              </span>
              <span style={{ cursor: "pointer" }} onClick={navigate3}>
              XƏBƏRLƏR
              </span>
              <span style={{ cursor: "pointer" }} onClick={navigate4}>
              İCARƏ
              </span>
              <span style={{ cursor: "pointer" }} onClick={navigate5}>
                Əlaqə
              </span>
            </div>
            <div className="navContact">
              <h5>Bizimlə əlaqə saxlayın</h5>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>
                  Bakı şəhər, Nərimanov rayonu, <br /> Ələsgər Qayıbov 12 22
                </span>
              </p>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>{navData?.home_phone}</span>
              </p>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>{navData?.home_phone}</span>
              </p>
              <p>
                <span>
                  <StarOutlinedIcon
                    style={{ fill: "#FFCC00" }}
                    fontSize="small"
                  />
                </span>
                <span>{navData?.email}</span>
              </p>
              <div className="socials">
                <span>
                  <a href={navData?.facebook} rel="noreferrer" target="_blank">
                    <img
                      style={{ display: "inline-block", width: "30px" }}
                      src={fb}
                      alt=""
                    />
                  </a>
                </span>
                <span>
                  <a href={navData?.instagram} rel="noreferrer" target="_blank">
                    <img
                      style={{ display: "inline-block", width: "30px" }}
                      src={insta}
                      alt=""
                    />
                  </a>
                </span>
                <span></span>
              </div>
            </div>
          </div>
        </div>

        {isOpenNavbar && <div className="backBlack"></div>}
      </nav>
    </>
  );
};

export default Navbar;
