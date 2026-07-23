(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=a(r);fetch(r.href,i)}})();const _e=e=>new Promise(t=>{window.setTimeout(t,e)}),N=async(e,t=a=>new Audio(a))=>{try{const a=t(e);return a.currentTime=0,await a.play(),!0}catch{return!1}},Re=async(e,t,a=r=>new Audio(r),o=_e)=>{for(const[r,i]of e.entries()){if(!await N(i,a))return!1;r<e.length-1&&await o(t)}return!0};class Ce{constructor(t){if(this.questions=t,t.length===0)throw new Error("A game session needs at least one question.")}questions;position=0;get current(){return this.questions[Math.min(this.position,this.questions.length-1)]}get isComplete(){return this.position>=this.questions.length}answer(t){return this.isComplete?"complete":t!==this.current.id?"retry":(this.position+=1,this.isComplete?"complete":"correct")}}const Ee={en:{brand:"Letter Island",languageNote:"American English · AI voice",switchToChinese:"Switch to Chinese",switchToEnglish:"Switch to English",letterScope:"Set letter range",letterScopeTitle:"Choose letters",selectAllLetters:"Select all",cancel:"Cancel",done:"Done",homeTitle:"Let's play with letters",homeSubtitle:"Choose a game and explore one little sound at a time.",games:"Games",soundGame:"Hear the sound",soundDescription:"Listen, then choose the letter",caseGame:"Match cases",caseDescription:"Find the big and little pair",pictureGame:"Drag to picture",pictureDescription:"Take the letter to its picture",fiveQuestions:"Five gentle questions in every game.",home:"Home",restart:"Start this game again",replaySound:"Replay sound",replayMainLetter:"Replay main letter",listenChoose:"Listen and choose",matchPair:"Match the pair",findFriend:"Find its letter friend",dragPicture:"Drag to picture",whereBelong:"Where does it belong?",tapOrDrag:"Tap then choose a picture, or drag it.",letterChoice:"Letter choice",pictureChoice:"Picture",correct:"Great job!",retry:"Try once more.",takeTime:"Take your time.",soundUnavailable:"The sound is getting ready. You can still choose a letter.",preparingResources:"Getting Letter Island ready",preparingResourcesDescription:"We are gathering the pictures and sounds for your games.",resourcesReady:"Ready to play!",resourcesUnavailable:"Some resources are unavailable",resourcesStillMissing:"{count} resources are still missing.",resourcesProgress:"{completed} of {total} resources ready",retryResources:"Try again",startAnyway:"Start anyway",completeKicker:"Five sounds explored",completeTitle:"You did it!",completeDescription:"Wonderful work. Ready for another little adventure?",playAgain:"Play again",backToIsland:"Back to island"},zh:{brand:"字母岛",languageNote:"美式英语 · AI 语音",switchToChinese:"切换为中文",switchToEnglish:"切换为英文",letterScope:"设置字母范围",letterScopeTitle:"选择字母",selectAllLetters:"全选",cancel:"取消",done:"完成",homeTitle:"和字母一起玩",homeSubtitle:"选择一个游戏，一次认识一个小小的声音。",games:"游戏",soundGame:"听声音选字母",soundDescription:"听一听，选出字母",caseGame:"大小写配对",caseDescription:"找到大写和小写的朋友",pictureGame:"拖到图片",pictureDescription:"把字母送到对应图片",fiveQuestions:"每个游戏有五道轻松小题。",home:"回到首页",restart:"重新开始这个游戏",replaySound:"再听一次",replayMainLetter:"再听主字母",listenChoose:"听一听，选一选",matchPair:"大小写配对",findFriend:"找到它的字母朋友",dragPicture:"拖到图片",whereBelong:"它应该去哪里？",tapOrDrag:"点击字母再选图片，或者直接拖动。",letterChoice:"字母选项",pictureChoice:"图片",correct:"答对啦！",retry:"再试一次。",takeTime:"慢慢来。",soundUnavailable:"声音正在准备中，先选一个字母吧。",preparingResources:"正在准备字母岛",preparingResourcesDescription:"正在收集游戏需要的图片和声音。",resourcesReady:"可以开始玩啦！",resourcesUnavailable:"部分资源暂时无法使用",resourcesStillMissing:"还有 {count} 个资源无法使用。",resourcesProgress:"已准备 {completed} / {total} 个资源",retryResources:"再试一次",startAnyway:"仍然开始",completeKicker:"已经探索五个声音",completeTitle:"你完成啦！",completeDescription:"做得真棒！再来一次小小的字母冒险吧。",playAgain:"再玩一次",backToIsland:"回到字母岛"}},Pe=(e,t)=>Ee[e][t],ie=e=>e==="en"?"zh":"en",Me="letter-island-assets-v1",ce=e=>{const t=new Set;for(const a of e)t.add(a.image),t.add(a.uppercaseSound),t.add(a.lowercasePhonemeSound),t.add(a.wordSound);return[...t]},De=()=>{},oe=e=>({completed:0,total:e.length,failedPaths:e,resolve:t=>t,dispose:De}),Ie=async(e,t={})=>{const a=ce(e),o=t.cacheStorage??globalThis.caches;if(!o)return oe(a);let r;try{r=await o.open(Me)}catch{return oe(a)}const i=a.length,d=[],p=new Map,b=[],$e=t.baseUrl??document.baseURI,Se=t.fetchResource??(u=>globalThis.fetch(u)),qe=t.createObjectUrl??(u=>URL.createObjectURL(u)),ke=t.revokeObjectUrl??(u=>URL.revokeObjectURL(u));let H=0,re=!1;const Le=()=>{H+=1,t.onProgress?.({completed:H,total:i})},se=async(u,w)=>{const I=await w.blob(),ne=qe(I);p.set(u,ne),b.push(ne),Le()},Te=()=>{if(!re){re=!0;for(const u of b)ke(u)}},D=[];for(const u of a){const w=new URL(u,$e).href;try{const I=await r.match(w);I?.ok?await se(u,I):D.push({path:u,url:w})}catch{d.push(u)}}let Y=0;const Ae=async()=>{for(;Y<D.length;){const u=D[Y];Y+=1;try{const w=await Se(u.url);if(!w.ok)throw new Error(`Failed to fetch ${u.url}`);await r.put(u.url,w.clone()),await se(u.path,w)}catch{d.push(u.path)}}};return await Promise.all(Array.from({length:Math.min(6,D.length)},Ae)),{completed:H,total:i,failedPaths:d,resolve:u=>p.get(u)??u,dispose:Te}},le=(e,t,a=3,o=Math.random)=>{if(!Number.isInteger(a)||a<1||t.length===0)throw new Error("A round needs a valid number of choices.");const r=Math.min(a,t.length),i=t.filter(p=>p.id!==e.id);for(let p=i.length-1;p>0;p-=1){const b=Math.floor(o()*(p+1));[i[p],i[b]]=[i[b],i[p]]}const d=[e,...i.slice(0,r-1)];for(let p=d.length-1;p>0;p-=1){const b=Math.floor(o()*(p+1));[d[p],d[b]]=[d[b],d[p]]}return{target:e,choices:d}},Fe=e=>{const t=e.match(/^#\/game\/(sound-choice|case-match|picture-drag)$/);return t?{kind:"game",game:t[1]}:{kind:"home"}},W=e=>`#/game/${e}`,xe=(e,t)=>{const a=new Set(t);return e.filter(o=>a.has(o.id))},Ue=(e,t,a=Math.random)=>{if(!Number.isInteger(t)||t<1||e.length===0)throw new Error("A session needs a catalog and a positive number of questions.");const o=[];for(;o.length<t;){const r=[...e];for(let i=r.length-1;i>0;i-=1){const d=Math.floor(a()*(i+1));[r[i],r[d]]=[r[d],r[i]]}o.push(...r.slice(0,t-o.length))}return o},Oe={tap:[{frequency:560,start:0,duration:.06,gain:.035}],correct:[{frequency:523.25,start:0,duration:.14,gain:.075},{frequency:659.25,start:.11,duration:.14,gain:.075},{frequency:783.99,start:.22,duration:.24,gain:.085}],retry:[{frequency:310,start:0,duration:.09,gain:.035},{frequency:270,start:.08,duration:.11,gain:.03}],drop:[{frequency:420,start:0,duration:.1,gain:.045}]},je=e=>Oe[e],Ge={bounce:[{frequency:410,endFrequency:160,start:0,duration:.18,gain:.055}],bark:[{frequency:145,endFrequency:100,start:0,duration:.13,gain:.055,wave:"square"}],bleat:[{frequency:290,endFrequency:410,start:0,duration:.22,gain:.045,wave:"sawtooth"}],bubble:[{frequency:280,endFrequency:570,start:0,duration:.24,gain:.04}],chirp:[{frequency:900,endFrequency:1280,start:0,duration:.12,gain:.035}],crunch:[{frequency:170,endFrequency:90,start:0,duration:.1,gain:.05,wave:"square"},{frequency:240,endFrequency:120,start:.08,duration:.1,gain:.04,wave:"square"}],fanfare:[{frequency:523,start:0,duration:.11,gain:.045},{frequency:784,start:.1,duration:.17,gain:.05}],gallop:[{frequency:130,endFrequency:95,start:0,duration:.09,gain:.06,wave:"square"},{frequency:130,endFrequency:95,start:.14,duration:.09,gain:.06,wave:"square"}],hop:[{frequency:210,endFrequency:420,start:0,duration:.12,gain:.045}],horn:[{frequency:370,start:0,duration:.24,gain:.045,wave:"sawtooth"}],meow:[{frequency:360,endFrequency:690,start:0,duration:.28,gain:.04,wave:"triangle"}],oink:[{frequency:230,endFrequency:160,start:0,duration:.2,gain:.05,wave:"sawtooth"}],rain:[{frequency:1100,endFrequency:680,start:0,duration:.08,gain:.025},{frequency:1280,endFrequency:760,start:.1,duration:.08,gain:.022}],roar:[{frequency:95,endFrequency:210,start:0,duration:.34,gain:.055,wave:"sawtooth"}],scanner:[{frequency:550,endFrequency:1150,start:0,duration:.16,gain:.035},{frequency:1150,endFrequency:550,start:.16,duration:.16,gain:.035}],spin:[{frequency:680,endFrequency:310,start:0,duration:.3,gain:.035,wave:"triangle"}],trumpet:[{frequency:190,endFrequency:520,start:0,duration:.34,gain:.05,wave:"sawtooth"}],twinkle:[{frequency:880,start:0,duration:.11,gain:.035},{frequency:1176,start:.1,duration:.16,gain:.04}],whale:[{frequency:260,endFrequency:510,start:0,duration:.4,gain:.04,wave:"sine"}],whoosh:[{frequency:720,endFrequency:280,start:0,duration:.28,gain:.03,wave:"triangle"}],wind:[{frequency:430,endFrequency:780,start:0,duration:.32,gain:.028,wave:"triangle"}]},ze={a:"crunch",b:"bounce",c:"meow",d:"bark",e:"trumpet",f:"bubble",g:"bleat",h:"whoosh",i:"twinkle",j:"crunch",k:"wind",l:"roar",m:"twinkle",n:"chirp",o:"bubble",p:"oink",q:"fanfare",r:"hop",s:"twinkle",t:"bubble",u:"rain",v:"horn",w:"whale",x:"scanner",y:"spin",z:"gallop"},Ne=e=>Ge[ze[e]??"twinkle"];let F=null;const de=()=>{if(F)return F;const e=window,t=e.AudioContext??e.webkitAudioContext;return t?(F=new t,F):null},V=(e,t,a)=>{const o=e.currentTime+a;t.forEach(r=>{const i=e.createOscillator(),d=e.createGain();i.type=r.wave??"sine",i.frequency.setValueAtTime(r.frequency,o+r.start),r.endFrequency&&i.frequency.exponentialRampToValueAtTime(r.endFrequency,o+r.start+r.duration),d.gain.setValueAtTime(1e-4,o+r.start),d.gain.exponentialRampToValueAtTime(r.gain,o+r.start+.015),d.gain.exponentialRampToValueAtTime(1e-4,o+r.start+r.duration),i.connect(d),d.connect(e.destination),i.start(o+r.start),i.stop(o+r.start+r.duration+.02)})},h=async e=>{try{const t=de();return t?(t.state==="suspended"&&await t.resume(),V(t,je(e),0),!0):!1}catch{return!1}},He=async e=>{try{const t=de();if(!t)return!1;t.state==="suspended"&&await t.resume();const a=Ne(e);return V(t,a,0),V(t,a,.62),!0}catch{return!1}},x=(e,t)=>t==="svg"?`./assets/images/${e}.svg`:`./assets/audio/${e}.wav`,l=(e,t,a)=>({id:e,uppercase:e.toUpperCase(),lowercase:e,phoneme:t,word:a,image:x(e,"svg"),uppercaseSound:x(`${e}-name`,"wav"),lowercasePhonemeSound:x(`${e}-phoneme`,"wav"),wordSound:x(`${e}-word`,"wav")}),q=[l("a","/æ/","apple"),l("b","/b/","ball"),l("c","/k/","cat"),l("d","/d/","dog"),l("e","/ɛ/","elephant"),l("f","/f/","fish"),l("g","/ɡ/","goat"),l("h","/h/","hat"),l("i","/ɪ/","igloo"),l("j","/dʒ/","jam"),l("k","/k/","kite"),l("l","/l/","lion"),l("m","/m/","moon"),l("n","/n/","nest"),l("o","/ɑ/","octopus"),l("p","/p/","pig"),l("q","/kw/","queen"),l("r","/r/","rabbit"),l("s","/s/","sun"),l("t","/t/","turtle"),l("u","/ʌ/","umbrella"),l("v","/v/","van"),l("w","/w/","whale"),l("x","/ɛks/","x-ray"),l("y","/j/","yo-yo"),l("z","/z/","zebra")],Ye=e=>{const t=[],a=new Set,o=new Set,r=new Set;for(const i of e)a.has(i.id)&&t.push(`Duplicate id: ${i.id}`),o.has(i.uppercase)&&t.push(`Duplicate uppercase: ${i.uppercase}`),r.has(i.lowercase)&&t.push(`Duplicate lowercase: ${i.lowercase}`),a.add(i.id),o.add(i.uppercase),r.add(i.lowercase),(!i.phoneme||!i.word)&&t.push(`Missing learning content: ${i.id}`),i.image.startsWith("./assets/images/")||t.push(`Invalid image: ${i.id}`),i.uppercaseSound.startsWith("./assets/audio/")||t.push(`Invalid uppercase sound: ${i.id}`),i.lowercasePhonemeSound.startsWith("./assets/audio/")||t.push(`Invalid lowercase phoneme sound: ${i.id}`),i.wordSound.startsWith("./assets/audio/")||t.push(`Invalid word sound: ${i.id}`);return t},We=e=>"upper-to-lower",Xe=(e,t)=>e===t,Be=(e,t)=>t.find(a=>e.x>=a.left&&e.x<=a.right&&e.y>=a.top&&e.y<=a.bottom)?.id??null,k=document.querySelector("#app");if(!k)throw new Error("The application root is missing.");const T=document.querySelector(".resource-preparation-announcement")??document.createElement("div");T.className="resource-preparation-announcement visually-hidden";T.setAttribute("aria-live","polite");T.setAttribute("aria-atomic","true");T.isConnected||k.after(T);let n=null,M="en",U=null,R=null,C=null,c=null,O=!1,E=!1,g=null;const Q=ce(q).length;let m={status:"preparing",completed:0,total:Q};const ue=e=>e;let f=ue,X=null,P=null,_=0;const Ke=Ye(q),s=e=>Pe(M,e),j=(e,t)=>s(e).replace(/\{(\w+)\}/g,(a,o)=>String(t[o]??a)),B=e=>{T.textContent=e},pe="letter-island-selected-letter-ids-v1",$=q.map(e=>e.id),Ve=new Set($),Qe=()=>{try{const e=localStorage.getItem(pe);if(!e)return new Set($);const t=JSON.parse(e);if(!Array.isArray(t))return new Set($);const a=new Set(t.filter(o=>typeof o=="string"&&Ve.has(o)));return a.size>0?a:new Set($)}catch{return new Set($)}};let L=Qe();const Je=()=>{try{localStorage.setItem(pe,JSON.stringify($.filter(e=>L.has(e))))}catch{}},Ze=()=>xe(q,L),K=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t),et=e=>Array.from({length:5},(t,a)=>`<span class="progress-star ${a<e?"is-filled":""}" aria-hidden="true">★</span>`).join(""),tt=e=>M==="zh"?`已完成 ${e} / 5 题`:`${e} of 5 questions complete`,ge=()=>{const e=ie(M);return`<button class="language-toggle" type="button" data-action="toggle-language" aria-label="${s(e==="zh"?"switchToChinese":"switchToEnglish")}">${e==="zh"?"中文":"EN"}</button>`},he=()=>`
  <button class="scope-toggle" type="button" data-action="open-letter-scope" aria-label="${s("letterScope")}" title="${s("letterScope")}">
    <span aria-hidden="true">Aa</span>
  </button>
`,me=()=>{if(!E)return"";const e=g??L;return`
    <div class="letter-scope-backdrop" data-action="cancel-letter-scope">
      <section class="letter-scope-dialog" role="dialog" aria-modal="true" aria-labelledby="letter-scope-title">
        <header class="letter-scope-dialog__header">
          <div>
            <h2 id="letter-scope-title">${s("letterScopeTitle")}</h2>
            <p class="letter-scope-count" aria-live="polite">${e.size} / ${q.length}</p>
          </div>
          <button class="icon-button letter-scope-close" type="button" data-action="cancel-letter-scope" aria-label="${s("cancel")}">×</button>
        </header>
        <div class="letter-board" role="group" aria-label="${s("letterScopeTitle")}">
          ${q.map(t=>{const a=e.has(t.id),o=a&&e.size===1;return`
              <button class="letter-scope-tile${a?" is-selected":""}" type="button" data-action="toggle-scope-letter" data-letter-id="${t.id}" aria-label="${t.uppercase}" aria-pressed="${a}"${o?" disabled":""}>
                <span>${t.uppercase}</span><small>${t.lowercase}</small>
              </button>`}).join("")}
        </div>
        <footer class="letter-scope-dialog__footer">
          <button class="secondary-button scope-modal-button" type="button" data-action="select-all-letters">${s("selectAllLetters")}</button>
          <div class="letter-scope-dialog__actions">
            <button class="secondary-button scope-modal-button" type="button" data-action="cancel-letter-scope">${s("cancel")}</button>
            <button class="primary-button scope-modal-button" type="button" data-action="save-letter-scope">${s("done")}</button>
          </div>
        </footer>
      </section>
    </div>
  `},at=()=>`
  <main class="home-screen" aria-labelledby="home-title">
    <header class="site-header">
      <a class="brand" href="#/" aria-label="${s("home")}">${s("brand")}</a>
      <div class="header-actions"><span class="header-note">${s("languageNote")}</span>${ge()}${he()}</div>
    </header>
    <section class="home-intro">
      <div class="island-mark" aria-hidden="true"><span>A</span><span>a</span></div>
      <div>
        <h1 id="home-title">${s("homeTitle")}</h1>
        <p>${s("homeSubtitle")}</p>
      </div>
    </section>
    <nav class="game-menu" aria-label="${s("games")}">
      <a class="game-card game-card--sound" href="${W("sound-choice")}" aria-label="${s("soundGame")}">
        <span class="game-card__number">01</span>
        <span class="game-card__icon" aria-hidden="true">♪</span>
        <span class="game-card__content"><strong>${s("soundGame")}</strong><small>${s("soundDescription")}</small></span>
        <span class="game-card__arrow" aria-hidden="true">→</span>
      </a>
      <a class="game-card game-card--case" href="${W("case-match")}" aria-label="${s("caseGame")}">
        <span class="game-card__number">02</span>
        <span class="game-card__icon" aria-hidden="true">Aa</span>
        <span class="game-card__content"><strong>${s("caseGame")}</strong><small>${s("caseDescription")}</small></span>
        <span class="game-card__arrow" aria-hidden="true">→</span>
      </a>
      <a class="game-card game-card--picture" href="${W("picture-drag")}" aria-label="${s("pictureGame")}">
        <span class="game-card__number">03</span>
        <span class="game-card__icon" aria-hidden="true">⌁</span>
        <span class="game-card__content"><strong>${s("pictureGame")}</strong><small>${s("pictureDescription")}</small></span>
        <span class="game-card__arrow" aria-hidden="true">→</span>
      </a>
    </nav>
    <p class="home-footer">${s("fiveQuestions")}</p>
  </main>
`,rt=()=>{if(m.status==="active")return"";const{completed:e,total:t}=m,a=m.status==="failed",o=a?s("resourcesUnavailable"):m.status==="ready"?s("resourcesReady"):s("preparingResources"),r=m.status==="failed"?j("resourcesStillMissing",{count:m.failedCount}):s("preparingResourcesDescription");return`
    <main class="resource-preparation" data-testid="resource-preparation" aria-labelledby="resource-preparation-title">
      <div class="resource-preparation__content">
        <span class="resource-preparation__star resource-preparation__star--one" aria-hidden="true">★</span>
        <span class="resource-preparation__star resource-preparation__star--two" aria-hidden="true">★</span>
        <span class="resource-preparation__wave resource-preparation__wave--one" aria-hidden="true">⌁</span>
        <span class="resource-preparation__wave resource-preparation__wave--two" aria-hidden="true">⌁</span>
        <div class="resource-preparation__mascot" aria-hidden="true"><span>A</span><span>a</span></div>
        <h1 id="resource-preparation-title"${a?' tabindex="-1"':""}>${o}</h1>
        <p>${r}</p>
        <p class="resource-preparation__progress">${j("resourcesProgress",{completed:e,total:t})}</p>
        ${a?`
          <div class="resource-preparation__actions">
            <button class="primary-button" type="button" data-action="retry-resources">${s("retryResources")}</button>
            <button class="secondary-button" type="button" data-action="start-anyway">${s("startAnyway")}</button>
          </div>`:""}
      </div>
    </main>
  `},ee=e=>`
  <header class="game-header">
    <a class="icon-button" href="#/" aria-label="${s("home")}">⌂</a>
    <div class="progress" aria-label="${tt(e.session.position)}">${et(e.session.position)}</div>
    <div class="game-header__actions">${ge()}${he()}<button class="icon-button" type="button" data-action="restart" aria-label="${s("restart")}">↻</button></div>
  </header>
`,te=e=>e.feedback==="correct"?`
      <div class="success-celebration" data-testid="success-celebration" role="status" aria-live="assertive">
        <span class="success-star success-star--one" aria-hidden="true">★</span>
        <span class="success-star success-star--two" aria-hidden="true">★</span>
        <span class="success-star success-star--three" aria-hidden="true">★</span>
        <strong>${s("correct")}</strong>
      </div>`:e.feedback==="retry"?`<p class="feedback feedback--retry" role="status">${s("retry")}</p>`:e.feedback==="audio-unavailable"?`<p class="feedback feedback--retry" role="status">${s("soundUnavailable")}</p>`:`<p class="feedback" aria-live="polite">${s("takeTime")}</p>`,G=e=>e.phase==="celebrating"?" disabled":"",st=(e,t)=>`
  <main class="game-screen game-screen--sound" aria-labelledby="game-title">
    ${ee(e)}
    <section class="game-prompt">
      <p class="eyebrow">${s("soundGame")}</p>
      <h1 id="game-title">${s("listenChoose")}</h1>
      <button class="speaker-button" type="button" data-action="replay-sound" aria-label="${s("replaySound")}">♪</button>
      ${te(e)}
    </section>
    <div class="answer-grid" aria-label="${s("letterChoice")}">
      ${t.choices.map(a=>`
        <button class="letter-choice" type="button" data-answer="${a.id}"${a.id===t.target.id?' data-testid="correct-answer"':""}${G(e)} aria-label="${s("letterChoice")}: ${a.uppercase} ${a.lowercase}">
          <span>${a.uppercase}</span><small>${a.lowercase}</small>
        </button>`).join("")}
    </div>
  </main>
`,nt=(e,t)=>{We(e.session.position);const a=t.target.uppercase;return`
    <main class="game-screen game-screen--case" aria-labelledby="game-title">
      ${ee(e)}
      <section class="game-prompt">
        <p class="eyebrow">${s("matchPair")}</p>
        <h1 id="game-title">${s("findFriend")}</h1>
        <button class="target-glyph" type="button" data-action="replay-case-target" aria-label="${s("replayMainLetter")}">${a}</button>
        ${te(e)}
      </section>
      <div class="answer-grid answer-grid--case" aria-label="${s("letterChoice")}">
        ${t.choices.map(o=>{const r=o.lowercase;return`<button class="letter-choice" type="button" data-answer="${o.id}"${o.id===t.target.id?' data-testid="correct-answer"':""}${G(e)} aria-label="${s("letterChoice")}: ${r}">${r}</button>`}).join("")}
      </div>
    </main>
  `},ot=(e,t)=>{const a=e.selectedLetter?" is-selected":"";return`
    <main class="game-screen game-screen--picture" aria-labelledby="game-title">
      ${ee(e)}
      <section class="game-prompt">
        <p class="eyebrow">${s("dragPicture")}</p>
        <h1 id="game-title">${s("whereBelong")}</h1>
        <button class="draggable-letter${a}" type="button" data-action="select-letter" data-letter="${t.target.id}"${G(e)} aria-pressed="${e.selectedLetter}" aria-label="${t.target.uppercase} ${t.target.lowercase}. ${s("tapOrDrag")}">
          <span>${t.target.uppercase}</span><small>${t.target.lowercase}</small>
        </button>
        ${te(e)}
      </section>
      <div class="picture-grid" aria-label="${s("pictureChoice")}">
        ${t.choices.map(o=>`
          <button class="picture-zone" type="button" data-drop-id="${o.id}"${o.id===t.target.id?' data-testid="correct-picture"':""}${G(e)} aria-label="${s("pictureChoice")}: ${K(o.word)}">
            <img src="${f(o.image)}" alt="${K(o.word)}" />
            <span>${K(o.word)}</span>
          </button>`).join("")}
      </div>
    </main>
  `},it=()=>`
  <main class="complete-screen" aria-labelledby="complete-title">
    <div class="celebration" aria-hidden="true">★ ★ ★</div>
    <p class="eyebrow">${s("completeKicker")}</p>
    <h1 id="complete-title">${s("completeTitle")}</h1>
    <p>${s("completeDescription")}</p>
    <div class="complete-actions">
      <button class="primary-button" type="button" data-action="restart">${s("playAgain")}</button>
      <a class="secondary-button" href="#/">${s("backToIsland")}</a>
    </div>
  </main>
`,y=e=>{if(e.phase==="complete"){k.innerHTML=it(),z();return}const t=e.game==="sound-choice"?st(e,e.round):e.game==="case-match"?nt(e,e.round):ot(e,e.round);k.innerHTML=`${t}${me()}`,z()},S=()=>{if(n){y(n);return}k.innerHTML=`${at()}${me()}`,z()},ae=()=>{U&&window.clearTimeout(U),U=null},fe=()=>{C&&window.clearTimeout(C),C=null},ye=()=>{P!==null&&window.clearTimeout(P),P=null},be=async()=>{X?.dispose(),X=null,f=ue,ye();const e=_+1;_=e,m={status:"preparing",completed:0,total:Q},B(s("preparingResources")),v();const t=await Ie(q,{onProgress:({completed:a})=>{e===_&&(m={status:"preparing",completed:a,total:Q},v())}});if(e!==_){t.dispose();return}if(X=t,f=t.resolve,t.failedPaths.length>0){m={status:"failed",completed:t.completed,total:t.total,failedCount:t.failedPaths.length},B(`${s("resourcesUnavailable")} ${j("resourcesStillMissing",{count:t.failedPaths.length})} ${s("retryResources")}. ${s("startAnyway")}.`),v();return}m={status:"ready",completed:t.completed,total:t.total},B(`${s("resourcesReady")} ${j("resourcesProgress",{completed:t.completed,total:t.total})}`),v(),P=window.setTimeout(()=>{e===_&&(P=null,m={status:"active"},v())},700)},J=e=>{ae(),fe();const t=Ze(),a=new Ce(Ue(t,5));n={game:e,catalog:t,session:a,round:le(a.current,t),feedback:"idle",phase:"playing",selectedLetter:!1}},ct=()=>{if(!(!n||n.phase!=="celebrating")){if(n.session.isComplete){n.phase="complete",y(n);return}n.round=le(n.session.current,n.catalog),n.phase="playing",n.feedback="idle",y(n)}},lt=(e,t)=>{if(n){if(e==="retry"){n.feedback="retry",n.selectedLetter=!1,h("retry"),y(n);return}n.feedback="correct",n.selectedLetter=!1,n.phase="celebrating",h("correct"),t&&N(t),y(n),ae(),U=window.setTimeout(ct,1200)}},Z=e=>{if(!n||n.phase!=="playing")return;const t=n.round.target,a=n.session.answer(e),o=n.game==="case-match"&&e===t.id?f(t.lowercasePhonemeSound):void 0;lt(a,o)},we=async e=>{h("tap"),!await N(e)&&n?.phase==="playing"&&(n.feedback="audio-unavailable",y(n))},dt=()=>{!n||n.phase!=="playing"||we(f(n.round.target.uppercaseSound))},ut=()=>{!n||n.game!=="case-match"||n.phase!=="playing"||we(f(n.round.target.uppercaseSound))},pt=e=>{Re([f(e.uppercaseSound),f(e.uppercaseSound),f(e.lowercasePhonemeSound),f(e.lowercasePhonemeSound)],1e3).then(t=>{!t&&n?.game==="picture-drag"&&n.phase==="playing"&&n.round.target.id===e.id&&(n.feedback="audio-unavailable",y(n))})},A=()=>{R&&window.clearTimeout(R),R=null,c?.tile.classList.remove("is-dragging"),c?.ghost.remove(),document.querySelectorAll(".picture-zone.is-drop-target, .picture-zone.is-correct-drop").forEach(e=>{e.classList.remove("is-drop-target","is-correct-drop")}),c=null},gt=e=>{c&&(c.ghost.style.transform=`translate(${e.clientX-c.ghost.offsetWidth/2}px, ${e.clientY-c.ghost.offsetHeight/2}px)`)},ve=e=>{const a=Array.from(document.querySelectorAll("[data-drop-id]")).map(o=>{const r=o.getBoundingClientRect();return{id:o.dataset.dropId??"",left:r.left,top:r.top,right:r.right,bottom:r.bottom}});return Be({x:e.clientX,y:e.clientY},a)},ht=e=>{const t=ve(e);document.querySelectorAll("[data-drop-id]").forEach(a=>{a.classList.toggle("is-drop-target",a.dataset.dropId===t)})},mt=()=>{c&&(c.tile.classList.remove("is-dragging"),c.ghost.classList.add("is-returning"),c.ghost.style.transform=`translate(${c.originX}px, ${c.originY}px)`,h("retry"),R=window.setTimeout(A,300))},ft=e=>{if(!c)return;const t=n?.round.target,a=document.querySelector(`[data-drop-id="${e}"]`);c.tile.classList.remove("is-dragging"),c.ghost.classList.add("is-dropped"),a?.classList.remove("is-drop-target"),a?.classList.add("is-correct-drop"),h("drop"),t&&(N(f(t.wordSound)),fe(),C=window.setTimeout(()=>{He(t.id),C=null},1100)),R=window.setTimeout(()=>{A(),Z(e)},900)},yt=()=>{const e=document.querySelector('[data-action="select-letter"]');if(!e)return;e.addEventListener("pointerdown",a=>{if(a.button!==0||c||n?.phase!=="playing")return;const o=e.getBoundingClientRect(),r=e.cloneNode(!0);r.classList.add("drag-ghost"),r.setAttribute("aria-hidden","true"),r.removeAttribute("data-action"),r.removeAttribute("data-letter"),r.tabIndex=-1,r.disabled=!0,r.style.width=`${o.width}px`,r.style.height=`${o.height}px`,r.style.transform=`translate(${o.left}px, ${o.top}px)`,document.body.append(r),c={pointerId:a.pointerId,tile:e,ghost:r,didDrag:!1,originX:o.left,originY:o.top,startX:a.clientX,startY:a.clientY};try{e.setPointerCapture(a.pointerId)}catch{}}),e.addEventListener("pointermove",a=>{!c||c.pointerId!==a.pointerId||!c.didDrag&&Math.hypot(a.clientX-c.startX,a.clientY-c.startY)<8||(c.didDrag=!0,c.tile.classList.add("is-dragging"),a.preventDefault(),gt(a),ht(a))});const t=a=>{if(!c||c.pointerId!==a.pointerId)return;const o=c.didDrag,r=o?ve(a):null;try{e.releasePointerCapture(a.pointerId)}catch{}if(!o){A();return}if(O=!0,window.setTimeout(()=>{O=!1},0),!n||!r||!Xe(n.round.target.id,r)){mt();return}ft(r)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)},z=()=>{document.querySelector('[data-action="retry-resources"]')?.addEventListener("click",()=>{be()}),document.querySelector('[data-action="start-anyway"]')?.addEventListener("click",()=>{ye(),m={status:"active"},v()}),document.querySelectorAll("[data-answer]").forEach(e=>{e.addEventListener("click",()=>Z(e.dataset.answer??""))}),document.querySelectorAll("[data-drop-id]").forEach(e=>{e.addEventListener("click",()=>{!n?.selectedLetter||n.phase!=="playing"||(h("tap"),Z(e.dataset.dropId??""))})}),document.querySelector('[data-action="select-letter"]')?.addEventListener("click",()=>{if(O){O=!1;return}if(!n||n.phase!=="playing")return;const e=n.round.target;n.selectedLetter=!n.selectedLetter,h("tap"),pt(e),y(n)}),document.querySelector('[data-action="replay-sound"]')?.addEventListener("click",dt),document.querySelector('[data-action="replay-case-target"]')?.addEventListener("click",ut),document.querySelectorAll('[data-action="open-letter-scope"]').forEach(e=>{e.addEventListener("click",()=>{g=new Set(L),E=!0,h("tap"),S()})}),document.querySelectorAll('[data-action="toggle-scope-letter"]').forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.letterId;if(!(!t||!g)){if(g.has(t)){if(g.size===1)return;g.delete(t)}else g.add(t);h("tap"),S()}})}),document.querySelector('[data-action="select-all-letters"]')?.addEventListener("click",()=>{g=new Set($),h("tap"),S()}),document.querySelector('[data-action="save-letter-scope"]')?.addEventListener("click",()=>{if(!g||g.size===0)return;const e=$.some(t=>g?.has(t)!==L.has(t));L=new Set(g),Je(),g=null,E=!1,h("tap"),e&&n&&(A(),J(n.game)),S()}),document.querySelectorAll('[data-action="cancel-letter-scope"]').forEach(e=>{e.addEventListener("click",t=>{e.classList.contains("letter-scope-backdrop")&&t.target!==e||(g=null,E=!1,h("tap"),S())})}),document.querySelectorAll('[data-action="restart"]').forEach(e=>{e.addEventListener("click",()=>{n&&(h("tap"),A(),J(n.game),y(n))})}),document.querySelectorAll('[data-action="toggle-language"]').forEach(e=>{e.addEventListener("click",()=>{M=ie(M),h("tap"),S()})}),yt()},v=()=>{if(ae(),A(),Ke.length>0){k.innerHTML=`<main class="resource-error"><h1>${s("brand")}</h1><p>${s("soundUnavailable")}</p></main>`;return}if(m.status!=="active"){k.innerHTML=rt(),z(),m.status==="failed"&&document.querySelector("#resource-preparation-title")?.focus();return}const e=Fe(window.location.hash);if(e.kind==="home"){n=null,E=!1,g=null,S();return}(!n||n.game!==e.game)&&J(e.game),n&&y(n)};window.addEventListener("hashchange",v);v();be();
