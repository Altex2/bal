import React from "react";
import { BsVinylFill } from "react-icons/bs";
import PozaDesk from "../../../assets/img/MC/mc.png";
import PozaMobil from "../../../assets/img/MC/mc.png";

// ─────────────────────────────────────────────────────────────
//  DJ — completează aici numele, poza și descrierea
// ─────────────────────────────────────────────────────────────
//  Poza: pune fișierul în  src/assets/img/DJ/  și importă-l, ex:
//    import DJPhoto from "../../../assets/img/DJ/dj.png";
//  apoi scrie  const DJ_PHOTO: string | null = DJPhoto;
//  Cât timp e `null`, se afișează un disc în locul pozei.
// ─────────────────────────────────────────────────────────────

const DJ_NAME = "Iova"; // TODO: numele DJ-ului
const DJ_PHOTO: string | null = PozaDesk; // TODO: poza DJ-ului
const DJ_TEXT = [
  "DJ IOVA va fi alături de noi, cu cele mai tari beat-uri, care transformă ringul de dans în locul unde se scriu cele mai frumoase amintiri!",
];

export default function DJ() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {/* On desktop the photo sits on the right, mirroring the artist section above */}
      <div className="grid md:grid-cols-2 items-center gap-10 md:gap-6 w-full">
        <div className="order-1 md:order-2 flex justify-center">
          {DJ_PHOTO ? (
            <img
              src={DJ_PHOTO}
              alt={DJ_NAME}
              className="w-full aspect-square object-cover rounded-full"
            />
          ) : (
            <div className="w-56 h-56 md:w-80 md:h-80 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
              <BsVinylFill className="text-gray-300/70 w-1/2 h-1/2 animate-[spin_6s_linear_infinite]" />
            </div>
          )}
        </div>

        <div className="order-2 md:order-1 text-gray-300">
          <div className="text-2xl md:text-3xl font-bold flex justify-center mb-8 md:mb-10">
            <p>{DJ_NAME}</p>
          </div>
          <div className="mx-8 space-y-4 text-justify text-xs md:text-sm">
            {DJ_TEXT.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
