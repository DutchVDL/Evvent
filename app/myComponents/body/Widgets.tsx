"use client";

import React from "react";
import Cards from "./Cards";
import Table from "./Table";
import Users from "./Users";
import MyChart from "./MyChart";
import dynamic from "next/dynamic";

const DynamicChart = dynamic(() => import("./MyChart"), {
  ssr: false, // Disable server side rendering
});

function Widgets() {
  const fullData = [
    {
      id: 0,
      name: "Active Services",
      service: 24,
      change: 60,
      lastMonth: 15,
    },
    {
      id: 1,
      name: "Total Active Booking",
      service: 10,
      change: -33,
      lastMonth: 15,
    },
    {
      id: 2,
      name: "Total Income",
      service: "50K",
      change: 50,
      lastMonth: "25.000 NOK",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col items-start gap-3 mt-[50px]">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="border-gray-200 border-2 w-[240px] flex justify-between items-center p-1 rounded-md shadow-md">
          <a
            href="#"
            className="bg-pink-300 py-1 px-3 font-medium rounded-lg border-pink-300  text-sm text-pink-800 "
          >
            Overview
          </a>
          <a
            href="#"
            className=" py-1 px-3 font-medium rounded-lg text-sm  text-black "
          >
            Transaction List
          </a>
        </div>
      </div>
      <div className="lg:flex md:grid md:grid-cols-2 gap-5 lg:justify-between  max-w-[1000px] lg:mr-[40px]    mt-10">
        {fullData.map((data) => (
          <Cards data={data} key={data.id} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <Table />
        <Users />
      </div>
      <DynamicChart />
    </div>
  );
}

export default Widgets;
