import "./adminNews.scss";
import api from "../../api/posts";
import { useNavigate } from "react-router-dom";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";


const AdminNews = () => {

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
      return api.delete(`blogs/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["news"])
      .then(
        toast.success("Uğurla silindi")
      )
    }
  })


  const { isLoading, data } = useQuery({
    queryKey: ["news"],
    queryFn: () => api.get("blogs"),
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
    <div className="adminBloq">
      <h4>Xəbərlər</h4>

      <div className="tableContent">
        <div className="createNewBtn">
          <button onClick={handleCreate}>Yenisini yarat +</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Şəkil *</th>
              <th style={{width:"110px", padding:"12px"}}>Başlıq *</th>
              <th>Məzmun *</th>
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
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td style={{width:"150px", padding:"12px"}}>{item.title}</td>
                  <td>{truncateText(item.content, 300)}</td>
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

export default AdminNews;
