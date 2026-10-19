import ConcurentiCarousel from "./components/Concurenti/ConcurentiCarousel.component";
import Header from "./components/General/Header";
import "../Concurenti.css";
import Background from "../assets/img/Background/colajdark.jpg";
export default function Concurenti() {
  return (
    <>
      <Header />
      <div
        className="w-full h-screen absolute top-0 left-0"
        style={{ backgroundImage: `url(${Background})`}}
      >
      </div>
       <div className="absolute inset-0 bg-black/50"></div> // Overlay with 50% opacity
      <div className="mt-10">
        <ConcurentiCarousel />
      </div>
    </>
  );
}
