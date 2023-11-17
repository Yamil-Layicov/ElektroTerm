import { useEffect, useState } from "react";
import "./editModal1.scss";

const EditModal1 = ({ setEditPage1 }) => {
  const [footerData, setFooterData] = useState({ address: "", opening_hours: "", reservation: "" });

  useEffect(() => {
    fetch("https://api.nane.az/api/footer")
      .then((res) => res.json())
      .then(({ address, opening_hours, reservation }) => {
        setFooterData({ address, opening_hours, reservation });
        console.log(res);
      });
  }, []);

  const handleTextChange = (field, value) => {
    setFooterData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleUpload = (e) => {
    e.preventDefault();

    fetch("https://api.nane.az/api/footer", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(footerData),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("PUT response:", res);
      });
  };

  return (
    <div className="mainEditModal1">
      <div className="editModal">
        <form
          onSubmit={handleUpload}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          {["address", "opening_hours", "reservation"].map((field) => (
            <textarea
              key={field}
              name={field}
              value={footerData[field] || ""}
              onChange={(e) => handleTextChange(field, e.target.value)}
              cols="45"
              rows="17"
              type="text"
            />
          ))}
          <button type="submit">Yadda saxla</button>
        </form>
      </div>
      <div className="after" onClick={() => setEditPage1(false)}></div>
    </div>
  );
};

export default EditModal1;
