import "./socialEdit.scss";
import { useEffect, useState } from "react";
import api from "../../../api/posts";
import { useParams, useNavigate } from "react-router-dom";


const SocialEdit = () => {
  const [title, setTitle] = useState([]);

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`social/${id}`);

        setTitle(response.data.url);
        setImage(response.data.logo);
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
      formData.append("url", title);

      formData.append("logo", image);

      const response = await api.post(`social/${id}`, formData);

      if(response) return navigate(-1)

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="socialEdit">
      <h4>Sosial Redaktə et</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div>
            <label>Url *</label>
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
          <button type="submit" onClick={() => navigate("/admin/sosials")}>Geri Qayıt</button>
        </form>
      </div>
    </div>
  );
};

export default SocialEdit;