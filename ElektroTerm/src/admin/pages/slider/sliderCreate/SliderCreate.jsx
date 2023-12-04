import { useState } from "react";
import api from "../../../api/posts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './sliderCreate.scss';
import { FiUploadCloud } from "react-icons/fi";

const NewsCreate = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const navigate = useNavigate();

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviousImage(e.target.result);
      };

      reader.readAsDataURL(file);
    } else {
      setPreviousImage(null);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("title", title);

      formData.append("image", image);

      const response = await api.post(`sliders`, formData);
      toast.success("Yeni slider yaradıldı")

      if (response) return navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sliderCreate">
      <h4>Yeni Slider</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div className="div">
            <label>Başlıq *</label>
            <textarea
              cols="30"
              rows="2"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            ></textarea>
          </div>
          <div className="imageFile div">
            <div className="logoBox">
              <label htmlFor="logo">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Şəkil</span>
              </div>
              <img src={previousImage || image} alt="" />
              </label>
              <input
                id="logo"
                name="logo"
                type="file"
                accept="image/*"
                onChange={handleImage}
              />
            </div>
          </div>
         <div className="buttons">
         <button type="submit">Yadda saxla</button>
          <button type="submit" onClick={() => navigate(-1)}>
            Geri Qayıt
          </button>
         </div>
        </form>
      </div>
    </div>
  );
};

export default NewsCreate;