import { useState, useEffect, lazy, Suspense } from "react";
import "./adminAbout.scss";

const EditAbout = lazy(() => import("./editAbout/EditAbout"));

const AdminAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [editPage, setEditPage] = useState(false);

  useEffect(() => {
    fetch("https://api.nane.az/api/about")
      .then((res) => res.json())
      .then((res) => {setAboutData(res), console.log(res)});
  }, []);

  const handleAboutEdit = () => {
    setEditPage(true);
  };

  return (
    <div className="adminAboout">
      <h1>Haqqımızda</h1>
      <div className="mainContent">
        <div key={aboutData.id}>
          {aboutData.content && (
            <div>
              <div>
                
                {aboutData.content.split("\n").map((data) => (
                  <p key={data} style={{ marginBottom: "30px" }}>
                    {data}
                  </p>
                ))}
              </div>
              <div>
                {aboutData.title.split("\n").map((data) => (
                  <p key={data} style={{ marginBottom: "30px" }}>
                    {data}
                  </p>
                ))}
              </div>
              <img style={{ marginRight: "20px" }} src={aboutData.image} alt="" />
            </div>
          )}
        </div>
        <div>
          <button onClick={handleAboutEdit} className="aboutEdit">
            Redakte et
          </button>
          {editPage && (
            <Suspense fallback={<div>Loading...</div>}>
              <EditAbout aboutData={aboutData} setEditPage={setEditPage} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminAbout;
