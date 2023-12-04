import "./sliderEdit.scss";
import { useEffect, useState } from "react";
import api from "../../../api/posts";
import { useParams, useNavigate } from "react-router-dom";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";


const NewsEdit = () => {
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

      if(response){
        toast.success("Redaktə olundu")
        navigate(-1)
      }

    } catch (error) {
      toast.error("Xəta bas verdi")
      console.log(error);
    }
  };


  return (
    <div className="sliderEdit">
      <h4>Redaktə et</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div className="div">
            <label>Məzmun  *</label>
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
          <button type="submit" onClick={() => navigate("/admin/slider")}>Geri Qayıt</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsEdit;