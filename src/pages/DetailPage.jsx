import React, { useState } from "react";
import nikelogo from "../assets/nikelogo.png";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { SelectSize, SelectColor } from "../components";

export default function DetailPage() {
  const [selectColor, setSelectColor] = useState(false);
  const [playVideo, setPlayVideo] = useState(false);
  const [sideBarMobile, setSideBarMobile] = useState(false);
  const colors = [
    {
      name: "Just Brown",
      color_hash: "#AA6159",
    },
    {
      name: "Mistique Black",
      color_hash: "#272425",
    },
    {
      name: "Sky Blue",
      color_hash: "#6389CB",
    },
    {
      name: "Somewhat Gold",
      color_hash: "#F2C758",
    },
  ];
  const sizes = [
    "8",
    "8.5",
    "9",
    "9.5",
    "10",
    "10.5",
    "11",
    "11.5",
    "12",
    "12.5",
  ];
  const images = [
    {
      original:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/677ec861-44fd-4a75-8f2b-1420c9361e65/air-max-95-se-shoe-Kd9LTw.png",
      thumbnail:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/677ec861-44fd-4a75-8f2b-1420c9361e65/air-max-95-se-shoe-Kd9LTw.png",
    },
    {
      original:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6818838d-a7f1-43b4-9c40-3b4a5a585cd8/air-max-95-se-shoe-Kd9LTw.png",
      thumbnail:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/6818838d-a7f1-43b4-9c40-3b4a5a585cd8/air-max-95-se-shoe-Kd9LTw.png",
    },
    {
      original:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7f83b5ea-4c5f-47ba-9e43-e0d30a3219a3/air-max-95-se-shoe-Kd9LTw.png",
      thumbnail:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/7f83b5ea-4c5f-47ba-9e43-e0d30a3219a3/air-max-95-se-shoe-Kd9LTw.png",
    },
    {
      original:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fb273943-8347-4892-8680-3ab6d304a23b/air-max-95-se-shoe-Kd9LTw.png",
      thumbnail:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fb273943-8347-4892-8680-3ab6d304a23b/air-max-95-se-shoe-Kd9LTw.png",
    },
    {
      original:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/910c3c12-2d4d-4f76-b132-ca44be19b60a/air-max-95-se-shoe-Kd9LTw.png",
      thumbnail:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/910c3c12-2d4d-4f76-b132-ca44be19b60a/air-max-95-se-shoe-Kd9LTw.png",
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* mobile menu bar */}
      <div className="p-2 text-gray-700 flex justify-end sm:hidden">
        <button
          onClick={() => setSideBarMobile(!sideBarMobile)}
          className="p-1 hover:text-gray-800 hover:bg-gray-300 text-gray-100 bg-gray-600 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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
            ? "sidebar md:hidden lg:hidden border-r border-gray-500 bg-gray-200 w-40 absolute inset-y-0 left-0 transform translate-x-0 transtition duration-200 ease-in-out"
            : "sidebar md:hidden lg:hidden border-r border-gray-500 bg-gray-200 w-40 absolute inset-y-0 left-0 transform -translate-x-full transtition duration-200 ease-in-out"
        }`}
      >
        {/* logo  */}
        <div className="h-20 flex justify-center items-center">
          <img className="w-16" src={nikelogo} alt="" />
        </div>

        {/* menu sidebar  */}
        <div className="h-full flex flex-col items-center space-y-4">
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

          <button class="menu-mobile btn btn-sm">
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
      <div className="navbar-desktop hidden text-gray-100 h-24 md:flex lg:flex flex-col">
        {/* shipping info */}
        <div className="shipping-info bg-gray-300 flex">
          <div className="mx-10 bg-gray-300 text-gray-700 flex justify-between w-full">
            <div className="flex w-16 justify-center items-center">
              <span className="text-xs">English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
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
                class="h-6 w-6"
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
              <Link className="text-xs">Shipping</Link>
              <Link className="text-xs">FAQ</Link>
              <Link className="text-xs">Contact</Link>
            </div>
          </div>
        </div>
        {/* main menu  */}
        <div className="main-menu bg-white flex">
          <div className="mx-10 w-full flex justify-between items-center">
            <div>
              <img className="w-16" src={nikelogo} alt="" />
            </div>

            <div className="category-menu text-gray-700 h-14 flex justify-between items-center font-bold">
              <Link className="border-b-2 border-gray-700">New Releases</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>Kids</Link>
              <Link>Customize</Link>
            </div>

            <div className="flex">
              <button class="relative flex py-1 px-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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
                <span class="absolute text-white right-1.5 -top-0.5 bg-red-600 px-1.5 py-0.5 rounded-full border border-white text-xs font-bold">
                  0
                </span>
              </button>

              <button class="relative flex py-1 px-4 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
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

      {/* content  */}
      <div className="flex-1">
        <div className="mx-10">
          <div className="mb-10 flex flex-col md:flex-row lg:flex-row">
            <div className="w-96">
              <ImageGallery
                items={images}
                showNav={false}
                showFullscreenButton={false}
                showPlayButton={false}
              ></ImageGallery>
            </div>
            <div className="w-full">
              <div className="space-y-8 px-10 mt-16 w-full flex flex-col">
                <span className="text-gray-500">MEN'S SHOE</span>

                <span className="text-5xl font-bold">Nike Air Max 95 SE</span>

                <span className="text-lg text-gray-500">
                  The Nike Air Edge 270 takes the look of retro basketball and
                  puts it through a modern lens.
                </span>

                <button
                  className={`${
                    playVideo ? "hidden" : "flex justify-centre items-center"
                  }`}
                  onClick={() => setPlayVideo(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-14 w-14"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="font-bold">PLAY VIDEO</span>
                </button>

                <div className={`${playVideo ? "iframe-container" : "hidden"}`}>
                  <iframe
                    src="https://www.youtube.com/embed/lvfB_p0IiHM?autoplay=1"
                    width="560"
                    height="315"
                    frameborder="0"
                  ></iframe>
                </div>

                <span className="text-xl">SELECT SIZE (US)</span>
                <div className="w-80 flex flex-wrap">
                  {/* button size  */}
                  {sizes.map((item, index) => (
                    <SelectSize key={index} item={item} />
                  ))}
                </div>

                <span className="text-xl">SELECT COLOR</span>
                <div className="w-80 flex flex-wrap">
                  {/* select color */}
                  {
                    colors.map((item, index)=> (
                      <SelectColor key={index} item={item} />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="h-20 mb-14 mt-14 bg-gray-300 md:h-14 lg:h-14 flex flex-col md:flex-row lg:flex-row justify-around items-center">
            <div className="flex w-30 justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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

            <button class="btn btn-sm">
              ADD TO BAG - $95.97
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-6 h-6 ml-2 stroke-current"
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
  );
}
