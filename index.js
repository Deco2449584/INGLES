const irregularVerbs = {
  abandon: { past: "abandoned", participle: "abandoned" },
  abide: { past: "abode", participle: "abode" },
  abolish: { past: "abolished", participle: "abolished" },
  abort: { past: "aborted", participle: "aborted" },
  abound: { past: "abounded", participle: "abounded" },
  absorb: { past: "absorbed", participle: "absorbed" },
  abstain: { past: "abstained", participle: "abstained" },
  abuse: { past: "abused", participle: "abused" },
  accept: { past: "accepted", participle: "accepted" },
  access: { past: "accessed", participle: "accessed" },
  accompany: { past: "accompanied", participle: "accompanied" },
  accomplish: { past: "accomplished", participle: "accomplished" },
  account: { past: "accounted", participle: "accounted" },
  accuse: { past: "accused", participle: "accused" },
  achieve: { past: "achieved", participle: "achieved" },
  acknowledge: { past: "acknowledged", participle: "acknowledged" },
  acquire: { past: "acquired", participle: "acquired" },
  act: { past: "acted", participle: "acted" },
  adapt: { past: "adapted", participle: "adapted" },
  add: { past: "added", participle: "added" },
  address: { past: "addressed", participle: "addressed" },
  adjust: { past: "adjusted", participle: "adjusted" },
  admire: { past: "admired", participle: "admired" },
  admit: { past: "admitted", participle: "admitted" },
  adopt: { past: "adopted", participle: "adopted" },
  adore: { past: "adored", participle: "adored" },
  advise: { past: "advised", participle: "advised" },
  affect: { past: "affected", participle: "affected" },
  afford: { past: "afforded", participle: "afforded" },
  agree: { past: "agreed", participle: "agreed" },
  aim: { past: "aimed", participle: "aimed" },
  allow: { past: "allowed", participle: "allowed" },
  alter: { past: "altered", participle: "altered" },
  amaze: { past: "amazed", participle: "amazed" },
  amend: { past: "amended", participle: "amended" },
  analyze: { past: "analyzed", participle: "analyzed" },
  announce: { past: "announced", participle: "announced" },
  annoy: { past: "annoyed", participle: "annoyed" },
  answer: { past: "answered", participle: "answered" },
  anticipate: { past: "anticipated", participle: "anticipated" },
  apologize: { past: "apologized", participle: "apologized" },
  appear: { past: "appeared", participle: "appeared" },
  apply: { past: "applied", participle: "applied" },
  appoint: { past: "appointed", participle: "appointed" },
  appreciate: { past: "appreciated", participle: "appreciated" },
  approach: { past: "approached", participle: "approached" },
  approve: { past: "approved", participle: "approved" },
  argue: { past: "argued", participle: "argued" },
  arise: { past: "arose", participle: "arisen" },
  arrange: { past: "arranged", participle: "arranged" },
  arrest: { past: "arrested", participle: "arrested" },
  arrive: { past: "arrived", participle: "arrived" },
  ask: { past: "asked", participle: "asked" },
  assert: { past: "asserted", participle: "asserted" },
  assess: { past: "assessed", participle: "assessed" },
  assist: { past: "assisted", participle: "assisted" },
  assume: { past: "assumed", participle: "assumed" },
  assure: { past: "assured", participle: "assured" },
  attach: { past: "attached", participle: "attached" },
  attack: { past: "attacked", participle: "attacked" },
  attempt: { past: "attempted", participle: "attempted" },
  attend: { past: "attended", participle: "attended" },
  attract: { past: "attracted", participle: "attracted" },
  auction: { past: "auctioned", participle: "auctioned" },
  audit: { past: "audited", participle: "audited" },
  avoid: { past: "avoided", participle: "avoided" },
  awake: { past: "awoke", participle: "awoken" },
  back: { past: "backed", participle: "backed" },
  bake: { past: "baked", participle: "baked" },
  balance: { past: "balanced", participle: "balanced" },
  ban: { past: "banned", participle: "banned" },
  bang: { past: "banged", participle: "banged" },
  bare: { past: "bared", participle: "bared" },
  bargain: { past: "bargained", participle: "bargained" },
  bark: { past: "barked", participle: "barked" },
  base: { past: "based", participle: "based" },
  bathe: { past: "bathed", participle: "bathed" },
  battle: { past: "battled", participle: "battled" },
  be: { past: "was/were", participle: "been" },
  bear: { past: "bore", participle: "borne/born" },
  beat: { past: "beat", participle: "beaten" },
  become: { past: "became", participle: "become" },
  beg: { past: "begged", participle: "begged" },
  begin: { past: "began", participle: "begun" },
  behave: { past: "behaved", participle: "behaved" },
  behold: { past: "beheld", participle: "beheld" },
  believe: { past: "believed", participle: "believed" },
  belong: { past: "belonged", participle: "belonged" },
  bend: { past: "bent", participle: "bent" },
  bet: { past: "bet", participle: "bet" },
  betray: { past: "betrayed", participle: "betrayed" },
  bid: { past: "bid", participle: "bid" },
  bind: { past: "bound", participle: "bound" },
  bite: { past: "bit", participle: "bitten" },
  blame: { past: "blamed", participle: "blamed" },
  blast: { past: "blasted", participle: "blasted" },
  bleed: { past: "bled", participle: "bled" },
  bless: { past: "blessed", participle: "blessed" },
  blind: { past: "blinded", participle: "blinded" },
  blink: { past: "blinked", participle: "blinked" },
  block: { past: "blocked", participle: "blocked" },
  blow: { past: "blew", participle: "blown" },
  blush: { past: "blushed", participle: "blushed" },
  boast: { past: "boasted", participle: "boasted" },
  boil: { past: "boiled", participle: "boiled" },
  bolt: { past: "bolted", participle: "bolted" },
  bomb: { past: "bombed", participle: "bombed" },
  book: { past: "booked", participle: "booked" },
  boost: { past: "boosted", participle: "boosted" },
  bore: { past: "bored", participle: "bored" },
  borrow: { past: "borrowed", participle: "borrowed" },
  bounce: { past: "bounced", participle: "bounced" },
  bow: { past: "bowed", participle: "bowed" },
  box: { past: "boxed", participle: "boxed" },
  brake: { past: "braked", participle: "braked" },
  branch: { past: "branched", participle: "branched" },
  break: { past: "broke", participle: "broken" },
  breathe: { past: "breathed", participle: "breathed" },
  breed: { past: "bred", participle: "bred" },
  bring: { past: "brought", participle: "brought" },
  broadcast: { past: "broadcast", participle: "broadcast" },
  brush: { past: "brushed", participle: "brushed" },
  build: { past: "built", participle: "built" },
  burn: { past: "burnt/burned", participle: "burnt/burned" },
  burst: { past: "burst", participle: "burst" },
  bury: { past: "buried", participle: "buried" },
  buy: { past: "bought", participle: "bought" },
  calculate: { past: "calculated", participle: "calculated" },
  call: { past: "called", participle: "called" },
  calm: { past: "calmed", participle: "calmed" },
  camp: { past: "camped", participle: "camped" },
  cancel: { past: "cancelled", participle: "cancelled" },
  capture: { past: "captured", participle: "captured" },
  care: { past: "cared", participle: "cared" },
  carry: { past: "carried", participle: "carried" },
  carve: { past: "carved", participle: "carved" },
  cast: { past: "cast", participle: "cast" },
  catch: { past: "caught", participle: "caught" },
  cause: { past: "caused", participle: "caused" },
  celebrate: { past: "celebrated", participle: "celebrated" },
  challenge: { past: "challenged", participle: "challenged" },
  change: { past: "changed", participle: "changed" },
  charge: { past: "charged", participle: "charged" },
  chase: { past: "chased", participle: "chased" },
  chat: { past: "chatted", participle: "chatted" },
  check: { past: "checked", participle: "checked" },
  cheer: { past: "cheered", participle: "cheered" },
  chew: { past: "chewed", participle: "chewed" },
  choose: { past: "chose", participle: "chosen" },
  chop: { past: "chopped", participle: "chopped" },
  claim: { past: "claimed", participle: "claimed" },
  clap: { past: "clapped", participle: "clapped" },
  clean: { past: "cleaned", participle: "cleaned" },
  clear: { past: "cleared", participle: "cleared" },
  climb: { past: "climbed", participle: "climbed" },
  cling: { past: "clung", participle: "clung" },
  close: { past: "closed", participle: "closed" },
  coach: { past: "coached", participle: "coached" },
  collect: { past: "collected", participle: "collected" },
  color: { past: "colored", participle: "colored" },
  comb: { past: "combed", participle: "combed" },
  come: { past: "came", participle: "come" },
  command: { past: "commanded", participle: "commanded" },
  comment: { past: "commented", participle: "commented" },
  communicate: { past: "communicated", participle: "communicated" },
  compare: { past: "compared", participle: "compared" },
  compete: { past: "competed", participle: "competed" },
  complain: { past: "complained", participle: "complained" },
  complete: { past: "completed", participle: "completed" },
  compose: { past: "composed", participle: "composed" },
  compute: { past: "computed", participle: "computed" },
  conceive: { past: "conceived", participle: "conceived" },
  concentrate: { past: "concentrated", participle: "concentrated" },
  concern: { past: "concerned", participle: "concerned" },
  conclude: { past: "concluded", participle: "concluded" },
  conduct: { past: "conducted", participle: "conducted" },
  confess: { past: "confessed", participle: "confessed" },
  confuse: { past: "confused", participle: "confused" },
  connect: { past: "connected", participle: "connected" },
  consider: { past: "considered", participle: "considered" },
  consist: { past: "consisted", participle: "consisted" },
  construct: { past: "constructed", participle: "constructed" },
  consult: { past: "consulted", participle: "consulted" },
  contain: { past: "contained", participle: "contained" },
  continue: { past: "continued", participle: "continued" },
  contribute: { past: "contributed", participle: "contributed" },
  control: { past: "controlled", participle: "controlled" },
  convert: { past: "converted", participle: "converted" },
  convince: { past: "convinced", participle: "convinced" },
  cook: { past: "cooked", participle: "cooked" },
  cool: { past: "cooled", participle: "cooled" },
  copy: { past: "copied", participle: "copied" },
  correct: { past: "corrected", participle: "corrected" },
  cost: { past: "cost", participle: "cost" },
  cough: { past: "coughed", participle: "coughed" },
  count: { past: "counted", participle: "counted" },
  cover: { past: "covered", participle: "covered" },
  crack: { past: "cracked", participle: "cracked" },
  crash: { past: "crashed", participle: "crashed" },
  crawl: { past: "crawled", participle: "crawled" },
  create: { past: "created", participle: "created" },
  creep: { past: "crept", participle: "crept" },
  criticize: { past: "criticized", participle: "criticized" },
  cross: { past: "crossed", participle: "crossed" },
  crush: { past: "crushed", participle: "crushed" },
  cry: { past: "cried", participle: "cried" },
  cure: { past: "cured", participle: "cured" },
  curl: { past: "curled", participle: "curled" },
  curve: { past: "curved", participle: "curved" },
  cut: { past: "cut", participle: "cut" },
  cycle: { past: "cycled", participle: "cycled" },
  damage: { past: "damaged", participle: "damaged" },
  dance: { past: "danced", participle: "danced" },
  dare: { past: "dared", participle: "dared" },
  dash: { past: "dashed", participle: "dashed" },
  deal: { past: "dealt", participle: "dealt" },
  decay: { past: "decayed", participle: "decayed" },
  decide: { past: "decided", participle: "decided" },
  declare: { past: "declared", participle: "declared" },
  decorate: { past: "decorated", participle: "decorated" },
  delay: { past: "delayed", participle: "delayed" },
  delete: { past: "deleted", participle: "deleted" },
  deny: { past: "denied", participle: "denied" },
  depend: { past: "depended", participle: "depended" },
  describe: { past: "described", participle: "described" },
  deserve: { past: "deserved", participle: "deserved" },
  destroy: { past: "destroyed", participle: "destroyed" },
  detect: { past: "detected", participle: "detected" },
  determine: { past: "determined", participle: "determined" },
  develop: { past: "developed", participle: "developed" },
  devote: { past: "devoted", participle: "devoted" },
  die: { past: "died", participle: "died" },
  differ: { past: "differed", participle: "differed" },
  dig: { past: "dug", participle: "dug" },
  dim: { past: "dimmed", participle: "dimmed" },
  diminish: { past: "diminished", participle: "diminished" },
  dine: { past: "dined", participle: "dined" },
  dip: { past: "dipped", participle: "dipped" },
  direct: { past: "directed", participle: "directed" },
  disagree: { past: "disagreed", participle: "disagreed" },
  disappear: { past: "disappeared", participle: "disappeared" },
  disapprove: { past: "disapproved", participle: "disapproved" },
  disarm: { past: "disarmed", participle: "disarmed" },
  discover: { past: "discovered", participle: "discovered" },
  disassemble: { past: "disassembled", participle: "disassembled" },
  disband: { past: "disbanded", participle: "disbanded" },
  disbelieve: { past: "disbelieved", participle: "disbelieved" },
  discard: { past: "discarded", participle: "discarded" },
  discern: { past: "discerned", participle: "discerned" },
  discharge: { past: "discharged", participle: "discharged" },
  discipline: { past: "disciplined", participle: "disciplined" },
  disclose: { past: "disclosed", participle: "disclosed" },
  discolor: { past: "discolored", participle: "discolored" },
  discomfit: { past: "discomfited", participle: "discomfited" },
  discomfort: { past: "discomforted", participle: "discomforted" },
  disconnect: { past: "disconnected", participle: "disconnected" },
  discontinue: { past: "discontinued", participle: "discontinued" },
  discount: { past: "discounted", participle: "discounted" },
  discourage: { past: "discouraged", participle: "discouraged" },
  discover: { past: "discovered", participle: "discovered" },
  discredit: { past: "discredited", participle: "discredited" },
  discriminate: { past: "discriminated", participle: "discriminated" },
  discuss: { past: "discussed", participle: "discussed" },
  disdain: { past: "disdained", participle: "disdained" },
  disembark: { past: "disembarked", participle: "disembarked" },
  disengage: { past: "disengaged", participle: "disengaged" },
  disentangle: { past: "disentangled", participle: "disentangled" },
  disfigure: { past: "disfigured", participle: "disfigured" },
  disgrace: { past: "disgraced", participle: "disgraced" },
  disguise: { past: "disguised", participle: "disguised" },
  disgust: { past: "disgusted", participle: "disgusted" },
  dishonor: { past: "dishonored", participle: "dishonored" },
  disinfect: { past: "disinfected", participle: "disinfected" },
  disinherit: { past: "disinherited", participle: "disinherited" },
  disintegrate: { past: "disintegrated", participle: "disintegrated" },
  dislike: { past: "disliked", participle: "disliked" },
  dismantle: { past: "dismantled", participle: "dismantled" },
  dismay: { past: "dismayed", participle: "dismayed" },
  dismiss: { past: "dismissed", participle: "dismissed" },
  dismount: { past: "dismounted", participle: "dismounted" },
  disobey: { past: "disobeyed", participle: "disobeyed" },
  disorder: { past: "disordered", participle: "disordered" },
  disorganize: { past: "disorganized", participle: "disorganized" },
  disorient: { past: "disoriented", participle: "disoriented" },
  disown: { past: "disowned", participle: "disowned" },
  dispel: { past: "dispelled", participle: "dispelled" },
  dispense: { past: "dispensed", participle: "dispensed" },
  disperse: { past: "dispersed", participle: "dispersed" },
  displace: { past: "displaced", participle: "displaced" },
  display: { past: "displayed", participle: "displayed" },
  dispose: { past: "disposed", participle: "disposed" },
  disprove: { past: "disproved", participle: "disproved" },
  dispute: { past: "disputed", participle: "disputed" },
  disregard: { past: "disregarded", participle: "disregarded" },
  disrupt: { past: "disrupted", participle: "disrupted" },
  dissolve: { past: "dissolved", participle: "dissolved" },
  dissuade: { past: "dissuaded", participle: "dissuaded" },
  distance: { past: "distanced", participle: "distanced" },
  distill: { past: "distilled", participle: "distilled" },
  distinguish: { past: "distinguished", participle: "distinguished" },
  distract: { past: "distracted", participle: "distracted" },
  distress: { past: "distressed", participle: "distressed" },
  distribute: { past: "distributed", participle: "distributed" },
  disturb: { past: "disturbed", participle: "disturbed" },
  divert: { past: "diverted", participle: "diverted" },
  divide: { past: "divided", participle: "divided" },
  divorce: { past: "divorced", participle: "divorced" },
  doubt: { past: "doubted", participle: "doubted" },
  draft: { past: "drafted", participle: "drafted" },
  drag: { past: "dragged", participle: "dragged" },
  drain: { past: "drained", participle: "drained" },
  dramatize: { past: "dramatized", participle: "dramatized" },
  draw: { past: "drew", participle: "drawn" },
  dream: { past: "dreamed", participle: "dreamed" },
  dress: { past: "dressed", participle: "dressed" },
  drift: { past: "drifted", participle: "drifted" },
  drink: { past: "drank", participle: "drunk" },
  drive: { past: "drove", participle: "driven" },
  drop: { past: "dropped", participle: "dropped" },
  drown: { past: "drowned", participle: "drowned" },
  dry: { past: "dried", participle: "dried" },
  dub: { past: "dubbed", participle: "dubbed" },
  duck: { past: "ducked", participle: "ducked" },
  dull: { past: "dulled", participle: "dulled" },
  dump: { past: "dumped", participle: "dumped" },
  dust: { past: "dusted", participle: "dusted" },
  dye: { past: "dyed", participle: "dyed" },
  dynamite: { past: "dynamited", participle: "dynamited" },
  eat: { past: "ate", participle: "eaten" },
  fall: { past: "fell", participle: "fallen" },
  feel: { past: "felt", participle: "felt" },
  fight: { past: "fought", participle: "fought" },
  find: { past: "found", participle: "found" },
  fly: { past: "flew", participle: "flown" },
  forget: { past: "forgot", participle: "forgotten" },
  forgive: { past: "forgave", participle: "forgiven" },
  freeze: { past: "froze", participle: "frozen" },
  get: { past: "got", participle: "gotten" },
  give: { past: "gave", participle: "given" },
  go: { past: "went", participle: "gone" },
  grow: { past: "grew", participle: "grown" },
  hang: { past: "hung", participle: "hung" },
  have: { past: "had", participle: "had" },
  hear: { past: "heard", participle: "heard" },
  hide: { past: "hid", participle: "hidden" },
  hit: { past: "hit", participle: "hit" },
  hold: { past: "held", participle: "held" },
  hurt: { past: "hurt", participle: "hurt" },
  keep: { past: "kept", participle: "kept" },
  know: { past: "knew", participle: "known" },
  lay: { past: "laid", participle: "laid" },
  lead: { past: "led", participle: "led" },
  leave: { past: "left", participle: "left" },
  lend: { past: "lent", participle: "lent" },
  let: { past: "let", participle: "let" },
  lie: { past: "lay", participle: "lain" },
  lose: { past: "lost", participle: "lost" },
  make: { past: "made", participle: "made" },
  mean: { past: "meant", participle: "meant" },
  meet: { past: "met", participle: "met" },
  pay: { past: "paid", participle: "paid" },
  put: { past: "put", participle: "put" },
  read: { past: "read", participle: "read" },
  ride: { past: "rode", participle: "ridden" },
  ring: { past: "rang", participle: "rung" },
  rise: { past: "rose", participle: "risen" },
  run: { past: "ran", participle: "run" },
  say: { past: "said", participle: "said" },
  see: { past: "saw", participle: "seen" },
  sell: { past: "sold", participle: "sold" },
  send: { past: "sent", participle: "sent" },
  set: { past: "set", participle: "set" },
  shake: { past: "shook", participle: "shaken" },
  shine: { past: "shone", participle: "shone" },
  shoot: { past: "shot", participle: "shot" },
  show: { past: "showed", participle: "shown" },
  shut: { past: "shut", participle: "shut" },
  sing: { past: "sang", participle: "sung" },
  sink: { past: "sank", participle: "sunk" },
  sit: { past: "sat", participle: "sat" },
  sleep: { past: "slept", participle: "slept" },
  speak: { past: "spoke", participle: "spoken" },
  spend: { past: "spent", participle: "spent" },
  stand: { past: "stood", participle: "stood" },
  steal: { past: "stole", participle: "stolen" },
  stick: { past: "stuck", participle: "stuck" },
  strike: { past: "struck", participle: "struck" },
  swear: { past: "swore", participle: "sworn" },
  sweep: { past: "swept", participle: "swept" },
  swim: { past: "swam", participle: "swum" },
  take: { past: "took", participle: "taken" },
  teach: { past: "taught", participle: "taught" },
  tear: { past: "tore", participle: "torn" },
  tell: { past: "told", participle: "told" },
  think: { past: "thought", participle: "thought" },
  throw: { past: "threw", participle: "thrown" },
  understand: { past: "understood", participle: "understood" },
  wake: { past: "woke", participle: "woken" },
  wear: { past: "wore", participle: "worn" },
  win: { past: "won", participle: "won" },
  write: { past: "wrote", participle: "written" },
};

function constructSentence(
  timeSelector,
  subject,
  verb,
  complement,
  isQuestion,
  isNegation
) {
  const negation = isNegation ? "not " : "";
  const irregularVerb = irregularVerbs[verb.toLowerCase()];
  const pastVerb = irregularVerb ? irregularVerb.past : `${verb}ed`;
  const participleVerb = irregularVerb ? irregularVerb.participle : `${verb}ed`;

  switch (timeSelector) {
    case "simple-past":
      return isQuestion
        ? `<span class="highlight">Did</span> ${subject} ${negation}${verb} ${complement}?`
        : `${subject} ${negation}${pastVerb} ${complement}`;
    case "continuous-past":
      return isQuestion
        ? `<span class="highlight">Was/Were</span> ${subject} ${negation}${verb}<span class="highlight">ing</span> ${complement}?`
        : `${subject} <span class="highlight">was/were</span> ${negation}${verb}<span class="highlight">ing</span> ${complement}`;
    case "perfect-past":
      return isQuestion
        ? `<span class="highlight">Had</span> ${subject} ${negation}${participleVerb} ${complement}?`
        : `${subject} <span class="highlight">had</span> ${negation}${participleVerb} ${complement}`;
    case "simple-present":
      if (
        subject.toLowerCase() === "he" ||
        subject.toLowerCase() === "she" ||
        subject.toLowerCase() === "it"
      ) {
        return isQuestion
          ? `<span class="highlight">Does</span> ${subject} ${negation}${verb} ${complement}?`
          : `${subject} ${negation}${verb}<span class="highlight">s</span> ${complement}`;
      } else {
        return isQuestion
          ? `<span class="highlight">Do</span> ${subject} ${negation}${verb} ${complement}?`
          : `${subject} ${negation}${verb} ${complement}`;
      }
    case "continuous-present":
      return isQuestion
        ? `<span class="highlight">Is/Are</span> ${subject} ${negation}${verb}<span class="highlight">ing</span> ${complement}?`
        : `${subject} <span class="highlight">is/are</span> ${negation}${verb}<span class="highlight">ing</span> ${complement}`;
    case "perfect-present":
      return isQuestion
        ? `<span class="highlight">Has/Have</span> ${subject} ${negation}${participleVerb} ${complement}?`
        : `${subject} <span class="highlight">has/have</span> ${negation}${participleVerb} ${complement}`;
    case "simple-future":
      return isQuestion
        ? `<span class="highlight">Will</span> ${subject} ${negation}${verb} ${complement}?`
        : `${subject} <span class="highlight">will</span> ${negation}${verb} ${complement}`;
    case "continuous-future":
      return isQuestion
        ? `<span class="highlight">Will</span> ${subject} ${negation}be ${verb}<span class="highlight">ing</span> ${complement}?`
        : `${subject} <span class="highlight">will be</span> ${negation}${verb}<span class="highlight">ing</span> ${complement}`;
    case "perfect-future":
      return isQuestion
        ? `<span class="highlight">Will</span> ${subject} ${negation}have ${participleVerb} ${complement}?`
        : `${subject} <span class="highlight">will have</span> ${negation}${participleVerb} ${complement}`;
    default:
      return "Tiempo verbal no soportado.";
  }
}

document
  .getElementById("sentenceForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const timeSelector = document.getElementById("timeSelector");
    const subject = document.getElementById("subjectInput");
    const verb = document.getElementById("verbInput");
    const complement = document.getElementById("complementInput");
    const enableQuestion = document.getElementById("enableQuestion").checked;
    const enableNegation = document.getElementById("enableNegation").checked;
    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    // Limpiar mensajes de error
    clearErrors();

    if (validateInputs(timeSelector, subject, verb, complement)) {
      let sentence = constructSentence(
        timeSelector.value,
        subject.value,
        verb.value,
        complement.value,
        enableQuestion,
        enableNegation
      );
      result.innerHTML = `Oración: ${sentence}`;
      resultContainer.classList.remove("hidden");
      resultContainer.classList.add("success");
    }
  });

function validateInputs(timeSelector, subject, verb, complement) {
  let isValid = true;

  if (!timeSelector.value) {
    displayError("timeSelectorError", "Selecciona un tiempo verbal.");
    isValid = false;
  }

  if (!subject.value.trim()) {
    displayError("subjectInputError", "El sujeto es obligatorio.");
    isValid = false;
  }

  if (!verb.value.trim()) {
    displayError("verbInputError", "El verbo es obligatorio.");
    isValid = false;
  }

  if (!complement.value.trim()) {
    displayError("complementInputError", "El complemento es obligatorio.");
    isValid = false;
  }

  return isValid;
}

function displayError(elementId, message) {
  const errorElement = document.getElementById(elementId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}

function clearErrors() {
  document
    .querySelectorAll(".error")
    .forEach((el) => (el.style.display = "none"));
}

document.getElementById("speakButton").addEventListener("click", function () {
  const sentence = document
    .getElementById("result")
    .innerText.replace("Oración: ", "");
  const utterance = new SpeechSynthesisUtterance(sentence);
  utterance.lang = "en-US";
  window.speechSynthesis.speak(utterance);
});
