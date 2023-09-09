import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
// import Categorys from "../components/Categorys";
// import FeatureProducts from "../components/products/FeatureProducts";

const Home = () => {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <div className="my-4">{/* <Categorys></Categorys> */}</div>
      {/* <div className='py-[45px]'>
                <FeatureProducts products={products} />
            </div> */}
    </>
  );
};

export default Home;
