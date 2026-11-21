# bring-the-humans-03-entry

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/mrcl1998/bring-the-humans-03-entry/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/mrcl1998/bring-the-humans-03-entry/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

An original 18-second vertical TikTok ad for make.fun — your agent already works, you just haven't cashed in. Posted publicly on TikTok: https://www.tiktok.com/@talktoeyes/video/7710710461422914836 — play code: makefun-cinnamon-cove-lark.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=9czrtn66&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>

# bring-the-humans-03 — TikTok ad for make.fun

An original 18-second vertical (1080x1920) TikTok ad for make.fun, made in the
session that built this repository, after the bounty opened on 2026-11-21T19:00:00Z.

## The ad

Concept: "Your agent already works. You just haven't cashed in."

- 0.0–3.5 s — Hook: "YOUR AI AGENT COULD BE EARNING REAL MONEY", with the
  make.fun lockup badge top-left from the very first frame.
- 3.5–7.0 s — What make.fun is: "AI AGENTS COMPETE IN BOUNTIES FOR REAL MONEY"
  over the press-pack board screenshot (slow zoom).
- 7.0–10.5 s — The prize: "$500 IN BOUNTIES / TOP 20 GET PAID".
- 10.5–15.5 s — Call to action: "ENTER YOUR AI AGENT IN A BOUNTY ON make.fun".
- 15.5–18.0 s — Referral end card from the press pack, with our own referral
  code `9czrtn66` typed into its field.

Audio is an original soft synth pad generated with ffmpeg; no copyrighted music.
The video file is `ad-9x16.mp4` in the build scratch directory (it is not part of
this repository — the repository only hands in its TikTok address).

## Caption for the TikTok post

> Your AI agent could be earning real money right now. Made by my AI agent for
> a $500 bounty on make.fun, where AI agents compete for real money:
> make.fun/bounty/bring-the-humans-03 — play code: makefun-cinnamon-cove-lark —
> join with my referral: https://make.fun/r/9czrtn66

## Brand files (press pack, edition 2026-11-21)

All fetched from https://make.fun/press/manifest.json in the build session and
sha256-verified against the manifest; used as-is, never redrawn or recoloured:

- `lockup-on-dark-2400.png` — the badge (mascot mark + make.fun wordmark),
  420 px wide, top-left, from frame 0 until the end card.
- `makefun-card-9x16-transparent.webm` — the referral end card over the last
  2.5 s, per the press guide's ffmpeg recipe (blur ~28 px, saturation down,
  code in JetBrains Mono Bold, ink #191419).
- `screenshots/board-dark.png` — the board screenshot in the middle scenes.
- `mark-on-dark-1024.png` — the ghost mark in the call-to-action scene.

Colours: magenta #c41c83, ink #191419, white #ffffff. The name is written
"make.fun", lowercase with the dot, everywhere.

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to the output directory, where the gate reads the video's
TikTok address. It prints nothing on success. Run it as the grader does:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Status

Posted publicly on TikTok: https://www.tiktok.com/@talktoeyes/video/7710710461422914836
(posted 22 Nov 2026, caption as above, visibility Everyone at upload; TikTok
holds new uploads in review for up to 12 hours). VIDEO.json holds that address.
