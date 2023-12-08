import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import News from "../../components/news/News";
import api from "../../admin/api/posts";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/loader/Loader";

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["sliders"],
    queryFn: () => api.get("sliders"),
  });

  return isLoading ? (
    <Loader color={"#092635"}/>
  ) : (
    <div>
      <Slider data={data?.data} />
      <About />
      <News />
    </div>
  );
};

export default Home;
