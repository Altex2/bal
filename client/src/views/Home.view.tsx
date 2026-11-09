import { useRef, useEffect, useState, type ReactNode } from "react";
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

// DJ (poster + mix of photos from the other couples)
import djPoster from "../assets/img/posters/America.jpg";
import djLeft1 from "../assets/img/concurenti/Concurenti2026/p1/matei.jpg";
import djRight1 from "../assets/img/concurenti/Concurenti2026/p6/ariana.jpg";
import djLeft2 from "../assets/img/concurenti/Concurenti2026/p3/antonio.jpg";
import djRight2 from "../assets/img/concurenti/Concurenti2026/p5/beatrice.jpg";

// p6
import gods from "../assets/img/concurenti/Concurenti2026/p6/p6Poster.jpg";
import cicagods1 from "../assets/img/concurenti/Concurenti2026/p6/p6Left.jpg";
import cicagods2 from "../assets/img/concurenti/Concurenti2026/p6/p6Right.jpg";
import gods1 from "../assets/img/concurenti/Concurenti2026/p6/p6LeftP.jpg";
import gods2 from "../assets/img/concurenti/Concurenti2026/p6/p6RigthP.jpg";

//componente
import "intersection-observer";
import Singer from "./components/General/Singer.component";
import DJ from "./components/General/DJ.component";
import Description from "./components/General/Description.component";
import Locatie from "./components/General/Locatie.component";
import MasterCeremonies from "./components/General/MasterCeremonies.component";
import Gallery from "./components/General/Gallery.component";
import Footer from "./components/General/Footer.component";
import Sponsori from "./components/General/Sponsori.component";

// Below Tailwind's `md` breakpoint the parallax layout can't fit the content
// (each layer is a fixed fraction of the viewport height), so text and images
// spill into the next section. On mobile we render a normal stacked layout.
const MOBILE_QUERY = "(max-width: 767px)";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () =>
      typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches,
  );

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_QUERY);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", onChange);
    setIsMobile(mql.matches);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

type MobileSection = {
  poster: string;
  /** Tailwind height class for this banner on mobile (default h-[55vh]) */
  bannerHeight?: string;
  posterPosition?: string;
  content: ReactNode;
};

const mobileSections: MobileSection[] = [
  { poster: first, posterPosition: "50% 0%", content: <Description /> },
  { poster: jokercity, posterPosition: "center 50%", content: <Singer /> },
  { poster: djPoster, posterPosition: "center 60%", content: <DJ /> },
  {
    poster: angelvsdemon,
    posterPosition: "center 60%",
    content: <MasterCeremonies />,
  },
  { poster: pirmaids, posterPosition: "center 10%", content: <Sponsori /> },
  { poster: piratiland, bannerHeight: "h-[75vh]", content: <Gallery /> },
  { poster: gods, content: <Locatie /> },
];

const MobileHome = () => (
  <>
    <Header />
    <main className="bg-black min-h-screen overflow-x-hidden">
      <section
        className="relative w-full h-[100svh] bg-cover bg-center"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="h-full w-full flex items-center justify-center px-4">
          <h1 className="text-4xl text-gray-300 font-bold bg-black/70 px-8 py-6 rounded-full text-center">
            Balul Bobocilor
          </h1>
        </div>
      </section>

      {mobileSections.map((section, i) => (
        <section key={i} className="w-full">
          <div
            className={`w-full ${section.bannerHeight ?? "h-[55vh]"} bg-cover`}
            style={{
              backgroundImage: `url(${section.poster})`,
              backgroundPosition: section.posterPosition ?? "center",
            }}
          >
            <div className="w-full h-full bg-black/50" />
          </div>
          <div className="w-full py-12">{section.content}</div>
        </section>
      ))}

      <div className="pb-8">
        <Footer />
      </div>
    </main>
  </>
);

const Home = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileHome /> : <DesktopHome />;
};

const DesktopHome = () => {
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
        <Parallax ref={parallax} pages={8.91}>
          <ParallaxLayer
            offset={0}
            factor={9}
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
            factor={0.55}
            speed={0.5}
            style={{
              backgroundImage: `url(${first})`,
              backgroundSize: "cover",
              backgroundPosition: "50% 0%",
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
          <ParallaxLayer offset={1.55} factor={1.1} speed={0.5}>
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Description />
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            factor={0.55}
            speed={0.5}
            style={{
              backgroundImage: `url(${jokercity})`,
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
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
          <ParallaxLayer
            offset={2.55}
            factor={1.1}
            speed={0.5}
            ref={elementRef}
          >
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%]  md:h-[70%] md:mb-20 h-[70%] w-[100%] ">
                <Singer />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            factor={0.55}
            speed={0.5}
            style={{
              backgroundImage: `url(${djPoster})`,
              backgroundSize: "cover",
              backgroundPosition: "center 0%",
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
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="djLeft1"
                src={djLeft1}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
              <img
                alt="djRight1"
                src={djRight1}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
            </div>
            <div className="hidden md:flex justify-between mt-40 md:mt-20">
              <img
                alt="djLeft2"
                src={djLeft2}
                className="transform md:w-[17%] w-[40%] rotate-6 scale-[85%]"
              />
              <img
                alt="djRight2"
                src={djRight2}
                className="transform md:w-[17%] w-[40%] -rotate-6 scale-[85%]"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3.55} factor={1.1} speed={0.5}>
            <div className="w-full h-full flex justify-center items-center">
              <div className="md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <DJ />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={4}
            factor={0.55}
            speed={0.5}
            style={{
              backgroundImage: `url(${angelvsdemon})`,
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
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
          <ParallaxLayer
            offset={4.55}
            factor={1.1}
            speed={0.5}
            ref={elementRef}
          >
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <MasterCeremonies />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            factor={0.55}
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
            offset={5.7}
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
          <ParallaxLayer
            offset={5.55}
            factor={1.1}
            speed={0.5}
            ref={elementRef}
          >
            <div className="  w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Sponsori />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6}
            factor={0.8}
            speed={0.5}
            style={{
              backgroundImage: `url(${piratiland})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={6.95}
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
          <ParallaxLayer
            offset={6.8}
            factor={1.1}
            speed={0.5}
            ref={elementRef}
          >
            <div className=" w-full h-full flex justify-center items-center">
              <div className="  md:w-[60%] md:h-[70%] md:mb-20 h-[70%] w-[100%]">
                <Gallery />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={7.25}
            factor={0.55}
            speed={0.5}
            style={{
              backgroundImage: `url(${gods})`,
              backgroundSize: "cover",
            }}
          >
            <div className="w-full h-full bg-black/50"></div>
          </ParallaxLayer>
          <ParallaxLayer
            offset={7.95}
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
          <ParallaxLayer
            offset={7.8}
            factor={1.1}
            speed={0.5}
            ref={elementRef}
          >
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
