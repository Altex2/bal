import React, { useState } from "react";

// Banner shown between the home page sections.
//
// The poster itself is shown whole (never cropped or stretched) and centred,
// while a blurred, enlarged copy of the same image fills the rest of the strip
// and fades into the black page above and below. Works with any image shape:
// wide, square or tall posters all look intentional.

type Props = {
  src: string;
  alt?: string;
};

export default function PosterBanner({ src, alt = "" }: Props) {
  // width / height of the poster, read once it loads; used so the frame
  // always hugs the image exactly, whatever its shape
  const [ratio, setRatio] = useState(1.5);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      {/* glow: blurred copy filling the whole strip */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover scale-125 blur-2xl opacity-60 select-none pointer-events-none"
      />
      {/* fade the glow into the black page above/below and at the sides */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/10 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

      {/* the poster itself, whole and sharp */}
      <div
        className="relative w-full h-full flex items-center justify-center py-4 md:py-6"
        style={{ containerType: "size" }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          onLoad={(e) => {
            const { naturalWidth: w, naturalHeight: h } = e.currentTarget;
            if (w && h) setRatio(w / h);
          }}
          // as big as fits: full banner height, unless that would be wider than 90% of it
          style={{ height: `min(100cqh, ${90 / ratio}cqw)`, width: "auto" }}
          className="rounded-xl ring-1 ring-white/15 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
        />
      </div>
    </div>
  );
}
