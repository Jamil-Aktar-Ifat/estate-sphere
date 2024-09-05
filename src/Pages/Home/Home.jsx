import React from "react";
import Banner from "../../components/Banner/Banner";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";
import BestChoice from "../../components/BestChoice/BestChoice";

const Home = () => {
  DynamicTitle("Home");
  return (
    <div className=" ">
      <div>
        <Banner></Banner>
        <BestChoice></BestChoice>
      </div>
    </div>
  );
};

export default Home;
