import React from "react";
import PozaDesk from "../../../assets/img/MC/MC2025.jpg";
import PozaMobil from "../../../assets/img/MC/mobile.jpg";

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
              <p>MC Leonardo Dumitrescu</p>
            </div >
            <div className="h-auto w-auto flex items-center justify-center">
            <p className=" text-justify mx-8 mb-20 text-xs md:text-sm">
            Leonardo Dumitrescu, voluntar de încredere al Ligii Studenților Electroniști, 
            și-a descoperit pasiunea pentru prezentarea de evenimente încă din primele proiecte studențești. 
            Energia lui debordantă și abilitatea naturală de a interacționa cu publicul îl transformă într-un
             MC care captează atenția din primul minut.
              <br />
              <br /> Spontaneitatea, umorul și talentul său de povestitor creează o atmosferă vibrantă la fiecare eveniment
               pe care îl moderează. Leonardo spune adesea că reacțiile publicului sunt sursa lui de motivație, inspirându-l 
               să se reinventeze de fiecare dată.
              <br />
              <br /> Pentru el, scena nu este doar un loc - este spațiul unde transformă simple momente în experiențe memorabile.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
