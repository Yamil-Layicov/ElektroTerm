import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <main style={{maxWidth:"2100px", margin:"auto"}}>
      <Navbar/>
      <Outlet />
      <Footer />  
    </main>
  );
};

export default HomeLayout;
