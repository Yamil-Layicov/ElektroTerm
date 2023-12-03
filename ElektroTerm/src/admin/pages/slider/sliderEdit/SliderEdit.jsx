import "./sliderEdit.scss";
import { useEffect, useState } from "react";
import api from "../../../api/posts";
import { useParams, useNavigate } from "react-router-dom";


const SliderEdit = () => {
  const [title, setTitle] = useState([]);

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`sliders/${id}`);

        setTitle(response.data.title);
        setImage(response.data.image);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);

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

      const response = await api.post(`sliders/${id}`, formData);

      if(response) return navigate(-1)

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="sliderEdit">
      <h4>Slider Redaktə et</h4>
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
              <input type="file" accept="image/*"  onChange={handleImage} />
            </div>
          </div>
          <button type="submit">Yadda saxla</button>
          <button type="submit" onClick={() => navigate("/admin/slider")}>Geri Qayıt</button>
        </form>
      </div>
    </div>
  );
};

export default SliderEdit;