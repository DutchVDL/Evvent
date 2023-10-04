import React from "react";
import Navigation from "./body/Navigation";
import Widgets from "./body/Widgets";
import Footer from "./Footer";

function Body() {
  return (
    <div className="w-full lg:w-[80%]">
      <Navigation />
      <Widgets />
    </div>
  );
}

export default Body;
