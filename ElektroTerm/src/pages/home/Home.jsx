import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar color={"transparent"}/>
      <Slider/>
      <About/>
    </div>
  )
}

export default Home