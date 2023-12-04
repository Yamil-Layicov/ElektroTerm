import "./settings.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { FiUploadCloud } from "react-icons/fi";
import { toast } from "react-toastify";

const Settings = () => {
  const [content1, setContent1] = useState([]);
  const [content2, setContent2] = useState([]);
  const [content3, setContent3] = useState([]);
  const [content6, setContent6] = useState([]);
  const [content7, setContent7] = useState([]);

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("settings");
        console.log(response.data);

        setContent1(response.data.address);
        setContent2(response.data.email);
        setContent3(response.data.phone_1);
        setContent6(response.data.rights);
        setContent7(response.data.phone_2);

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
      formData.append("address", content1);
      formData.append("email", content2);
      formData.append("phone_2", content3);
      formData.append("rights", content6);
      formData.append("phone_1", content7);
      formData.append("image", image);

      const response = await api.post("settings", formData);

      if (response)
       toast.success("ugurlu")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="adminSettings">
      <h4>Tənzimləmələr</h4>
      <div className="intoSettings">
        <form onSubmit={handleUpload}>
          <div className="inputs">
            <label>Ünvan *</label>
            <input
              type="text"
              value={content1 || ""}
              onChange={(e) => setContent1(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Elektron ünvan *</label>
            <input
              type="text"
              value={content2 || ""}
              onChange={(e) => setContent2(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Telefon(1) *</label>
            <input
              type="text"
              value={content3 || ""}
              onChange={(e) => setContent3(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Telefon(2) *</label>
            <input
              type="text"
              value={content7 || ""}
              onChange={(e) => setContent7(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label>Hüquqlar *</label>
            <input
              type="text"
              value={content6 || ""}
              onChange={(e) => setContent6(e.target.value)}
            />
          </div>
          <div className="imageFile">
            <div className="logoBox">
              <label htmlFor="logo">
              <div className="logo"> 
                <span><FiUploadCloud /> </span>
                <span className="text">Logo</span>
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
          <button type="submit">Yadda saxla</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
