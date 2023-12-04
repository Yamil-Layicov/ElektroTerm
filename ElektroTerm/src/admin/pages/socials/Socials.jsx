// import "./socials.scss";
// import { useEffect, useState } from "react";
// import api from "../../api/posts";
// import { useNavigate } from "react-router-dom";
// import {BiEditAlt} from 'react-icons/bi'
// import {RiDeleteBin5Line} from 'react-icons/ri'


// const Socials = () => {
//   const navigate = useNavigate();

//   const [bloqData, setBloqData] = useState([]);
  
//   useEffect(() => {
//     const fetchSettings = async () => {
//       try {
//         const response = await api.get("social");
//         setBloqData(response.data);
//         console.log(response.data);

//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchSettings();
//   }, []);


//   const handleEdit = (id) =>{
//     navigate(`${id}`)
//   }

//   const handleCreate = () => {
//     navigate("yarat")
//   }

//   const handleDelete = async (id) => {
//     try {
//       const response = await api.delete(`social/${id}`);

//       if(response) return setTimeout(() => {
//         window.location.reload()
//       }, 1000);

//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="adminSocials">
//       <h4>Socials</h4>
//       <div className="tableContent">
//         <div className="createNewBtn">
//           <button onClick={handleCreate}>Yenisini yarat +</button>
//         </div>
//       <table>
//         <tr>
//           <th>Şəkil *</th>
//           <th>Url *</th>
//           <th>Parametrlər</th>
//         </tr>
//         {bloqData.map((item) => (
//             <tr key={item.id}>
//               <td><img style={{width:"100px", height:"100px"}} src={item.logo} alt="" /></td>
//               <td>{item.url}</td>
//               <td>
//               <button onClick={() => handleEdit(item.id)}><BiEditAlt/></button>
//                 <button onClick={() => handleDelete(item.id)}><RiDeleteBin5Line/></button>
//               </td>
//             </tr>
//           ))}
//       </table>
//       </div>
//     </div>
//   );
// };

// export default Socials;



import "./socials.scss";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";


const Socials = () => {

  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`${id}`);
  };

  const handleCreate = () => {
    navigate("yarat");
  };

  const handleDelete = (id) => {
    mutation.mutate(id)
  };


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn:(id) => {
      return api.delete(`social/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["social"])
      .then(
        toast.success("Uğurla silindi")
      )
    }
  })


  const { isLoading, data } = useQuery({
    queryKey: ["social"],
    queryFn: () => api.get("social"),
  });

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncatedText = text.slice(0, maxLength);
      const lastSpaceIndex = truncatedText.lastIndexOf(" ");

      if (lastSpaceIndex !== -1 && lastSpaceIndex < maxLength - 1) {
        return truncatedText.slice(0, lastSpaceIndex) + "...";
      } else {
        return truncatedText + "...";
      }
    }
  };


  return (
    <div className="adminSocials">
      <h4>Sosial Şəbəkələr</h4>

      <div className="tableContent">
        <div className="createNewBtn">
          <button onClick={handleCreate}>Yenisini yarat +</button>
        </div>
        <table>
          <thead>
            <tr>
              <th >Şəkil *</th>
              <th >Url *</th>
              <th style={{width:"100px"}}>Parametrlər</th>
            </tr>
          </thead>
          <tbody>
            { isLoading ? (
              <div className="progressBar">
                <ProgressBar
                  height="80"
                  width="80"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="white"
                  barColor="#51E5FF"
                />
              </div>
            ) : (
              data.data?.map((item) => (
                <tr key={item.id}>
                  <td style={{width:"110px", padding:"12px"}}>
                    <img
                      style={{ width: "80px", height: "80px", objectFit:"cover" }}
                      src={item?.logo}
                      alt=""
                    />
                  </td>
                  <td>{truncateText(item?.url, 300)}</td>
                  <td>
                    <button onClick={() => handleEdit(item.id)}>
                      <BiEditAlt />
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      <RiDeleteBin5Line />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Socials;
