import React, { useEffect } from "react";
import Newsletter from "./Newsletter";
import MainSection from "./MainSection";

const Home = () => {
  // useEffect(() => {
  //   window.location.reload();
  // },[])
  return (
    <>
      <MainSection />
      <Newsletter />
    </>
  );
};

export default Home;
