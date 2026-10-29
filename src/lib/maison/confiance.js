/* eslint-disable */
// @ts-nocheck
/* Interactions de la page « confiance » : JavaScript de la maquette (site-html), conservé tel quel.
   Le header, la barre de progression, la pastille « Recevoir », le switch FR/EN et les réseaux sociaux
   sont gérés par les composants React du site. Généré par site-html/tools/port_jsx.py. */
export default function init(ROOT) {
  const cleanups = [];
  let dead = false;
  cleanups.push(() => { dead = true; document.body.style.overflow = ""; });
  const W = (target, ev, fn, opts) => { target.addEventListener(ev, fn, opts); cleanups.push(() => target.removeEventListener(ev, fn, opts)); };


  const $ = (s, r = ROOT) => r.querySelector(s);
  const $$ = (s, r = ROOT) => [...r.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));

  /* révélations */
  const rio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); }
  }), { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  $$(".rv").forEach(el => rio.observe(el));

  /* chapitres + scroll-spy */
  const secs = $$("[data-chapter]"), chap = $("#chapters");
  chap.innerHTML = secs.map(s => `<a href="#${s.id}" data-for="${s.id}"><span>${s.dataset.chapter}</span><i></i></a>`).join("");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$("a", chap).forEach(a => a.classList.toggle("on", a.dataset.for === e.target.id));
    chap.classList.toggle("light", "dark" in e.target.dataset);
  }), { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(s => spy.observe(s));

  /* compteurs [data-count] (data-from = année → années écoulées) */
  $$("[data-count]").forEach(el => {
    const target = el.dataset.from ? new Date().getFullYear() - +el.dataset.from : +el.dataset.count;
    el.textContent = reduce ? target : "0";
    if (reduce) return;
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = now => {
        const p = clamp((now - t0) / 1600, 0, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }), { threshold: .6 });
    io.observe(el);
  });

  /* curseur custom */
  if (fine && !reduce) {
    const cur = $("#cursor"), lab = $("span", cur);
    let x = 0, y = 0, cx = 0, cy = 0;
    W(window, "pointermove", e => { x = e.clientX; y = e.clientY; cur.classList.add("show"); });
    W(document, "pointerleave", () => cur.classList.remove("show"));
    (function loop() { if (dead) return; cx += (x - cx) * .2; cy += (y - cy) * .2; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); })();
    W(document, "pointerover", e => {
      const t = e.target.closest("[data-cursor]");
      if (t) { lab.textContent = t.dataset.cursor; cur.classList.add("big"); } else cur.classList.remove("big");
    });
  }

  


  /* ---------- données : 11 références ---------- */
  /* desc = présentation publique de l'organisation (à vérifier) ; collab = détail de la collaboration (À REMPLIR par Assanabel :
     type de prestation, année, citation). Tant que collab est vide, seul un paragraphe générique sur la catégorie est affiché. */
  const CATS = { entreprises: "Entreprises", sante: "Santé & recherche", institutions: "Institutions", enseignement: "Enseignement supérieur" };
  const BLURB = {
    entreprises: "Cocktail d’équipe, déjeuner d’affaires ou buffet de réception : nous préparons chaque prestation comme un rendez-vous, du produit choisi au dressage.",
    sante: "Déjeuner de travail, réception de service ou moment de convivialité entre équipes : nous composons des menus frais et partageables, adaptés aux régimes et aux allergies de chacun.",
    institutions: "Réception officielle, cocktail ou déjeuner de délégation : une cuisine libanaise dressée avec soin, un service attentif et discret.",
    enseignement: "Cérémonie, colloque, cocktail de diplômés : des buffets et des pièces à partager, pensés pour des publics variés.",
  };
  const LOGOS = [
    { id: "bouygues", name: "Bouygues Telecom", cat: "entreprises", collab: "",
      desc: "Opérateur de télécommunications français, filiale du groupe Bouygues, au service du grand public comme des entreprises." },
    { id: "cnrs", name: "CNRS", cat: "sante", collab: "",
      desc: "Centre national de la recherche scientifique, créé en 1939. L’un des plus grands organismes publics de recherche d’Europe, il réunit des chercheurs de toutes les disciplines." },
    { id: "unesco", name: "UNESCO", cat: "institutions", collab: "",
      desc: "Organisation des Nations unies pour l’éducation, la science et la culture, fondée en 1945. Son siège est à Paris, dans le 7<sup>e</sup> arrondissement." },
    { id: "polytechnique", name: "École polytechnique", cat: "enseignement", collab: "",
      desc: "Grande école d’ingénieurs fondée en 1794, installée à Palaiseau et membre de l’Institut Polytechnique de Paris." },
    { id: "natixis", name: "Natixis", cat: "entreprises", collab: "",
      desc: "Établissement financier du groupe BPCE, actif dans la banque de grande clientèle, la gestion d’actifs, l’assurance et les paiements." },
    { id: "hegp", name: "Hôpital européen Georges-Pompidou", cat: "sante", collab: "",
      desc: "Hôpital universitaire de l’AP-HP, situé dans le 15<sup>e</sup> arrondissement de Paris et rattaché aux Hôpitaux universitaires Paris Ouest." },
    { id: "sciencespo", name: "Sciences Po", cat: "enseignement", collab: "",
      desc: "Établissement d’enseignement supérieur et de recherche en sciences humaines et sociales, fondé en 1872 et installé au cœur de Paris." },
    { id: "pfizer", name: "Pfizer", cat: "entreprises", collab: "",
      desc: "Groupe biopharmaceutique international, présent dans le monde entier et acteur majeur de la santé." },
    /* NB : l'intitulé « Ministère des Solidarités et de la Santé » et son logo datent d'une ancienne organisation gouvernementale : à vérifier / mettre à jour. */
    { id: "mss", name: "Ministère des Solidarités et de la Santé", cat: "institutions", collab: "",
      desc: "Administration centrale en charge des politiques de santé et de solidarité." },
    { id: "sfr", name: "SFR", cat: "entreprises", collab: "",
      desc: "Opérateur de télécommunications français, fournisseur d’accès mobile, internet et fibre pour les particuliers et les entreprises." },
    { id: "telecom-paris", name: "Télécom Paris", cat: "enseignement", collab: "",
      desc: "École d’ingénieurs du numérique, membre de l’Institut Polytechnique de Paris." },
  ];
  const pad = n => String(n).padStart(2, "0");

  /* ---------- orbite hero ---------- */
  $("#ring").innerHTML = LOGOS.map((l, i) => `<div class="tile" style="--a:${(360 / LOGOS.length * i).toFixed(2)}"><div class="in" title="${l.name}"><img src="/site/logos/${l.id}.webp" alt="" /></div></div>`).join("");

  /* ---------- mur de logos ---------- */
  const wall = $("#wall"), panel = $("#panel"), scrim = $("#scrim");
  wall.innerHTML = LOGOS.map((l, i) => `<button type="button" class="cell" role="tab" aria-selected="false" aria-label="${l.name}" data-i="${i}"><img src="/site/logos/${l.id}.webp" alt="" /></button>`).join("") + `<span class="cell filler" aria-hidden="true"></span>`;
  const cells = $$(".cell[data-i]", wall);
  const mobile = matchMedia("(max-width:899px)");
  let cur = -1, filter = "all", swapT;

  function fill(i) {
    const l = LOGOS[i];
    $("#pImg").src = `/site/logos/${l.id}.webp`; $("#pCat").textContent = CATS[l.cat]; $("#pName").textContent = l.name;
    $("#pTxt").innerHTML = `<p>${l.desc}</p><p>${l.name} compte parmi les maisons qui nous font confiance. ${BLURB[l.cat]}</p>` + (l.collab ? `<p class="collab">${l.collab}</p>` : "");
  }
  function select(i, user) {
    if (i === cur) { if (user && mobile.matches) openSheet(); return; }
    const first = cur < 0; cur = i;
    cells.forEach((c, j) => { c.setAttribute("aria-selected", j === i); c.tabIndex = j === i ? 0 : -1; });
    if (first || reduce) fill(i);
    else { panel.classList.add("swap"); clearTimeout(swapT); swapT = setTimeout(() => { fill(i); panel.classList.remove("swap"); }, 260); }
    if (user && mobile.matches) openSheet();
  }
  const openSheet = () => { panel.classList.add("open"); scrim.classList.add("on"); document.body.style.overflow = "hidden"; };
  const closeSheet = () => { panel.classList.remove("open"); scrim.classList.remove("on"); document.body.style.overflow = ""; };
  const visible = () => LOGOS.map((l, i) => i).filter(i => filter === "all" || LOGOS[i].cat === filter);
  const step = d => { const v = visible(); const k = v.indexOf(cur); select(v[(k + d + v.length) % v.length], true); };

  cells.forEach(c => c.addEventListener("click", () => select(+c.dataset.i, true)));
  wall.addEventListener("keydown", e => {
    const map = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 3, ArrowUp: -3 };
    if (!(e.key in map)) return; e.preventDefault();
    const v = visible(), k = Math.min(v.length - 1, Math.max(0, v.indexOf(cur) + map[e.key]));
    select(v[k], false); cells[v[k]].focus();
  });
  $("#pPrev").addEventListener("click", () => step(-1));
  $("#pNext").addEventListener("click", () => step(1));
  $("#pClose").addEventListener("click", closeSheet);
  scrim.addEventListener("click", closeSheet);
  W(window, "keydown", e => { if (e.key === "Escape") closeSheet(); });
  mobile.addEventListener("change", () => { if (!mobile.matches) closeSheet(); });

  /* filtres (onglets à soulignement glissant) */
  const tabs2 = $("#tabs2"), ink = $("#ink");
  const counts = Object.fromEntries(Object.keys(CATS).map(k => [k, LOGOS.filter(l => l.cat === k).length]));
  if (!tabs2.querySelector("[data-cat]")) tabs2.insertAdjacentHTML("afterbegin", `<button type="button" aria-pressed="true" data-cat="all">Toutes</button>` +
    Object.entries(CATS).map(([k, v]) => `<button type="button" aria-pressed="false" data-cat="${k}">${v}</button>`).join(""));
  const moveInk = () => { const b = $("button[aria-pressed=true]", tabs2); ink.style.width = b.offsetWidth + "px"; ink.style.transform = `translateX(${b.offsetLeft}px)`; };
  tabs2.addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b) return;
    filter = b.dataset.cat; $$("button", tabs2).forEach(x => x.setAttribute("aria-pressed", x === b)); moveInk();
    cells.forEach((c, i) => c.classList.toggle("dim", !(filter === "all" || LOGOS[i].cat === filter)));
    if (!visible().includes(cur)) { if (mobile.matches) { cur = -1; closeSheet(); cells.forEach(c => c.setAttribute("aria-selected", false)); } else select(visible()[0], false); }
  });
  W(window, "resize", moveInk); document.fonts && document.fonts.ready.then(moveInk); moveInk();
  if (!mobile.matches) select(0, false);

  /* ---------- avis clients : carrousel (autoplay + barre de progression, flèches, balayage) ---------- */
  const sl = $("[data-slider]");
  if (sl) {
    const fs = $$(".avis", sl), bar = $(".avis-bar i", sl), DUR = 7000; let i = 0, tm, inView = false, hover = false;
    const stop = () => { clearTimeout(tm); bar.style.transition = "none"; bar.style.transform = "scaleX(0)"; };
    const play = () => { stop(); if (reduce || !inView || hover) return; void bar.offsetWidth; bar.style.transition = `transform ${DUR}ms linear`; bar.style.transform = "scaleX(1)"; tm = setTimeout(() => show(i + 1), DUR); };
    const show = n => { i = (n + fs.length) % fs.length; fs.forEach((f, j) => f.classList.toggle("on", j === i)); play(); };
    $("[data-aprev]", sl).addEventListener("click", () => show(i - 1));
    $("[data-anext]", sl).addEventListener("click", () => show(i + 1));
    let sx = null;
    sl.addEventListener("pointerdown", e => { sx = e.clientX; });
    sl.addEventListener("pointerup", e => { if (sx === null) return; const d = e.clientX - sx; sx = null; if (Math.abs(d) > 50) show(i + (d < 0 ? 1 : -1)); });
    sl.addEventListener("mouseenter", () => { hover = true; stop(); });
    sl.addEventListener("mouseleave", () => { hover = false; play(); });
    sl.addEventListener("keydown", e => { if (e.key === "ArrowRight") show(i + 1); if (e.key === "ArrowLeft") show(i - 1); });
    new IntersectionObserver(es => es.forEach(e => { inView = e.isIntersecting; inView ? play() : stop(); }), { threshold: .4 }).observe(sl);
  }

  /* ---------- cartes empilées ---------- */
  const cards = $$(".scard");
  const stackUpdate = () => {
    cards.forEach((c, i) => {
      const nxt = cards[i + 1]; if (!nxt || reduce) return;
      const top = c.getBoundingClientRect().top, ntop = nxt.getBoundingClientRect().top;
      const o = clamp(1 - (ntop - top) / c.offsetHeight, 0, 1);
      c.style.transform = `scale(${1 - o * .06})`; c.style.filter = `brightness(${1 - o * .4})`;
    });
  };
  W(window, "scroll", () => requestAnimationFrame(stackUpdate), { passive: true });
  stackUpdate(); 

  return () => cleanups.forEach((f) => f());
}
