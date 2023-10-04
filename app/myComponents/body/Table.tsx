import React from "react";

import { FaAngleRight } from "react-icons/fa6";

const Table = () => {
  const data = [
    {
      name: "Sophia Lee",
      number: "234-567-890",
      amount: "1.250 NOK",
      date: "30 Sep 2023",
      status: "Pending",
    },

    {
      name: "William Adams",
      number: "890-123-456",
      amount: "2.180 NOK",
      date: "29 Sep 2023",
      status: "Pending",
    },
    {
      name: "Olivia Brown",
      number: "456-789-123",
      amount: "2.750 NOK",
      date: "27 Sep 2023",
      status: "Pending",
    },
    {
      name: "Sarah Anderson",
      number: "123-456-789",
      amount: "1.500 NOK",
      date: "27 Sep 2023",
      status: "Pending",
    },
    {
      name: "Natalie Marie Evans",
      number: "987-654-321",
      amount: "1.120 NOK",
      date: "23 Sep 2023 ",
      status: "Ongoing",
    },
    {
      name: "Benjamin Davis",
      number: "567-890-123",
      amount: "1.570 NOK",
      date: "22 Sep 2023",
      status: "Ongoing",
    },
  ];

  return (
    <div className="w-[576px] border-2 border-gray-200 p-5 rounded-lg overflow-auto h-[600px]">
      <div className="flex justify-between items-center mb-9">
        <h1 className="font-bold">Transaction List</h1>
        <FaAngleRight />
      </div>
      <div className="flex justify-between items-center bg-gray-100 py-2 px-2 my-2 rounded-lg">
        <div className="flex-1 text-start">Transaction</div>
        <div className="flex-1 text-center hidden sm:block">Amount</div>
        <div className="flex-1 text-center hidden lg:block">Date</div>
        <div className="flex-1 text-center">Status</div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex justify-between items-center bg-white border-2 gap-5 border-gray-200 py-2 px-2 my-2 rounded-lg`}
        >
          <div className="flex-1 text-start  text-sm">
            <h1>{item.name}</h1>
            <p className="text-sm">{item.number}</p>
          </div>
          <div
            className={`flex-1 text-center 
               text-green-500 text-sm hidden sm:block
             `}
          >
            {item.amount}
          </div>
          <div className="flex-1 text-center hidden lg:block text-sm">
            {item.date}
          </div>
          <div
            className={`flex-1 text-center rounded-lg p-1 ${getStatusStyles(
              item.status
            )} mx-2`}
          >
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

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

export default Table;
