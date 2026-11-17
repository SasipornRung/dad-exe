/* DAD.EXE — buildless, browser-local birthday game. Edit CONFIG before gifting. */
"use strict";
const CONFIG = {
  version: 1,
  storageKey: "dad-exe:birthday:v1",
  acceptedAnswers: ["หมี", "เจ้าหมี"],
  blessingDays: 12, // A joke written by the family, NOT a live countdown.
  rules: { maxAttempts: 3, aiMistakeChance: 0.28, aiDelay: 650, chairRepetitions: 3 },
  rewards: [
    { id: "bronze", rank: "BRONZE", title: "FUCKING BAD LUCK", items: ["Lazada voucher ฿300", "One lottery ticket"], message: "You're still alive. That's your reward.", thai: "ยังมีชีวิตอยู่ ก็นับว่าได้รางวัลแล้วนะพ่อ", symbol: "♣" },
    { id: "silver", rank: "SILVER", title: "SURVIVAL PACKAGE", items: ["Lazada voucher ฿500"], message: "Not rich. Not poor. Just sponsored.", thai: "ไม่รวย ไม่จน แค่มีลูกเป็นสปอนเซอร์", symbol: "♠" },
    { id: "gold", rank: "GOLD", title: "LUCKY OLD MAN", items: ["Lazada voucher ฿500", "One lottery ticket"], message: "God has entered the chat.", thai: "สิ่งศักดิ์สิทธิ์เข้าร่วมแชตแล้ว", symbol: "♦" },
    { id: "platinum", rank: "PLATINUM", title: "DAD'S PREMIUM PLAN", items: ["Lazada voucher ฿500", "Buffet voucher ฿300"], message: "Eat like a king. Retire like a legend.", thai: "กินอย่างราชา เกษียณอย่างตำนาน", symbol: "♛" },
    { id: "jackpot", rank: "SECRET JACKPOT", title: "THE LOTTERY KING", items: ["Five lottery tickets", "All five tickets have different lottery numbers"], message: "Five chances. One very optimistic dad.", thai: "ลอตเตอรี่ 5 ใบ เลขไม่ซ้ำกันทั้ง 5 ใบ", symbol: "♛" }
  ],
  bosses: [
    { name: "MOM", thai: "บอสใหญ่ประจำบ้าน", icon: "♛", judge: "Mom", judgeThai: "แม่", mental: "Take turns with Mom naming Thai dishes. Name five dishes without repeating one. Mom decides if you pass.", mentalThai: "ผลัดกันบอกชื่ออาหารไทยกับแม่ ให้พ่อบอกครบ 5 อย่างโดยไม่ซ้ำ แม่เป็นกรรมการ" },
    { name: "YOUNGER BROTHER", thai: "น้องชายสายป่วน", icon: "⚔", judge: "Younger brother", judgeThai: "น้องชาย", mental: "Play best-of-three rock, paper, scissors with your younger brother. He judges the result. Family mercy is permitted.", mentalThai: "เป่ายิ้งฉุบกับน้องชาย ชนะ 2 ใน 3 รอบ น้องชายเป็นกรรมการ อนุญาตให้กรรมการใจอ่อนได้" }
  ],
  text: {
    welcomeThai: "ยินดีต้อนรับเข้าสู่ระบบประเมินโชคชะตาประจำปี",
    welcomeTag: "ONE DAD. THREE TRIALS. ZERO GUARANTEES.",
    delivery: "Birthday gift record only. Your daughter will purchase and deliver the actual vouchers and tickets separately. Nothing has been issued or redeemed here.",
    deliveryThai: "ลูกสาวจะจัดซื้อและส่งมอบของรางวัลให้เอง เว็บไซต์นี้ไม่ได้ออกหรือแลกใช้บัตรกำนัล",
    cardsTitle: "CHOOSE YOUR DESTINY", cardsThai: "เลือกได้ใบเดียวพ่อ ดวงดีไม่ดีค่อยโทษระบบ",
    dissatisfied: "UNSATISFIED WITH YOUR DESTINY?", dissatisfiedThai: "ไม่พอใจกับชะตากรรมที่ได้รับใช่ไหม?",
    xoTitle: "DAD VS MACHINE", xoThai: "พ่อเป็น X เริ่มก่อนเสมอ ชนะครั้งเดียวก็พอ",
    losses: ["It's okay, Dad. Even legends make mistakes.", "Heaven is starting to lose confidence.", "Your retirement plan has entered high-risk territory."],
    lossThai: ["ไม่เป็นไรพ่อ ตำนานก็พลาดได้", "สวรรค์เริ่มไม่มั่นใจแล้วนะ", "แผนเกษียณเข้าสู่โหมดความเสี่ยงสูงแล้ว"],
    victory: "MIRACLE DETECTED!", victoryThai: "ระบบตรวจพบปาฏิหาริย์",
    safety: "Choose the seated word game if you prefer. For the optional chair activity, use a stable chair, move at your own pace, and rest between repetitions. No racing. Stop whenever you want, especially if uncomfortable or dizzy. Switching activities never costs a reward.",
    safetyThai: "เลือกเกมนั่งเล่นได้เสมอ หากเลือกลุกนั่ง ให้ใช้เก้าอี้มั่นคง ทำช้า ๆ พักได้ ไม่แข่งความเร็ว หยุดทันทีเมื่อไม่สบายหรือเวียนหัว เปลี่ยนเกมได้โดยไม่เสียรางวัล",
    verifyTitle: "FINAL SECURITY CHECK", verifyQuestion: "WHO IS YOUR DAUGHTER'S BOYFRIEND?", verifyThai: "แฟนลูกสาวชื่ออะไร?",
    wrong: "ACCESS DENIED", wrongThai: "พ่อแน่ใจนะว่านี่ลูกเขยคนเดิม 💀",
    unlock: "UNAUTHORIZED WEALTH DETECTED", godTitle: "GOD MODE UNLOCKED", godThai: "ผ่านด่านครอบครัวแล้ว เลือกรางวัลได้ตามใจพ่อเลย",
    jackpotCongrats: "CONGRATULATIONS, DAD!", jackpotMessage: "You now own 5 different chances to become a millionaire.",
    jackpotJoke: "Your retirement plan is officially in God's hands. 💀", jackpotThai: "แปล : ยินดีด้วยพ่อ แผนเกษียณงวดนี้ขึ้นอยู่กับแต้มบุญละนะ",
    support: "HEAVEN SUPPORT CENTER™", supportDisclaimer: "ระบบไม่รับประกันผลตอบแทนจากการทำบุญ",
    karmaError: "ERROR 403: ACCESS DENIED", karmaThai: "ไม่สามารถเปิดเผยข้อมูลกรรมส่วนบุคคลได้ กรุณาติดต่อเจ้าหน้าที่ในชาติหน้า",
    endingFirst: "Regardless of your luck,", endingSecond: "you're already our jackpot.", birthday: "Happy Birthday, Dad! ❤️", endingThai: "ไม่ว่าดวงจะเป็นยังไง พ่อก็คือรางวัลใหญ่ของพวกเราอยู่ดี",
    retry: "REST. RESET YOUR CONFIDENCE. TRY AGAIN.", retryThai: "พักก่อนได้พ่อ กรรมการยังอยู่ รางวัลก็ยังอยู่"
  },
  links: [
    { label: "วัดใกล้ฉัน", url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("วัดใกล้ฉัน") },
    { label: "สถานที่มู", url: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("สถานที่สักการะ สิ่งศักดิ์สิทธิ์ ใกล้ฉัน") },
    { label: "ของที่ควรมู", url: "https://www.google.com/search?q=" + encodeURIComponent("ของไหว้ เสริมสิริมงคล") }
  ]
};

const STAGES = Object.freeze({ WELCOME:"WELCOME", CARDS:"CARDS", XO:"XO", REROLL:"REROLL", BOSS1:"BOSS1", BOSS2:"BOSS2", VERIFY:"VERIFY", GOD:"GOD", CONFIRM:"CONFIRM", REWARD:"REWARD", ENDING:"ENDING" });
const POOL = CONFIG.rewards.slice(0,4).map(r => r.id);
const ALL_REWARDS = CONFIG.rewards.map(r => r.id);
const LINES = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const normalizeAnswer = value => String(value).normalize("NFKC").replace(/\s+/gu, "").toLocaleLowerCase("th-TH");
function shuffled(items, rng = Math.random) {
  const result = [...items];
  for(let i=result.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
  return result;
}
function newRound(){return { board:Array(9).fill(null), turn:"X", result:null };}
function createState(rng = Math.random){return {version:CONFIG.version,stage:STAGES.WELCOME,deck:shuffled(POOL,rng),card:null,original:null,held:null,reroll:null,rerollUsed:false,attemptsUsed:0,round:newRound(),bosses:[false,false],bossRetries:[0,0],challengeModes:["mental","mental"],verified:false,pending:null,final:null};}
function boardResult(board){for(const line of LINES){if(board[line[0]] && line.every(i=>board[i]===board[line[0]]))return {winner:board[line[0]],line};}return board.every(Boolean)?{winner:"draw",line:[]}:null;}
function scoreBoard(board,turn,depth=0){const result=boardResult(board);if(result)return result.winner==="O"?10-depth:result.winner==="X"?depth-10:0;const scores=[];for(let i=0;i<9;i++)if(!board[i]){board[i]=turn;scores.push(scoreBoard(board,turn==="O"?"X":"O",depth+1));board[i]=null;}return turn==="O"?Math.max(...scores):Math.min(...scores);}
function chooseAiMove(board,rng=Math.random){const empty=board.map((v,i)=>v?null:i).filter(v=>v!==null);if(!empty.length||boardResult(board))return null;if(rng()<CONFIG.rules.aiMistakeChance)return empty[Math.floor(rng()*empty.length)];const scores=empty.map(i=>{const copy=[...board];copy[i]="O";return scoreBoard(copy,"X");});const best=Math.max(...scores);const choices=empty.filter((_,i)=>scores[i]===best);return choices[Math.floor(rng()*choices.length)];}

// All player progression goes through this reducer. Invalid/duplicate actions do nothing.
function reduce(previous, action, rng=Math.random){
  const s=JSON.parse(JSON.stringify(previous));
  const at=stage=>s.stage===stage;
  switch(action.type){
    case "START": if(!at(STAGES.WELCOME))return previous;s.stage=STAGES.CARDS;break;
    case "PICK_CARD": if(!at(STAGES.CARDS)||s.card!==null||!Number.isInteger(action.index)||action.index<0||action.index>3)return previous;s.card=action.index;s.original=s.held=s.deck[action.index];break;
    case "TO_XO": if(!at(STAGES.CARDS)||!s.held)return previous;s.stage=STAGES.XO;break;
    case "MOVE": {
      if(!at(STAGES.XO)||s.round.result||s.attemptsUsed>=CONFIG.rules.maxAttempts||action.player!==s.round.turn||!Number.isInteger(action.index)||action.index<0||action.index>8||s.round.board[action.index])return previous;
      s.round.board[action.index]=action.player;const result=boardResult(s.round.board);
      if(result){s.round.result=result.winner;s.round.turn=null;if(result.winner==="X"){const candidates=POOL.filter(id=>id!==s.original);s.reroll=candidates[Math.floor(rng()*candidates.length)];}else{s.attemptsUsed++;}}
      else s.round.turn=action.player==="X"?"O":"X";
      break;
    }
    case "NEXT_ROUND": if(!at(STAGES.XO)||!s.round.result||s.round.result==="X"||s.attemptsUsed>=CONFIG.rules.maxAttempts)return previous;s.round=newRound();break;
    case "CLAIM_REROLL": if(!at(STAGES.XO)||s.round.result!=="X"||!s.reroll)return previous;s.stage=STAGES.REROLL;break;
    case "KEEP_REWARD": if(!at(STAGES.REROLL)||s.rerollUsed||![s.original,s.reroll].includes(action.id))return previous;s.held=action.id;s.rerollUsed=true;s.stage=STAGES.BOSS1;break;
    case "XO_FAILED": if(!at(STAGES.XO)||s.attemptsUsed!==CONFIG.rules.maxAttempts||s.round.result==="X")return previous;s.stage=STAGES.BOSS1;break;
    case "CHALLENGE_MODE": {const i=at(STAGES.BOSS1)?0:at(STAGES.BOSS2)?1:-1;if(i<0||action.boss!==i||!["mental","chair"].includes(action.mode))return previous;s.challengeModes[i]=action.mode;break;}
    case "BOSS_RETRY": {const i=at(STAGES.BOSS1)?0:at(STAGES.BOSS2)?1:-1;if(i<0||action.boss!==i)return previous;s.bossRetries[i]++;break;}
    case "BOSS_PASS": {const i=at(STAGES.BOSS1)?0:at(STAGES.BOSS2)?1:-1;if(i<0||action.boss!==i)return previous;s.bosses[i]=true;s.stage=i===0?STAGES.BOSS2:STAGES.VERIFY;break;}
    case "VERIFY": if(!at(STAGES.VERIFY)||!CONFIG.acceptedAnswers.some(name=>normalizeAnswer(name)===normalizeAnswer(action.answer)))return previous;s.verified=true;s.stage=STAGES.GOD;break;
    case "SELECT_FINAL": if(!at(STAGES.GOD)||!s.verified||s.final||!ALL_REWARDS.includes(action.id))return previous;s.pending=action.id;s.stage=STAGES.CONFIRM;break;
    case "CANCEL_FINAL": if(!at(STAGES.CONFIRM)||s.final)return previous;s.pending=null;s.stage=STAGES.GOD;break;
    case "CONFIRM_FINAL": if(!at(STAGES.CONFIRM)||s.final||!ALL_REWARDS.includes(s.pending))return previous;s.final=s.pending;s.held=s.final;s.pending=null;s.stage=STAGES.REWARD;break;
    case "ENDING": if(!at(STAGES.REWARD)||!s.final)return previous;s.stage=STAGES.ENDING;break;
    case "VIEW_REWARD": if(!at(STAGES.ENDING)||!s.final)return previous;s.stage=STAGES.REWARD;break;
    default:return previous;
  }
  return s;
}

function validState(s){
  if(!s||s.version!==CONFIG.version||!Object.values(STAGES).includes(s.stage))return false;
  if(!Array.isArray(s.deck)||s.deck.length!==4||new Set(s.deck).size!==4||!s.deck.every(id=>POOL.includes(id)))return false;
  if(!Number.isInteger(s.attemptsUsed)||s.attemptsUsed<0||s.attemptsUsed>CONFIG.rules.maxAttempts)return false;
  if(!s.round||!Array.isArray(s.round.board)||s.round.board.length!==9||!s.round.board.every(v=>[null,"X","O"].includes(v))||![null,"X","O","draw"].includes(s.round.result))return false;
  const x=s.round.board.filter(v=>v==="X").length,o=s.round.board.filter(v=>v==="O").length;
  if(o>x||x>o+1||(boardResult(s.round.board)?.winner||null)!==s.round.result)return false;
  if(s.round.turn!==(s.round.result?null:x===o?"X":"O"))return false;
  if(!Array.isArray(s.bosses)||s.bosses.length!==2||!s.bosses.every(v=>typeof v==="boolean"))return false;
  if(!Array.isArray(s.bossRetries)||s.bossRetries.length!==2||!s.bossRetries.every(v=>Number.isInteger(v)&&v>=0))return false;
  if(!Array.isArray(s.challengeModes)||s.challengeModes.length!==2||!s.challengeModes.every(v=>["mental","chair"].includes(v)))return false;
  if(typeof s.verified!=="boolean"||typeof s.rerollUsed!=="boolean")return false;
  if(s.card!==null&&(!Number.isInteger(s.card)||s.card<0||s.card>3))return false;
  if(s.card===null?(s.original!==null||s.held!==null):s.original!==s.deck[s.card])return false;
  if(s.held!==null&&!ALL_REWARDS.includes(s.held))return false;
  if(s.reroll!==null&&(!POOL.includes(s.reroll)||s.reroll===s.original))return false;
  if((s.round.result==="X")!==(s.reroll!==null))return false;
  if(s.rerollUsed&&!s.reroll)return false;
  const index=Object.values(STAGES).indexOf(s.stage);
  if(index>=2&&!s.original)return false;
  if(index>=4&&!(s.rerollUsed||s.attemptsUsed===CONFIG.rules.maxAttempts))return false;
  if(index>=5&&!s.bosses[0]||index>=6&&!s.bosses[1]||index>=7&&!s.verified)return false;
  if(s.stage===STAGES.REROLL&&(!s.reroll||s.rerollUsed))return false;
  if(s.pending!==null&&!ALL_REWARDS.includes(s.pending))return false;
  if((s.stage===STAGES.CONFIRM)!==(s.pending!==null))return false;
  if(s.final!==null&&(!ALL_REWARDS.includes(s.final)||s.held!==s.final))return false;
  if((index>=9)!==(s.final!==null))return false;
  return true;
}

// Node can exercise the real game engine without a browser or dependencies.
if(typeof module!=="undefined"&&module.exports)module.exports={CONFIG,STAGES,POOL,createState,reduce,boardResult,chooseAiMove,normalizeAnswer,validState};

if(typeof document!=="undefined")(()=>{
  const $=id=>document.getElementById(id);
  const esc=value=>String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const T=CONFIG.text;
  const demo=new URLSearchParams(location.search).get("demo")==="1";
  const key=CONFIG.storageKey+(demo?":demo":"");
  let state,aiTimer=null,sound=false,audioContext=null,blocked=false,ignoreClicksUntil=0;
  const reward=id=>CONFIG.rewards.find(r=>r.id===id);
  const btn=(label,action,extra="",secondary=false)=>`<button type="button" class="btn ${secondary?"secondary":""}" data-action="${action}" ${extra}>${esc(label)}</button>`;
  const heading=(eyebrow,title,thai="")=>`<p class="eyebrow">${esc(eyebrow)}</p><h2>${esc(title)}</h2>${thai?`<p class="thai" lang="th">${esc(thai)}</p>`:""}`;
  const delivery=()=>`<p class="delivery">${esc(T.delivery)}<br><span lang="th">${esc(T.deliveryThai)}</span></p>`;
  function rewardCard(id,{select=false,notice=false}={}){const r=reward(id);return `<article class="reward-card tier-${esc(r.id)}"><span class="reward-symbol" aria-hidden="true">${r.symbol}</span><div class="reward-rank">${esc(r.rank)}</div><h3>${esc(r.title)}</h3><ul class="reward-items">${r.items.map(i=>`<li>${esc(i)}</li>`).join("")}</ul><p class="reward-quote">“${esc(r.message)}”<br><span lang="th">${esc(r.thai)}</span></p>${notice?delivery():""}${select?btn("CHOOSE THIS REWARD →","SELECT_FINAL",`data-id="${r.id}"`):""}</article>`;}
  function showStorageError(message){blocked=true;clearTimeout(aiTimer);$("storage-error").hidden=false;$("storage-error").innerHTML=`<h2>PROGRESS PAUSED</h2><p>${esc(message)}</p><p lang="th">ระบบบันทึกความคืบหน้าไม่ได้ กรุณาใช้เบราว์เซอร์ที่อนุญาตให้จัดเก็บข้อมูล แล้วเปิดเกมจากลิงก์เดิม</p><p>Your existing save has not been intentionally reset. Keep using the same browser for this birthday game.</p>${btn("RETRY SAVED GAME","RELOAD")}`;$("storage-error").querySelector("button").onclick=()=>location.reload();}
  function load(){try{const raw=localStorage.getItem(key);if(raw!==null){const parsed=JSON.parse(raw);if(!validState(parsed))throw new Error("invalid save");return parsed;}const fresh=createState();localStorage.setItem(key,JSON.stringify(fresh));return fresh;}catch(e){showStorageError("Saved progress is unavailable or damaged. The game will not silently create new rewards or attempts.");return null;}}
  function commit(next){try{localStorage.setItem(key,JSON.stringify(next));state=next;return true;}catch(e){showStorageError("This browser could not save your progress. Free some storage or allow website storage, then retry.");return false;}}
  function announce(text){$("announcer").textContent=text;}
  function playTone(victory=false){if(!sound)return;try{audioContext=audioContext||new (window.AudioContext||window.webkitAudioContext)();audioContext.resume().catch(()=>{});[0,...(victory?[.12,.24]:[])].forEach((delay,i)=>{const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type="triangle";osc.frequency.value=[440,554,660][i];gain.gain.setValueAtTime(.045,audioContext.currentTime+delay);gain.gain.exponentialRampToValueAtTime(.001,audioContext.currentTime+delay+.16);osc.connect(gain);gain.connect(audioContext.destination);osc.start(audioContext.currentTime+delay);osc.stop(audioContext.currentTime+delay+.18);});}catch(e){/* Sound is optional on older webviews. */}}
  function confetti(goldOnly=false){if(matchMedia("(prefers-reduced-motion: reduce)").matches)return;$("effects").replaceChildren();for(let i=0;i<60;i++){const piece=document.createElement("i");piece.className="confetti";piece.style.left=Math.random()*100+"%";piece.style.background=(goldOnly?["#edc775","#fff1bd","#b88a3c"]:["#edc775","#a6e1dc","#e29baa"])[i%3];piece.style.animationDelay=Math.random()*.7+"s";piece.style.setProperty("--drift",(Math.random()-.5)*200+"px");$("effects").appendChild(piece);}setTimeout(()=>$("effects").replaceChildren(),3800);}
  function dispatch(action){
    if(blocked)return;
    // Read the latest save first, so a stale tab cannot replay a completed action.
    try{const raw=localStorage.getItem(key);if(!raw)throw new Error("missing save");const latest=JSON.parse(raw);if(!validState(latest))throw new Error("invalid save");if(JSON.stringify(state)!==raw){state=latest;render(true);announce("Progress updated from another tab. Please try your action again.");return;}}catch(e){showStorageError("The saved game changed or became unavailable. Reload to check your saved progress.");return;}
    const next=reduce(state,action);
    if(next===state)return;
    const old=state,stageChanged=next.stage!==old.stage;
    if(!commit(next))return;
    const won=old.round.result!=="X"&&next.round.result==="X";
    playTone(won||action.type==="VERIFY"||action.type==="CONFIRM_FINAL");
    render(stageChanged,action.type==="PICK_CARD");
    if(won||action.type==="VERIFY"||action.type==="CONFIRM_FINAL")confetti(next.final==="jackpot");
    if(action.type==="PICK_CARD")announce(`${reward(state.held).rank}: ${reward(state.held).items.join(", ")}`);
    if(action.type==="BOSS_RETRY")announce(T.retryThai);
    if(action.type==="MOVE")announce(state.round.result?state.round.result==="X"?T.victory:state.round.result==="draw"?"Draw. One attempt used.":"Machine wins. One attempt used.":state.round.turn==="X"?"Your turn. You are X.":"Machine is thinking.");
  }
  function welcome(){return `<section class="screen hero center"><span class="pill"><i class="status-dot"></i> ANNUAL DAD UPGRADE · READY</span><h1>DAD<span class="exe">.EXE</span></h1><p class="hero-subtitle">Retirement Not Guaranteed</p><div class="hero-art" aria-hidden="true"><div class="mini-card">♠</div><div class="mini-card middle">♛</div><div class="mini-card">♦</div><span class="art-spark">✦</span><span class="art-spark small">✦</span></div><p class="hero-tagline">${esc(T.welcomeTag)}</p><p class="thai" lang="th">${esc(T.welcomeThai)}</p><div class="hero-action">${btn("START GAME  →","START","style=\"width:100%\"")}<p class="micro">PLAYER 01: DAD &nbsp; / &nbsp; DIFFICULTY: LIFE</p></div><div class="trials"><div class="trial"><b>01 / ♠</b> LUCKY CARDS<span lang="th">วัดดวงก่อน</span></div><div class="trial"><b>02 / ×</b> XO CHALLENGE<span lang="th">วัดสมองนิด</span></div><div class="trial"><b>03 / ♛</b> FAMILY BOSSES<span lang="th">วัดใจคนในบ้าน</span></div></div></section>`;}
  function cards(){const chosen=state.card!==null;return `<section class="screen center">${heading("TRIAL 01 / TRUST YOUR GUT",T.cardsTitle,T.cardsThai)}<p class="muted">Four cards. One destiny. No refunds from the universe.</p><div class="deck">${state.deck.map((id,i)=>{const selected=state.card===i;const r=selected?reward(id):null;return `<button type="button" class="destiny-card ${selected?"revealed":chosen?"dim":""}" data-action="PICK_CARD" data-index="${i}" ${chosen?"disabled":""} aria-label="${selected?esc(`Selected: ${r.rank}`):`Choose face-down card ${i+1}`}"><span class="card-inner"><span class="card-back" aria-hidden="true"><span class="card-sigil">♛</span><small>DAD.EXE</small></span><span class="card-front" aria-hidden="true">${r?`<span class="sigil">${r.symbol}</span><strong>${esc(r.rank)}</strong><small>DESTINY LOCKED</small>`:""}</span></span></button>`;}).join("")}</div>${chosen?`<div class="reveal-area">${rewardCard(state.held)}<div class="callout"><h3>${esc(T.dissatisfied)}</h3><p lang="th">${esc(T.dissatisfiedThai)}</p><p class="gold">CHALLENGE THE SYSTEM.</p></div>${btn("CONTINUE →","TO_XO")}</div>`:`<p class="micro">TAP ONE CARD TO REVEAL YOUR FATE<br>YOUR FIRST CHOICE IS SAVED AUTOMATICALLY.</p>`}</section>`;}
  function xo(){const r=state.round,remaining=CONFIG.rules.maxAttempts-state.attemptsUsed,line=boardResult(r.board)?.line||[];let result="";
    if(r.result==="X")result=`<div class="result"><h3 class="gold">${esc(T.victory)}</h3><p lang="th">${esc(T.victoryThai)}</p><p>One victory. One bonus reroll. Your original reward stays available.</p>${btn("REVEAL BONUS REROLL →","CLAIM_REROLL")}</div>`;
    else if(r.result){const i=state.attemptsUsed-1;result=`<div class="result"><p class="rule-tag">${r.result==="draw"?"DRAW — ATTEMPT USED":"MACHINE WINS — ATTEMPT USED"}</p><h3>${esc(T.losses[i])}</h3><p class="thai" lang="th">${esc(T.lossThai[i])}</p>${remaining?btn("TRY AGAIN →","NEXT_ROUND"):`<p>Your original reward is safe. Family challenges await.</p>${btn("CONTINUE TO FAMILY BOSSES →","XO_FAILED")}`}</div>`;}
    return `<section class="screen center">${heading("TRIAL 02 / OUTSMART THE SYSTEM",T.xoTitle,T.xoThai)}<p class="muted">Win once for a bonus reroll. A loss or draw uses one attempt.</p><div class="stats"><span>YOU: <b class="gold">X</b> &nbsp; MACHINE: O</span><span><span class="attempt-dots" aria-hidden="true">${"●".repeat(remaining)}${"○".repeat(state.attemptsUsed)}</span> ${remaining} / ${CONFIG.rules.maxAttempts} ATTEMPTS LEFT</span></div><p class="turn-label">${r.result?"ROUND COMPLETE":r.turn==="X"?"YOUR TURN, DAD. MAKE IT COUNT.":"MACHINE IS THINKING… SUSPICIOUS."}</p><div class="board" role="group" aria-label="Tic-tac-toe board. You play X.">${r.board.map((v,i)=>`<button type="button" class="cell ${v==="O"?"o":""} ${line.includes(i)?"win":""}" data-action="MOVE" data-index="${i}" ${v||r.result||r.turn!=="X"?"disabled":""} aria-label="Row ${Math.floor(i/3)+1}, column ${i%3+1}: ${v||"empty"}">${v||""}</button>`).join("")}</div>${result}<p class="micro">NORMAL DIFFICULTY · THE MACHINE HAS OFF DAYS TOO.</p></section>`;
  }
  function reroll(){return `<section class="screen center">${heading("BONUS / ONE REROLL ONLY",T.victory,T.victoryThai)}<p>Your bonus is different, but not necessarily better.<br><span lang="th">สุ่มใหม่ได้ครั้งเดียว จะเก็บของเดิมหรือเปลี่ยนก็ได้</span></p><div class="compare"><div><p class="option-label">01 / YOUR ORIGINAL</p>${rewardCard(state.original)}${btn("KEEP ORIGINAL","KEEP_REWARD",`data-id="${state.original}"`,true)}</div><div><p class="option-label">02 / YOUR BONUS REROLL</p>${rewardCard(state.reroll)}${btn("KEEP NEW REWARD","KEEP_REWARD",`data-id="${state.reroll}"`)}</div></div></section>`;}
  function boss(){const i=state.stage===STAGES.BOSS1?0:1,b=CONFIG.bosses[i],mode=state.challengeModes[i];return `<section class="screen center">${heading(`TRIAL 03 / FAMILY BOSS ${i+1} OF 2`,`BOSS ${i+1}: ${b.name}`,b.thai)}<div class="boss-icon" aria-hidden="true">${b.icon}</div><p>The family is the final boss. It always was.</p><div class="panel"><span class="rule-tag">CHOOSE YOUR CHALLENGE</span><div class="challenge-switch"><button type="button" data-action="CHALLENGE_MODE" data-boss="${i}" data-mode="mental" aria-pressed="${mode==="mental"}">Seated game<br><span lang="th">เกมนั่งเล่น</span></button><button type="button" data-action="CHALLENGE_MODE" data-boss="${i}" data-mode="chair" aria-pressed="${mode==="chair"}">Gentle chair activity<br><span lang="th">ลุกนั่งแบบเบา ๆ</span></button></div><p>${esc(mode==="mental"?b.mental:`With ${b.judge}, try up to ${CONFIG.rules.chairRepetitions} comfortable sit-to-stands from a stable chair. Rest between each. This is a friendly participation challenge, not a speed contest. ${b.judge} judges.`)}</p><p lang="th" class="thai">${esc(mode==="mental"?b.mentalThai:`ลองลุกนั่งจากเก้าอี้มั่นคง ไม่เกิน ${CONFIG.rules.chairRepetitions} ครั้ง พักทุกครั้ง ไม่ต้องแข่งเร็ว ให้${b.judgeThai}ตัดสิน`)}</p><div class="safety">${esc(T.safety)}<p lang="th">${esc(T.safetyThai)}</p></div></div><p class="muted">Judge: ${esc(b.judge)} · Self-reported · No camera needed</p>${state.bossRetries[i]?`<div class="callout"><p>${esc(T.retry)}</p><p lang="th">${esc(T.retryThai)}</p><small>Retries recorded: ${state.bossRetries[i]}</small></div>`:""}<div class="actions">${btn("PASSED ✓","BOSS_PASS",`data-boss="${i}"`)}${btn("RETRY / REST ↻","BOSS_RETRY",`data-boss="${i}"`,true)}</div></section>`;}
  function verify(){return `<section class="screen center">${heading("FAMILY BOSSES / COMPLETE",T.verifyTitle)}<div class="boss-icon" aria-hidden="true">⌘</div><h3>${esc(T.verifyQuestion)}</h3><p class="thai" lang="th">${esc(T.verifyThai)}</p><form id="verify-form" class="verify-form"><label for="answer">His name / <span lang="th">ชื่อแฟนลูกสาว</span></label><input id="answer" name="answer" type="text" maxlength="100" autocomplete="off" autocapitalize="off" spellcheck="false" required aria-describedby="verify-feedback"><p id="verify-feedback" class="error" role="status"></p><button type="submit" class="btn full">VERIFY →</button></form><p class="micro">FAMILY KNOWLEDGE REQUIRED. DAUGHTER'S APPROVAL: NOT REQUIRED.</p></section>`;}
  function god(){return `<section class="screen center wide"><div class="unlock-banner">${esc(T.unlock)}</div>${heading("ADMIN PRIVILEGES / ACQUIRED",T.godTitle,T.godThai)}<p>CHOOSE YOUR FATE. Any one reward is yours.<br><span class="muted" lang="th">เลือกได้ 1 รางวัล กดยืนยันอีกครั้งก่อนล็อก</span></p><p class="micro">CURRENT REWARD: ${esc(reward(state.held).rank)}</p><div class="reward-grid">${CONFIG.rewards.map(r=>rewardCard(r.id,{select:true})).join("")}</div></section>`;}
  function confirmation(){return `<section class="screen center">${heading("ONE LAST LOOK", "LOCK IN YOUR DESTINY?","ตรวจรางวัลให้ชัวร์พ่อ ยืนยันแล้วเปลี่ยนไม่ได้นะ")}${rewardCard(state.pending,{notice:true})}<p>This replaces your current reward: <strong>${esc(reward(state.held).title)}</strong>.</p><div class="actions">${btn("CONFIRM & LOCK ✓","CONFIRM_FINAL")}${btn("GO BACK","CANCEL_FINAL","",true)}</div></section>`;}
  function finalReward(){const jackpot=state.final==="jackpot";return `<section class="screen center">${jackpot?`<div class="crown" aria-hidden="true">♛</div>${heading("JACKPOT / THE LOTTERY KING",T.jackpotCongrats)}<h3 class="jackpot-title">${esc(T.jackpotMessage)}</h3><div class="jackpot-tickets" aria-hidden="true">${[1,2,3,4,5].map(i=>`<span class="ticket">♛<br>0${i}</span>`).join("")}</div><p class="micro">5 TICKETS · 5 DIFFERENT LOTTERY NUMBERS<br>ILLUSTRATIONS ONLY — ACTUAL TICKETS DELIVERED SEPARATELY</p><p>${esc(T.jackpotJoke)}</p><p class="thai" lang="th">${esc(T.jackpotThai)}</p>`:heading("MISSION COMPLETE / REWARD SECURED","NICE WORK, LEGEND.","รางวัลของพ่อล็อกไว้แล้ว ที่เหลือให้ลูกสาวจัดการ")}<p class="locked">✓ FINAL REWARD LOCKED · SAVED ON THIS DEVICE</p>${rewardCard(state.final,{notice:true})}${jackpot?`<div class="callout"><p lang="th">ยังมีเวลาไปเติมแต้มบุญต่อได้อีก <strong class="gold">${CONFIG.blessingDays} วัน</strong> ก่อน cut off</p><small class="muted">Family-set reminder, not a live countdown.</small></div><div class="panel"><h3>${esc(T.support)}</h3><p class="muted" lang="th">ฝ่ายสนับสนุนดวง เปิดให้บริการตามศรัทธา</p><div class="support-links">${CONFIG.links.map(link=>`<a class="btn secondary thai-btn" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer">${esc(link.label)} ↗</a>`).join("")}</div>${btn("ตรวจสอบยอดแต้มบุญคงเหลือ","KARMA","",true)}<div id="karma-result" role="status"></div><p class="delivery" lang="th">${esc(T.supportDisclaimer)}</p></div>`:""}<div class="actions">${btn("ONE LAST THING… ♥","ENDING")}</div></section>`;}
  function ending(){return `<section class="screen ending center"><p class="eyebrow">THE REAL GRAND PRIZE</p><div class="heart" aria-hidden="true">♥</div><h2>${esc(T.endingFirst)}<br><em>${esc(T.endingSecond)}</em></h2><p class="thai" lang="th">${esc(T.endingThai)}</p><p class="birthday">${esc(T.birthday)}</p><p class="muted" lang="th">รักพ่อเสมอ — จากครอบครัวที่พ่อเลี้ยงมากับมือ</p>${btn("VIEW MY FINAL REWARD","VIEW_REWARD","",true)}<div class="ending-stamp" aria-hidden="true">CERTIFIED<br>LEGEND<br>♥</div></section>`;}
  function devPanel(){return `<details class="dev-panel"><summary>DEVELOPER DEMO — SEPARATE SAVE</summary><p>Testing only. Normal birthday progress is never read or changed here.</p><label for="demo-scenario">Load a test scenario</label><select id="demo-scenario"><option value="welcome">Fresh welcome</option>${POOL.map(id=>`<option value="card:${id}">Lucky card: ${id}</option>`).join("")}<option value="win">XO: one move from victory (tap top-right)</option><option value="loss:0">XO: first loss (tap bottom-left)</option><option value="loss:1">XO: second loss (tap bottom-left)</option><option value="loss:2">XO: third loss (tap bottom-left)</option><option value="draw">XO: draw (tap bottom-right)</option><option value="boss1">Family boss 1</option><option value="boss2">Family boss 2</option><option value="verify">Security check</option><option value="god">God Mode — all choices</option>${ALL_REWARDS.map(id=>`<option value="ending:${id}">Locked reward: ${id}</option>`).join("")}</select><div class="actions">${btn("LOAD SCENARIO","DEMO_LOAD","",true)}${btn("RESET DEMO","DEMO_RESET","",true)}</div><p><a href="./">Exit to normal game ↗</a></p></details>`;}
  function demoState(scenario){let s=createState();const act=a=>{s=reduce(s,a,()=>.2);};if(scenario==="welcome")return s;act({type:"START"});act({type:"PICK_CARD",index:scenario.startsWith("card:")?s.deck.indexOf(scenario.split(":")[1]):0});if(scenario.startsWith("card:"))return s;act({type:"TO_XO"});
    if(scenario==="win"){s.round={board:["X","X",null,"O","O",null,null,null,null],turn:"X",result:null};return s;}
    if(scenario.startsWith("loss:")){s.attemptsUsed=Number(scenario.split(":")[1]);s.round={board:["O","O",null,"X","X",null,null,null,null],turn:"X",result:null};return s;}
    if(scenario==="draw"){s.round={board:["X","O","X","X","O","O","O","X",null],turn:"X",result:null};return s;}
    s.attemptsUsed=3;s.round={board:["O","O","O","X","X",null,"X",null,null],turn:null,result:"O"};act({type:"XO_FAILED"});if(scenario==="boss1")return s;act({type:"BOSS_PASS",boss:0});if(scenario==="boss2")return s;act({type:"BOSS_PASS",boss:1});if(scenario==="verify")return s;act({type:"VERIFY",answer:CONFIG.acceptedAnswers[0]});if(scenario==="god")return s;if(scenario.startsWith("ending:")){act({type:"SELECT_FINAL",id:scenario.split(":")[1]});act({type:"CONFIRM_FINAL"});}return s;
  }
  function render(moveFocus=false,flip=false){
    clearTimeout(aiTimer);
    const oldFocus=document.activeElement,focusIndex=oldFocus?.dataset?.index,focusAction=oldFocus?.dataset?.action;
    const views={WELCOME:welcome,CARDS:cards,XO:xo,REROLL:reroll,BOSS1:boss,BOSS2:boss,VERIFY:verify,GOD:god,CONFIRM:confirmation,REWARD:finalReward,ENDING:ending};
    $("game").innerHTML=views[state.stage]()+ (demo?devPanel():"");
    const stepIndex=state.stage==="WELCOME"?-1:state.stage==="CARDS"?0:["XO","REROLL"].includes(state.stage)?1:["BOSS1","BOSS2","VERIFY"].includes(state.stage)?2:3;
    $("progress").innerHTML=["LUCK","SKILL","FAMILY","REWARD"].map((label,i)=>`<span class="step ${i===stepIndex?"active":i<stepIndex?"done":""}" ${i===stepIndex?'aria-current="step"':""}><span class="step-number" aria-hidden="true">${i<stepIndex?"✓":"0"+(i+1)}</span>${label}</span>`).join("");
    if(moveFocus){ignoreClicksUntil=Date.now()+350;$("game").focus({preventScroll:true});window.scrollTo({top:0,behavior:"auto"});}
    else if(focusAction){const candidate=[...$("game").querySelectorAll("[data-action]")].find(el=>el.dataset.action===focusAction&&el.dataset.index===focusIndex&&!el.disabled);if(candidate)candidate.focus({preventScroll:true});else if(state.round.result||flip)$("game").focus({preventScroll:true});else if(state.stage==="XO"){const cell=$("game").querySelector(".cell:not(:disabled)");if(cell)cell.focus({preventScroll:true});}}
    if(flip){const card=$("game").querySelector(".revealed");card.classList.remove("revealed");void card.offsetWidth;requestAnimationFrame(()=>card.classList.add("revealed"));}
    if(state.stage===STAGES.VERIFY)$("verify-form").addEventListener("submit",event=>{event.preventDefault();const answer=$("answer").value;if(CONFIG.acceptedAnswers.some(name=>normalizeAnswer(name)===normalizeAnswer(answer)))dispatch({type:"VERIFY",answer});else{$("verify-feedback").textContent=T.wrong+" — "+T.wrongThai;$("answer").setAttribute("aria-invalid","true");$("answer").focus();}});
    if(state.stage===STAGES.XO&&state.round.turn==="O"&&!state.round.result){aiTimer=setTimeout(()=>{const demoLoss=demo&&state.round.board[0]==="O"&&state.round.board[1]==="O"&&!state.round.board[2];const index=demoLoss?2:chooseAiMove(state.round.board);if(index!==null)dispatch({type:"MOVE",player:"O",index});},CONFIG.rules.aiDelay);}
  }
  $("game").addEventListener("click",event=>{const target=event.target.closest("[data-action]");if(!target||target.disabled||Date.now()<ignoreClicksUntil)return;const action=target.dataset.action;
    if(action==="KARMA"){$("karma-result").innerHTML=`<p class="error">${esc(T.karmaError)}</p><p lang="th">${esc(T.karmaThai)}</p>`;return;}
    if(action.startsWith("DEMO_")&&demo){const next=demoState(action==="DEMO_RESET"?"welcome":$("demo-scenario").value);if(validState(next)&&commit(next))render(true);return;}
    dispatch({type:action,index:target.dataset.index===undefined?undefined:Number(target.dataset.index),id:target.dataset.id,mode:target.dataset.mode,boss:Number(target.dataset.boss),player:"X"});
  });
  $("sound-toggle").addEventListener("click",()=>{sound=!sound;$("sound-toggle").setAttribute("aria-pressed",String(sound));$("sound-toggle").setAttribute("aria-label",sound?"Turn sound off":"Turn sound on");$("sound-toggle").innerHTML=`♪ <span>SOUND ${sound?"ON":"OFF"}</span>`;if(sound)playTone();});
  window.addEventListener("storage",event=>{if(event.key===key||event.key===null){if(event.newValue&&event.key===key){try{const next=JSON.parse(event.newValue);if(validState(next)){state=next;render(true);announce("Progress synced from another tab.");return;}}catch(e){/* Handled below. */}}showStorageError("Saved progress was removed or changed in another tab. Reload to check storage before continuing.");}});
  window.addEventListener("pageshow",event=>{if(event.persisted){state=load();if(state&&!blocked)render();}});
  state=load();if(state)render();
})();
