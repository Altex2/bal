import React from "react";


import mobiles from "../../../assets/img/ComponentImages/2025/mobileSinger.jpg"
import Ramniceanu from "../../../assets/img/ComponentImages/2025/DRamneceanuv2.jpg"

export default function Singer() {
  return (
    <>
      <div className=" w-full  h-full">
        <div className="grid md:grid-cols-2">
          <div className="w-full h-full">
            <img
              className=" hidden md:block rounded-full"
              src={Ramniceanu}
              alt="Singer"
            />
            <img
              className=" ml-10 block md:hidden rounded-full"
              src={mobiles}
              alt="Singer"
            />
          </div>
          <div className=" text-gray-300 mt-10 ">
            <div className=" text-2xl mt-10 md:mt-0 md:text-3xl font-bold flex justify-center">
              <p>Denis Ramniceanu</p>
            </div>
            <div className="h-auto w-auto flex items-center justify-center">
            <p className=" text-justify mx-8 text-xs md:text-sm my-10 ">
                Pentru a da un plus de energie și spectacol serii, Balul Bobocilor ETTI 2025 îl are ca invitat
                special pe Denis Ramniceanu. Cunoscut pentru vocea sa inconfundabilă și vibe-ul puternic pe care
                îl transmite, Denis promite un show plin de intensitate și emoție.
              <br />  
                <br /> Prestațiile sale se remarcă prin dinamism, conexiunea autentică cu publicul și energia care
                transformă orice apariție într-un moment memorabil. În această seară specială, Denis Ramniceanu va
                completa atmosfera magică a balului și va ridica sala în picioare.

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
