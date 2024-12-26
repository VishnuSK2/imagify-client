import React from "react";
import Header from "../Components/Header";
import Steps from "../Components/Steps";
import Description from "../Components/Description";
import Testimonial from "../Components/Testimonial";
import GenerateButton from "../Components/GenerateButton";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <Description />
      <Testimonial />
      <GenerateButton />
    </div>
  );
};

export default Home;
