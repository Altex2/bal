import React from "react";
import PozaDesk from "../../../assets/img/MC/mc.png";
import PozaMobil from "../../../assets/img/MC/mc.png";

export default function MasterCeremonies() {
  return (
    <>
      <div className=" w-full  h-full flex items-center justify-center mt-10 md:mt-6">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full mb-10 md:mb-0">
            <img
              className=" hidden md:block rounded-lg scale-[90%]"
              src={PozaDesk}
              alt="MasterOfCeremonies"
            />
            <img
              className=" block md:hidden rounded-lg"
              src={PozaMobil}
              alt="MasterOfCeremonies"
            />
          </div>
          <div className="text-gray-300 md:mt-16  ">
            <div className="text-2xl font-bold flex justify-center mb-10">
              <p>MC Iova</p>
            </div>
            <div className="h-auto w-auto flex items-center justify-center">
              <p className=" text-justify mx-8 mb-20 text-xs md:text-sm">
                DJ IOVA va fi alături de noi, cu cele mai tari beat-uri, care
                transformă ringul de dans în locul unde se scriu cele mai
                frumoase amintiri!
                <br />
                <br />
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
