import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "./login.scss";
import { useState } from "react";
import api from "../../admin/api/posts";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginUser = async () => {
    try {
      const response = await api.post("login",formData);
         setUser(response.data);
         navigate("/admin");
     } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {email, password} = formData

    if (!email || !password) {
      alert("bos qoyma");
    }
    else if (
      formData.email !== "marketing@gmail.com" ||
      formData.password !== "marketing2023$!"
    ){
      alert("email veya parol sehvdir")
    }
    if (
      formData.email === "marketing@gmail.com" &&
      formData.password === "marketing2023$!"
    ) {
      loginUser();
    }
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleSubmit}>
        <h3>Admin Panel</h3>
        <label>E-poçt</label>
        <input
          type="text"
          name="email"
          placeholder="e-poçt"
          id="username"
          onChange={handleChange}
        />
        <label>Parol</label>
        <input
          type="password"
          name="password"
          placeholder="parol"
          id="password"
          onChange={handleChange}
        />
        <button type="submit">Daxil ol</button>
      </form>
    </div>
  );
};

export default Login;
