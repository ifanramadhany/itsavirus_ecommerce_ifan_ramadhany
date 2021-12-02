import React, { useState } from "react";
import nikelogo from "../assets/nikelogo.png";
import { useHistory } from "react-router-dom";
import { NavbarDesktop, BagComponent } from "../components";
import { useSelector } from "react-redux";

export default function UserBagPage() {
  const history = useHistory();
  const [sideBarMobile, setSideBarMobile] = useState(false);
  const { userBag } = useSelector((state) => state.productState);

  const toHomePage = () => history.push("/");
  const goBack = () => history.goBack();
  const toUserBag = () => history.push("/user-bag");

  const clearAll = () => {
    userBag.length = 0;
    toHomePage();
  };

  let amount = [];
  userBag.map((el) => amount.push(el.price));
  const sum = amount.reduce(function (a, b) {
    return a + b;
  }, 0);

  return (
    <div className="relative min-h-screen">
      {/* mobile menu bar */}
      <div className="px-2 py-2 text-gray-700 flex justify-between sm:hidden">
        <button
          onClick={goBack}
          className="p-1 hover:text-gray-800 hover:bg-gray-300 text-gray-100 bg-gray-600 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        </button>

        <button
          onClick={() => setSideBarMobile(!sideBarMobile)}
          className="p-1 hover:text-gray-800 hover:bg-gray-300 text-gray-100 bg-gray-600 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
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
            ? "sidebar md:hidden lg:hidden border-r border-gray-500 bg-gray-200 w-40 fixed inset-y-0 left-0 transform translate-x-0 transtition duration-200 ease-in-out"
            : "sidebar-off md:hidden lg:hidden border-r border-gray-500 bg-gray-200 w-40 fixed inset-y-0 left-0 transform -translate-x-full transtition duration-200 ease-in-out"
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
          <button className="menu-mobile btn btn-sm" onClick={toHomePage}>
            Home
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </button>

          <button className="menu-mobile btn btn-sm">
            Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 ml-2 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </button>

          <button className="menu-mobile btn btn-sm" onClick={toUserBag}>
            Your Bag
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-4 h-4 ml-2 stroke-current"
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
          <span className="text-4xl font-bold">Your Bag</span>
          <button className="relative flex py-1 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span className="absolute font-bold text-white right-0.5 -top-0.5 bg-red-600 px-2 py-0.5 rounded-full border-2 border-white text-sm font-bold">
              {userBag.length}
            </span>
          </button>
        </div>
        <div className="mx-10">
          <table className="w-full table-auto">
            <thead className="text-xs">
              <tr className="h-12 bg-gray-200">
                <th className="w-2/4 font-medium">PRODUCT</th>
                <th className="font-medium">PRICE</th>
                <th className="font-medium">QUANTITY</th>
                <th className="font-medium">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {
                (userBag.length === 0 && (
                  <div className="w-full h-40 flex justify-center items-center">
                    <span className="text-xl font-bold">Your bag is Empty</span>
                  </div>
                ))
              }

              {userBag.map((item, index) => (
                <BagComponent key={index} item={item}></BagComponent>
              ))}
            </tbody>
          </table>

          <div className="h-12 flex justify-end">
            <div className="h-full w-96 bg-gray-200 flex justify-between items-center px-3">
              <span>TOTAL</span>
              <span className="font-bold">$ {sum}</span>
            </div>
          </div>

          <div className="h-12 mt-2 mb-20 flex justify-end">
            <div className="w-96">
              <button
                className="btn btn-sm h-12 w-full flex justify-between rounded-none"
                onClick={clearAll}
              >
                Pay Now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 ml-2 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
