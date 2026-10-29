"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  DEVIS_STEPS,
  ESPACES_PRIVATISATION,
  FORMULES_TRAITEUR,
  INITIAL_DEVIS,
  OCCASIONS,
  PLAGES,
  buildDevisMailBody,
  formatDateFr,
  type Civilite,
  type DevisState,
  type DevisStepId,
  type ProjetType,
} from "@/data/devis";
const CONTACT_MAIL = "contact@restaurant-assanabel.com";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function canEnter(step: DevisStepId, s: DevisState): boolean {
  if (step === "projet") return true;
  if (!s.projet) return false;
  if (step === "occasion") return true;
  if (!(s.occasion || s.occasionLibre.trim())) return false;
  if (step === "date") return true;
  if (!s.dateSouhaitee || !s.plage || s.invites < 1) return false;
  if (step === "composition") return true;
  if (s.projet === "traiteur" && s.formules.length === 0) return false;
  if (s.projet === "privatisation" && !s.espace) return false;
  return true;
}

function canContinue(step: DevisStepId, s: DevisState): boolean {
  switch (step) {
    case "projet":
      return !!s.projet;
    case "occasion":
      return !!(s.occasion || s.occasionLibre.trim());
    case "date":
      return !!s.dateSouhaitee && !!s.plage && s.invites >= 1;
    case "composition":
      return s.projet === "traiteur" ? s.formules.length > 0 : !!s.espace;
    case "coordonnees":
      return (
        s.prenom.trim().length > 1 &&
        s.nom.trim().length > 1 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim()) &&
        s.telephone.trim().length >= 8 &&
        s.consent
      );
    default:
      return false;
  }
}

export function DevisWizard() {
  const search = useSearchParams();
  const router = useRouter();
  const typeParam = search.get("type");

  const [stepIndex, setStepIndex] = useState(0);
  const [state, setState] = useState<DevisState>(() => ({ ...INITIAL_DEVIS }));
  const [compTab, setCompTab] = useState<"offre" | "message">("offre");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeParam !== "traiteur" && typeParam !== "privatisation") return;
    setState((s) => (s.projet === typeParam ? s : { ...s, projet: typeParam }));
    setStepIndex((i) => (i === 0 ? 1 : i));
  }, [typeParam]);

  const step = DEVIS_STEPS[stepIndex];
  const patch = (p: Partial<DevisState>) => setState((s) => ({ ...s, ...p }));

  const summary = useMemo(() => {
    const bits: string[] = [];
    if (state.projet === "traiteur") bits.push("Traiteur");
    if (state.projet === "privatisation") bits.push("Privatisation");
    const occ = state.occasionLibre.trim() || state.occasion;
    if (occ) bits.push(occ);
    if (state.dateSouhaitee) bits.push(formatDateFr(state.dateSouhaitee));
    /* Invités : défaut 30 dans le stepper, mais pas dans le récap tant que la date n’est pas renseignée */
    if (state.dateSouhaitee && state.invites >= 1) {
      bits.push(`${state.invites} invité${state.invites > 1 ? "s" : ""}`);
    }
    if (state.projet === "privatisation" && state.espace) {
      const e = ESPACES_PRIVATISATION.find((x) => x.id === state.espace);
      if (e) bits.push(e.label);
    }
    if (state.projet === "traiteur" && state.formules.length) {
      bits.push(`${state.formules.length} formule${state.formules.length > 1 ? "s" : ""}`);
    }
    return bits;
  }, [state]);

  const go = (dir: -1 | 1) => {
    setError("");
    if (dir === 1 && !canContinue(step.id, state)) {
      setError(
        step.id === "coordonnees"
          ? "Complétez vos coordonnées et acceptez l’utilisation de vos données."
          : "Complétez cette étape pour continuer.",
      );
      return;
    }
    if (dir === 1 && step.id === "coordonnees") {
      const subject = encodeURIComponent(
        `[Devis ${state.projet}] ${state.prenom} ${state.nom} — Assanabel`,
      );
      const body = encodeURIComponent(buildDevisMailBody(state));
      window.location.href = `mailto:${CONTACT_MAIL}?subject=${subject}&body=${body}`;
      setSent(true);
      return;
    }
    setStepIndex((i) => Math.min(DEVIS_STEPS.length - 1, Math.max(0, i + dir)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const jump = (i: number) => {
    if (i <= stepIndex) {
      setStepIndex(i);
      return;
    }
    for (let k = 0; k < i; k++) {
      if (!canContinue(DEVIS_STEPS[k].id, state)) return;
    }
    if (!canEnter(DEVIS_STEPS[i].id, state)) return;
    setStepIndex(i);
  };

  const toggleFormule = (id: string) => {
    patch({
      formules: state.formules.includes(id)
        ? state.formules.filter((x) => x !== id)
        : [...state.formules, id],
    });
  };

  if (sent) {
    return (
      <div className="devis">
        <header className="devis-bar">
          <Link href="/" className="devis-brand">
            Assanabel
          </Link>
        </header>
        <div className="devis-main">
          <div className="devis-main-inner">
          <div className="devis-success">
            <h1>Votre demande est prête</h1>
            <p>
              Votre client mail s’ouvre avec le récapitulatif. Si ce n’est pas le cas, écrivez-nous à{" "}
              <a href={`mailto:${CONTACT_MAIL}`}>{CONTACT_MAIL}</a>. Nous vous répondons sous 24&nbsp;h ouvrées.
            </p>
            <div className="devis-nav" style={{ justifyContent: "center" }}>
              <Link className="devis-btn solid" href="/">
                Retour à l’accueil
              </Link>
              <button
                type="button"
                className="devis-btn ghost"
                style={{ borderColor: "rgba(28,24,20,.25)", color: "var(--ink)" }}
                onClick={() => {
                  setSent(false);
                  setStepIndex(0);
                  setState({ ...INITIAL_DEVIS });
                  router.replace("/devis");
                }}
              >
                Nouvelle demande
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="devis">
      <header className="devis-bar">
        <Link href="/" className="devis-brand">
          Assanabel
        </Link>
        <nav className="devis-steps" aria-label="Étapes du devis">
          {DEVIS_STEPS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={[i === stepIndex ? "on" : "", i < stepIndex ? "done" : ""].filter(Boolean).join(" ")}
              disabled={i > stepIndex && !canContinue(DEVIS_STEPS[Math.min(i, stepIndex)].id, state)}
              onClick={() => jump(i)}
            >
              {String(i + 1).padStart(2, "0")} {s.label}
            </button>
          ))}
        </nav>
        <p className="devis-progress" aria-live="polite">
          {String(stepIndex + 1).padStart(2, "0")} / {String(DEVIS_STEPS.length).padStart(2, "0")}
        </p>
      </header>

      <div className="devis-main">
        <div className="devis-main-inner">
        <header className="devis-chapter">
          <h1>
            {step.id === "projet" && "Que souhaitez-vous imaginer ?"}
            {step.id === "occasion" && "Quel événement célébrez-vous ?"}
            {step.id === "date" && "Quand, et pour combien de personnes ?"}
            {step.id === "composition" && "Composons votre événement"}
            {step.id === "coordonnees" && "Comment vous joindre ?"}
          </h1>
          <p>
            {step.id === "projet" &&
              "Un seul parcours, deux portes d’entrée. Vous pourrez tout affiner ensuite."}
            {step.id === "occasion" &&
              "Choisissez une typologie, ou précisez la vôtre en quelques mots."}
            {step.id === "date" &&
              "Ces éléments conditionnent nos disponibilités et la préparation de votre devis."}
            {step.id === "composition" &&
              (state.projet === "privatisation"
                ? "Assanabel, c’est une maison : choisissez comment vous souhaitez l’occuper."
                : "Sélectionnez les formules qui vous inspirent — nous affinerons ensemble.")}
            {step.id === "coordonnees" &&
              "Réponse personnalisée sous 24 h ouvrées, par l’équipe Assanabel."}
          </p>
        </header>

        <div className="devis-panel" key={step.id}>
          {step.id === "projet" && (
            <div className="devis-projets">
              <button
                type="button"
                className={`devis-projet${state.projet === "privatisation" ? " on" : ""}`}
                onClick={() => {
                  patch({ projet: "privatisation", formules: [] });
                  router.replace("/devis?type=privatisation", { scroll: false });
                }}
              >
                <span className="devis-check">
                  <CheckIcon />
                </span>
                <div className="ph">
                  <img src="/site/images/salle-panorama.webp" alt="" />
                </div>
                <div className="body">
                  <b>Privatisation</b>
                  <span>La salle, la terrasse ou toute la maison — Paris 14, Alésia.</span>
                </div>
              </button>
              <button
                type="button"
                className={`devis-projet${state.projet === "traiteur" ? " on" : ""}`}
                onClick={() => {
                  patch({ projet: "traiteur", espace: null });
                  router.replace("/devis?type=traiteur", { scroll: false });
                }}
              >
                <span className="devis-check">
                  <CheckIcon />
                </span>
                <div className="ph">
                  <img src="/site/images/buffet-festif.webp" alt="" />
                </div>
                <div className="body">
                  <b>Prestation traiteur</b>
                  <span>Cocktail, buffet, plateaux, service — où que vous receviez.</span>
                </div>
              </button>
            </div>
          )}

          {step.id === "occasion" && (
            <>
              <div className="devis-chips" role="group" aria-label="Type d’événement">
                {OCCASIONS.map((o) => (
                  <button
                    key={o}
                    type="button"
                    className={`devis-chip${state.occasion === o && !state.occasionLibre.trim() ? " on" : ""}`}
                    onClick={() => patch({ occasion: o, occasionLibre: "" })}
                  >
                    {o}
                  </button>
                ))}
              </div>
              <p className="devis-or">Ou précisez</p>
              <div className="devis-field">
                <label htmlFor="occasion-libre">Votre occasion</label>
                <input
                  id="occasion-libre"
                  value={state.occasionLibre}
                  placeholder="Baptême, pot de départ, lancement de marque…"
                  onChange={(e) =>
                    patch({ occasionLibre: e.target.value, occasion: e.target.value ? null : state.occasion })
                  }
                />
              </div>
            </>
          )}

          {step.id === "date" && (
            <div className="devis-grid-2">
              <div className="devis-field">
                <label htmlFor="date-s">Date souhaitée *</label>
                <input
                  id="date-s"
                  type="date"
                  value={state.dateSouhaitee}
                  onChange={(e) => patch({ dateSouhaitee: e.target.value })}
                />
              </div>
              <div className="devis-field">
                <label htmlFor="date-a">Date alternative</label>
                <input
                  id="date-a"
                  type="date"
                  value={state.dateAlternative}
                  onChange={(e) => patch({ dateAlternative: e.target.value })}
                />
              </div>
              <div className="devis-field">
                <label>Nombre d’invités *</label>
                <div className="devis-guests">
                  <button
                    type="button"
                    aria-label="Diminuer"
                    onClick={() => patch({ invites: Math.max(1, state.invites - 5) })}
                  >
                    −
                  </button>
                  <b>{state.invites}</b>
                  <button
                    type="button"
                    aria-label="Augmenter"
                    onClick={() => patch({ invites: Math.min(2000, state.invites + 5) })}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="devis-field" style={{ gridColumn: "1 / -1" }}>
                <label>Plage horaire *</label>
                <div className="devis-plages" role="group">
                  {PLAGES.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      className={`devis-plage${state.plage === p.id ? " on" : ""}`}
                      onClick={() => patch({ plage: p.id })}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step.id === "composition" && (
            <>
              <div className="devis-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={compTab === "offre"}
                  className={compTab === "offre" ? "on" : ""}
                  onClick={() => setCompTab("offre")}
                >
                  {state.projet === "privatisation" ? "Espaces" : "Traiteur"}
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={compTab === "message"}
                  className={compTab === "message" ? "on" : ""}
                  onClick={() => setCompTab("message")}
                >
                  Votre message
                </button>
              </div>

              {compTab === "offre" && state.projet === "traiteur" && (
                <div className="devis-cards cols-3">
                  {FORMULES_TRAITEUR.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      className={`devis-card${state.formules.includes(f.id) ? " on" : ""}`}
                      onClick={() => toggleFormule(f.id)}
                    >
                      <span className="devis-check">
                        <CheckIcon />
                      </span>
                      <div className="ph">
                        <img src={f.image} alt="" />
                      </div>
                      <div className="body">
                        <b>{f.label}</b>
                        <span>{f.desc}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {compTab === "offre" && state.projet === "privatisation" && (
                <>
                  <p className="devis-note">
                    Une seule adresse — 6 rue d’Alésia — trois façons de privatiser la maison.
                  </p>
                  <div className="devis-cards cols-3" style={{ marginTop: "1rem" }}>
                    {ESPACES_PRIVATISATION.map((e) => (
                      <button
                        key={e.id}
                        type="button"
                        className={`devis-card${state.espace === e.id ? " on" : ""}`}
                        onClick={() => patch({ espace: e.id })}
                      >
                        <span className="devis-check">
                          <CheckIcon />
                        </span>
                        <div className="ph">
                          <img src={e.image} alt="" />
                        </div>
                        <div className="body">
                          <b>{e.label}</b>
                          <span>{e.desc}</span>
                          <small>{e.meta}</small>
                        </div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {compTab === "message" && (
                <div className="devis-field">
                  <label htmlFor="msg">Précisions utiles</label>
                  <textarea
                    id="msg"
                    value={state.message}
                    placeholder="Allergies, scénario de la soirée, contraintes de lieu, budget indicatif…"
                    onChange={(e) => patch({ message: e.target.value })}
                  />
                </div>
              )}
            </>
          )}

          {step.id === "coordonnees" && (
            <div className="devis-box">
              <div className="devis-civilite" role="group" aria-label="Civilité">
                {(
                  [
                    ["madame", "Madame"],
                    ["monsieur", "Monsieur"],
                    ["autre", "Autre"],
                  ] as [Civilite, string][]
                ).map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    className={state.civilite === id ? "on" : ""}
                    onClick={() => patch({ civilite: id })}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <div className="devis-grid-2">
                <div className="devis-field">
                  <label htmlFor="prenom">Prénom *</label>
                  <input
                    id="prenom"
                    autoComplete="given-name"
                    value={state.prenom}
                    onChange={(e) => patch({ prenom: e.target.value })}
                  />
                </div>
                <div className="devis-field">
                  <label htmlFor="nom">Nom *</label>
                  <input
                    id="nom"
                    autoComplete="family-name"
                    value={state.nom}
                    onChange={(e) => patch({ nom: e.target.value })}
                  />
                </div>
                <div className="devis-field">
                  <label htmlFor="email">Email *</label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={state.email}
                    onChange={(e) => patch({ email: e.target.value })}
                  />
                </div>
                <div className="devis-field">
                  <label htmlFor="tel">Téléphone *</label>
                  <input
                    id="tel"
                    type="tel"
                    autoComplete="tel"
                    value={state.telephone}
                    onChange={(e) => patch({ telephone: e.target.value })}
                  />
                </div>
                <div className="devis-field">
                  <label htmlFor="cp">Code postal</label>
                  <input
                    id="cp"
                    inputMode="numeric"
                    placeholder="75014"
                    value={state.codePostal}
                    onChange={(e) => patch({ codePostal: e.target.value })}
                  />
                </div>
                <div className="devis-field">
                  <label htmlFor="soc">Société (optionnel)</label>
                  <input
                    id="soc"
                    autoComplete="organization"
                    value={state.societe}
                    onChange={(e) => patch({ societe: e.target.value })}
                  />
                </div>
              </div>
              <label className="devis-consent">
                <input
                  type="checkbox"
                  checked={state.consent}
                  onChange={(e) => patch({ consent: e.target.checked })}
                />
                <span>
                  J’accepte qu’Assanabel utilise mes données pour traiter ma demande, conformément à la{" "}
                  <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.
                </span>
              </label>
            </div>
          )}

          {error ? <p className="devis-error">{error}</p> : null}
        </div>
        </div>
      </div>

      <footer className="devis-foot">
        <div className="devis-summary" aria-live="polite">
          {summary.map((b) => (
            <span key={b}>{b}</span>
          ))}
        </div>
        <div className="devis-nav">
          <button
            type="button"
            className="devis-btn ghost"
            disabled={stepIndex === 0}
            onClick={() => go(-1)}
          >
            ← Précédent
          </button>
          <button type="button" className="devis-btn solid" onClick={() => go(1)}>
            {step.id === "coordonnees" ? "Envoyer ma demande →" : "Continuer →"}
          </button>
        </div>
      </footer>
    </div>
  );
}
