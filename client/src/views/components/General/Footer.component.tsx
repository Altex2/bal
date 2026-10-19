import React from "react";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTiktok } from "react-icons/bi";
export default function Footer() {
  return (
    <>
      <div className="grid place-items-center text-white mt-8">
        <div className=" flex justify-between gap-5 mb-5">
          <a
            href="https://www.instagram.com/ligastudentilorelectronistilse/"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" bg-white rounded-full p-1 text-4xl">
              <AiOutlineInstagram color="black" />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@lsebucuresti.ro"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" bg-white rounded-full p-1 text-4xl">
              <BiLogoTiktok color="black" />
            </div>
          </a>
          <a
            href="https://www.youtube.com/@lsebucuresti"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" bg-white rounded-full p-1 text-4xl">
              <AiFillYoutube color="black" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/lseorgro"
            target="_blank"
            rel="noreferrer"
          >
            <div className=" bg-white rounded-full p-1 text-4xl">
              <BiLogoFacebook color="black" />
            </div>
          </a>
        </div>
        <div className="w-full">
          <hr className="text-white border-2 w-4/5 mx-auto" style={{ borderColor: '#F2F2F2' }} />
        </div>
        <div className=" mt-5 text-lg">
          <p className=" text-center">
            Copyright © LSE Bucuresti. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </>
  );
}
