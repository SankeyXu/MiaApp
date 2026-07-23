(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&n(d)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();const J=e=>new Promise(t=>{window.setTimeout(t,e)}),E=async(e,t=a=>new Audio(a))=>{try{const a=t(e);return a.currentTime=0,await a.play(),!0}catch{return!1}},Z=async(e,t,a=r=>new Audio(r),n=J)=>{for(const[r,o]of e.entries()){if(!await E(o,a))return!1;r<e.length-1&&await n(t)}return!0};class ee{constructor(t){if(this.questions=t,t.length===0)throw new Error("A game session needs at least one question.")}questions;position=0;get current(){return this.questions[Math.min(this.position,this.questions.length-1)]}get isComplete(){return this.position>=this.questions.length}answer(t){return this.isComplete?"complete":t!==this.current.id?"retry":(this.position+=1,this.isComplete?"complete":"correct")}}const te={en:{brand:"Letter Island",languageNote:"American English · AI voice",switchToChinese:"Switch to Chinese",switchToEnglish:"Switch to English",letterScope:"Set letter range",letterScopeTitle:"Choose letters",selectAllLetters:"Select all",cancel:"Cancel",done:"Done",homeTitle:"Let's play with letters",homeSubtitle:"Choose a game and explore one little sound at a time.",games:"Games",soundGame:"Hear the sound",soundDescription:"Listen, then choose the letter",caseGame:"Match cases",caseDescription:"Find the big and little pair",pictureGame:"Drag to picture",pictureDescription:"Take the letter to its picture",fiveQuestions:"Five gentle questions in every game.",home:"Home",restart:"Start this game again",replaySound:"Replay sound",replayMainLetter:"Replay main letter",listenChoose:"Listen and choose",matchPair:"Match the pair",findFriend:"Find its letter friend",dragPicture:"Drag to picture",whereBelong:"Where does it belong?",tapOrDrag:"Tap then choose a picture, or drag it.",letterChoice:"Letter choice",pictureChoice:"Picture",correct:"Great job!",retry:"Try once more.",takeTime:"Take your time.",soundUnavailable:"The sound is getting ready. You can still choose a letter.",completeKicker:"Five sounds explored",completeTitle:"You did it!",completeDescription:"Wonderful work. Ready for another little adventure?",playAgain:"Play again",backToIsland:"Back to island"},zh:{brand:"字母岛",languageNote:"美式英语 · AI 语音",switchToChinese:"切换为中文",switchToEnglish:"切换为英文",letterScope:"设置字母范围",letterScopeTitle:"选择字母",selectAllLetters:"全选",cancel:"取消",done:"完成",homeTitle:"和字母一起玩",homeSubtitle:"选择一个游戏，一次认识一个小小的声音。",games:"游戏",soundGame:"听声音选字母",soundDescription:"听一听，选出字母",caseGame:"大小写配对",caseDescription:"找到大写和小写的朋友",pictureGame:"拖到图片",pictureDescription:"把字母送到对应图片",fiveQuestions:"每个游戏有五道轻松小题。",home:"回到首页",restart:"重新开始这个游戏",replaySound:"再听一次",replayMainLetter:"再听主字母",listenChoose:"听一听，选一选",matchPair:"大小写配对",findFriend:"找到它的字母朋友",dragPicture:"拖到图片",whereBelong:"它应该去哪里？",tapOrDrag:"点击字母再选图片，或者直接拖动。",letterChoice:"字母选项",pictureChoice:"图片",correct:"答对啦！",retry:"再试一次。",takeTime:"慢慢来。",soundUnavailable:"声音正在准备中，先选一个字母吧。",completeKicker:"已经探索五个声音",completeTitle:"你完成啦！",completeDescription:"做得真棒！再来一次小小的字母冒险吧。",playAgain:"再玩一次",backToIsland:"回到字母岛"}},ae=(e,t)=>te[e][t],R=e=>e==="en"?"zh":"en",N=(e,t,a=3,n=Math.random)=>{if(!Number.isInteger(a)||a<1||t.length===0)throw new Error("A round needs a valid number of choices.");const r=Math.min(a,t.length),o=t.filter(g=>g.id!==e.id);for(let g=o.length-1;g>0;g-=1){const w=Math.floor(n()*(g+1));[o[g],o[w]]=[o[w],o[g]]}const d=[e,...o.slice(0,r-1)];for(let g=d.length-1;g>0;g-=1){const w=Math.floor(n()*(g+1));[d[g],d[w]]=[d[w],d[g]]}return{target:e,choices:d}},re=e=>{const t=e.match(/^#\/game\/(sound-choice|case-match|picture-drag)$/);return t?{kind:"game",game:t[1]}:{kind:"home"}},M=e=>`#/game/${e}`,se=(e,t)=>{const a=new Set(t);return e.filter(n=>a.has(n.id))},ne=(e,t,a=Math.random)=>{if(!Number.isInteger(t)||t<1||e.length===0)throw new Error("A session needs a catalog and a positive number of questions.");const n=[];for(;n.length<t;){const r=[...e];for(let o=r.length-1;o>0;o-=1){const d=Math.floor(a()*(o+1));[r[o],r[d]]=[r[d],r[o]]}n.push(...r.slice(0,t-n.length))}return n},oe={tap:[{frequency:560,start:0,duration:.06,gain:.035}],correct:[{frequency:523.25,start:0,duration:.14,gain:.075},{frequency:659.25,start:.11,duration:.14,gain:.075},{frequency:783.99,start:.22,duration:.24,gain:.085}],retry:[{frequency:310,start:0,duration:.09,gain:.035},{frequency:270,start:.08,duration:.11,gain:.03}],drop:[{frequency:420,start:0,duration:.1,gain:.045}]},ie=e=>oe[e],ce={bounce:[{frequency:410,endFrequency:160,start:0,duration:.18,gain:.055}],bark:[{frequency:145,endFrequency:100,start:0,duration:.13,gain:.055,wave:"square"}],bleat:[{frequency:290,endFrequency:410,start:0,duration:.22,gain:.045,wave:"sawtooth"}],bubble:[{frequency:280,endFrequency:570,start:0,duration:.24,gain:.04}],chirp:[{frequency:900,endFrequency:1280,start:0,duration:.12,gain:.035}],crunch:[{frequency:170,endFrequency:90,start:0,duration:.1,gain:.05,wave:"square"},{frequency:240,endFrequency:120,start:.08,duration:.1,gain:.04,wave:"square"}],fanfare:[{frequency:523,start:0,duration:.11,gain:.045},{frequency:784,start:.1,duration:.17,gain:.05}],gallop:[{frequency:130,endFrequency:95,start:0,duration:.09,gain:.06,wave:"square"},{frequency:130,endFrequency:95,start:.14,duration:.09,gain:.06,wave:"square"}],hop:[{frequency:210,endFrequency:420,start:0,duration:.12,gain:.045}],horn:[{frequency:370,start:0,duration:.24,gain:.045,wave:"sawtooth"}],meow:[{frequency:360,endFrequency:690,start:0,duration:.28,gain:.04,wave:"triangle"}],oink:[{frequency:230,endFrequency:160,start:0,duration:.2,gain:.05,wave:"sawtooth"}],rain:[{frequency:1100,endFrequency:680,start:0,duration:.08,gain:.025},{frequency:1280,endFrequency:760,start:.1,duration:.08,gain:.022}],roar:[{frequency:95,endFrequency:210,start:0,duration:.34,gain:.055,wave:"sawtooth"}],scanner:[{frequency:550,endFrequency:1150,start:0,duration:.16,gain:.035},{frequency:1150,endFrequency:550,start:.16,duration:.16,gain:.035}],spin:[{frequency:680,endFrequency:310,start:0,duration:.3,gain:.035,wave:"triangle"}],trumpet:[{frequency:190,endFrequency:520,start:0,duration:.34,gain:.05,wave:"sawtooth"}],twinkle:[{frequency:880,start:0,duration:.11,gain:.035},{frequency:1176,start:.1,duration:.16,gain:.04}],whale:[{frequency:260,endFrequency:510,start:0,duration:.4,gain:.04,wave:"sine"}],whoosh:[{frequency:720,endFrequency:280,start:0,duration:.28,gain:.03,wave:"triangle"}],wind:[{frequency:430,endFrequency:780,start:0,duration:.32,gain:.028,wave:"triangle"}]},le={a:"crunch",b:"bounce",c:"meow",d:"bark",e:"trumpet",f:"bubble",g:"bleat",h:"whoosh",i:"twinkle",j:"crunch",k:"wind",l:"roar",m:"twinkle",n:"chirp",o:"bubble",p:"oink",q:"fanfare",r:"hop",s:"twinkle",t:"bubble",u:"rain",v:"horn",w:"whale",x:"scanner",y:"spin",z:"gallop"},de=e=>ce[le[e]??"twinkle"];let T=null;const H=()=>{if(T)return T;const e=window,t=e.AudioContext??e.webkitAudioContext;return t?(T=new t,T):null},F=(e,t,a)=>{const n=e.currentTime+a;t.forEach(r=>{const o=e.createOscillator(),d=e.createGain();o.type=r.wave??"sine",o.frequency.setValueAtTime(r.frequency,n+r.start),r.endFrequency&&o.frequency.exponentialRampToValueAtTime(r.endFrequency,n+r.start+r.duration),d.gain.setValueAtTime(1e-4,n+r.start),d.gain.exponentialRampToValueAtTime(r.gain,n+r.start+.015),d.gain.exponentialRampToValueAtTime(1e-4,n+r.start+r.duration),o.connect(d),d.connect(e.destination),o.start(n+r.start),o.stop(n+r.start+r.duration+.02)})},p=async e=>{try{const t=H();return t?(t.state==="suspended"&&await t.resume(),F(t,ie(e),0),!0):!1}catch{return!1}},ue=async e=>{try{const t=H();if(!t)return!1;t.state==="suspended"&&await t.resume();const a=de(e);return F(t,a,0),F(t,a,.62),!0}catch{return!1}},A=(e,t)=>t==="svg"?`./assets/images/${e}.svg`:`./assets/audio/${e}.wav`,l=(e,t,a)=>({id:e,uppercase:e.toUpperCase(),lowercase:e,phoneme:t,word:a,image:A(e,"svg"),uppercaseSound:A(`${e}-name`,"wav"),lowercasePhonemeSound:A(`${e}-phoneme`,"wav"),wordSound:A(`${e}-word`,"wav")}),S=[l("a","/æ/","apple"),l("b","/b/","ball"),l("c","/k/","cat"),l("d","/d/","dog"),l("e","/ɛ/","elephant"),l("f","/f/","fish"),l("g","/ɡ/","goat"),l("h","/h/","hat"),l("i","/ɪ/","igloo"),l("j","/dʒ/","jam"),l("k","/k/","kite"),l("l","/l/","lion"),l("m","/m/","moon"),l("n","/n/","nest"),l("o","/ɑ/","octopus"),l("p","/p/","pig"),l("q","/kw/","queen"),l("r","/r/","rabbit"),l("s","/s/","sun"),l("t","/t/","turtle"),l("u","/ʌ/","umbrella"),l("v","/v/","van"),l("w","/w/","whale"),l("x","/ɛks/","x-ray"),l("y","/j/","yo-yo"),l("z","/z/","zebra")],pe=e=>{const t=[],a=new Set,n=new Set,r=new Set;for(const o of e)a.has(o.id)&&t.push(`Duplicate id: ${o.id}`),n.has(o.uppercase)&&t.push(`Duplicate uppercase: ${o.uppercase}`),r.has(o.lowercase)&&t.push(`Duplicate lowercase: ${o.lowercase}`),a.add(o.id),n.add(o.uppercase),r.add(o.lowercase),(!o.phoneme||!o.word)&&t.push(`Missing learning content: ${o.id}`),o.image.startsWith("./assets/images/")||t.push(`Invalid image: ${o.id}`),o.uppercaseSound.startsWith("./assets/audio/")||t.push(`Invalid uppercase sound: ${o.id}`),o.lowercasePhonemeSound.startsWith("./assets/audio/")||t.push(`Invalid lowercase phoneme sound: ${o.id}`),o.wordSound.startsWith("./assets/audio/")||t.push(`Invalid word sound: ${o.id}`);return t},ge=e=>"upper-to-lower",he=(e,t)=>e===t,me=(e,t)=>t.find(a=>e.x>=a.left&&e.x<=a.right&&e.y>=a.top&&e.y<=a.bottom)?.id??null,k=document.querySelector("#app");if(!k)throw new Error("The application root is missing.");let s=null,L="en",C=null,$=null,v=null,c=null,D=!1,q=!1,u=null;const fe=pe(S),i=e=>ae(L,e),Y="letter-island-selected-letter-ids-v1",m=S.map(e=>e.id),ye=new Set(m),be=()=>{try{const e=localStorage.getItem(Y);if(!e)return new Set(m);const t=JSON.parse(e);if(!Array.isArray(t))return new Set(m);const a=new Set(t.filter(n=>typeof n=="string"&&ye.has(n)));return a.size>0?a:new Set(m)}catch{return new Set(m)}};let y=be();const we=()=>{try{localStorage.setItem(Y,JSON.stringify(m.filter(e=>y.has(e))))}catch{}},$e=()=>se(S,y),_=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]??t),ve=e=>Array.from({length:5},(t,a)=>`<span class="progress-star ${a<e?"is-filled":""}" aria-hidden="true">★</span>`).join(""),qe=e=>L==="zh"?`已完成 ${e} / 5 题`:`${e} of 5 questions complete`,W=()=>{const e=R(L);return`<button class="language-toggle" type="button" data-action="toggle-language" aria-label="${i(e==="zh"?"switchToChinese":"switchToEnglish")}">${e==="zh"?"中文":"EN"}</button>`},X=()=>`
  <button class="scope-toggle" type="button" data-action="open-letter-scope" aria-label="${i("letterScope")}" title="${i("letterScope")}">
    <span aria-hidden="true">Aa</span>
  </button>
`,B=()=>{if(!q)return"";const e=u??y;return`
    <div class="letter-scope-backdrop" data-action="cancel-letter-scope">
      <section class="letter-scope-dialog" role="dialog" aria-modal="true" aria-labelledby="letter-scope-title">
        <header class="letter-scope-dialog__header">
          <div>
            <h2 id="letter-scope-title">${i("letterScopeTitle")}</h2>
            <p class="letter-scope-count" aria-live="polite">${e.size} / ${S.length}</p>
          </div>
          <button class="icon-button letter-scope-close" type="button" data-action="cancel-letter-scope" aria-label="${i("cancel")}">×</button>
        </header>
        <div class="letter-board" role="group" aria-label="${i("letterScopeTitle")}">
          ${S.map(t=>{const a=e.has(t.id),n=a&&e.size===1;return`
              <button class="letter-scope-tile${a?" is-selected":""}" type="button" data-action="toggle-scope-letter" data-letter-id="${t.id}" aria-label="${t.uppercase}" aria-pressed="${a}"${n?" disabled":""}>
                <span>${t.uppercase}</span><small>${t.lowercase}</small>
              </button>`}).join("")}
        </div>
        <footer class="letter-scope-dialog__footer">
          <button class="secondary-button scope-modal-button" type="button" data-action="select-all-letters">${i("selectAllLetters")}</button>
          <div class="letter-scope-dialog__actions">
            <button class="secondary-button scope-modal-button" type="button" data-action="cancel-letter-scope">${i("cancel")}</button>
            <button class="primary-button scope-modal-button" type="button" data-action="save-letter-scope">${i("done")}</button>
          </div>
        </footer>
      </section>
    </div>
  `},Se=()=>`
  <main class="home-screen" aria-labelledby="home-title">
    <header class="site-header">
      <a class="brand" href="#/" aria-label="${i("home")}">${i("brand")}</a>
      <div class="header-actions"><span class="header-note">${i("languageNote")}</span>${W()}${X()}</div>
    </header>
    <section class="home-intro">
      <div class="island-mark" aria-hidden="true"><span>A</span><span>a</span></div>
      <div>
        <h1 id="home-title">${i("homeTitle")}</h1>
        <p>${i("homeSubtitle")}</p>
      </div>
    </section>
    <nav class="game-menu" aria-label="${i("games")}">
      <a class="game-card game-card--sound" href="${M("sound-choice")}" aria-label="${i("soundGame")}">
        <span class="game-card__number">01</span>
        <span class="game-card__icon" aria-hidden="true">♪</span>
        <span class="game-card__content"><strong>${i("soundGame")}</strong><small>${i("soundDescription")}</small></span>
        <span class="game-card__arrow" aria-hidden="true">→</span>
      </a>
      <a class="game-card game-card--case" href="${M("case-match")}" aria-label="${i("caseGame")}">
        <span class="game-card__number">02</span>
        <span class="game-card__icon" aria-hidden="true">Aa</span>
        <span class="game-card__content"><strong>${i("caseGame")}</strong><small>${i("caseDescription")}</small></span>
        <span class="game-card__arrow" aria-hidden="true">→</span>
      </a>
      <a class="game-card game-card--picture" href="${M("picture-drag")}" aria-label="${i("pictureGame")}">
        <span class="game-card__number">03</span>
        <span class="game-card__icon" aria-hidden="true">⌁</span>
        <span class="game-card__content"><strong>${i("pictureGame")}</strong><small>${i("pictureDescription")}</small></span>
        <span class="game-card__arrow" aria-hidden="true">→</span>
      </a>
    </nav>
    <p class="home-footer">${i("fiveQuestions")}</p>
  </main>
`,O=e=>`
  <header class="game-header">
    <a class="icon-button" href="#/" aria-label="${i("home")}">⌂</a>
    <div class="progress" aria-label="${qe(e.session.position)}">${ve(e.session.position)}</div>
    <div class="game-header__actions">${W()}${X()}<button class="icon-button" type="button" data-action="restart" aria-label="${i("restart")}">↻</button></div>
  </header>
`,j=e=>e.feedback==="correct"?`
      <div class="success-celebration" data-testid="success-celebration" role="status" aria-live="assertive">
        <span class="success-star success-star--one" aria-hidden="true">★</span>
        <span class="success-star success-star--two" aria-hidden="true">★</span>
        <span class="success-star success-star--three" aria-hidden="true">★</span>
        <strong>${i("correct")}</strong>
      </div>`:e.feedback==="retry"?`<p class="feedback feedback--retry" role="status">${i("retry")}</p>`:e.feedback==="audio-unavailable"?`<p class="feedback feedback--retry" role="status">${i("soundUnavailable")}</p>`:`<p class="feedback" aria-live="polite">${i("takeTime")}</p>`,I=e=>e.phase==="celebrating"?" disabled":"",ke=(e,t)=>`
  <main class="game-screen game-screen--sound" aria-labelledby="game-title">
    ${O(e)}
    <section class="game-prompt">
      <p class="eyebrow">${i("soundGame")}</p>
      <h1 id="game-title">${i("listenChoose")}</h1>
      <button class="speaker-button" type="button" data-action="replay-sound" aria-label="${i("replaySound")}">♪</button>
      ${j(e)}
    </section>
    <div class="answer-grid" aria-label="${i("letterChoice")}">
      ${t.choices.map(a=>`
        <button class="letter-choice" type="button" data-answer="${a.id}"${a.id===t.target.id?' data-testid="correct-answer"':""}${I(e)} aria-label="${i("letterChoice")}: ${a.uppercase} ${a.lowercase}">
          <span>${a.uppercase}</span><small>${a.lowercase}</small>
        </button>`).join("")}
    </div>
  </main>
`,Le=(e,t)=>{ge(e.session.position);const a=t.target.uppercase;return`
    <main class="game-screen game-screen--case" aria-labelledby="game-title">
      ${O(e)}
      <section class="game-prompt">
        <p class="eyebrow">${i("matchPair")}</p>
        <h1 id="game-title">${i("findFriend")}</h1>
        <button class="target-glyph" type="button" data-action="replay-case-target" aria-label="${i("replayMainLetter")}">${a}</button>
        ${j(e)}
      </section>
      <div class="answer-grid answer-grid--case" aria-label="${i("letterChoice")}">
        ${t.choices.map(n=>{const r=n.lowercase;return`<button class="letter-choice" type="button" data-answer="${n.id}"${n.id===t.target.id?' data-testid="correct-answer"':""}${I(e)} aria-label="${i("letterChoice")}: ${r}">${r}</button>`}).join("")}
      </div>
    </main>
  `},Te=(e,t)=>{const a=e.selectedLetter?" is-selected":"";return`
    <main class="game-screen game-screen--picture" aria-labelledby="game-title">
      ${O(e)}
      <section class="game-prompt">
        <p class="eyebrow">${i("dragPicture")}</p>
        <h1 id="game-title">${i("whereBelong")}</h1>
        <button class="draggable-letter${a}" type="button" data-action="select-letter" data-letter="${t.target.id}"${I(e)} aria-pressed="${e.selectedLetter}" aria-label="${t.target.uppercase} ${t.target.lowercase}. ${i("tapOrDrag")}">
          <span>${t.target.uppercase}</span><small>${t.target.lowercase}</small>
        </button>
        ${j(e)}
      </section>
      <div class="picture-grid" aria-label="${i("pictureChoice")}">
        ${t.choices.map(n=>`
          <button class="picture-zone" type="button" data-drop-id="${n.id}"${n.id===t.target.id?' data-testid="correct-picture"':""}${I(e)} aria-label="${i("pictureChoice")}: ${_(n.word)}">
            <img src="${n.image}" alt="${_(n.word)}" />
            <span>${_(n.word)}</span>
          </button>`).join("")}
      </div>
    </main>
  `},Ae=()=>`
  <main class="complete-screen" aria-labelledby="complete-title">
    <div class="celebration" aria-hidden="true">★ ★ ★</div>
    <p class="eyebrow">${i("completeKicker")}</p>
    <h1 id="complete-title">${i("completeTitle")}</h1>
    <p>${i("completeDescription")}</p>
    <div class="complete-actions">
      <button class="primary-button" type="button" data-action="restart">${i("playAgain")}</button>
      <a class="secondary-button" href="#/">${i("backToIsland")}</a>
    </div>
  </main>
`,h=e=>{if(e.phase==="complete"){k.innerHTML=Ae(),G();return}const t=e.game==="sound-choice"?ke(e,e.round):e.game==="case-match"?Le(e,e.round):Te(e,e.round);k.innerHTML=`${t}${B()}`,G()},f=()=>{if(s){h(s);return}k.innerHTML=`${Se()}${B()}`,G()},z=()=>{C&&window.clearTimeout(C),C=null},K=()=>{v&&window.clearTimeout(v),v=null},x=e=>{z(),K();const t=$e(),a=new ee(ne(t,5));s={game:e,catalog:t,session:a,round:N(a.current,t),feedback:"idle",phase:"playing",selectedLetter:!1}},Ce=()=>{if(!(!s||s.phase!=="celebrating")){if(s.session.isComplete){s.phase="complete",h(s);return}s.round=N(s.session.current,s.catalog),s.phase="playing",s.feedback="idle",h(s)}},De=(e,t)=>{if(s){if(e==="retry"){s.feedback="retry",s.selectedLetter=!1,p("retry"),h(s);return}s.feedback="correct",s.selectedLetter=!1,s.phase="celebrating",p("correct"),t&&E(t),h(s),z(),C=window.setTimeout(Ce,1200)}},P=e=>{if(!s||s.phase!=="playing")return;const t=s.round.target,a=s.session.answer(e),n=s.game==="case-match"&&e===t.id?t.lowercasePhonemeSound:void 0;De(a,n)},U=async e=>{p("tap"),!await E(e)&&s?.phase==="playing"&&(s.feedback="audio-unavailable",h(s))},Ie=()=>{!s||s.phase!=="playing"||U(s.round.target.uppercaseSound)},Ee=()=>{!s||s.game!=="case-match"||s.phase!=="playing"||U(s.round.target.uppercaseSound)},Me=e=>{Z([e.uppercaseSound,e.uppercaseSound,e.lowercasePhonemeSound,e.lowercasePhonemeSound],1e3).then(t=>{!t&&s?.game==="picture-drag"&&s.phase==="playing"&&s.round.target.id===e.id&&(s.feedback="audio-unavailable",h(s))})},b=()=>{$&&window.clearTimeout($),$=null,c?.tile.classList.remove("is-dragging"),c?.ghost.remove(),document.querySelectorAll(".picture-zone.is-drop-target, .picture-zone.is-correct-drop").forEach(e=>{e.classList.remove("is-drop-target","is-correct-drop")}),c=null},_e=e=>{c&&(c.ghost.style.transform=`translate(${e.clientX-c.ghost.offsetWidth/2}px, ${e.clientY-c.ghost.offsetHeight/2}px)`)},V=e=>{const a=Array.from(document.querySelectorAll("[data-drop-id]")).map(n=>{const r=n.getBoundingClientRect();return{id:n.dataset.dropId??"",left:r.left,top:r.top,right:r.right,bottom:r.bottom}});return me({x:e.clientX,y:e.clientY},a)},Fe=e=>{const t=V(e);document.querySelectorAll("[data-drop-id]").forEach(a=>{a.classList.toggle("is-drop-target",a.dataset.dropId===t)})},xe=()=>{c&&(c.tile.classList.remove("is-dragging"),c.ghost.classList.add("is-returning"),c.ghost.style.transform=`translate(${c.originX}px, ${c.originY}px)`,p("retry"),$=window.setTimeout(b,300))},Pe=e=>{if(!c)return;const t=s?.round.target,a=document.querySelector(`[data-drop-id="${e}"]`);c.tile.classList.remove("is-dragging"),c.ghost.classList.add("is-dropped"),a?.classList.remove("is-drop-target"),a?.classList.add("is-correct-drop"),p("drop"),t&&(E(t.wordSound),K(),v=window.setTimeout(()=>{ue(t.id),v=null},1100)),$=window.setTimeout(()=>{b(),P(e)},900)},Ge=()=>{const e=document.querySelector('[data-action="select-letter"]');if(!e)return;e.addEventListener("pointerdown",a=>{if(a.button!==0||c||s?.phase!=="playing")return;const n=e.getBoundingClientRect(),r=e.cloneNode(!0);r.classList.add("drag-ghost"),r.setAttribute("aria-hidden","true"),r.removeAttribute("data-action"),r.removeAttribute("data-letter"),r.tabIndex=-1,r.disabled=!0,r.style.width=`${n.width}px`,r.style.height=`${n.height}px`,r.style.transform=`translate(${n.left}px, ${n.top}px)`,document.body.append(r),c={pointerId:a.pointerId,tile:e,ghost:r,didDrag:!1,originX:n.left,originY:n.top,startX:a.clientX,startY:a.clientY};try{e.setPointerCapture(a.pointerId)}catch{}}),e.addEventListener("pointermove",a=>{!c||c.pointerId!==a.pointerId||!c.didDrag&&Math.hypot(a.clientX-c.startX,a.clientY-c.startY)<8||(c.didDrag=!0,c.tile.classList.add("is-dragging"),a.preventDefault(),_e(a),Fe(a))});const t=a=>{if(!c||c.pointerId!==a.pointerId)return;const n=c.didDrag,r=n?V(a):null;try{e.releasePointerCapture(a.pointerId)}catch{}if(!n){b();return}if(D=!0,window.setTimeout(()=>{D=!1},0),!s||!r||!he(s.round.target.id,r)){xe();return}Pe(r)};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t)},G=()=>{document.querySelectorAll("[data-answer]").forEach(e=>{e.addEventListener("click",()=>P(e.dataset.answer??""))}),document.querySelectorAll("[data-drop-id]").forEach(e=>{e.addEventListener("click",()=>{!s?.selectedLetter||s.phase!=="playing"||(p("tap"),P(e.dataset.dropId??""))})}),document.querySelector('[data-action="select-letter"]')?.addEventListener("click",()=>{if(D){D=!1;return}if(!s||s.phase!=="playing")return;const e=s.round.target;s.selectedLetter=!s.selectedLetter,p("tap"),Me(e),h(s)}),document.querySelector('[data-action="replay-sound"]')?.addEventListener("click",Ie),document.querySelector('[data-action="replay-case-target"]')?.addEventListener("click",Ee),document.querySelectorAll('[data-action="open-letter-scope"]').forEach(e=>{e.addEventListener("click",()=>{u=new Set(y),q=!0,p("tap"),f()})}),document.querySelectorAll('[data-action="toggle-scope-letter"]').forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.letterId;if(!(!t||!u)){if(u.has(t)){if(u.size===1)return;u.delete(t)}else u.add(t);p("tap"),f()}})}),document.querySelector('[data-action="select-all-letters"]')?.addEventListener("click",()=>{u=new Set(m),p("tap"),f()}),document.querySelector('[data-action="save-letter-scope"]')?.addEventListener("click",()=>{if(!u||u.size===0)return;const e=m.some(t=>u?.has(t)!==y.has(t));y=new Set(u),we(),u=null,q=!1,p("tap"),e&&s&&(b(),x(s.game)),f()}),document.querySelectorAll('[data-action="cancel-letter-scope"]').forEach(e=>{e.addEventListener("click",t=>{e.classList.contains("letter-scope-backdrop")&&t.target!==e||(u=null,q=!1,p("tap"),f())})}),document.querySelectorAll('[data-action="restart"]').forEach(e=>{e.addEventListener("click",()=>{s&&(p("tap"),b(),x(s.game),h(s))})}),document.querySelectorAll('[data-action="toggle-language"]').forEach(e=>{e.addEventListener("click",()=>{L=R(L),p("tap"),f()})}),Ge()},Q=()=>{if(z(),b(),fe.length>0){k.innerHTML=`<main class="resource-error"><h1>${i("brand")}</h1><p>${i("soundUnavailable")}</p></main>`;return}const e=re(window.location.hash);if(e.kind==="home"){s=null,q=!1,u=null,f();return}(!s||s.game!==e.game)&&x(e.game),s&&h(s)};window.addEventListener("hashchange",Q);Q();
