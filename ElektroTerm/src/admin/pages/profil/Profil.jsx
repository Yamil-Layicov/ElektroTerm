import { useEffect, useState } from "react";
import './profil.scss';
import api from '../../api/posts';
import { toast } from "react-toastify";

const Profil = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const userData = JSON.parse(localStorage.getItem('userElektro'));

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("user-settings", {
          headers: {
            Authorization: `Bearer ${userData?.token}`
          }
        });
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSettings();
  }, [userData?.token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("user-settings", { name, email }, {
        headers: {
          Authorization: `Bearer ${userData?.token}`
        },
      });
     if(response) return toast.success("Məlumatlar yeniləndi");
    } catch (error) {
      console.error(error);
      toast.error("Error updating settings");
    }
  };

  return (
    <div className="adminProfile">
      <h4>Giriş məlumatları</h4>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label>İstifadəçi adı *</label>
          <input
            type="text"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label>Elektron ünvan *</label>
          <input
            type="text"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Yenilə</button>
      </form>
    </div>
  );
};

export default Profil;
