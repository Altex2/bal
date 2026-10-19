import React from "react";

export default function Locatie() {
  return (
    <>
      <div
        className="flex justify-center text-4xl "
        data-swiper-parallax="-200"
      >
        <p className="font-bold text-gray-300  mb-10 text-center">
          Where memories are made{" "}
        </p>
      </div>
      <div className="grid md:grid-cols-4 place-items-center md:mx-5">
        <div className="md:pl-4 md:col-span-1 flex justify-center"></div>
        <div className="md:pl-4 md:col-span-2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.7047120318412!2d26.045707419641776!3d44.444508875983914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201eeb79197db%3A0xa9698f28c8b84184!2sPrincess%20Club!5e0!3m2!1sro!2sro!4v1761416967610!5m2!1sro!2sro"
            width="300" 
            height="300" 
            loading="lazy" 
            className="rounded-lg block md:hidden"
            title='telefon'
          ></iframe>
         
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1087.7047120318412!2d26.045707419641776!3d44.444508875983914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201eeb79197db%3A0xa9698f28c8b84184!2sPrincess%20Club!5e0!3m2!1sro!2sro!4v1761416967610!5m2!1sro!2sro"
            width="600"
            height="450"
            loading="lazy"
            className="rounded-lg hidden md:block"
            title='pc'
           ></iframe>

        </div>
      </div>
      <div className="mt-10 md:mt-0 text-gray-300">
        <p className="text-4xl font-bold mb-4 text-center mt-10">Princess Club</p>
        <p className="text-xl text-center ">
         Splaiul Independenței 319, București 060032
        </p>
      </div>
    </>
  );
}
