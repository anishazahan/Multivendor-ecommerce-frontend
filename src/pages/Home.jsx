import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Banner from "../components/Banner";
import { get_category } from "../store/reducers/homeReducers";
import Categorys from "../components/Categorys";
const Home = () => {
  const dispatch = useDispatch();
  const { categorys } = useSelector((state) => state?.home);
  // const { products, latest_product, topRated_product, discount_product } =
  //   useSelector((state) => state.home);
  // useEffect(() => {
  //   dispatch(get_products());
  // }, []);
  useEffect(() => {
    dispatch(get_category());
  }, []);
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <div className="my-4">
        <Categorys />
      </div>
      {/* <div className="py-[45px]">
        <FeatureProducts products={products} />
      </div>
      <div className="py-10">
        <div className="w-[85%] flex flex-wrap mx-auto">
          <div className="grid w-full grid-cols-3 md-lg:grid-cols-2 md:grid-cols-1 gap-7">
            <div className="overflow-hidden">
              <Products title="Latest Product" products={latest_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Top Rated Product" products={topRated_product} />
            </div>
            <div className="overflow-hidden">
              <Products title="Discount Product" products={discount_product} />
            </div>
          </div>
        </div>
      </div>
      <Footer /> */}
    </div>
  );
};

export default Home;
