import { useEffect, useState } from "react";
import "./editAnout.scss";

const EditAbout = ({ setEditPage }) => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);

  useEffect(() => {
    fetch("https://api.nane.az/api/about")
      .then((res) => res.json())
      .then((res) => {setContent(res.content), setTitle(res.title)});
  }, []);

  const handleImageChange = (e) => {
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


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", content);
    formData.append("title", title);
    formData.append("image", image);

    fetch("https://api.nane.az/api/about", {
      method: "POST",
      body: formData,
    }); 

    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  return (
    <div className="mainEditModal">
      <div className="editModal">
        <form onSubmit={handleUpload}>
        <h3>Content</h3>
          <textarea
            value={content || ""}
            onChange={handleContentChange}
            cols="60"
            rows="15"
            type="text"
          />
          <h3>Tittle</h3>
          <textarea
            value={title || ""}
            onChange={handleTitleChange}
            cols="60"
            rows="15"
            type="text"
          />
          <div className="imgagesFiles">
            <div>
              <h3>Image</h3>
              {previousImage && (
                <img src={previousImage} alt="Previous Image 2" />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </div>
          <button style={{ padding: "8px", cursor: "pointer" }} type="submit">
            Yadda saxla
          </button>
        </form>
        <span onClick={() => setEditPage(false)} className="closeModal">
          X
        </span>
      </div>
    </div>
  );
};

export default EditAbout;
