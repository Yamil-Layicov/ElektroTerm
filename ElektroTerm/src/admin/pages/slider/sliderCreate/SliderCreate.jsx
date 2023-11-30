import { useState } from "react";
import api from "../../../api/posts";
import { useNavigate } from "react-router-dom";

const SliderCreate = () => {
  const [title, setTitle] = useState([]);

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

      if (response) return navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bloqEdit">
      <h4>Yeni slider yarat</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div>
            <label>Başlıq *</label>
            <input
              type="text"
              value={title || ""}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="imageFile">
            <div className="inputBox">
              <label>şəkil</label>
              <img src={previousImage || image} alt="" />
              <input type="file" accept="image/*" onChange={handleImage} />
            </div>
          </div>
          <button type="submit">Yadda saxla</button>
          <button type="submit" onClick={() => navigate(-1)}>
            Geri Qayıt
          </button>
        </form>
      </div>
    </div>
  );
};

export default SliderCreate;