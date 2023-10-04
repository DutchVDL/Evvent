"use client";

import { IoIosArrowDown } from "react-icons/io";
import { GoDownload } from "react-icons/go";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function dataKeys(week: String, num: String) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="font-bold">{week}</h1>
      <p>Week {num}</p>
    </div>
  );
}

const data = [
  {
    income: 38000,
  },
  {
    name: "17 - 24 Sep 2023",
    income: 50000,
  },
  {
    name: "25 - 1 Sep 2023",
    income: 37500,
  },
  {
    name: "2 - 9 Sep 2023",
    income: 36000,
  },
  {
    name: "10 - 17 Sep 2023",
    income: 45000,
  },
  {
    name: "18 - 25 Sep 2023",
    income: 42000,
  },
  {
    income: 45000,
  },
];

const gradientId = `linear-gradient(315deg, #f5f4f2 0%, #ff4081 74%)`;

export default function MyChart() {
  return (
    <div className="hidden lg:flex flex-col border-gray-200 rounded-lg border-2 py-8 w-[1000px] gap-10 items-center justify-center mt-10 mb-[200px] ">
      <div className="flex justify-between w-[950px] items-center ">
        <h1 className="font-bold text-md">Sale Statistic</h1>
        <div className="flex justify-between items-center gap-5">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Last Month</SelectItem>
              <SelectItem value="dark">Last Year</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex gap-2 items-center bg-pink-600 px-4 py-2 rounded-lg cursor-pointer text-white text-sm ">
            <GoDownload />
            <h3>Download CSV</h3>
          </div>
        </div>
      </div>

      <AreaChart
        stackOffset="expand"
        width={970}
        height={180}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" axisLine={false} />
        <YAxis
          height={15}
          interval={0}
          tickCount={6}
          domain={[25000, 50000]}
          axisLine={false}
        />

        <Tooltip />
        <Area
          type="monotone"
          dataKey="income"
          stroke="#FF1493"
          fill="#FF1493"
        />
      </AreaChart>

      <button className="mx-auto border-[#FF1493] border-[1px] font-bold text-sm text-[#FF1493] py-2 hover:bg-[#FF1493] hover:text-white px-3 rounded-lg ">
        See More Statistic
      </button>
    </div>
  );
}
