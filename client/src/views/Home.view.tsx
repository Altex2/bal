import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

import Background from "../assets/img/Background/colaj.jpg";
//media
import Header from "./components/General/Header";

// p1
import first from "../assets/img/posters/2025/first2.jpg";
import first_stanga from "../assets/img/concurenti/Concurenti2026/p1/p1matei11.jpg";
import first_dreapta from "../assets/img/concurenti/Concurenti2026/p1/p1miruna22.jpg";
import avatar1 from "../assets/img/concurenti/Concurenti2026/p1/p1left.jpg";
import avatar2 from "../assets/img/concurenti/Concurenti2026/p1/p1rigth.jpg";

// p2
import joker3 from "../assets/img/concurenti/Concurenti2026/p2/p2GabiLeft.jpg";
import jokercity from "../assets/img/concurenti/Concurenti2026/p2/p2Central.jpg";
import joker1 from "../assets/img/concurenti/Concurenti2026/p2/p2MirunaRight.jpg";
import joker2 from "../assets/img/concurenti/Concurenti2026/p2/p2Left.jpg";
import joker4 from "../assets/img/concurenti/Concurenti2026/p2/p2Rigth.jpg";

//p3
import angelvsdemon from "../assets/img/concurenti/Concurenti2026/p3/p3Poster.jpg";
import angelvsdemon1 from "../assets/img/concurenti/Concurenti2026/p3/p3Left.jpg";
import angelvsdemon2 from "../assets/img/concurenti/Concurenti2026/p3/p3Rigth.jpg";
import adleft from "../assets/img/concurenti/Concurenti2026/p3/p3LeftP.jpg";
import adright from "../assets/img/concurenti/Concurenti2026/p3/p3RigthP.jpg";

// p4
import pirmaids from "../assets/img/concurenti/Concurenti2026/p4/p4Poster.jpg";
import egiptleft from "../assets/img/concurenti/Concurenti2026/p4/p4Left.jpg";
import egiptright from "../assets/img/concurenti/Concurenti2026/p4/p4Rigth.jpg";
import eleft from "../assets/img/concurenti/Concurenti2026/p4/p4LeftP.jpg";
import eright from "../assets/img/concurenti/Concurenti2026/p4/p4RigthP.jpg";

//p5
import piratileft from "../assets/img/concurenti/Concurenti2026/p5/p5Left.jpg";
import piratright from "../assets/img/concurenti/Concurenti2026/p5/p5Rigth.jpg";
import corabie from "../assets/img/concurenti/Concurenti2026/p5/p5LeftP.jpg";
import piraticeva from "../assets/img/concurenti/Concurenti2026/p5/p5RigthP.jpg";
import piratiland from "../assets/img/concurenti/Concurenti2026/p5/p5Poster.jpg";

// p6
import gods from "../assets/img/concurenti/Concurenti2026/p6/p6Poster.jpg";
import cicagods1 from "../assets/img/concurenti/Concurenti2026/p6/p6Left.jpg";
import cicagods2 from "../assets/img/concurenti/Concurenti2026/p6/p6Right.jpg";
import gods1 from "../assets/img/concurenti/Concurenti2026/p6/p6LeftP.jpg";
import gods2 from "../assets/img/concurenti/Concurenti2026/p6/p6RigthP.jpg";

//componente
import "intersection-observer";
import Singer from "./components/General/Singer.component";
import Description from "./components/General/Description.component";
import Locatie from "./components/General/Locatie.component";
import MasterCeremonies from "./components/General/MasterCeremonies.component";
import Gallery from "./components/General/Gallery.component";
import Footer from "./components/General/Footer.component";
import Sponsori from "./components/General/Sponsori.component";

const Home = () => {
  const parallax = useRef<IParallax>(null!);

  const elementRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection: IntersectionObserverCallback = (entries) => {
      // Restul codului pentru gestionarea observării
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div>
        <Parallax ref={parallax} pages={7.51}>
          <ParallaxLayer
            offset={0}
            factor={8}
            speed={0}
            style={{
              backgroundColor: "#000000",
              backgroundSize: "cover",
            }}
          >
            <div
              className="w-full h-screen absolute top-0 left-0"
              style={{ backgroundImage: `url(${Background})` }}
            >
              <div className=" max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
                <h1 className="sm:text-5xl text-4xl text-gray-300 font-bold bg-black/70 p-10 rounded-full">
                  Balul Bobocilor
                </h1>
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${first})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 20%",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={1.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="first"
                src={first_stanga}
                className="transform md:w-[20%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="first"
                src={first_dreapta}
                className="transform md:w-[17%] w-[40%]   rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="avatar1"
                src={avatar1}
                className="transform -rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
              <img
                alt="avatar2"
                src={avatar2}
                className=" rotate-6  md:w-[17%] w-[40%] scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} factor={1.1} speed={0.5}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Description />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${jokercity})`,
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={2.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="joker1"
                src={joker1}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="missing"
                src={joker3}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="joker2"
                src={joker2}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="missing"
                src={joker4}
                className="  md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%]  md:h-[70%] md:mb-20 h-[70%] w-[100%] ">
                <Singer />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${angelvsdemon})`,
              backgroundSize: "cover",
              backgroundPosition: "center 60%",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="angelvsdemon1"
                src={angelvsdemon1}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
              <img
                alt="angelvsdemon2"
                src={angelvsdemon2}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between mt-40 md:mt-20 ">
              <img
                alt="adleft"
                src={adleft}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="adright"
                src={adright}
                className="  md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <MasterCeremonies />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${pirmaids})`,
              backgroundSize: "cover",
              backgroundPosition: "center 10%",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="egiptleft"
                src={egiptleft}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
              <img
                alt="egiptright"
                src={egiptright}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between  mt-40 md:mt-20 ">
              <img
                alt="eright"
                src={eleft}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="eright"
                src={eright}
                className=" rotate-6  md:w-[17%] w-[40%] scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={4.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Sponsori />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${piratiland})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="piratileft"
                src={piratileft}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="piratright"
                src={piratright}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between  mt-40 md:mt-20 ">
              <img
                alt="corabie"
                src={corabie}
                className="transform -rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
              <img
                alt="piraticeva"
                src={piraticeva}
                className=" md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={5.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Gallery />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            factor={0.4}
            speed={0.5}
            style={{
              backgroundImage: `url(${gods})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6.7}
            speed={2}
            style={{ opacity: 0.6 }}
            factor={0.5}
          >
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="cicagods1"
                src={cicagods1}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />

              <img
                alt="cicagods2"
                src={cicagods2}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between m-4 mt-40 md:mt-20 ">
              <img
                alt="gods1"
                src={gods1}
                className="transform -rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
              <img
                alt="gods2"
                src={gods2}
                className=" rotate-6 md:w-[17%] w-[40%] scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={6.4} factor={1.1} speed={0.5} ref={elementRef}>
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Locatie />
              </div>
            </div>
            <Footer />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
};

export default Home;
