import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";

const FirstTable = () => {
  return (
    <div className="left-0 w-[80%] mx-auto p-4  border-t-2 py-[60px] rounded-lg  text-black  text-sm">
      <table className="w-full ">
        <thead className="">
          <tr className="font-bold text-left text-black  ">
            <th className="py-2">
              <a
                href="#"
                className="text-white font-bold text-3xl h-6 w-8 px-2 pb-2 bg-pink-600 rounded-md"
              >
                e.
              </a>
            </th>
            <th className="py-2 px-10">Home</th>
            <th className="py-2 px-10">Services</th>
            <th className="py-2 px-10">Dashboard</th>
            <th className="py-2 px-10">Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-start">
            <td className="py-4 align-top">
              <div className="flex items-center gap-1 text-black  ">
                <AiOutlineFacebook size={20} />
                Facebook
              </div>
              <br />
              <div className="flex items-center gap-1  text-black">
                <AiOutlineTwitter size={20} />
                Twitter
              </div>
              <br />
              <div className="flex items-center gap-1  text-black">
                <AiOutlineInstagram size={20} />
                Instagram
              </div>
              <br />
              <div className="flex items-center gap-1  text-black">
                <AiOutlineYoutube size={20} />
                Youtube
              </div>
            </td>
            <td className="py-4 align-top px-10">Medical Assistant</td>
            <td className="py-4 align-top px-10">
              <h1>Photography</h1>
              <br />
              <h1>Catering</h1>
              <br />
              <h1>Henna</h1>
              <br />
              <h1>Hairstyling</h1>
            </td>
            <td className="py-4 align-top px-10">
              <h1>Dashboard</h1>
              <br />
              <h1>Service</h1>
              <br />
              <h1>Analytics</h1>
              <br />
              <h1>Wallet</h1>
              <br />
              <h1>My Profile</h1>
              <br />
              <h1>My Messages</h1>
            </td>
            <td className="py-4 align-top px-10">
              <h1>Terms & Conditions</h1>
              <br />
              <h1>Privacy Policy</h1>
              <br />
              <h1>Payment Policy</h1>
              <br />
              <h1>Booking Policy</h1>
              <br />
              <h1>FAQ</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const SecondTable = () => {
  return (
    <div className="left-0 w-[80%] mx-auto p-4 border-t-2 py-[60px] rounded-lg text-gray-400 bg-slate-300">
      <div className="flex font-bold text-black justify-around">
        <div className="py-2">
          <a
            href="#"
            className="text-white font-bold text-3xl h-6 w-8 px-2 pb-2 bg-pink-600 rounded-md"
          >
            e.
          </a>
        </div>
        <div className="py-2">Home</div>
        <div className="py-2">Services</div>
        <div className="py-2">Dashboard</div>
        <div className="py-2">Policy</div>
      </div>
      <div className="flex text-start justify-between ">
        <div className="py-4 align-top">
          <div className="py-2">
            <a
              href="#"
              className="text-white font-bold text-3xl h-6 w-8 px-2 pb-2 bg-pink-600 rounded-md"
            >
              e.
            </a>
          </div>
          <div className="flex items-center gap-1">
            <AiOutlineFacebook /> Facebook
          </div>
          <br />
          <div className="flex items-center gap-1">
            <AiOutlineTwitter /> Twitter
          </div>
          <br />
          <div className="flex items-center gap-1">
            <AiOutlineInstagram /> Instagram
          </div>
          <br />
          <div className="flex items-center gap-1">
            <AiOutlineYoutube /> Youtube
          </div>
        </div>
        <div className="py-2">Services</div>
        <div className="py-4 align-top">Medical Assistant</div>
        <div className="py-4 align-top">
          <div className="py-2">Dashboard</div>
          Photography
          <br />
          Catering
          <br />
          Henna
          <br />
          Hairstyling
        </div>
        <div className="py-4 align-top">
          Dashboard
          <br />
          Service
          <br />
          Analytics
          <br />
          Wallet
          <br />
          My Profile
          <br />
          My Messages
        </div>
        <div className="py-4 align-top">
          Terms & Conditions
          <br />
          Privacy Policy
          <br />
          Payment Policy
          <br />
          Booking Policy
          <br />
          FAQ
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <FirstTable />;
};

export default Footer;
