# Self-hosting

The site is two packages:

- `server/`: Express + Better Auth + Prisma (PostgreSQL). Serves `/api/auth/*` (Better Auth), `/api/vote`, `/api/admin/*`, and in production the React build.
- `client/`: the React app (Create React App).

Requirements: Node 20+, PostgreSQL 14+, an SMTP account for the verification emails.

## Local development

```sh
cd server
cp .env.example .env        # set DATABASE_URL and BETTER_AUTH_SECRET
npm install                 # also runs prisma generate
npm run db:migrate          # creates the tables
npm run db:seed             # inserts the 12 concurenti
npm run dev                 # API on http://localhost:4000

cd ../client
npm install
npm start                   # http://localhost:3000, /api is proxied to :4000
```

Without `SMTP_HOST` the verification and reset codes are printed in the server console.

## Production

```sh
cd client && npm ci && npm run build
cd ../server && npm ci
npm run db:deploy           # applies prisma/migrations
npm run db:seed             # safe to run again, vote counts are kept
NODE_ENV=production npm start
```

The server serves `../client/build` (or `CLIENT_BUILD_DIR`) on the same origin as the API, so one process on one port is the whole site. Put it behind nginx or Caddy for HTTPS and set:

- `BETTER_AUTH_URL=https://your-domain`
- `TRUSTED_ORIGINS=https://your-domain`
- `BETTER_AUTH_SECRET` to a random value (`openssl rand -base64 32`)
- the `SMTP_*` variables

## Admin roles

The `admin` column on the `user` table holds `admin`, `superadmin` or null. It cannot be set through the API; set it in the database:

```sql
UPDATE "user" SET admin = 'superadmin' WHERE email = 'someone@upb.ro';
```

`admin` sees the user list at `/admin-console`. `superadmin` also sees who each user voted for, and the standings at `/super-admin-console`.

## Concurenti

The ids in `server/prisma/seed.ts` must match `idConcurent` in `client/src/assets/config/Concurenti.tsx`. When the list changes, update both and run `npm run db:seed`.
