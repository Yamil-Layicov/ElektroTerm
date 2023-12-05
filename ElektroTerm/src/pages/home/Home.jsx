import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import { ThreeCircles } from "react-loader-spinner";
import News from "../../components/news/News";
import api from "../../admin/api/posts";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => api.get("sliders"),
  });

  return isLoading ? (
    <div style={{height:"100vh", width:"100%", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"black", position:"fixed", zIndex:"999"}}><ThreeCircles
    height="100"
    width="100"
    color="#4fa94d"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  /></div>
  ) : (
    <div>
      <Slider data={data?.data} />
      <About />
      <News />
    </div>
  );
};

export default Home;
