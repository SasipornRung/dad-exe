# DAD.EXE — RETIREMENT NOT GUARANTEED

A complete, mobile-first birthday game in HTML, CSS and vanilla JavaScript. No build step, runtime dependencies, API keys, accounts, database, payment flow or backend. Game sounds are synthesized locally and start muted. Fonts and decorative artwork are local/system CSS; there are no external font or image requests.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Accessible page shell, relative asset links, metadata |
| `style.css` | Responsive casino/arcade theme, card flips, confetti, reduced motion |
| `script.js` | Configuration, explicit state machine, AI, persistence, UI, isolated developer demo |
| `README.md` | Setup, deployment, configuration and test checklist |

## Run locally

From this folder, use Python 3 if installed:

```sh
python -m http.server 8080
```

On Windows, `py -3 -m http.server 8080` is another option. Open `http://localhost:8080/`.

If you have Node.js instead, this dependency-free command serves just the three site files:

```sh
node -e "const http=require('node:http'),fs=require('node:fs');const files={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/script.js':'script.js'};http.createServer((req,res)=>{const f=files[new URL(req.url,'http://localhost').pathname];if(!f){res.writeHead(404);res.end('Not found');return;}fs.readFile(f,(err,data)=>{if(err){res.writeHead(500);res.end('Could not read file');return;}res.setHeader('Content-Type',f.endsWith('.html')?'text/html; charset=utf-8':f.endsWith('.css')?'text/css; charset=utf-8':'application/javascript; charset=utf-8');res.end(data);});}).listen(8080,()=>console.log('Open http://localhost:8080/'));"
```

Stop either server with Ctrl+C. Use HTTP locally rather than opening `index.html` as `file://`; file-URL storage behavior varies. There is no `npm install` or build command.

## Deploy to GitHub Pages

1. Create a public GitHub repository, for example `dad-exe`. Public repositories support Pages on GitHub Free.
2. Upload these four files to the root of the `main` branch. Keep their names and capitalization unchanged.
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Save.
4. Wait for the Pages deployment to finish. Open the URL shown by GitHub, usually `https://YOUR-USERNAME.github.io/dad-exe/`.
5. Send that HTTPS URL in LINE. Use the normal URL without `?demo=1` for Dad.

All assets use `./` paths, so both a repository subdirectory and a root Pages site work. No custom domain or paid hosting is necessary. These instructions follow [GitHub's Pages setup documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [publishing-source configuration](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

GitHub repository: https://github.com/SasipornRung/dad-exe

Game URL: https://sasipornrung.github.io/dad-exe/

GitHub Pages publishes this repository's `main` branch from its root folder. The `.nojekyll` file keeps it a plain static site.

## Personalize before gifting

Edit the `CONFIG` object at the top of `script.js`:

- `acceptedAnswers`: accepted boyfriend names, initially `["หมี", "เจ้าหมี"]`. Comparison applies Unicode normalization, removes whitespace (including internal whitespace), and ignores case. This is a family joke, not authentication. Names are visible in the static source; do not store a password here.
- `blessingDays`: the fixed number in the jackpot blessing joke, initially `12`. It is deliberately not a live countdown.
- `rewards`: tiers, voucher amounts, prize descriptions, English jokes and Thai translations. The first **four** entries form the normal card/reroll pool; keep the secret fifth entry last and preserve IDs.
- `bosses`: family labels, judges and nonphysical challenge instructions.
- `rules.chairRepetitions`: optional, unhurried chair repetitions, initially `3`; breaks and stopping are always allowed. Seated challenges are the default.
- `rules.aiMistakeChance`: probability of a random legal move, initially `0.28`. Otherwise O chooses a strategically best move using local minimax. Random turns can miss wins or blocks, so the AI is beatable. No external model is used.
- `rules.aiDelay`: thinking delay in milliseconds, initially `650`.
- `rules.maxAttempts`: `3`, as specified for this birthday game. If adapting the game to another limit, update the matching loss messages and developer fixtures too.
- `text`: core game copy, messages, birthday ending, delivery notice and safety instructions.
- `links`: three ordinary HTTPS search links. The game never requests location itself; Maps can use its own location settings.

Set rewards before Dad begins: saved games store reward IDs, so editing a reward's definition changes the description displayed for that ID. Keep the same storage key/version for the same birthday. Intentionally use a new storage key for a separate future event, not for routine updates.

## Game and save behavior

```text
WELCOME → CARDS → XO
                    ├─ win once → REROLL → choose original or new
                    └─ three losses/draws → keep original
                  → BOSS1 → BOSS2 → VERIFY → GOD
                  → CONFIRM → REWARD → ENDING
                              ↑          │
                              └──────────┘ view locked reward
```

- A Fisher–Yates shuffle is saved when a new game is initialized. All four card backs are identical. The selected card is committed before its flip animation.
- Every X/O move, turn, completed round and used attempt is saved. Refreshing during O's turn resumes that pending turn. Refreshing a result does not charge it twice or restore an attempt.
- A win creates one different candidate from the original four-tier pool. That candidate is saved immediately. Revealing it repeatedly cannot reroll again. Choosing either reward commits once.
- Boss passes, retry counts, selected activity, verification, pending confirmation and final reward are saved. God Mode remains available until a final selection is confirmed; afterward the final reward is immutable through normal controls.
- The reducer rejects actions from the wrong stage and duplicate selections. Completed-game viewing never changes the reward. There is no gameplay reset control.
- The production key is `dad-exe:birthday:v1`. Demo mode uses `dad-exe:birthday:v1:demo` exclusively. Sound is intentionally off again on each page load.
- Saves are written before the interface advances. Unavailable, corrupted or incompatible storage shows a blocking recovery message instead of silently granting fresh attempts. Storage changes in another tab are observed, and actions re-read the latest save.
- This is **browser-local persistence, not server security**. Clearing website data, changing browsers/devices/origins, private-session eviction or editing client-side code can remove or change a save. LINE and Safari may have separate storage; keep using the same browser. There is no cross-device sync or guaranteed cross-tab transactional locking. No pretend backend verification is provided.
- Typed names are compared locally, never transmitted or echoed as raw HTML. Dynamic display values are escaped; error feedback uses `textContent`.

## Rewards and fulfillment

| Tier | Gift recorded |
| --- | --- |
| Bronze | Lazada ฿300 + one lottery ticket |
| Silver | Lazada ฿500 |
| Gold | Lazada ฿500 + one lottery ticket |
| Platinum | Lazada ฿500 + buffet ฿300 |
| Secret Jackpot | Five lottery tickets with five different lottery numbers |

The secret prize is not rendered in normal gameplay before God Mode; its definition necessarily exists in the downloadable JavaScript. The daughter purchases and delivers all gifts separately. The UI explicitly states that it does not issue or redeem vouchers. The five illustrated jackpot tickets show positions 01–05, **not actual lottery numbers**. The family must ensure the five purchased tickets have different numbers.

The game itself makes no purchases, collects no payment, creates no accounts and sends no analytics. Only opening a support link navigates to an external service. No camera, microphone or motion permission is needed.

## Developer demo / test mode

Open `http://localhost:8080/?demo=1` (or append `?demo=1` to the deployed URL). Expand **DEVELOPER DEMO — SEPARATE SAVE** at the bottom. It offers:

- Fresh welcome / reset demo.
- Each of the four revealed card outcomes.
- An XO victory one move away: tap the top-right cell.
- First, second or third loss: tap bottom-left; demo O then completes its top row. This deterministic O override exists only in demo mode.
- A draw one move away: tap bottom-right.
- Either boss, the security check, or unlocked God Mode.
- Each of the five locked reward screens, with access to its birthday ending.

Select a scenario and click **LOAD SCENARIO**. **RESET DEMO** resets only demo progress. Loading a scenario clears any pending AI timer. Exit via the normal URL. The normal game has no links to demo mode and no test controls. This is a convenience switch, not secret admin security; anyone who knows the URL can test a separate save.

For a deliberately fresh production game during development, remove only the production key with the browser's developer storage tools. Never do that to Dad's in-progress game. Damaged saves should be inspected/backed up there rather than automatically erased.

## Manual test checklist

Use demo mode for destructive scenario changes and the normal URL for storage isolation checks. Test both portrait and landscape on an actual iPhone through LINE before gifting.

### Welcome and cards

- [ ] Fresh welcome shows the title, subtitle, Thai line, three trials and large START GAME button. No sound plays automatically; toggle on/off works after a tap.
- [ ] START GAME displays four visually identical face-down cards in a 2×2 grid. No reward names or secret jackpot appear in card labels or hidden card faces before selection.
- [ ] Tap a card rapidly several times and then other cards: exactly one is selected, flips and reveals the full reward and joke.
- [ ] Refresh before choosing: the same saved shuffled deck remains. Refresh after choosing: the same reward and locked card remain.
- [ ] Load Bronze, Silver, Gold and Platinum demo scenarios. Verify each voucher amount, lottery inclusion, rank and joke against the rewards table and configuration.
- [ ] The dissatisfaction message and CONTINUE button lead into XO.

### XO — every outcome

- [ ] A fresh round is empty, Dad starts as X, and the counter says 3 attempts. Occupied cells and moves during O's turn are disabled.
- [ ] Refresh immediately after X moves: O makes exactly one move and the existing board is preserved.
- [ ] Load first loss, tap bottom-left. Counter becomes 2 and the first loss message appears. Refresh: still 2, same result.
- [ ] Load second loss, tap bottom-left. Counter becomes 1 and the second loss message appears.
- [ ] Load third loss, tap bottom-left. Counter becomes 0 and the third loss message appears. CONTINUE reaches boss 1 without a reroll; the original reward stays held.
- [ ] Load draw, tap bottom-right. It reports DRAW and consumes one attempt. TRY AGAIN starts a fresh board with X first without restoring attempts.
- [ ] Play a mixture of losses and draws: exactly three total unsuccessful rounds are allowed; there is no fourth round.
- [ ] Load victory, tap top-right. MIRACLE DETECTED and confetti appear; no more board moves are possible.
- [ ] Reveal the reroll: both complete rewards appear side by side and their IDs differ. Refresh the victory/result/choice screens repeatedly: the same candidate remains.
- [ ] Test keeping the original and, in a separate demo run, keeping the new reward. Both reach boss 1 and persist. Rapid repeated taps cannot choose twice.
- [ ] Play normal rounds: the AI generally wins/blocks strategically but sometimes makes mistakes. It never uses an occupied cell.

### Family bosses and verification

- [ ] Both bosses default to seated games. Switching to the chair activity displays no race or continuous squat requirement, with breaks and stopping allowed.
- [ ] RETRY / REST stays on the current boss, increments its retry count, and loses no reward. Refresh preserves this and the selected activity.
- [ ] PASSED for Mom reaches younger brother. PASSED there reaches FINAL SECURITY CHECK. Repeated taps cannot skip screens.
- [ ] Wrong name shows ACCESS DENIED and the Thai joke, and allows another try. Empty input is required-field validated.
- [ ] Test `หมี`, `เจ้าหมี`, surrounding spaces and internal spaces. For a temporarily configured English alias, mixed case is accepted. Correct answers unlock God Mode without another family member's approval.
- [ ] Type `<img src=x onerror=alert(1)>`: it is treated as an incorrect name and never executed or inserted as HTML.

### God Mode and all endings

- [ ] God Mode shows the dramatic unlock banner and all five rewards. The secret fifth prize appears here for the first time in normal play.
- [ ] For **each** of Bronze, Silver, Gold, Platinum and Secret Jackpot: choose it, inspect confirmation, go back, choose again and confirm. Refresh confirmation before accepting: the pending choice remains unfinalized.
- [ ] Confirm and refresh: the same final reward is locked, no choice controls appear, and the manual-delivery notice is visible. Double taps cannot overwrite it.
- [ ] For **each** of the five final rewards: continue to the birthday ending, read both affectionate messages, then tap VIEW MY FINAL REWARD. The same locked reward returns, including after refreshing either screen.
- [ ] Jackpot shows a crown, gold confetti, five illustrative tickets, five different lottery numbers requirement, millionaire joke, Thai translation, and configured blessing days.
- [ ] Change `blessingDays` in a test copy; the tip updates without any live countdown behavior.
- [ ] All three Heaven Support Center links open the expected Maps/web search, including from LINE. Returning leaves the saved game intact.
- [ ] Tap the karma-balance button: the 403 joke and Thai response appear. This is an intentional joke, not a network error.

### Persistence, mobile and accessibility

- [ ] Run normal and demo URLs side by side: resetting/loading demo scenarios does not alter the normal game.
- [ ] Complete the normal flow: no reset/test controls or secret prize are exposed before their intended screen.
- [ ] Refresh at every stage, including boss retries, successful XO, reroll selection, verification, final confirmation and birthday ending.
- [ ] Open two tabs of the same mode: saved changes sync, and a stale selection does not overwrite completed progress.
- [ ] With a disposable demo save, deny storage or corrupt its JSON: progress pauses and never silently grants a new deck or attempts. Restore the save/storage setting and reload.
- [ ] On an iPhone in LINE, close/reopen the link and confirm the save remains in that browser. Switching to Safari is not expected to carry the save over.
- [ ] Check 320, 375, 390, 430 and desktop-width layouts, landscape orientation and increased text size. Check no horizontal scrolling, clipped Thai, overlapping controls, or blocked bottom buttons.
- [ ] Check every button with touch and keyboard; Enter submits verification. Focus rings are visible. A screen reader announces rounds and important results; cells have row/column labels.
- [ ] Enable Reduce Motion: no falling confetti or sustained animations. Card content and progression still work.
- [ ] Sound stays muted initially, toggles correctly and never blocks progression if audio is unavailable. No permissions for camera, microphone or location are requested by the game.
- [ ] Inspect network requests: initial load requests only local assets. No fonts, APIs, analytics or third-party scripts load.

## Verification performed during implementation

- JavaScript syntax check: `node --check script.js`.
- Final seeded regression run: 800 complete journeys through the actual reducer, with 15,194 legal moves, 296 winning paths and 504 three-attempt failure paths. JSON save/reload round trips after every action, all five final rewards, rejected duplicate selections and stale boss results, rerolls, incorrect/correct verification and immutable final selections: passed.
- A lightweight simulated DOM harness rendered 19 saved stage variants and exercised 19 developer scenarios. Early-secret hiding, demo/production storage separation, blocked-storage feedback, and text-injection feedback checks passed. These are code-level checks, not a substitute for visual browser tests.
- Local HTTP checks: HTML, CSS and JavaScript returned HTTP 200 with appropriate content types.
- Browser visual inspection and real-device iPhone/LINE testing were **not completed**: this environment exposed no controllable browser. Use the manual checklist above before sharing the gift.
