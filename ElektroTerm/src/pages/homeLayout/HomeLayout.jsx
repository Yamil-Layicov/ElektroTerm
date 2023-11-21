import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
