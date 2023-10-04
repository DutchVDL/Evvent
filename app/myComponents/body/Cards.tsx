import React from "react";

import { AiOutlineArrowRight } from "react-icons/ai";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaAngleRight,
} from "react-icons/fa6";

function Cards({ data }: any) {
  return (
    <div className="flex flex-col border-gray-200 border-2 rounded-lg w-[320px] h-[150px] justify-between py-2">
      <div className="flex items-center mx-auto w-[80%]  justify-between">
        <h1 className="font-bold">{data.name}</h1>
        <FaAngleRight />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center mx-auto w-[80%]  justify-between">
          <h1 className="font-bold flex items-center gap-3">
            {" "}
            <span
              className={`text-lg ${
                data.name !== "Total Income" ? "" : "text-green-700"
              }`}
            >
              {data.service}
            </span>
            {data.name !== "Total Income" ? (
              <p>Services</p>
            ) : (
              <p className="text-lg text-green-700">NOK</p>
            )}
          </h1>
          <a
            href="#"
            className={`w-[80px] flex items-center ${
              data.change > 0 ? "bg-[#a6f1db]" : "bg-red-100"
            } px-2  rounded-lg gap-2 ${
              data.change > 0 ? "text-green-900" : "text-red-600"
            } `}
          >
            {data.change > 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
            <p>{data.change > 0 ? `+${data.change}` : data.change}%</p>
          </a>
        </div>
        <div className="flex items-center mx-auto w-[80%]  gap-3">
          <h1>Last Month</h1>
          <h1
            className={`font-bold ${
              data.name !== "Total Income" ? "" : " text-green-700"
            }`}
          >
            {data.lastMonth}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Cards;
