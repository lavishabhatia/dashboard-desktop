import React from "react";
import wallpaper from "../../../public/Images/Wallpaper.png";

const Container = ({ isImageFull, children }) => {
  return (
    <div className={`flex ${isImageFull ? "w-full h-full" :"min-w-[100vw] mx-auto min-h-[100vh]"} relative `}>
      <div
        className={`w-full h-full fixed ${
          isImageFull ? "" : "grid grid-cols-2"
        } gap-4 z-[-1000]`}
      >
        <img
          src={wallpaper}
          className={` h-full ${
            isImageFull
              ? " object-fill w-full aspect-auto"
              : "border rounded-tr-[90px] object-cover"
          }  `}
        />

        {!isImageFull && (
          <div>
            <img
              src={wallpaper}
              className=" h-full object-cover border rounded-tl-[80px]"
            />
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Container;
