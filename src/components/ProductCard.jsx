import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import nikeSneakers from "../assets/air-max-95.jpeg";
import { fetchPoductById } from "../store/actions/productAction";


export default function ProductCard({ item, i }) {
  // console.log(i, "ini adalah key");
  const history = useHistory();
  const dispatch = useDispatch();

  const toDetailPage = () => history.push(`/detail-product/${i}`);
  const fetchDataById = () => dispatch(fetchPoductById(item.name))

  return (
    <div
      className="card-product h-auto w-64 mb-8 cursor-pointer"
      onClick={()=> {
        fetchDataById()
        toDetailPage()
      }}
    >
      <img src={nikeSneakers} alt="" />
      <div className="">
        <div className="flex justify-between">
          <span className="font-medium">{item.name}</span>
          <span className="font-bold">$ {item.price}</span>
        </div>
        <span className="text-gray-500">{item.category}</span>
      </div>
    </div>
  );
}
