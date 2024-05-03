import React from "react";
import calender from "../../assets/Images/Calender.png";
import diary from "../../assets/Images/Diary.png";
import google from "../../assets/Images/Google.png";
import emptybin from "../../assets/Images/Empty-Bin.png";

import View from "./View";

// Type : folder, file , fileType

// fileType : word, excel, powerpoint

const MainContainer = () => {
  const desktopApp = [calender, diary, google, emptybin];

  const screen = [
    { type: "folder", name: "Desktop" },
    { type: "file", fileType: "word", name: "Desktop" },
  ];

  return (
    <>
      <div className="fixed w-full h-full items-center flex justify-end">
        <div className="flex flex-col items-center justify-center h-max mx-4 gap-4 bg-white/50 rounded-3xl py-3 px-1.5 w-max">
          {desktopApp?.map((data, i) => (
            <div className=" " key={i}>
              <img src={data} className="w-12 h-12"/>
            </div>
          ))}
        </div>
      </div>

      <View />
    </>
  );
};

export default MainContainer;
