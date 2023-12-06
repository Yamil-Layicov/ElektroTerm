import "./banners.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";

const Banners = () => {

  const [image1, setImage1] = useState(null);
  const [previousImage1, setPreviousImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [previousImage2, setPreviousImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [previousImage3, setPreviousImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [previousImage4, setPreviousImage4] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response1 = await api.get("banners/about");
        const response2 = await api.get("banners/news");
        const response3 = await api.get("banners/rent");
        const response4 = await api.get("banners/contact");
        console.log(response1.data);
        setImage1(response1.data.image);
        setImage2(response2.data.image);
        setImage3(response3.data.image);
        setImage4(response4.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

  const handleImage1 = (e) => {
    const file = e.target.files[0];
    setImage1(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage1(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage1(null);
    }
  };
  const handleImage2 = (e) => {
    const file = e.target.files[0];
    setImage2(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage2(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage2(null);
    }
  };
  const handleImage3= (e) => {
    const file = e.target.files[0];
    setImage3(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage3(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage3(null);
    }
  };
  const handleImage4 = (e) => {
    const file = e.target.files[0];
    setImage4(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage4(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage4(null);
    }
  };

  const handleUpload1 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image1);
      

      const response1 = await api.post("banners/about", formData);

      if (response1)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload2 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image2);
      

      const response2 = await api.post("banners/news", formData);

      if (response2)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload3 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image3);
      

      const response3 = await api.post("banners/rent", formData);

      if (response3)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };
  const handleUpload4 = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image4);
      

      const response4 = await api.post("banners/contact", formData);

      if (response4)
       toast.success("Redaktə olundu")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bannersSettings">
      <h4>Banners</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload1}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo1">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Haqqımızda</span>
              </div>
              <img src={previousImage1 || image1} alt="" />
              </label>
              <input
                id="logo1"
                name="logo1"
                type="file"
                accept="image/*"
                onChange={handleImage1}
              />
            </div>
            <button type="submit">Redaktə et</button>
          </div>
        </form>
        <form onSubmit={handleUpload2}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo2">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Xəbərlər</span>
              </div>
              <img src={previousImage2 || image2} alt="" />
              </label>
              <input
                id="logo2"
                name="logo2"
                type="file"
                accept="image/*"
                onChange={handleImage2}
              />
            </div>
            <button type="submit">Redaktə et</button>
          </div>
        </form>
        <form onSubmit={handleUpload3}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo3">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">İcarə</span>
              </div>
              <img src={previousImage3 || image3} alt="" />
              </label>
              <input
                id="logo3"
                name="logo3"
                type="file"
                accept="image/*"
                onChange={handleImage3}
              />
            </div>
            <button type="submit">Redaktə et</button>
          </div>
        </form>
        <form onSubmit={handleUpload4}>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo4">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Əlaqə</span>
              </div>
              <img src={previousImage4 || image4} alt="" />
              </label>
              <input
                id="logo4"
                name="logo4"
                type="file"
                accept="image/*"
                onChange={handleImage4}
              />
            </div>
            <button type="submit">Redaktə et</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banners;
