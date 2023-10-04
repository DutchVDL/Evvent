import Image from "next/image";
import Sidebar from "./myComponents/Sidebar";
import Body from "./myComponents/Body";

export default function Home() {
  return (
    <div className="flex gap-5">
      <Sidebar />
      <Body />
    </div>
  );
}
