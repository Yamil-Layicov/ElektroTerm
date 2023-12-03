import "./socials.scss";
import { useEffect, useState } from "react";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
import {BiEditAlt} from 'react-icons/bi'
import {RiDeleteBin5Line} from 'react-icons/ri'


const Socials = () => {
  const navigate = useNavigate();

  const [bloqData, setBloqData] = useState([]);
  
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("social");
        setBloqData(response.data);
        console.log(response.data);

      } catch (error) {
        console.error(error);
      }
    };

    fetchSettings();
  }, []);


  const handleEdit = (id) =>{
    navigate(`${id}`)
  }

  const handleCreate = () => {
    navigate("yarat")
  }

  const handleDelete = async (id) => {
    try {
      const response = await api.delete(`social/${id}`);

      if(response) return setTimeout(() => {
        window.location.reload()
      }, 1000);

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="adminSocials">
      <h4>Socials</h4>
      <div className="tableContent">
        <div className="createNewBtn">
          <button onClick={handleCreate}>Yenisini yarat +</button>
        </div>
      <table>
        <tr>
          <th>Şəkil *</th>
          <th>Url *</th>
          <th>Parametrlər</th>
        </tr>
        {bloqData.map((item) => (
            <tr key={item.id}>
              <td><img style={{width:"100px", height:"100px"}} src={item.logo} alt="" /></td>
              <td>{item.url}</td>
              <td>
              <button onClick={() => handleEdit(item.id)}><BiEditAlt/></button>
                <button onClick={() => handleDelete(item.id)}><RiDeleteBin5Line/></button>
              </td>
            </tr>
          ))}
      </table>
      </div>
    </div>
  );
};

export default Socials;