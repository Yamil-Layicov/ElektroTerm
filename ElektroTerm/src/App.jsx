import { useRoutes } from "react-router-dom";
import routes from "./routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useEffect } from "react";
// import axios from "axios";

const App = () => {

  // const getTokenFromLocalStorage = localStorage.getItem("userElektro")
  //   ? JSON.parse(localStorage.getItem("userElektro"))
  //   : null;

  // useEffect(() => {
  //   if (getTokenFromLocalStorage) {
  //     axios.defaults.headers.common[
  //       "Authorization"
  //     ] = `Bearer ${getTokenFromLocalStorage.token}`;
  //   }
  // }, [getTokenFromLocalStorage]);

  return (
    <>
      {useRoutes(routes)}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
