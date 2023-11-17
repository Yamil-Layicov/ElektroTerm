import { useEffect, useState, lazy, Suspense } from "react";
import "./adminFooter.scss";


const EditModal1 = lazy(() => import("./editModal1/EditModal1"));

const AdminFooter = () => {
  const [footerData, setFootertData] = useState("");

  const [editPage1, setEditPage1] = useState(false)


  useEffect(() => {
    fetch("https://api.nane.az/api/footer")
      .then((res) => res.json())
      .then((res) => {
        setFootertData(res)
      });
  }, []);


  const handleAboutEdit1 = () => {
    setEditPage1(true)
  }


  return (
    <>
      <h1 style={{ marginBottom: "40px" }}>Footer</h1>
      <div className="adminFooter">
        <div className="footerBox">
              <div>
              <div>
                {footerData && 
                   <> 
                      <div>{footerData.address}</div>
                      <div>{footerData.opening_hours}</div>
                      <div>{footerData.reservation}</div>
                   </>  
                }
              </div>
            </div>
          <button onClick={handleAboutEdit1} className="aboutEdit">Redakte et</button>
        {editPage1 && (
          <Suspense fallback={<div>Loading...</div>}>
            <EditModal1 setEditPage1={setEditPage1}  footerData={footerData}/>
          </Suspense>
        )}
        </div>
      </div>
    </>
  );
};

export default AdminFooter;
