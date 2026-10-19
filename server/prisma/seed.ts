import "dotenv/config";
import { prisma } from "../lib/prisma.js";

// Same ids and genders as client/src/assets/config/Concurenti.tsx
const concurenti = [
  { id: "1", name: "Dobre Bogdan", gender: "M" },
  { id: "2", name: "Preda Maria Bianca", gender: "F" },
  { id: "3", name: "Cretu Sebastian-Andrei", gender: "M" },
  { id: "4", name: "Cretu Sebastian-Andrei va susține singur show-ul", gender: "F" },
  { id: "5", name: "Popescu Andrei-Cristian", gender: "M" },
  { id: "6", name: "Ionila Raluca-Maria", gender: "F" },
  { id: "7", name: "Roiniță Teodor", gender: "M" },
  { id: "8", name: "Constantinescu Maria-Francesca", gender: "F" },
  { id: "9", name: "Dragne Marius Gabriel", gender: "M" },
  { id: "10", name: "Bușe Cristina-Iasmina", gender: "F" },
  { id: "11", name: "Ion Matei-Dumitru", gender: "M" },
  { id: "12", name: "Țugulescu Ștefania-Andreea", gender: "F" },
];

// Upsert keeps existing vote counts when the seed is run again
for (const c of concurenti) {
  await prisma.concurent.upsert({
    where: { id: c.id },
    update: { name: c.name, gender: c.gender },
    create: c,
  });
}

console.log(`Seeded ${concurenti.length} concurenti`);
await prisma.$disconnect();
