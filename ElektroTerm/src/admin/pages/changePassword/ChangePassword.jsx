import { useState } from "react";
import "./changesPassword.scss";
import { toast } from "react-toastify";
import api from "../../api/posts";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = JSON.parse(localStorage.getItem("userElektro"));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("change_password",{ oldPassword, newPassword, confirmPassword },
        {
          headers: {
            Authorization: `Bearer ${userData?.token}`,
          },
        }
      );
      if (response) return toast.success("Məlumatlar yeniləndi");
    } catch (error) {
      console.error(error);
      toast.error("Xəta baş verdi");
    }
  };

  return (
    <div className="adminProfile">
      <h4>Şifrə dəyişdirmə</h4>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <label>Cari şifrə *</label>
          <input
            type="text"
            value={oldPassword || ""}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label>Yeni şifrə *</label>
          <input
            type="text"
            value={newPassword || ""}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="inputs">
          <label>Şifrə təkrar *</label>
          <input
            type="text"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Yenilə</button>
      </form>
    </div>
  );
};

export default ChangePassword;
