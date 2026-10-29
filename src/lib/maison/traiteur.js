/* eslint-disable */
// @ts-nocheck
/* Interactions de la page « traiteur » : JavaScript de la maquette (site-html), conservé tel quel.
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

  


  /* ---------- onglets (data-tabs) ---------- */
  $$("[data-tabs]").forEach(box => {
    const btns = $$("[role=tab]", box), ink = $(".ink", box), panels = $$("[data-panel]", box.parentElement);
    const move = b => { ink.style.width = b.offsetWidth + "px"; ink.style.transform = `translateX(${b.offsetLeft}px)`; };
    const sel = b => {
      btns.forEach(x => x.setAttribute("aria-selected", x === b));
      panels.forEach(p => p.classList.toggle("on", p.dataset.panel === b.dataset.tab));
      $$("[data-for]").forEach(im => im.classList.toggle("on", im.dataset.for === b.dataset.tab));
      move(b);
    };
    btns.forEach(b => b.addEventListener("click", () => sel(b)));
    const init = () => move($("[aria-selected=true]", box));
    W(window, "resize", init); document.fonts && document.fonts.ready.then(init); init();
  });

  /* ---------- formules : accordéon — détail sous le titre + photo ---------- */
  $$("[data-fs]").forEach(box => {
    const tabs = $$("[role=tab]", box), panels = $$("[data-fp]", box), imgs = $$("[data-fi]", box);
    const sel = i => {
      tabs.forEach((t, j) => {
        const on = j === i;
        t.setAttribute("aria-selected", on);
        t.setAttribute("aria-expanded", on);
        t.tabIndex = on ? 0 : -1;
      });
      panels.forEach((p, j) => {
        const on = j === i;
        p.classList.toggle("on", on);
        p.setAttribute("aria-hidden", on ? "false" : "true");
      });
      imgs.forEach((m, j) => m.classList.toggle("on", j === i));
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => sel(i));
      t.addEventListener("keydown", e => {
        const k = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : e.key === "ArrowUp" || e.key === "ArrowLeft" ? -1 : 0;
        if (k) { e.preventDefault(); const n = (i + k + tabs.length) % tabs.length; sel(n); tabs[n].focus(); }
      });
    });
    sel(0);
  });

  /* ---------- FAQ : une seule ouverte ---------- */
  $$("details.faq").forEach(d => d.addEventListener("toggle", () => { if (d.open) $$("details.faq").forEach(o => { if (o !== d) o.open = false; }); }));

  /* ---------- rail photos : glisser + flèches ---------- */
  $$("[data-rail]").forEach(rail => {
    let down = false, sx = 0, sl = 0, moved = 0;
    rail.addEventListener("pointerdown", e => { if (e.pointerType === "touch") return; down = true; moved = 0; sx = e.clientX; sl = rail.scrollLeft; rail.classList.add("drag"); });
    W(window, "pointermove", e => { if (!down) return; moved = e.clientX - sx; rail.scrollLeft = sl - moved; });
    W(window, "pointerup", () => { if (!down) return; down = false; rail.classList.remove("drag"); });
    const step = d => rail.scrollBy({ left: d * Math.min(rail.clientWidth * .7, 340), behavior: reduce ? "auto" : "smooth" });
    $("[data-prev]", rail.parentElement) && $("[data-prev]", rail.parentElement).addEventListener("click", () => step(-1));
    $("[data-next]", rail.parentElement) && $("[data-next]", rail.parentElement).addEventListener("click", () => step(1));
  });

  /* ---------- déroulé : fil + étapes ---------- */
  const proc = $(".proc");
  if (proc) {
    const fill = $(".fill", proc), steps = $$(".pstep", proc);
    const upd = () => { const r = proc.getBoundingClientRect(), mid = innerHeight * .62; fill.style.height = clamp(mid - r.top, 0, r.height - 16) + "px"; steps.forEach(s => s.classList.toggle("on", s.getBoundingClientRect().top < mid)); };
    W(window, "scroll", () => requestAnimationFrame(upd), { passive: true }); upd();
  }

  /* ---------- aperçu du formulaire (étapes qui s'allument) ---------- */
  const prev = $(".prev ol");
  if (prev) new IntersectionObserver((es, o) => es.forEach(e => {
    if (!e.isIntersecting) return; o.disconnect();
    $$("li", prev).forEach((li, i) => setTimeout(() => li.classList.add("lit"), reduce ? 0 : 450 + i * 520));
  }), { threshold: .4 }).observe(prev);

  /* ---------- CTA : le choix de l'espace alimente le lien du formulaire ---------- */
  const pick = $("[data-pick]");
  if (pick) {
    const cta = $("#devisBtn"), base = cta.getAttribute("href");
    $$("button", pick).forEach(b => b.addEventListener("click", () => {
      $$("button", pick).forEach(x => x.setAttribute("aria-pressed", x === b));
      cta.setAttribute("href", b.dataset.v ? `${base}&espace=${b.dataset.v}` : base);
    }));
  }
  /* liens « Choisir cet espace » : /devis?type=privatisation&espace=… (aucun JS requis) */

  /* rail : le conteneur des flèches est [data-rail-wrap] -> on rapproche les boutons du rail */
  const railWrap = $("[data-rail-wrap]"); if (railWrap) { const ctrl = $(".rail-ctrl"); if (ctrl) { $("[data-prev]", ctrl).onclick = () => $("[data-rail]").scrollBy({ left: -$("[data-rail] figure").offsetWidth, behavior: reduce ? "auto" : "smooth" }); $("[data-next]", ctrl).onclick = () => $("[data-rail]").scrollBy({ left: $("[data-rail] figure").offsetWidth, behavior: reduce ? "auto" : "smooth" }); } }
  

  return () => cleanups.forEach((f) => f());
}
