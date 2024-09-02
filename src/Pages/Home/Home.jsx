import React from "react";
import Banner from "../../components/Banner/Banner";
import DynamicTitle from "../../components/DynamicTitle/DynamicTitle";

const Home = () => {
  DynamicTitle('Home')
  return (
    <div className=" ">
      <div>
        <Banner></Banner>
      </div>

    </div>
  );
};

export default Home;
