import React from "react";
export default function LoadingScreen() {
  return (
    <div className="react-signup-loader-wrapper loading-screen-wrapper ">
      <div className="monday-loader-wrapper flex flex-col items-center">
        <img
          className="h-[90px] w-[90px]"
          alt="monday-loader"
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/loader_transparent_new.gif"
        />
      </div>
    </div>
  );
}
