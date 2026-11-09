// ─────────────────────────────────────────────────────────────
//  SPONSORI — lista sponsorilor afișați în carusel
// ─────────────────────────────────────────────────────────────
//  Ca să adaugi un sponsor:
//    1. Pune logo-ul în  src/assets/img/Sponsori/<an>/
//       (PNG transparent e ideal; JPG/WEBP merg și ele.
//        Orice dimensiune / format: logo-ul e scalat automat
//        să încapă în card, fără să fie tăiat sau deformat.)
//    2. Importă-l mai jos.
//    3. Adaugă un obiect în lista `Sponsori`.
//  Ordinea din listă = ordinea din carusel. Slide-urile se
//  împart singure (3 pe telefon, 4 pe desktop).
// ─────────────────────────────────────────────────────────────

import Sponsor2 from "../img/Sponsori/2025/sponsor2.png";
import Sponsor3 from "../img/Sponsori/2025/sponsor3.png";
import Sponsor4 from "../img/Sponsori/2025/sponsor4.jpeg";
import Sponsor5 from "../img/Sponsori/2025/sponsor5.jpg";
import Sponsor6 from "../img/Sponsori/2025/sponsor6.jpeg";
import Sponsor8 from "../img/Sponsori/2025/sponsor8.png";
import Sponsor9 from "../img/Sponsori/2025/sponsor9.png";
import Sponsor10 from "../img/Sponsori/2025/sponsor10.jpg";
import dermEpil from "../img/Sponsori/2025/DermEpil.png";
import escapeParty from "../img/Sponsori/2025/escapeParty.png";
import dyaEvents from "../img/Sponsori/2025/DyaEvents.png";
import nordStrg from "../img/Sponsori/2025/nordstrg.png";
import zyti from "../img/Sponsori/2025/zeyti.jpg";
import moonYoga from "../img/Sponsori/2025/moonYoga.png";
import nextDestination from "../img/Sponsori/2025/nextDestination.jpg";
import sunBlindBooks from "../img/Sponsori/2025/sunblindbooks.png";
import seeUs from "../img/Sponsori/2025/SeeUs.png";
import syrro from "../img/Sponsori/2025/synrro.jpeg";

export type Sponsor = {
  /** Numele sponsorului (folosit ca text alternativ pentru imagine). */
  name: string;
  /** Logo-ul importat mai sus. */
  logo: string;
  /** Opțional: site-ul sponsorului. Dacă e setat, logo-ul devine link. */
  url?: string;
};

export const Sponsori: Sponsor[] = [
  { name: "MINA - Museum of Immersive New Art", logo: Sponsor2 },
  { name: "Challenge Arts", logo: Sponsor4 },
  { name: "Jrack", logo: Sponsor5 },
  { name: "Dya Events", logo: dyaEvents },
  { name: "Escape Party", logo: escapeParty },
  { name: "Happy Cinema", logo: Sponsor10 },
  { name: "Glamo", logo: Sponsor3 },
  { name: "Alexandra Cardel", logo: Sponsor8 },
  { name: "Nord Strg", logo: nordStrg },
  { name: "DermEpil", logo: dermEpil },
  { name: "Zyti", logo: zyti },
  { name: "MoonYoga", logo: moonYoga },
  { name: "Next Destination", logo: nextDestination },
  { name: "SunBlindBooks", logo: sunBlindBooks },
  { name: "SeeUs", logo: seeUs },
  { name: "Mystery Rooms Escape", logo: Sponsor9 },
  { name: "Fără Supărare", logo: Sponsor6 },
  { name: "Syrro", logo: syrro },
  // Exemplu cu link:
  // { name: "Firma X", logo: SponsorX, url: "https://firmax.ro" },
];
