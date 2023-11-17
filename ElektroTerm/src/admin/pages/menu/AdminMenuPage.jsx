import { useState, useEffect, lazy, Suspense } from "react";
import "./adminMenu.scss";

const EditMenu = lazy(() => import("./editMenu/EditMenu"));

const AdminMenu = () => {
  const [editPage, setEditPage] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch("https://api.nane.az/api/menu")
      .then((res) => res.json())
      .then((res) => {
        setMenuData(res), console.log(res);
      });
  }, []);

  const combinedMenu = [...(menuData.drinks || []), ...(menuData.foods || [])];


  const handleAboutEdit = () => {
    setEditPage(true);
  };

  const handleDelete = (id) => {
    fetch(`https://api.nane.az/api/menu/${id}`, {method:"DELETE"})
  }


  return (
    <div className="adminAboout">
      <h1>Menu</h1>
      <div className="contentTable">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Kateqoriya</th>
              <th>Başlıq</th>
              <th>Təsviri</th>
              <th>Şəkil</th>
              <th>Tarix</th>
              <td>Redakte</td>
            </tr>
          </thead>
          <tbody>
            {combinedMenu?.map((drink, index) => (
              <>
                <tr>
                  <td>{index + 1}</td>
                  <td>{drink.category}</td>
                  <td>{drink.title}</td>
                  <td>{drink.description}</td>
                  <td>
                    <img src={drink.image} alt="" />
                  </td>
                  <td>22.10.2023</td>
                  <td>
                    <button onClick={() => handleDelete(drink.id)}>Sil</button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mainContent">
        <div>
          <button onClick={handleAboutEdit} className="aboutEdit">
            Əlavə et
          </button>
          {editPage && (
            <Suspense fallback={<div>Loading...</div>}>
              <EditMenu setEditPage={setEditPage} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
