"use client";

import Link from "next/link";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChat } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RxHamburgerMenu } from "react-icons/rx";

function Navigation() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="flex justify-around lg:justify-between items-start lg:items-center max-w-[1000px]   mx-5 mt-7">
      <div className={`flex gap-5 lg:gap-[45px]  lg:flex-row`}>
        <a
          href="#"
          className="cursor-pointer  lg:hidden"
          onClick={() => console.log(setShowNav((prev) => !prev))}
        >
          <RxHamburgerMenu className="mb-5" size={25} />
        </a>
        <Link
          href="#"
          className={`${
            showNav ? "block" : "hidden"
          }  lg:block hover:border-b-pink-500 hover:border-b-2 `}
        >
          Homepage
        </Link>
        <Link
          href="#"
          className={`${
            showNav ? "block" : "hidden"
          }  lg:block hover:border-b-pink-500 hover:border-b-2 `}
        >
          Explore
        </Link>
        <Link
          href="#"
          className={`${
            showNav ? "block" : "hidden"
          }  lg:block hover:border-b-pink-500 hover:border-b-2 `}
        >
          About Evvent
        </Link>
      </div>
      <div className="flex items-center gap-4 ">
        <a
          href="#"
          className="hidden lg:flex items-center justify-between  px-2 py-1 border-gray-300 border-[1px] rounded-md gap-1 hover:shadow-md hover:shadow-pink-400"
        >
          <AiOutlinePlus />
          <p>Add Services</p>
        </a>
        <BsChat size={25} className="hidden lg:block cursor-pointer  " />
        <IoIosNotificationsOutline
          size={30}
          className="hidden lg:block cursor-pointer "
        />
        <Avatar className="hidden lg:block">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default Navigation;
