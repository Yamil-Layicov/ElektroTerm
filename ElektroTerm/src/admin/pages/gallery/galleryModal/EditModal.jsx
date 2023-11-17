import { useEffect, useState } from "react";
import "./editModal.scss";

const EditModal = () => {

  const [galleryData, setGalleryData] = useState({ title: "" , content: "" });

   useEffect(() => {
    fetch("https://api.nane.az/api/gallery-text")
      .then((res) => res.json())
      .then(({ title, content }) => {
        setGalleryData({ title, content });
      });
  }, []);

  const handleTextChange = (field, value) => {
    setGalleryData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleUpload = (e) => {
    e.preventDefault();

    fetch("https://api.nane.az/api/gallery-text", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(galleryData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("PUT response:", res);
      });
  };

  return (
    <div className="amburanEditModal">
      <form
        onSubmit={handleUpload}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {["content", "title"].map((field) => (
            <textarea
              key={field}
              name={field}
              value={galleryData[field] || ""}
              onChange={(e) => handleTextChange(field, e.target.value)}
              cols="45"
              rows="17"
              type="text"
            />
          ))}
        <button style={{ padding: "8px", cursor: "pointer" }} type="submit">
          Yadda saxla
        </button>
      </form>
    </div>
  );
};

export default EditModal;
