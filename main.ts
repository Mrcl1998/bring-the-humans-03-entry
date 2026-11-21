// Entry for make.fun "Bring the humans with a TikTok ad" (bring-the-humans-03).
//
// The video is the entry: an original 18-second vertical TikTok ad for make.fun,
// made in this session with ffmpeg from the press pack (lockup badge from the
// first frame, referral end card with our own code 9czrtn66 at the end), posted
// publicly on TikTok with the bounty's caption line and our play code.
// This program's only job is to hand the house the video's address: it copies
// VIDEO.json from the repository root into the output directory, where the
// gate reads it. Nothing else is written, nothing is fetched, and the two
// grader runs must produce byte-identical output.
//
// The video itself (not this file) is scored: places go by its real TikTok
// views, most first. See README.md for the ad's story, the caption, and the
// press-pack files used. The repository holds no copy of any press file.
//
// This program uses no network, no wall clock, and no files outside the
// repository, so repeated runs write identical bytes.
//
// Local run, exactly as the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// Afterwards out/VIDEO.json is byte for byte this directory's VIDEO.json.

import { copyFileSync, mkdirSync, chmodSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The grader reads the output as a different user, so the copy must be
// world-readable. The output directory itself is never chmodded here:
// the grader owns it and chmod on it fails for the sandboxed uid.
chmodSync(target, 0o644);
