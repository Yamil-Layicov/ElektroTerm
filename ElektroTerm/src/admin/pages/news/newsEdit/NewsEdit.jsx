import "./newsEdit.scss";
import { useEffect, useState } from "react";
import api from "../../../api/posts";
import { useParams, useNavigate } from "react-router-dom";


const NewsEdit = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get(`blogs/${id}`);

        setContent(response.data.content);
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
      formData.append("content", content);
      formData.append("title", title);

      formData.append("image", image);

      const response = await api.post(`blogs/${id}`, formData);

      if(response) return navigate(-1)

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="bloqEdit">
      <h4>Xeber Redaktə et</h4>
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
          <div>
            <label>Məzmun *</label>
            <textarea
              cols="30"
              rows="7"
              value={content || ""}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="imageFile">
            <div className="inputBox">
              <label>şəkil</label>
              <img src={previousImage || image} alt="" />
              <input type="file" accept="image/*"  onChange={handleImage} />
            </div>
          </div>
          <button type="submit">Yadda saxla</button>
          <button type="submit" onClick={() => navigate("/admin/xəbərlər")}>Geri Qayıt</button>
        </form>
      </div>
    </div>
  );
};

export default NewsEdit;