# 4 Colors Arena — Reconstructed Source

This project is a clean, editable Next.js/TypeScript reconstruction based on the exported build in `Final Project UNO.zip`.

## Run

Requirements: Node.js 20+ (Node 22 recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Important

The original `.tsx` source was not present in the export. The `lib/game.ts` and `lib/physicsLogs.ts` logic are reconstructed from the surviving production JavaScript bundles. UI is reconstructed as maintainable TypeScript/React components; it is not byte-for-byte identical to the lost source.

Original exported assets are preserved under `public/original/`.
