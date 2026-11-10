import React from "react";

import mobiles from "../../../assets/img/ComponentImages/2025/artist.png";
import Ramniceanu from "../../../assets/img/ComponentImages/2025/artist.png";

export default function Singer() {
  return (
    <>
      <div className=" w-full  h-full">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full">
            <img
              className="hidden md:block w-full aspect-square object-cover rounded-full"
              src={Ramniceanu}
              alt="Singer"
            />
            <img
              className="block md:hidden w-full aspect-square object-cover rounded-full"
              src={mobiles}
              alt="Singer"
            />
          </div>
          <div className=" text-gray-300 md:mt-10 ">
            <div className=" text-2xl mt-10 md:mt-0 md:text-3xl font-bold flex justify-center">
              <p>Mariano</p>
            </div>
            <div className="h-auto w-auto flex items-center justify-center">
              <p className=" text-justify mx-8 text-xs md:text-sm my-10 ">
                Pentru a da un plus de energie și spectacol serii, Balul
                Bobocilor ETTI 2026 îl are ca invitat special pe Mariano.
                Cunoscut pentru vocea sa inconfundabilă și vibe-ul puternic pe
                care îl transmite, Denis promite un show plin de intensitate și
                emoție.
                <br />
                <br /> Prestațiile lui Mariano cuceresc prin energie, dinamism și felul firesc în care se conectează cu publicul. În această seară specială, el va aduce un plus de magie balului și va transforma apariția sa într-un moment de neuitat.
                <br />
                <br /> Pregătiți-vă pentru un spectacol care va amplifica
                farmecul unei nopți în care destinul prinde viață.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
