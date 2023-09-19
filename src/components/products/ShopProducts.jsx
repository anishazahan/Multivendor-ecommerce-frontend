import React, { useEffect } from "react";
import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import Ratings from "../Ratings";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_card,
  add_to_wishlist,
  messageClear,
} from "../../store/reducers/cardReducer";
const ShopProducts = ({ styles, products }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { successMessage, errorMessage } = useSelector((state) => state.card);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const add_wishlist = (pro) => {
    dispatch(
      add_to_wishlist({
        userId: userInfo.id,
        productId: pro._id,
        name: pro.name,
        price: pro.price,
        image: pro.images[0],
        discount: pro.discount,
        rating: pro.rating,
        slug: pro.slug,
      })
    );
  };
  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [errorMessage, successMessage]);
  return (
    <div
      className={`w-full grid ${
        styles === "grid"
          ? "grid-cols-3 md-lg:grid-cols-2 md:grid-cols-2"
          : "grid-cols-1 md-lg:grid-cols-2 md:grid-cols-2"
      } gap-3`}
    >
      {products?.map((p, i) => (
        <div
          key={i}
          className="border group transition-all duration-500 hover:shadow-md hover:-mt-3"
        >
          <div className="relative overflow-hidden">
            {p.discount ? (
              <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px]  bg-red-500 font-semibold text-xs left-2 top-2">
                {p.discount}%
              </div>
            ) : (
              ""
            )}
            <div className="sm:w-full w-full h-[240px]">
              <img
                className="sm:w-full w-full h-full object-cover"
                src={p.images[2]}
                alt="product images"
              />
            </div>
            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3">
              <li
                onClick={() => add_wishlist(p)}
                className="w-[38px] h-[38px] cursor-pointer bg-white text-secondary flex justify-center items-center rounded-full hover:bg-secondary hover:text-white hover:rotate-[720deg] transition-all"
              >
                <AiFillHeart />
              </li>
              <Link
                to={`/product/details/${p.slug}`}
                className="w-[38px] h-[38px] cursor-pointer bg-white text-primary flex justify-center items-center rounded-full hover:bg-[#7fad39] hover:text-white hover:rotate-[720deg] transition-all"
              >
                <FaEye />
              </Link>
              <li
                onClick={() => add_card(p._id)}
                className="w-[38px] h-[38px] cursor-pointer bg-white text-primary flex justify-center items-center rounded-full hover:bg-primary hover:text-white hover:rotate-[720deg] transition-all"
              >
                <AiOutlineShoppingCart />
              </li>
            </ul>
          </div>
          <div className="py-3 text-slate-600 px-2">
            <h2>{p.name}</h2>
            <div className="flex justify-start items-center gap-3">
              <span className="text-lg  font-bold">${p.price}</span>
              <div className="flex">
                <Ratings ratings={p.rating} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
