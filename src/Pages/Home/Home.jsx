import Banner from "../../components/Banner/Banner";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import BestChoice from "../../components/BestChoice/BestChoice";
import Properties from "../../components/Properties/Properties";
import Leaflet from "../../components/Leaflet/Leaflet";

const Home = () => {
  DynamicTitle("Home");
  return (
    <div className=" ">
      <div className="mx-3">
        <Banner></Banner>
        <BestChoice></BestChoice>
        <Properties></Properties>
        <Leaflet></Leaflet>
      </div>
    </div>
  );
};

export default Home;
