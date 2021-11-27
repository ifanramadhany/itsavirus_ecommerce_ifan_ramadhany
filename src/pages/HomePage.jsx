import React, { useState, useEffect } from "react";
import nikelogo from "../assets/nikelogo.png";
import { useHistory } from "react-router-dom";
import { NavbarDesktop, ProductCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPoducts } from "../store/actions/productAction";
import ReactLoading from "react-loading";

export default function HomePage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { products, isLoading, isError } = useSelector(
    (state) => state.productState
  );

  const [sideBarMobile, setSideBarMobile] = useState(false);

  const toHomePage = () => history.push("/");
  const toUserBag = () => history.push("/user-bag")

  useEffect(() => {
    dispatch(fetchPoducts());
  }, [dispatch]);

  console.log(products);

  return (
    <div className="relative min-h-screen">
      {/* mobile menu bar */}
      <div className="mx-10 py-2 text-gray-700 flex justify-end sm:hidden">
        <button
          onClick={() => setSideBarMobile(!sideBarMobile)}
          className="p-1 hover:text-gray-800 hover:bg-gray-300 text-gray-100 bg-gray-600 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`${
          sideBarMobile
            ? "sidebar md:hidden lg:hidden border-r border-gray-500 bg-gray-200 w-40 absolute inset-y-0 left-0 transform translate-x-0 transtition duration-200 ease-in-out h-full"
            : "sidebar md:hidden lg:hidden border-r border-gray-500 bg-gray-200 w-40 absolute inset-y-0 left-0 transform -translate-x-full transtition duration-200 ease-in-out"
        }`}
      >
        {/* logo  */}
        <div
          className="h-20 flex justify-center items-center cursor-pointer"
          onClick={toHomePage}
        >
          <img className="w-16" src={nikelogo} alt="" />
        </div>

        {/* menu sidebar  */}
        <div className="h-full flex flex-col items-center space-y-4">
          <button class="menu-mobile btn btn-sm"
            onClick={toHomePage}
          >
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </button>

          <button class="menu-mobile btn btn-sm">
            Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>

          <button class="menu-mobile btn btn-sm"
            onClick={toUserBag}
          >
            Your Bag
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* navbar desktop  */}
      <NavbarDesktop></NavbarDesktop>

      {/* content  */}
      <div className="flex-1">
        <div className="h-28 flex justify-center items-center">
          <span className="text-4xl font-bold">New Releases</span>
        </div>
        {isLoading ? (
          <div className="mb-10 h-96 flex justify-center items-center">
            <ReactLoading type="spin" color="#374151" />
          </div>
        ) : (
          <div className="card-container flex flex-wrap justify-start h-full">
          {/* product card */}
          {products.map((item, index) => (
            <ProductCard key={index} i={index + 1} item={item}></ProductCard>
          ))}
        </div>
        )}
        
      </div>
    </div>
  );
}
