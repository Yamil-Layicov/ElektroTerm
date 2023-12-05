import "./adminRent.scss";
import api from "../../api/posts";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProgressBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const AdminRent = () => {
  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) => {
      return api.delete(`rent/${id}`);
    },
    onSuccess: () => {
      queryClient
        .invalidateQueries(["rent"])
        .then(toast.success("Uğurla silindi"));
    },
  });

  const { isLoading, data } = useQuery({
    queryKey: ["rent"],
    queryFn: () => api.get("rent"),
  });

  console.log(data?.data);

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
    <div className="adminRent">
      <h4>İcarə müraciətləri</h4>

      <div className="tableContent">
        <table>
          <thead>
            <tr>
              <th>Ad *</th>
              <th>Soyad *</th>
              <th style={{ width: "110px", padding: "12px" }}>E-poçt *</th>
              <th>Mobil nömrə *</th>
              <th>Qeyd *</th>
              <th style={{ width: "100px" }}>Parametrlər</th>
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
                <tr key={item?.id}>
                  <td>{item?.name}</td>
                  <td>{truncateText(item?.surname, 300)}</td>
                  <td>{item?.email}</td>
                  <td>{truncateText(item?.phone, 300)}</td>
                  <td>{item?.note}</td>
                  <td style={{ margin: "auto", padding: "0 40px" }}>
                    <button onClick={() => handleDelete(item?.id)}>
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

export default AdminRent;
