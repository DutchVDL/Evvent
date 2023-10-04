/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  AiFillPieChart,
  AiFillDollarCircle,
  AiFillMessage,
} from "react-icons/ai";
import { BsFillCalendarMinusFill } from "react-icons/bs";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { HiLogout } from "react-icons/hi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Sidebar() {
  return (
    <div className=" flex flex-col justify-start items-center max-h-[800px]  md:w-[200px] lg:w-[300px] rounded-r-3xl shadow-2xl bg-gray-50">
      <h1 className="bg-pink-600 h-[50px] w-[160px] text-white text-center mt-8 leading-10 rounded-md p-1 font-bold text-2xl">
        evvent.no
      </h1>
      <div className="my-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-row items-center h-[40px] text-2xl justify-start gap-2 ">
                <AiFillPieChart size={20} className="hidden md:block" />
                Dashboard
              </div>
            </AccordionTrigger>
            <AccordionContent>Overview</AccordionContent>
            <AccordionContent>Transaction List</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="my-3">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <div className="flex flex-row items-center h-[40px]  text-2xl justify-start gap-3 ">
                <BsFillCalendarMinusFill
                  size={15}
                  className="hidden md:block"
                />
                Services
              </div>
            </AccordionTrigger>
            <AccordionContent>Overview</AccordionContent>
            <AccordionContent>Transaction List</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="my-3 max-h-[50px] w-[220px] flex flex-row  px-[15px] gap-3 justify-between   flex-1 items-center  py-2 font-medium transition-all  rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white">
        <div className="flex flex-row gap-3 items-center text-2xl ">
          <HiArrowTrendingUp className="hidden md:block" size={20} />
          <h1>Analytics</h1>
        </div>
        <div></div>
      </div>
      <div className="my-3 flex max-h-[50px]  flex-row w-[220px] px-[15px] gap-3 justify-between  flex-1 items-center  py-2 font-medium transition-all  rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white">
        <div className="flex flex-row gap-3 items-center text-2xl">
          <AiFillDollarCircle size={20} className="hidden md:block" />
          <h1>Earnings</h1>
        </div>
        <div></div>
      </div>

      <br />

      <div className="border-t-2 border-gray-400 pt-4">
        <div className="my-3 flex text-xl h-[50px] flex-row w-[220px] px-[15px] gap-3 justify-between  flex-1 items-center  py-1 font-medium transition-all  rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white">
          <div className="flex flex-row gap-3 items-center">
            <img
              src="https://github.com/shadcn.png"
              alt=""
              className="rounded-full h-5 w-5 hidden md:block"
            />

            <h1>My Profile</h1>
          </div>
          <div></div>
        </div>
        <div className="my-3 flex h-[50px] text-xl flex-row w-[220px] px-[15px] gap-3 justify-between  flex-1 items-center  py-1 font-medium transition-all  rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white">
          <div className="flex flex-row gap-3 items-center">
            <AiFillMessage size={20} className="hidden md:block" />
            <h1>My Messages</h1>
          </div>
          <div></div>
        </div>
        <div className="my-3 flex h-[50px] text-xl flex-row w-[220px] px-[15px] gap-3 justify-between  flex-1 items-center  py-1 font-medium transition-all  rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white">
          <div className="flex flex-row gap-3 items-center">
            <BsFillCalendarMinusFill size={20} className="hidden md:block" />
            <h1>My Orders</h1>
          </div>
          <div></div>
        </div>
        <div className="my-3 flex h-[50px] text-xl flex-row w-[220px]  px-[15px] gap-3 justify-between  flex-1 items-center  py-1 font-medium transition-all  rounded-lg focus:bg-black focus:text-white hover:bg-black hover:text-white">
          <div className="flex flex-row gap-3 items-center">
            <HiLogout size={20} className="hidden md:block" />
            <h1>Logout</h1>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
