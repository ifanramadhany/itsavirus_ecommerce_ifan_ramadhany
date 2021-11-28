import React from 'react'
import { Link, useHistory } from "react-router-dom";
import nikelogo from "../assets/nikelogo.png";
import { useSelector } from "react-redux";


export default function NavbarDesktop() {
  const history = useHistory()
  const toHomePage = () => history.push("/")
  const toUserBag = () => history.push("/user-bag")

  const { userBag } = useSelector(
    (state) => state.productState
  );

  return (
    <div className="navbar-desktop hidden text-gray-100 h-24 md:flex lg:flex flex-col">
        {/* shipping info */}
        <div className="shipping-info bg-gray-300 flex">
          <div className="mx-10 bg-gray-300 text-gray-700 flex justify-between w-full">
            <div className="flex w-16 justify-center items-center cursor-pointer">
              <span className="text-xs">English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <div className="flex w-30 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                />
              </svg>
              <span className="text-xs">FREE SHIPPING OVER $100 PURCHASE</span>
            </div>

            <div className="flex w-52 justify-between items-center">
              <Link to="/" className="text-xs">Shipping</Link>
              <Link to="/" className="text-xs">FAQ</Link>
              <Link to="/" className="text-xs">Contact</Link>
            </div>
          </div>
        </div>
        {/* main menu  */}
        <div className="main-menu bg-white flex">
          <div className="mx-10 w-full flex justify-between items-center">
            <div className="cursor-pointer" onClick={toHomePage}>
              <img className="w-16" src={nikelogo} alt="" />
            </div>

            <div className="category-menu text-gray-700 h-14 flex justify-between items-center font-bold">
              <Link to="/" className="border-b-2 border-gray-700">New Releases</Link>
              <Link to="/">Men</Link>
              <Link to="/">Women</Link>
              <Link to="/">Kids</Link>
              <Link to="/">Customize</Link>
            </div>

            <div className="flex">
              <button className="relative flex py-1 px-4 text-gray-700"
                onClick={toUserBag}
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
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
                <span className="absolute text-white right-1.5 -top-0.5 bg-red-600 px-1.5 py-0.5 rounded-full border border-white text-xs font-bold">
                  {userBag.length}
                </span>
              </button>

              <button className="relative flex py-1 px-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}
