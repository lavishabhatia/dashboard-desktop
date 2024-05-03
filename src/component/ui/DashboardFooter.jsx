import React from "react";
import Button from "./Button";

import brand from "../../../public/Images/brand.png";

const DashboardFooter = () => {
  return (
    <div className="flex footer-dashboard fixed w-full bg-white/50 bottom-0 p-5 items-center justify-between gap-6 mt-3 mx-4">
      <div className=" relative">
        <Button className={"!rounded-md !w-max px-3 "}>File</Button>

        <div className=" p-7 bg-yellow-400 w-max absolute -top-[100px] left-16 rounded-full rounded-bl-none">
          <p className=" font-medium text-center text-lg">Hello !</p>
          <p className=" text-center font-medium">
            What are your looking for ?
          </p>
        </div>
      </div>

      <div>
        <img src={brand} />
      </div>
    </div>
  );
};

export default DashboardFooter;
