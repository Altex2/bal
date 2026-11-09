import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Sponsori as SponsoriList, Sponsor } from "../../../assets/config/SponsoriConfig";

// Sponsorii se adaugă / modifică în  src/assets/config/SponsoriConfig.ts
// Componenta de aici nu trebuie atinsă.

const PER_SLIDE_MOBILE = 3;
const PER_SLIDE_DESKTOP = 4;

const chunk = <T,>(items: T[], size: number): T[][] => {
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) out.push(items.slice(i, i + size));
  return out;
};

// Every logo sits in an identical card; the image is scaled to fit inside it
// (object-contain), so wide wordmarks, square badges and any future file size
// all line up the same way.
function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const card = (
    <div className="flex items-center justify-center w-full h-24 md:h-36 p-3 md:p-5 rounded-xl bg-white/5 ring-1 ring-white/10 transition duration-300 hover:bg-white/10">
      <img
        src={sponsor.logo}
        alt={sponsor.name}
        title={sponsor.name}
        loading="lazy"
        draggable={false}
        className="max-w-full max-h-full object-contain"
        // the carousel library forces `width: 100%` on slide images; undo it
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );

  // no url, or an empty one → plain logo, not a link
  const url = sponsor.url?.trim();

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${sponsor.name} (se deschide într-un tab nou)`}
      className="block w-full"
      draggable={false}
      onPointerDown={(e) => (dragStartX = e.clientX)}
      onClick={(e) => {
        // swiping the carousel ends with a click on whatever logo is under
        // the finger; only open the link on a real tap
        if (Math.abs(e.clientX - dragStartX) > 8) e.preventDefault();
      }}
    >
      {card}
    </a>
  ) : (
    card
  );
}

let dragStartX = 0;

function SponsorCarousel({ perSlide, tileWidth }: { perSlide: number; tileWidth: string }) {
  const slides = chunk(SponsoriList, perSlide);
  const multiple = slides.length > 1;

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      showArrows={multiple}
      showIndicators={multiple}
      emulateTouch
      swipeable
      infiniteLoop={multiple}
      autoPlay={multiple}
      interval={5000}
    >
      {slides.map((slide, i) => (
        // pb-10 leaves room for the dots under the logos
        <div key={i} className="flex justify-center gap-3 md:gap-6 px-8 md:px-14 pb-10">
          {slide.map((sponsor) => (
            <div key={sponsor.name} className={tileWidth}>
              <SponsorCard sponsor={sponsor} />
            </div>
          ))}
        </div>
      ))}
    </Carousel>
  );
}

export default function Sponsori() {
  if (SponsoriList.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <h1 className="uppercase mt-10 text-2xl md:text-3xl font-bold whitespace-nowrap p-4 mb-6 text-white">
          Sponsori
        </h1>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <SponsorCarousel perSlide={PER_SLIDE_MOBILE} tileWidth="w-[30%]" />
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <SponsorCarousel perSlide={PER_SLIDE_DESKTOP} tileWidth="w-[22%]" />
      </div>
    </div>
  );
}
