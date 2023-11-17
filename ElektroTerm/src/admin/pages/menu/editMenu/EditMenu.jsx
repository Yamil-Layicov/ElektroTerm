import { useEffect, useState } from "react";
import "./editMenu.scss";

// POST https://api.nane.az/api/menu (Menu yaradır) - (title,price,image,description,category)

const EditMenu = ({ setEditPage }) => {
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const [image, setImage] = useState(null);
  const [previousImage, setPreviousImage] = useState(null);


  useEffect(() => {
    fetch("https://api.nane.az/api/menu/drinks")
      .then((res) => res.json())
      .then((res) => {
          setTitle(res.title),
          setPrice(res.price),
          setDescription(res.description),
          setCategory(res.category),
          console.log(res);
      });
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

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleUpload = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);

    fetch("https://api.nane.az/api/menu", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="mainEditModal">
      <div className="editModal">
        <form onSubmit={handleUpload}>
          <input value={title || ""} onChange={handleTitleChange} type="text" />
          <input value={price || ""} onChange={handlePriceChange} type="number" />
          <input
            value={description || ""}
            onChange={handleDescriptionChange}
            type="text"
          />
          <select  onChange={handleCategoryChange}>
            <option value="">nov secin</option>
            <option value="Yeməklər">yeməklər</option>
            <option value="İçkilər">içkilər</option>
          </select>

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

export default EditMenu;
