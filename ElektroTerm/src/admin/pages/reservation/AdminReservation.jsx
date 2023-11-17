import "./adminReservation.scss";
import { toast } from "react-toastify";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const AdminReservation = () => {
 
  const queryClient = useQueryClient();

  const handleEdit = (id) => {
    mutation.mutate(id)
  }


  const { isLoading, data } = useQuery({
    queryKey: ['reservationData'],
    queryFn: () =>
      fetch('https://api.hill.az/api/reservation').then(
        (res) => res.json(),
      ),
  })

  
  const mutation  = useMutation({
    mutationFn:(id) => {
      return fetch(`https://api.hill.az/api/reservation/${id}`, {
        method:"put"
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["reservationData"])
    }
  })

  return (
    <div className="adminReservation">
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Soyad</th>
            <th>E-poçt</th>
            <th>tel: nömrəsi</th>
            <th>İnsan sayı</th>
            <th>Tarix</th>
            <th>Saat</th>
            <th>Qeyd</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody >
          {/* {isLoading ? "Loading..." : data.map((data, index) => (
            <>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.surname}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.person_count}</td>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td>{data.note}</td>
                <td>
                  {
                    <button
                      onClick={() => handleEdit(data.id)}
                      className={data.status === 1  ? "activeBtn" : "deactiveBtn"}> {data.status === 1 ? "Active" : "Deactive"}
                    </button>
                  }
                </td>
              </tr>
            </>
          ))} */}
          <h1>Tbody</h1>
        </tbody>
      </table>
    </div>
  );
};

export default AdminReservation;
