import "dotenv/config";
import { PrismaClient } from "./prisma/generated/prisma/client/index";

const prisma = new PrismaClient({
  log: ["error"],
});

async function testConnection() {
  console.log("⏳ Se încearcă conectarea la baza de date prin Prisma...\n");

  try {
    // 1. Inițiere conexiune
    await prisma.$connect();
    console.log("✅ Conexiune stabilită cu succes!\n");

    // 2. Query de test raw pentru a verifica starea serverului PostgreSQL
    const result: any = await prisma.$queryRaw`
      SELECT 
        current_database() AS database_name, 
        current_user AS user_name, 
        version() AS pg_version
    `;

    console.log("📊 Detalii bază de date:");
    console.log(`   - Nume DB:   ${result[0]?.database_name}`);
    console.log(`   - Utilizator: ${result[0]?.user_name}`);
    console.log(`   - Versiune:  ${result[0]?.pg_version.split(",")[0]}\n`);

    // 3. Verificare tabele din proiect (opțional)
    try {
      const concurentiCount = await prisma.concurent.count();
      console.log(
        `🏆 Tabela 'concurenti': ${concurentiCount} concurenți găsiți.`,
      );
    } catch {
      console.log(
        "ℹ️ Tabela 'concurenti' nu a fost găsită sau nu este încă migrată.",
      );
    }

    try {
      const userCount = await prisma.user.count();
      console.log(`👥 Tabela 'user': ${userCount} utilizatori găsiți.`);
    } catch {
      console.log(
        "ℹ️ Tabela 'user' nu a fost găsită sau nu este încă migrată.",
      );
    }

    console.log("\n🎉 Totul funcționează conform așteptărilor!");
  } catch (error: any) {
    console.error("❌ Eroare la conectarea la baza de date:\n");

    if (error.code === "P1001") {
      console.error(
        "👉 Nu s-a putut ajunge la serverul de DB. Verifică host-ul, portul și firewall-ul.",
      );
    } else if (error.code === "P1000") {
      console.error(
        "👉 Autentificare eșuată. Verifică username-ul și parola din DATABASE_URL.",
      );
    } else if (error.code === "P1003") {
      console.error("👉 Baza de date specificată nu există.");
    } else {
      console.error(error.message || error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

testConnection();
