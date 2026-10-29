import type { Metadata } from "next";
import Link from "next/link";
import { MaisonPage } from "@/components/maison/MaisonPage";

export const metadata: Metadata = {
  title: "Contact | Restaurant libanais Assanabel Paris",
  description: "Contactez Assanabel, restaurant libanais à Paris 14 : réservation, privatisation, traiteur. Adresse, horaires, accès.",
  alternates: { canonical: "/contact" },
};

/** Page issue de la maquette site-html/src/contact.html (markup identique, styles dans src/styles/maison-pages.css). */
export default function Page() {
  return (
    <MaisonPage page="contact" className="page-contact">
      <section id="intro" className="on-dark" data-chapter="Intro" data-dark>
        <div className="bg" aria-hidden="true"></div>
        <div className="wrap hero-in">
          <p className="eyebrow fade-in" style={{ "--dl": ".1s" } as React.CSSProperties}>Contact · Restaurant libanais, Paris 14</p>
          <h1 className="big" id="h1" aria-label="Discutons !">Discutons !</h1>
          <p className="lead fade-in" style={{ "--dl": "1s" } as React.CSSProperties}>
            Une réservation, un événement, une simple question : écrivez-nous. Nous lisons tout et revenons vers vous.
          </p>
          <div className="hero-ctas fade-in" style={{ "--dl": "1.2s" } as React.CSSProperties}>
            <span className="btn-wrap">
              <a className="btn" href="#ecrire" data-topic="privatisation">Privatiser la maison</a>
            </span>
            {" "}
            <span className="btn-wrap clair">
              <a className="btn" href="#ecrire" data-topic="traiteur">Devis traiteur</a>
            </span>
            {" "}
            <a className="link-arrow" href="tel:+33142798686">Appeler le 01 42 79 86 86</a>
          </div>
        </div>
      </section>
      <section id="ecrire" data-chapter="Écrire">
        <div className="wrap cx">
          <div>
            <p className="eyebrow rv">Un petit mot</p>
            <h2 className="f-title rv" style={{ "--d": "100" } as React.CSSProperties}>Écrivez-nous, nous nous occupons du reste.</h2>
            <form id="form" noValidate className="rv" style={{ "--d": "200" } as React.CSSProperties} autoComplete="on">
              <div className="letter" id="letter">
                <p style={{ "--k": "0" } as React.CSSProperties}>
                  Bonjour, je m’appelle
                  {" "}
                  <span className="inl" data-f="nom">
                    <input id="nom" name="nom" type="text" placeholder="votre nom" autoComplete="name" aria-label="Votre nom" required />
                  </span>
                  {" "}
                  et je vous écris à propos
                  {" "}
                  <span className="topic">
                    <button type="button" id="topicBtn" aria-haspopup="listbox" aria-expanded="false">d’une réservation</button>
                    <span className="topic-pop" id="topicPop" role="listbox" aria-label="Objet de votre demande"></span>
                  </span>
                  .
                </p>
                <p style={{ "--k": "1" } as React.CSSProperties}>
                  Vous pouvez me répondre par e-mail à
                  {" "}
                  <span className="inl" data-f="email">
                    <input id="email" name="email" type="email" placeholder="votre@email.com" autoComplete="email" aria-label="Votre e-mail" required />
                  </span>
                  , ou me joindre au
                  {" "}
                  <span className="inl" data-f="tel">
                    <input id="tel" name="tel" type="tel" placeholder="téléphone (facultatif)" autoComplete="tel" aria-label="Votre téléphone (facultatif)" />
                  </span>
                  .
                </p>
                <p style={{ "--k": "2" } as React.CSSProperties}>Voici ce que je souhaite vous dire :</p>
              </div>
              <div className="msg-area" id="msgArea" data-f="message" style={{ "--k": "3" } as React.CSSProperties}>
                <textarea id="message" name="message" maxLength={600} placeholder="Votre message…" aria-label="Votre message" required></textarea>
                {" "}
                <span className="cnt" id="cnt">0 / 600</span>
              </div>
              <p className="devis-hint" id="devisHint" aria-live="polite"></p>
              <p className="status-line" id="status" role="alert"></p>
              {" "}
              <input className="hp" type="text" name="societe" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {" "}
              <input type="hidden" name="sujet" id="sujet" defaultValue="Réservation" />
              {" "}
              <div className="row-send" style={{ "--k": "4" } as React.CSSProperties}>
                <button className="lux-btn" type="submit" id="send">
                  <span className="lab">
                    Envoyer ma demande
                    <i className="ar"></i>
                  </span>
                  <i className="prog"></i>
                </button>
                {" "}
                <p className="note-sm">Vos données ne servent qu’à répondre à votre demande.</p>
              </div>
            </form>
            <div className="thanks2" id="thanks" role="status">
              <div className="rl"></div>
              <h3>
                Merci,
                {" "}
                <span id="tName"></span>
                .
              </h3>
              <p>
                Votre message nous est bien parvenu. Nous revenons vers vous dès que possible. En attendant, la carte vous attend.
              </p>
              <div className="acts">
                <span className="btn-wrap">
                  <Link className="btn compact" href="/la-carte">Voir la carte</Link>
                </span>
                {" "}
                <span className="btn-wrap clair">
                  <Link className="btn compact" href="/privatisation">Privatisation</Link>
                </span>
                {" "}
                <span className="btn-wrap clair">
                  <Link className="btn compact" href="/traiteur">Traiteur</Link>
                </span>
              </div>
              {" "}
              <button type="button" className="again" id="again">Écrire un autre message</button>
            </div>
          </div>
          <aside className="cx-side rv rv-s" style={{ "--d": "200" } as React.CSSProperties} aria-label="Nous joindre directement">
            <div className="arch-ph">
              <div className="sh" aria-hidden="true"></div>
              <div className="im">
                <img src="/site/images/salle-rose.webp" alt="La salle d'Assanabel" loading="lazy" />
              </div>
            </div>
            <div className="conc">
              <div>
                <small>Préférez-vous nous parler ?</small>
                <a href="tel:+33142798686">01 42 79 86 86</a>
              </div>
              <div>
                <small>Ou nous écrire directement</small>
                <a href="mailto:contact@restaurant-assanabel.com">contact@restaurant-assanabel.com</a>
              </div>
              <div>
                <small>Nous vous accueillons</small>
                <span>12h–15h · 19h–23h, 7j/7</span>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section id="venir" data-chapter="Venir">
        <div className="wrap">
          <div className="v-head">
            <p className="eyebrow rv">Pratique</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Venir nous voir, tout simplement.</h2>
          </div>
          <div className="v-grid">
            <article className="vcard rv" style={{ "--d": "0" } as React.CSSProperties}>
              <div className="arch">
                <img src="/site/images/facade-jour.webp" alt="Façade d'Assanabel, rue d'Alésia" decoding="async" />
              </div>
              {" "}
              <span className="k">Adresse</span>
              {" "}
              <h3>6 rue d’Alésia, Paris 14</h3>
              <div className="copy-row">
                <div>
                  <small>Adresse</small>
                  <span className="v">6 rue d’Alésia, 75014 Paris</span>
                </div>
                <button className="cbtn" data-copy="6 rue d’Alésia, 75014 Paris">Copier</button>
              </div>
              <div className="copy-row">
                <div>
                  <small>Téléphone</small>
                  <a href="tel:+33142798686">01 42 79 86 86</a>
                </div>
                <button className="cbtn" data-copy="01 42 79 86 86">Copier</button>
              </div>
              <div className="copy-row">
                <div>
                  <small>E-mail</small>
                  <a href="mailto:contact@restaurant-assanabel.com">contact@restaurant-assanabel.com</a>
                </div>
                <button className="cbtn" data-copy="contact@restaurant-assanabel.com">Copier</button>
              </div>
              <div className="go">
                <a className="link-arrow" style={{ color: "var(--bronze-deep)" }} href="https://www.google.com/maps/search/?api=1&query=6+rue+d%27Al%C3%A9sia+75014+Paris" target="_blank" rel="noopener">Itinéraire →</a>
              </div>
            </article>
            <article className="vcard rv" style={{ "--d": "150" } as React.CSSProperties} id="hoursCard">
              <span className="k">Horaires</span>
              {" "}
              <h3>Ouvert 7 jours sur 7</h3>
              <div className="status" id="status">
                <i></i>
                <span id="statusTxt">…</span>
              </div>
              <div className="bar24" aria-hidden="true">
                <div className="sl" style={{ left: "50%", width: "12.5%" }}>
                  <span>12h–15h</span>
                </div>
                <div className="sl" style={{ left: "79.17%", width: "16.66%" }}>
                  <span>19h–23h</span>
                </div>
                <div className="now" id="now">✦</div>
              </div>
              <div className="ticks" aria-hidden="true">
                <span>0h</span>
                <span>6h</span>
                <span>12h</span>
                <span>18h</span>
                <span>24h</span>
              </div>
              <p className="small">Services du midi (12h–15h) et du soir (19h–23h), tous les jours. Heure de Paris.</p>
              <div className="go">
                <span className="btn-wrap">
                  <Link className="btn compact" href="/devis">Réserver votre événement</Link>
                </span>
              </div>
            </article>
            <article className="vcard rv" style={{ "--d": "300" } as React.CSSProperties}>
              <span className="k">Accès</span>
              {" "}
              <h3>Métro, bus ou à pied</h3>
              {" "}
              <svg className="metro" viewBox="0 0 360 130" role="img" aria-label="Ligne 4 : Denfert-Rochereau, Mouton-Duvernet, Alésia">
                <line className="line" x1="24" y1="78" x2="336" y2="78"></line>
                <circle className="st" cx="50" cy="78" r="8"></circle>
                <circle className="st" cx="170" cy="78" r="8"></circle>
                <circle className="st me" cx="290" cy="78" r="10"></circle>
                <text x="50" y="104" textAnchor="middle">Denfert-</text>
                <text x="50" y="115" textAnchor="middle">Rochereau</text>
                <text x="170" y="104" textAnchor="middle">Mouton-</text>
                <text x="170" y="115" textAnchor="middle">Duvernet</text>
                <text x="290" y="104" textAnchor="middle" style={{ fill: "var(--bronze-deep)" }}>Alésia</text>
                <path d="M290 62 v-16" stroke="#a5834a" strokeWidth="2" strokeDasharray="3 3"></path>
                <text x="298" y="56" style={{ fill: "var(--bronze-deep)", fontSize: "8px" }}>≈ 9 min à pied</text>
                <g transform="translate(290,30)">
                  <circle r="14" fill="#a5834a"></circle>
                  <text y="4" textAnchor="middle" style={{ fill: "#fff", fontSize: "12px" }}>✦</text>
                </g>
                <text x="290" y="9" textAnchor="middle" style={{ fill: "var(--bronze-deep)" }}>Assanabel</text>
                <rect className="train" x="-14" y="71" width="28" height="14" rx="6">
                  <animate attributeName="x" values="36;276" dur="5s" repeatCount="indefinite" keyTimes="0;1" calcMode="spline" keySplines=".5 0 .5 1"></animate>
                </rect>
              </svg>
              {" "}
              <div className="chip-row">
                <span className="chip">
                  <b>4</b>
                  Alésia · ≈ 9 min à pied
                </span>
                {" "}
                <span className="chip">
                  <b>4</b>
                  Denfert-Rochereau · ≈ 9 min (lignes 4, 6, RER B)
                </span>
                {" "}
                <span className="chip">
                  <b className="bus">62</b>
                  Bus · René Coty
                </span>
                {" "}
                <span className="chip">
                  <b className="bus" style={{ background: "var(--bronze)", color: "var(--ink)" }}>P</b>
                  Parc Montsouris · ≈ 5 min à pied
                </span>
              </div>
              <p className="small">
                Métro Alésia (ligne 4) ou Denfert-Rochereau (lignes 4, 6 et RER B), à environ 9 minutes à pied, ou bus 62 arrêt René Coty. Le parc Montsouris est à 5 minutes.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="recevoir" className="on-dark" data-chapter="Recevoir" data-dark>
        <div className="wrap">
          <div className="rec-head">
            <p className="eyebrow rv">Un événement en tête ?</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Chez nous, ou chez vous.</h2>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>Privatisez la maison, ou faites venir le Liban jusqu’à vous. Choisissez votre formule :</p>
          </div>
        </div>
        <div className="split">
          <article className="pane">
            <img src="/site/images/salle-rose.webp" alt="" loading="lazy" />
            {" "}
            <div className="in">
              <p className="k">Privatisation</p>
              <h3>Privatisez la maison</h3>
              <p>
                Un dîner d’entreprise, un anniversaire, un mariage intimiste : la maison vous est ouverte, pour une soirée qui n’appartient qu’à vous.
              </p>
              {" "}
              <span className="btn-wrap">
                <Link className="btn" href="/privatisation">Privatiser le restaurant</Link>
              </span>
            </div>
          </article>
          <article className="pane">
            <img src="/site/images/buffet-festif.webp" alt="" loading="lazy" style={{ objectPosition: "center 40%" }} />
            {" "}
            <div className="in">
              <p className="k">Traiteur</p>
              <h3>L’art de recevoir, où vous voulez</h3>
              <p>
                Plateaux-repas, buffets, cocktails, pièces à partager : le goût du Liban, dressé avec soin sur le lieu de votre réception. Menus adaptés aux allergies et aux régimes.
              </p>
              {" "}
              <span className="btn-wrap clair">
                <Link className="btn" href="/traiteur">Demander un devis traiteur</Link>
              </span>
              <Link className="link-arrow" href="/traiteur" style={{ color: "var(--champagne)" }}>Découvrir le service →</Link>
            </div>
          </article>
        </div>
        <div className="also">
          <Link href="/devis">Réserver votre événement</Link>
          <a href="https://www.restaurant-assanabel.com/commande-en-ligne/">Commander en ligne</a>
          <Link href="/la-carte">Voir la carte</Link>
        </div>
      </section>
    </MaisonPage>
  );
}
