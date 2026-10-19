import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import Header from "./components/General/Header";
import Carousel from "./components/General/Carousel.component";

const Sponsori = () => {
  const parallax = useRef<IParallax>(null!);
  return (
    <>
      <Header />
      <Parallax
        ref={parallax}
        pages={3.9} // Noi avem 3 Pagini facute cu Parallax Layer si mai avem 0.9 dintr-o pagina lasat gol
        className="w-[100%] h-[100%] bg-green-600"
      >
        {/* Componenta Pagina 1 */}
        <ParallaxLayer
          offset={0}
          className="bg-black w-screen h-screen"
          onClick={() => {
            console.log("Ai apasat pe 1");
          }}
        />
        {/* Componenta Pagina 2 */}
        <ParallaxLayer
          offset={1}
          className="bg-black w-screen h-screen"
          onClick={() => {
            console.log("Ai apasat pe 2");
          }}
        />
        {/* Componenta Pagina 3 */}
        <ParallaxLayer
          offset={2}
          className="bg-black w-screen h-screen"
          onClick={() => {
            console.log("Ai apasat pe 3");
          }}
        />
        {/* Componente care apar pe pagina 0 */}

        <ParallaxLayer offset={0} speed={-0.2} style={{ opacity: 0.6 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ width: "50%", marginLeft: "20%" }}
          />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} speed={0.8} style={{ opacity: 0.2 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{
              display: "block",
              width: "50%",
              marginLeft: "55%",
            }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{
              display: "block",
              width: "40%",
              marginLeft: "15%",
              zIndex: "",
            }}
          />
        </ParallaxLayer>

        {/* Componente care apar pe pagina 2 */}

        <ParallaxLayer offset={1.2} speed={0} style={{ opacity: 0.6 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{
              display: "block",
              width: "50%",
              marginLeft: "10%",
              zIndex: "-10",
            }}
          />

          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{
              display: "block",
              width: "40%",
              marginLeft: "55%",
              zIndex: "-10",
              opacity: "0.8",
            }}
          />
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{
              display: "block",
              width: "30%",
              marginRight: "55%",
              zIndex: "-10",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer offset={3} className="h-[90%]">
          {/*  Componenta incepe la pagina 3 si are dimensiune de 90 % => Pagina are 0.9 inaltime din 1 */}
          <Carousel />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Sponsori;
// {
/* <Parallax
        ref={parallax}
        pages={3}
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#232946",
        }}
      >
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#232946" }}
          onClick={() => {
            parallax.current.scrollTo(2);
          }}
        />
        <ParallaxLayer offset={2} speed={1}></ParallaxLayer>

        <ParallaxLayer offset={1} speed={-0.2} style={{ opacity: 0.6 }}>
          <img
            alt="cloud"
            src="https://freepngimg.com/thumb/cloud/7-cloud-png-image.png"
            style={{ width: "50%", marginLeft: "20%" }}
          />
        </ParallaxLayer>
      </Parallax> */
// }
