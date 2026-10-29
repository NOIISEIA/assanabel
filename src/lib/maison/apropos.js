/* eslint-disable */
// @ts-nocheck
/* Interactions de la page « apropos » : JavaScript de la maquette (site-html), conservé tel quel.
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

    const parallax = () => {
    $$("[data-parallax]").forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      el.style.transform = `translate3d(0,${(r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.parallax)}px,0)`;
    });
  };
  W(window, "scroll", () => requestAnimationFrame(parallax), { passive: true }); if (!reduce) parallax();

/* ---------- révélations ---------- */
  const rio = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); rio.unobserve(e.target); }
  }), { threshold: .15, rootMargin: "0px 0px -6% 0px" });
  $$(".rv").forEach(el => rio.observe(el));

  /* ---------- chapitres + scroll-spy ---------- */
  const secs = $$("[data-chapter]");
  const chap = $("#chapters");
  chap.innerHTML = secs.map(s => `<a href="#${s.id}" data-for="${s.id}"><span>${s.dataset.chapter}</span><i></i></a>`).join("");
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    $$("a", chap).forEach(a => a.classList.toggle("on", a.dataset.for === e.target.id));
    chap.classList.toggle("light", "dark" in e.target.dataset || e.target.id === "intro");
  }), { rootMargin: "-45% 0px -50% 0px" });
  secs.forEach(s => spy.observe(s));

  /* ---------- compare jour / soir ---------- */
  const cmp = $("#compare"), range = $("input", cmp), hint = $("#cmpHint");
  const setPos = v => cmp.style.setProperty("--pos", v);
  range.addEventListener("input", () => { setPos(range.value); hint.classList.add("gone"); stopDemo(); });
  range.addEventListener("pointerdown", () => cmp.classList.add("drag"));
  W(window, "pointerup", () => cmp.classList.remove("drag"));
  let demo = true, demoId;
  const stopDemo = () => { demo = false; cancelAnimationFrame(demoId); };
  if (!reduce) {
    const t0 = performance.now() + 1800;
    const run = now => {
      if (!demo) return;
      const t = (now - t0) / 3200;
      if (t > 0) {
        if (t >= 1) { setPos(50); range.value = 50; return; }
        const v = 50 + Math.sin(t * Math.PI * 2) * 38 * (1 - t * .4);
        setPos(v); range.value = v;
      }
      demoId = requestAnimationFrame(run);
    };
    demoId = requestAnimationFrame(run);
  }

  /* ---------- compteur années ---------- */
  const yEl = $("#years"), years = new Date().getFullYear() - +yEl.dataset.from;
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    cio.disconnect();
    if (reduce) { yEl.textContent = years; return; }
    const t0 = performance.now();
    const tick = now => {
      const p = clamp((now - t0) / 1800, 0, 1), eased = 1 - Math.pow(1 - p, 3);
      yEl.textContent = Math.round(years * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }), { threshold: .6 });
  yEl.textContent = "0"; cio.observe(yEl);

  /* ---------- frise : fil + étapes ---------- */
  const tl = $("#tl"), fill = $("#tlFill"), steps = $$(".step");
  const tlUpdate = () => {
    const r = tl.getBoundingClientRect(), mid = innerHeight * .6;
    fill.style.height = clamp(mid - r.top, 0, r.height - 16) + "px";
    steps.forEach(s => s.classList.toggle("on", s.getBoundingClientRect().top < mid));
  };
  W(window, "scroll", () => requestAnimationFrame(tlUpdate), { passive: true });
  tlUpdate();

  /* ---------- tilt 3D ---------- */
  if (fine && !reduce) $$("[data-tilt]").forEach(c => {
    c.addEventListener("pointermove", e => {
      const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      c.classList.add("moving");
      c.style.setProperty("--ry", ((x - .5) * 14) + "deg");
      c.style.setProperty("--rx", ((.5 - y) * 14) + "deg");
      c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
    });
    c.addEventListener("pointerleave", () => {
      c.classList.remove("moving");
      c.style.setProperty("--rx", "0deg"); c.style.setProperty("--ry", "0deg");
    });
  });

  /* ---------- galerie : panneaux en arche ---------- */
  const SETS = {
    salle: [
      ["salle-rose", "La salle", "Les tables dressées"],
      ["terrasse", "La terrasse", "Déjeuner sous les arbres"],
      ["salle-panorama", "Le restaurant", "Un lieu à vivre"],
      ["terrasse-fleurs", "Alésia", "Façades fleuries"],
      ["table-dressee", "La table", "Tout est prêt"],
      ["facade-nuit", "Le soir", "La rue d’Alésia"],
    ],
    table: [
      ["mezzeh-dessus", "Mezzeh", "À partager"],
      ["hommos", "Hommos", "Onctueux, à la libanaise"],
      ["carre-agneau", "Agneau", "Carré rôti aux herbes"],
      ["tartare", "Tartare", "Tartare de viande libanais"],
      ["crevettes", "Mer", "Crevettes en rosace"],
      ["agneau-confit", "Mijoté", "Agneau confit"],
    ],
    traiteur: [
      ["buffet-entreprise", "Entreprise", "Buffets de réception"],
      ["cocktail", "Cocktail", "Pièces à partager"],
      ["falafels", "Falafels", "Dorés à cœur"],
      ["mignardises", "Douceurs", "Verrines & mignardises"],
      ["tartelettes", "Tartelettes", "Pour vos apéritifs"],
      ["buffet-festif", "Buffet", "Générosité festive"],
    ],
  };
  const gal = $("#gal"), tabs = $$("#tabs button");
  let cur = "salle", idx = 0, auto = true, timer, galVisible = false;
  const AUTO_MS = 5000;
  gal.style.setProperty("--dur", AUTO_MS + "ms");
  const pad = n => String(n).padStart(2, "0");

  const renderGal = () => {
    gal.classList.remove("ready");
    gal.innerHTML = SETS[cur].map(([f, k, t], i) => `
      <button type="button" class="pn ${i === 0 ? "active" : ""}" style="--i:${i}" aria-label="${k} — ${t}" aria-pressed="${i === 0}">
        <img src="/site/images/${f}.webp" alt="" loading="lazy" />
        <span class="vl">${k}</span>
        <span class="cap"><small>${k}</small><b>${t}</b></span>
        <span class="pbar"></span>
      </button>`).join("");
    idx = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => gal.classList.add("ready")));
    $$(".pn", gal).forEach((p, i) => {
      p.addEventListener("click", () => { userTouch(); activate(i); });
      p.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") { userTouch(); activate(i); } });
    });
    restart();
  };
  const activate = i => {
    const ps = $$(".pn", gal); idx = (i + ps.length) % ps.length;
    ps.forEach((p, j) => {
      p.classList.toggle("active", j === idx); p.setAttribute("aria-pressed", j === idx);
      const b = $(".pbar", p); b.classList.remove("run"); void b.offsetWidth;
      if (j === idx && auto && !reduce) b.classList.add("run");
    });
  };
  const restart = () => {
    clearInterval(timer);
    if (auto && !reduce && galVisible) { activate(idx); timer = setInterval(() => activate(idx + 1), AUTO_MS); }
  };
  const userTouch = () => { auto = false; clearInterval(timer); $$(".pbar", gal).forEach(b => b.classList.remove("run")); };
  tabs.forEach(t => t.addEventListener("click", () => {
    tabs.forEach(x => x.setAttribute("aria-selected", x === t));
    cur = t.dataset.set; renderGal();
  }));
  $("#galPrev").addEventListener("click", () => { userTouch(); activate(idx - 1); });
  $("#galNext").addEventListener("click", () => { userTouch(); activate(idx + 1); });
  gal.addEventListener("keydown", e => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); userTouch(); activate(idx + 1); $$(".pn", gal)[idx].focus(); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); userTouch(); activate(idx - 1); $$(".pn", gal)[idx].focus(); }
  });
  new IntersectionObserver(es => es.forEach(e => { galVisible = e.isIntersecting; restart(); }), { threshold: .35 }).observe(gal);
  renderGal();

  /* ---------- nostalgie : pile de polaroïds ---------- */
  const NOS = [
    ["salle-rose", "La salle"], ["facade-jour", "Rue d’Alésia"], ["terrasse", "L’été"],
    ["table-dressee", "La table"], ["salle-panorama", "Le service"],
  ];
  const deck = $("#deck"); let top = 0, busy = false;
  if (!deck.querySelector(".pol")) NOS.forEach(([f, c]) => {
    deck.insertAdjacentHTML("afterbegin", `<figure class="pol"><img src="/site/images/${f}.webp" alt="${c}" loading="lazy" /><figcaption>${c}</figcaption></figure>`);
  });
  const pols = $$(".pol", deck).reverse(); // pols[0] = première
  const layout = () => pols.forEach((p, i) => {
    const pos = (i - top + pols.length) % pols.length;
    p.style.zIndex = pols.length - pos;
    p.style.transform = `translate(${pos * 9}px,${pos * -7}px) rotate(${(pos % 2 ? 1 : -1) * pos * 2.6}deg) scale(${1 - pos * .035})`;
    p.style.opacity = pos > 3 ? 0 : 1;
  });
  const next = () => {
    if (busy) return; busy = true;
    const p = pols[top]; p.classList.add("fly");
    setTimeout(() => {
      p.style.transition = "none"; p.classList.remove("fly");
      top = (top + 1) % pols.length; layout();
      void p.offsetWidth; p.style.transition = ""; busy = false;
    }, reduce ? 10 : 520);
  };
  layout();
  deck.addEventListener("click", next);
  deck.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " " || e.key === "ArrowRight") { e.preventDefault(); next(); } });

  /* ---------- instagram (placeholders) ---------- */
  const IG = ["mezzeh-dessus","falafels","table-mezzeh","buffet-festif","salle-rose","hommos"];
  $("[data-ig]").innerHTML = IG.map(f => `<a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Voir sur Instagram"><img src="/site/images/${f}.webp" alt="" loading="lazy" /></a>`).join("");

  /* ---------- curseur custom ---------- */
  if (fine && !reduce) {
    const cur = $("#cursor"), lab = $("span", cur);
    let x = 0, y = 0, cx = 0, cy = 0;
    W(window, "pointermove", e => { x = e.clientX; y = e.clientY; cur.classList.add("show"); });
    W(document, "pointerleave", () => cur.classList.remove("show"));
    const loop = () => { cx += (x - cx) * .2; cy += (y - cy) * .2; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); };
    loop();
    W(document, "pointerover", e => {
      const t = e.target.closest("[data-cursor]");
      if (t) { lab.textContent = t.dataset.cursor; cur.classList.add("big"); } else { cur.classList.remove("big"); }
    });
  }


  

  

  return () => cleanups.forEach((f) => f());
}
