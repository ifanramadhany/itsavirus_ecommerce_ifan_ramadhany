import React from "react";
import nikeSneakers from "../assets/air-max-95.jpeg";

export default function BagComponent({ item }) {
  return (
    <tr className="">
      <th className="w-2/4">
        <div className="sm:space-y-2 flex-col md:flex md:flex-row md:justify-center md:space-x-4 md:items-center lg:flex lg:flex-row lg:justify-center lg:space-x-4 lg:items-center">
          <button class="button-small btn btn-circle btn-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-4 h-4 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="flex justify-center">
            <button class="md:hidden lg:hidden btn btn-circle btn-xs mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block w-4 h-4 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <img className="image-bag" src={nikeSneakers} alt="" />
          </div>
          <div className="space-y-6">
            <span>{item.name}</span>
            <div className="flex justify-between space-x-4">
              <span className="font-normal">Size : 8</span>
              <div className="flex">
                <span className="font-normal">Color : </span>
                <div
                  style={{ backgroundColor: "#AA6159" }}
                  className="h-5 w-5 ml-2"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </th>
      <th className="text-base font-normal">$ {item.price}</th>
      <th className="text-base font-normal">1</th>
      <th className="">$ {item.price}</th>
    </tr>
  );
}
