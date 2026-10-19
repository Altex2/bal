import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Sponsor1 from "../../../assets/img/Sponsori/2025/sponsor1.jpg";
import Sponsor2 from "../../../assets/img/Sponsori/2025/sponsor2.jpg";
import Sponsor3 from "../../../assets/img/Sponsori/2025/sponsor3.jpg";
import Sponsor4 from "../../../assets/img/Sponsori/2025/sponsor4.jpg";
import Sponsor5 from "../../../assets/img/Sponsori/2025/sponsor5.jpg";
import Sponsor6 from "../../../assets/img/Sponsori/2025/sponsor6.png";
import Sponsor7 from "../../../assets/img/Sponsori/2025/sponsor7.png";
import Sponsor8 from "../../../assets/img/Sponsori/2025/sponsor8.png";
import Sponsor9 from "../../../assets/img/Sponsori/2025/sponsor9.jpeg";
import Sponsor10 from "../../../assets/img/Sponsori/2025/sponsor10.jpg";
import Sponsor11 from "../../../assets/img/Sponsori/2025/sponsor11.jpg";
import Sponsor12 from "../../../assets/img/Sponsori/2025/sponsor12.jpg";




export default function Sponsori() {
  return (
    <>
      {/* For Mobile Phone */}
      <div className="md:hidden flex justify-center ">
        <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
          Sponsori <span className=" text-color-accent"></span>
        </h1>
      </div>
      <div className="md:hidden">
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          autoPlay
          interval={5000}
        >
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor1} alt="Sponsor1" />
            </div>
            <div className="">
              <img src={Sponsor2} alt="Sponsor2" />
            </div>
            <div className="">
              <img src={Sponsor3} alt="Sponsor3" />
            </div>
            <div className="">
              <img src={Sponsor4} alt="Sponsor4" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor5} alt="Sponsor5" />
            </div>
            <div className="">
              <img src={Sponsor6} alt="Sponsor6" />
            </div>
            <div className="">
              <img src={Sponsor7} alt="Sponsor7" />
            </div>
            <div className="">
              <img src={Sponsor8} alt="Sponsor8" />
            </div>
          </div>
          {/* Slide 1 */}
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <img src={Sponsor9} alt="Sponsor9" />
            </div>
            <div className="">
              <img src={Sponsor10} alt="Sponsor10" />
            </div>
            <div className="">
              <img src={Sponsor11} alt="Sponsor11" />
            </div>
            <div className="">
              <img src={Sponsor12} alt="Sponsor12" />
            </div>
          </div>
          {/* Slide 1 */}
     
        </Carousel>
      </div>
      {/* For Desktop */}
      <div className="hidden md:block ">
        <div className=" flex justify-center ">
          <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
            Sponsori <span className=" text-color-accent"></span>
          </h1>
        </div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          emulateTouch={true}
          interval={5000}
          autoPlay
        >
          {/* Slide 1 */}
          <div className=" flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor1} alt="Sponsor1" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor2} alt="Sponsor2" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor3} alt="Sponsor3" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor4} alt="Sponsor4" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor5} alt="Sponsor5" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor6} alt="Sponsor6" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor7} alt="Sponsor7" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor8} alt="Sponsor8" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor9} alt="Sponsor9" />
            </div>
          </div>
          {/* Slide 2 */}
          <div className="flex gap-10 mt-5 justify-center items-center">
            <div className="w-1/3">
              <img src={Sponsor10} alt="Sponsor10" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor11} alt="Sponsor11" />
            </div>
            <div className="w-1/3">
              <img src={Sponsor12} alt="Sponsor12" />
            </div>
          </div>
          {/* Slide 2 */}
         
        </Carousel>
      </div>
    </>
  );
}
