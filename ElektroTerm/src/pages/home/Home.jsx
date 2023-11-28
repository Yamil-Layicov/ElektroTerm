import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Navbar from "../../components/navbar/Navbar";
import News from "../../components/news/News";

const Home = () => {
  return (
    <div>
      <Slider/>
      <About/>
      <News/>
    </div>
  )
}

export default Home