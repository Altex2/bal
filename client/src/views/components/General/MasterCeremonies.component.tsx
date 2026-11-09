import React from "react";
import PozaDesk from "../../../assets/img/ComponentImages/2025/mc.png";
import PozaMobil from "../../../assets/img/ComponentImages/2025/mc.png";

export default function MasterCeremonies() {
  return (
    <>
      <div className=" w-full  h-full flex items-center justify-center mt-10 md:mt-6">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full mb-10 md:mb-0">
            <img
              className="hidden md:block w-full aspect-square object-cover rounded-full"
              src={PozaDesk}
              alt="MasterOfCeremonies"
            />
            <img
              className="block md:hidden w-full aspect-square object-cover rounded-full"
              src={PozaMobil}
              alt="MasterOfCeremonies"
            />
          </div>
          <div className="text-gray-300 md:mt-16  ">
            <div className="text-2xl font-bold flex justify-center mb-10">
              <p>MC Stefan Costea</p>
            </div>
            <div className="h-auto w-auto flex items-center justify-center">
              <p className=" text-justify mx-8 md:mb-20 text-xs md:text-sm">
                Stefan Costea revine în rolul de prezentator, într-o comunitate
                din care a făcut parte și de care a rămas apropiat de-a lungul
                timpului. Cu mai multe ediții ale BBETTI și multe alte
                experiențe de prezentator în spate, este deja o prezență
                familiară pe scenă.
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                <br className="hidden md:block" />
                <br className="hidden md:block" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
