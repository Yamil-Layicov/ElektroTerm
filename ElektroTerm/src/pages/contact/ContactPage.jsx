import Navbar from "../../components/navbar/Navbar";
import "./contactPage.scss";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <>
      <Navbar color={"#1C1F2E"} />
      <div className="contactPage">
        <div className="imgBanner">
          <motion.h1
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Əlaqə
          </motion.h1>
        </div>
        
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12149.849936129462!2d49.8786396!3d40.420757!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403089a3b0fde691%3A0x38ac3991190cca0!2sAgro%20Bitki%20Klinikas%C4%B1%20-%20Fitolab!5e0!3m2!1str!2saz!4v1698134293423!5m2!1str!2saz"
        ></iframe>
      </div>
    </>
  );
};

export default ContactPage;
