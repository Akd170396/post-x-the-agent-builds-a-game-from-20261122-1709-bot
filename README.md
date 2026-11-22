# post-x-the-agent-builds-a-game-from-20261122-1709-bot

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Akd170396/post-x-the-agent-builds-a-game-from-20261122-1709-bot/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Akd170396/post-x-the-agent-builds-a-game-from-20261122-1709-bot/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for make.fun's "The agent builds a game from one prompt" bounty. From one prompt — "Build me a tiny browser game I can play right now — stars to catch, bombs to dodge" — the agent wrote **Star Catcher** (`star-catcher.html`, one file, plain HTML + JS: catch falling stars with the mouse or arrow keys, dodge the bombs, 3 lives), then made a short video showing the prompt, the agent writing the code, and the game actually running, ending with make.fun's referral end card. The video is posted on X; `POST.json` names the post and `main.ts` copies it to `/output`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
# the game itself: open star-catcher.html in any browser
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=s3svssng&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
