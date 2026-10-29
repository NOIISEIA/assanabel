/* eslint-disable */
// @ts-nocheck
/* Interactions de la page « contact » : JavaScript de la maquette (site-html), conservé tel quel.
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

  


  /* ---------- titre : lettres qui tombent ---------- */
  const h1 = $("#h1"), txt = h1.textContent;
  h1.innerHTML = [...txt].map((c, i, a) =>
    `<span class="ch ${c === " " ? "sp" : ""} ${i === a.length - 1 ? "last" : ""}" style="--i:${i}" aria-hidden="true">${c === " " ? "&nbsp;" : c}</span>`).join("");

  /* ---------- « lettre » : champs inline à largeur dynamique ---------- */
  const f = { nom: $("#nom"), tel: $("#tel"), email: $("#email"), message: $("#message") };
  const letter = $("#letter"), cnt = $("#cnt");
  const mirror = $(".mirror", letter) || document.createElement("span"); mirror.className = "mirror"; letter.appendChild(mirror);
  const fit = el => {
    if (el.tagName === "TEXTAREA") return;
    mirror.style.font = getComputedStyle(el).font;
    mirror.textContent = el.value || el.placeholder;
    el.style.setProperty("--w", Math.ceil(mirror.getBoundingClientRect().width) + 10 + "px");
  };
  const fitAll = () => [f.nom, f.email, f.tel].forEach(fit);
  document.fonts && document.fonts.ready.then(fitAll); W(window, "resize", fitAll); fitAll();

  /* ---------- objet de la demande (liste élégante) ---------- */
  const OPTS = { "Réservation": "d’une réservation", "Privatisation": "d’une privatisation", "Traiteur": "d’une prestation traiteur", "Autre": "d’autre chose" };
  const HINT = {
    Privatisation: ["/devis?type=privatisation", "Pour une privatisation, un formulaire de devis détaillé vous attend"],
    Traiteur: ["/devis?type=traiteur", "Pour une prestation traiteur, un formulaire de devis détaillé vous attend"],
  };
  const tBtn = $("#topicBtn"), pop = $("#topicPop"), hidden = $("#sujet");
  pop.innerHTML = Object.entries(OPTS).map(([k, v]) => `<button type="button" role="option" data-k="${k}" aria-selected="${k === "Réservation"}">${v}</button>`).join("");
  const closePop = () => { pop.classList.remove("open"); tBtn.setAttribute("aria-expanded", "false"); };
  const openPop = () => { pop.classList.add("open"); tBtn.setAttribute("aria-expanded", "true"); $("button[aria-selected=true]", pop).focus(); };
  function setTopic(v) {
    const k = Object.keys(OPTS).find(x => x.toLowerCase() === String(v).toLowerCase()); if (!k) return;
    hidden.value = k; tBtn.textContent = OPTS[k];
    $$("button", pop).forEach(b => b.setAttribute("aria-selected", b.dataset.k === k));
    const h = $("#devisHint"), L = HINT[k]; h.classList.toggle("show", !!L);
    if (L) h.innerHTML = `${L[1]} : <a href="${L[0]}">Demander un devis →</a>`;
    closePop();
  }
  tBtn.addEventListener("click", () => pop.classList.contains("open") ? closePop() : openPop());
  pop.addEventListener("click", e => { const b = e.target.closest("button"); if (b) { setTopic(b.dataset.k); tBtn.focus(); } });
  pop.addEventListener("keydown", e => {
    const bs = $$("button", pop), i = bs.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); bs[(i + 1) % bs.length].focus(); }
    if (e.key === "ArrowUp") { e.preventDefault(); bs[(i - 1 + bs.length) % bs.length].focus(); }
    if (e.key === "Escape") { closePop(); tBtn.focus(); }
  });
  W(document, "click", e => { if (!e.target.closest(".topic")) closePop(); });

  /* ---------- validation douce ---------- */
  const RULES = {
    nom: v => v.trim().length >= 2,
    tel: v => !v.trim() || /^[\d\s+().-]{6,}$/.test(v.trim()),
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: v => v.trim().length >= 10,
  };
  const MSG = {
    nom: "Pouvons-nous connaître votre nom ?",
    email: "Cette adresse e-mail ne semble pas valide.",
    tel: "Ce numéro semble incomplet.",
    message: "Quelques mots de plus, s’il vous plaît (10 caractères minimum).",
  };
  const status = $("#status");
  const say = t => { if (t) status.textContent = t; status.classList.toggle("show", !!t); };
  const box = id => f[id].closest("[data-f]");
  function check(id, quiet) {
    const ok = RULES[id](f[id].value), has = f[id].value.trim().length > 0, b = box(id);
    b.classList.toggle("ok", ok && has && id !== "message");
    if (ok) { b.classList.remove("err"); if (status.dataset.for === id) { say(""); status.dataset.for = ""; } }
    else if (!quiet) { b.classList.add("err"); status.dataset.for = id; say(MSG[id]); }
    return ok;
  }
  Object.keys(f).forEach(id => {
    f[id].addEventListener("input", () => { fit(f[id]); if (id === "message") cnt.textContent = `${f[id].value.length} / 600`; if (box(id).classList.contains("err")) check(id, false); else box(id).classList.toggle("ok", RULES[id](f[id].value) && f[id].value.trim() && id !== "message"); });
    f[id].addEventListener("blur", () => { if (f[id].value.trim()) check(id, false); });
  });

  /* ---------- envoi ---------- */
  const form = $("#form"), send = $("#send"), thanks = $("#thanks");
  const wait = ms => new Promise(r => setTimeout(r, reduce ? Math.min(ms, 60) : ms));
  const toast = t => { const el = $("#toast"); el.textContent = t; el.classList.add("show"); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove("show"), 1800); };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const bad = Object.keys(f).filter(id => !RULES[id](f[id].value));
    if (bad.length) { bad.forEach(id => box(id).classList.add("err")); status.dataset.for = bad[0]; say(MSG[bad[0]]); f[bad[0]].focus(); return; }
    if ($(".hp").value) { form.style.display = "none"; thanks.classList.add("show"); return; } /* honeypot */
    send.classList.add("loading"); say("");

    /* TODO API (Next.js + Resend) : POST { sujet: hidden.value, nom, tel, email, message } vers app/api/contact/route.ts
       (ou Server Action). Remplacer ce délai par le await fetch(...). Sur erreur : say("Un souci est survenu, merci de réessayer.")
       et retirer la classe loading ; ne lancer la sortie qu'après ok:true. Voir NEXT-PORTING.md. */
    await wait(1700);

    letter.classList.add("done"); form.classList.add("form-done");
    await wait(1100);
    $("#tName").textContent = f.nom.value.trim().split(/\s+/)[0];
    form.style.display = "none"; thanks.classList.add("show"); send.classList.remove("loading");
    thanks.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
  });
  $("#again").addEventListener("click", () => {
    form.reset(); setTopic("Réservation"); $$("[data-f]").forEach(b => b.classList.remove("ok", "err")); say(""); cnt.textContent = "0 / 600";
    thanks.classList.remove("show"); letter.classList.remove("done"); form.classList.remove("form-done"); form.style.display = ""; send.classList.remove("loading"); fitAll();
  });

  /* CTA hero → objet de la demande ; hash (#privatisation, #traiteur…) */
  $$("[data-topic]").forEach(a => a.addEventListener("click", () => setTopic(a.dataset.topic)));
  const hash = decodeURIComponent(location.hash.slice(1)); if (hash) setTopic(hash);

  /* ---------- copier ---------- */
  $$(".cbtn").forEach(b => b.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(b.dataset.copy); } catch { const t = document.createElement("textarea"); t.value = b.dataset.copy; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); }
    b.classList.add("done"); const old = b.textContent; b.textContent = "Copié ✓"; toast("Copié dans le presse-papiers");
    setTimeout(() => { b.classList.remove("done"); b.textContent = old; }, 1800);
  }));

  /* ---------- horaires en direct (heure de Paris) ---------- */
  const SLOTS = [[12, 15], [19, 23]];
  const parisNow = () => {
    const p = Object.fromEntries(new Intl.DateTimeFormat("fr-FR", { timeZone: "Europe/Paris", hour: "numeric", minute: "numeric", hour12: false }).formatToParts(new Date()).map(x => [x.type, x.value]));
    return (+p.hour % 24) + (+p.minute) / 60;
  };
  const fmt = h => `${Math.floor(h)}h${String(Math.round((h % 1) * 60)).padStart(2, "0") === "00" ? "" : String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
  const hours = () => {
    const h = parisNow(), st = $("#status"), tx = $("#statusTxt");
    $("#now").style.left = h / 24 * 100 + "%";
    const cur = SLOTS.find(([a, b]) => h >= a && h < b);
    if (cur) { st.className = "status open"; tx.textContent = `Ouvert maintenant · service jusqu’à ${fmt(cur[1])}`; }
    else {
      const nxt = SLOTS.find(([a]) => a > h); st.className = "status closed";
      tx.textContent = nxt ? `Fermé · réouverture à ${fmt(nxt[0])}` : "Fermé · réouverture demain à 12h";
    }
  };
  hours(); cleanups.push(((id) => () => clearInterval(id))(setInterval(hours, 60000)));
  new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { $("#hoursCard").classList.add("in"); o.disconnect(); } }), { threshold: .3 }).observe($("#hoursCard"));

  

  return () => cleanups.forEach((f) => f());
}
