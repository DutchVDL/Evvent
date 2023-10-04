/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { FaAngleRight } from "react-icons/fa6";
function Users() {
  const data = [
    {
      name: "Sophia Lee",

      amount: "30.5K NOK",

      status: "Active",
    },

    {
      name: "William Adams",

      amount: "30.5K NOK",

      status: "Active",
    },
    {
      name: "Olivia Brown",

      amount: "28.4K NOK",

      status: "Active",
    },
    {
      name: "Sarah Anderson",

      amount: "22.9 K NOK",

      status: "Active",
    },
    {
      name: "Natalie Marie Evans",

      amount: "18.3K NOK",

      status: "Active",
    },
    {
      name: "Benjamin Davis",

      amount: "17.4K NOK",

      status: "Active",
    },

    {
      name: "Benjamin Davis",

      amount: "12.2K NOK",

      status: "Active",
    },
    {
      name: "Benjamin Davis",

      amount: "9.5K NOK",

      status: "Active",
    },
    {
      name: "Benjamin Davis",

      amount: "1.570 NOK",

      status: "Active",
    },
  ];

  return (
    <div className="w-[400px] border-2 border-gray-200 p-5 rounded-lg overflow-auto overflow-x-auto h-[600px]">
      <div className="flex justify-between items-center mb-9">
        <h1 className="font-bold">Top Performance (Monthly)</h1>
        <FaAngleRight />
      </div>
      <div className="flex justify-between items-center bg-gray-100 py-2 px-4 my-2 rounded-lg">
        <div className="flex-1 text-center">Service</div>
        <div className="flex-1 text-center ">Profit</div>
        <div className="flex-1 text-center ">Status</div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center bg-white border-2 gap-5 border-gray-200 h-[60px] px-4 my-2 rounded-lg`}
        >
          <div className=" flex-row flex items-center gap-2 max-w-[90px]">
            <img
              src="https://github.com/shadcn.png"
              alt=""
              className="w-8 h-8 rounded-md "
            />
            <p className="text-xs">{item.name.slice(0, 5)} ... </p>
          </div>
          <div
            className={`flex-1 text-center 
            text-green-500 text-sm
            `}
          >
            {item.amount}
          </div>
          <div
            className={`flex-1 text-center rounded-lg p-1 ${getStatusStyles(
              item.status
            )} `}
          >
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;

const getStatusStyles = (status: string) => {
  switch (status) {
    case "Pending":
      return "bg-red-100 text-red-500";
    case "Ongoing":
      return "bg-yellow-100 text-yellow-600";
    case "Active":
      return "bg-green-100 text-green-600";
    default:
      return "";
  }
};
