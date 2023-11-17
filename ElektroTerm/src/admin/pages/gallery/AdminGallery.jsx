import { useState, useEffect, lazy, Suspense } from "react";
import './adminGallery.scss'
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const EditModal = lazy(() => import("./galleryModal/EditModal"));

const AdminGallery = () => {
  const [badDataImgs, setBadDataImgs] = useState("");
  const [badDataText, setBadDataText] = useState("");

  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [editPage, setEditPage] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error('fayl seçin', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("https://api.nane.az/api/gallery", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("Şəkil əlavə olundu");
        window.location.reload()
      } else {
        alert("File upload failed.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  useEffect(() => {
    fetch("https://api.nane.az/api/gallery")
      .then((res) => res.json())
      .then((res) => {setBadDataImgs(res), console.log(res)});
  }, []);

  useEffect(() => {
    fetch("https://api.nane.az/api/gallery-text")
      .then((res) => res.json())
      .then((res) => {setBadDataText(res), console.log(res)});
  }, []);


  
  const handleAmburanEdit = (e) => {
    e.preventDefault();
    setEditPage(true);
  };

  const handleDelete = (id) => {
    fetch(`https://api.nane.az/api/gallery/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          setBadDataImgs(prevImg => prevImg.filter(image => image.id !== id))
        }
        window.location.reload()
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }

  return (
    <div className="adminGallery">
      <h1>Qalereya</h1>
      <div className="content">
        <div className="imgContent">
          {badDataImgs &&
            badDataImgs.map((img, index) => (
              <>
                <div className="imgBox" key={index}>
                  <img key={index} src={img.image} />
                  <span onClick={() =>handleDelete(img.id)} className="deleteImg">X</span>
                </div>
              </>
            ))}
        </div>

        <div className="textContent">
          {badDataText && 
             <>
               <div>{badDataText.content}</div>
               <div>{badDataText.title}</div>
             </>
          }
          <h1>Texts will be</h1>
          <button onClick={handleAmburanEdit} type="submit">
            Yazını dəyiş
          </button>
          {editPage && (
            <Suspense fallback={<div>Loading...</div>}>
              <EditModal/>
            </Suspense>
          )}
        </div>
      </div>

      <div className="amburanForms">
        <form onSubmit={handleSubmit}>
          <div className="chooseFile">
          <label className="custom-file-input-label">Şəkil seç</label>
          <input
            className="custom-file-input"
            type="file"
            accept=".jpg, .jpeg, .png"
            onChange={handleFileChange}
          />
          </div>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Selected Preview"
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
          )}
          <button type="submit">Əlavə et</button>
        </form>

        <div></div>
      </div>
    </div>
  );
};

export default AdminGallery;
