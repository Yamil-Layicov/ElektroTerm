import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";

const Home = () => {
  return (
    <div>
      <Navbar color={"transparent"}/>
      <Slider/>
      <About/>
      <News/>
    </div>
  )
}

export default Home