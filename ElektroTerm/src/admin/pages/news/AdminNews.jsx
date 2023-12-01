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
        toast.success("silindi")
      )
    }
  })


  const { isLoading, data } = useQuery({
    queryKey: ["news"],
    queryFn: () => api.get("blogs"),
  });

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
              <th>Başlıq *</th>
              <th>Məzmun *</th>
              <th>Parametrlər</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
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
                  <td>
                    <img
                      style={{ width: "100px", height: "100px" }}
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.content}</td>
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
