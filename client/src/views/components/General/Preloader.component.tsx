import React, { useContext } from "react";
import { PreloaderContext } from "./PreloaderProvider.component";
import LogoWhite from "../../../assets/img/Background/colaj.jpg";

const Preloader = () => {
  const { isLoading }: any = useContext(PreloaderContext);

  if (!isLoading) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50  duration-300"
      style={{ backgroundImage: `URL(${LogoWhite})` }}
    >
      <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
        <h1 className="sm:text-5xl text-4xl text-center text-gray-300 font-bold bg-black/70 p-10 rounded-full">
          Balul Bobocilor{" "}
          <p className="mt-2 sm:text-lg text-xl text-center">
            {" "}
            Where memories are made
          </p>
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
