
import Banner from "../../components/Banner/Banner";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import BestChoice from "../../components/BestChoice/BestChoice";
import Properties from "../../components/Properties/Properties";

const Home = () => {
  DynamicTitle("Home");
  return (
    <div className=" ">
      <div>
        <Banner></Banner>
        <BestChoice></BestChoice>
        <Properties></Properties>
      </div>
    </div>
  );
};

export default Home;
