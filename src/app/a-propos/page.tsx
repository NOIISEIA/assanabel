import type { Metadata } from "next";
import Link from "next/link";
import { MaisonPage } from "@/components/maison/MaisonPage";

export const metadata: Metadata = {
  title: "À propos | Restaurant libanais Assanabel Paris",
  description: "Assanabel, cuisine libanaise d'exception à Paris 14 depuis 1988. L'histoire de la maison, son savoir-faire, ses tables.",
  alternates: { canonical: "/a-propos" },
};

/** Page À propos (ex `/a-propos-2`) — maquette site-html/src/a-propos-2.html. */
export default function Page() {
  return (
    <MaisonPage page="apropos" className="page-apropos">
      <section id="intro" className="on-dark" data-chapter="Intro">
        <div className="bg" aria-hidden="true"></div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow fade-in" style={{ "--dl": ".2s" } as React.CSSProperties}>Depuis 1988 · Paris 14 · Alésia</p>
            <h1>
              <span className="l">
                <span>À</span>
              </span>
              <span className="l">
                <span>propos</span>
              </span>
            </h1>
            <h2 className="fade-in" style={{ "--dl": ".7s" } as React.CSSProperties}>Nous vous servons une cuisine libanaise d’exception depuis 1988.</h2>
            <p className="lead fade-in" style={{ "--dl": ".9s" } as React.CSSProperties}>
              Une maison de tradition libanaise, tenue par des fondateurs qui en ont reçu le geste en héritage, et le font vivre à Paris depuis 1988.
            </p>
            <div className="hero-ctas fade-in" style={{ "--dl": "1.1s" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" href="/privatisation">Privatiser</Link>
              </span>
              {" "}
              <span className="btn-wrap clair">
                <Link className="btn" href="/traiteur">Traiteur</Link>
              </span>
              {" "}
              <Link className="link-arrow" href="/devis">Réserver votre événement →</Link>
            </div>
          </div>
          <div className="compare-wrap fade-in" style={{ "--dl": ".5s" } as React.CSSProperties}>
            <span className="compare-hint" id="cmpHint">← Glissez : jour / soir →</span>
            {" "}
            <div className="shadow-shape" aria-hidden="true"></div>
            <div className="compare" id="compare" data-cursor="Glisser">
              <img src="/site/images/facade-nuit.webp" alt="Façade du restaurant Assanabel le soir, enseigne éclairée" />
              {" "}
              <img className="top" src="/site/images/facade-jour.webp" alt="Façade du restaurant Assanabel en journée, rue d'Alésia" />
              {" "}
              <span className="tag j">☀ Jour</span>
              <span className="tag s">Soir ☾</span>
              {" "}
              <span className="line"></span>
              <span className="knob" aria-hidden="true">‹ ›</span>
              {" "}
              <input type="range" min="0" max="100" defaultValue="50" step="0.1" aria-label="Comparer la façade de jour et de soir" />
            </div>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          Défiler
          <i></i>
        </div>
      </section>
      <section id="histoire" data-chapter="Histoire">
        <div className="wrap histoire-grid">
          <div className="h-left">
            <p className="eyebrow rv">À propos d’Assanabel</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Une cuisine libanaise d’exception, de Paris à Abou&nbsp;Dhabi.</h2>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>
              Une table chaleureuse, un savoir-faire reçu en héritage. Depuis plus de cinquante ans, nos fondateurs le transmettent de table en table, avec la même exigence : le bon geste, le bon produit.
            </p>
            <div className="years-badge rv" style={{ "--d": "300" } as React.CSSProperties}>
              <span className="n" id="years" data-from="1988">38</span>
              {" "}
              <span className="t">
                <b>ans de tables partagées</b>
                à Paris 14, depuis 1988
              </span>
            </div>
            <div className="rv" style={{ marginTop: "2.2rem", "--d": "400" } as React.CSSProperties}>
              <Link className="link-arrow" href="/la-carte" style={{ color: "var(--bronze-deep)" }}>Découvrir la carte →</Link>
            </div>
          </div>
          <div className="tl" id="tl">
            <div className="fill" id="tlFill"></div>
            <article className="step" style={{ "--c": "var(--bronze)" } as React.CSSProperties}>
              <span className="yr">1970</span>
              {" "}
              <h3>Les premières tables</h3>
              <p>
                Héritiers d’un savoir-faire libanais, les fondateurs ouvrent leurs premiers restaurants aux Émirats arabes unis. Une même idée dès l’origine : recevoir comme on reçoit chez soi.
              </p>
            </article>
            <article className="step" style={{ "--c": "var(--olive)" } as React.CSSProperties}>
              <span className="yr">1988</span>
              {" "}
              <h3>Paris, rue d’Alésia</h3>
              <p>
                À Paris, l’histoire d’Assanabel commence. Des portions généreuses, des produits choisis avec soin auprès de grands grossistes français et internationaux : le succès est immédiat.
              </p>
              <div className="ph" data-cursor="Voir">
                <img src="/site/images/facade-jour.webp" alt="Façade d'Assanabel, rue d'Alésia" loading="lazy" />
              </div>
            </article>
            <article className="step" style={{ "--c": "var(--grenade)" } as React.CSSProperties}>
              <span className="yr">2006</span>
              {" "}
              <h3>Emirates Palace</h3>
              <p>
                Un restaurant s’installe à l’Emirates Palace Hôtel d’Abou Dhabi. La cuisine d’Assanabel y trouve l’un des plus grands écrins du Golfe.
              </p>
            </article>
            <article className="step" style={{ "--c": "var(--bronze)" } as React.CSSProperties}>
              <span className="yr">Aujourd’hui</span>
              {" "}
              <h3>Du Golfe à l’Amérique</h3>
              <p>
                Depuis Abou Dhabi, la maison a poursuivi son chemin dans les pays du Golfe, en Europe, puis en Amérique. Son cœur, lui, est resté à Alésia.
              </p>
              <p className="quote">Assanabel, c’est chez vous !</p>
              <div className="ph" data-cursor="Voir">
                <img src="/site/images/terrasse.webp" alt="La terrasse d'Assanabel" loading="lazy" style={{ objectPosition: "center 35%" }} />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="savoir-faire" className="on-dark" data-chapter="Savoir-faire" data-dark>
        <div className="wrap">
          <div className="sf-head">
            <div>
              <p className="eyebrow rv">Ce qui nous guide</p>
              <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>
                Trois engagements,
                <br />
                une seule table.
              </h2>
            </div>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>Trois engagements que l’on goûte avant de les lire.</p>
          </div>
          <div className="cards">
            <article className="card rv rv-s" style={{ "--c": "var(--champagne)", "--d": "0" } as React.CSSProperties} data-tilt>
              <img src="/site/images/mezzeh-dessus.webp" alt="" decoding="async" />
              {" "}
              <h3>Générosité</h3>
              <span className="bar"></span>
              {" "}
              <p>
                Des portions généreuses, posées au centre de la table pour être partagées, comme à la maison.
              </p>
            </article>
            <article className="card rv rv-s" style={{ "--c": "#b5c4aa", "--d": "150" } as React.CSSProperties} data-tilt>
              <img src="/site/images/salade-taboule.webp" alt="" decoding="async" />
              {" "}
              <h3>Qualité</h3>
              <span className="bar"></span>
              {" "}
              <p>
                Herbes fraîches, épices, viandes et poissons choisis avec exigence auprès de grands grossistes français et internationaux. Le geste fait le reste.
              </p>
            </article>
            <article className="card rv rv-s" style={{ "--c": "#e0a3aa", "--d": "300" } as React.CSSProperties} data-tilt>
              <img src="/site/images/salle-rose.webp" alt="" decoding="async" />
              {" "}
              <h3>Hospitalité</h3>
              <span className="bar"></span>
              {" "}
              <p>
                Un accueil sincère, une salle où l’on prend son temps. Ici, on ne vient pas seulement dîner : on est reçu. Assanabel, c’est chez vous !
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="galerie" data-chapter="Galerie">
        <div className="wrap">
          <div className="gal-head">
            <div>
              <p className="eyebrow rv">La maison en images</p>
              <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>
                Entrez,
                <br />
                installez-vous.
              </h2>
            </div>
            <div className="tabs rv" style={{ "--d": "200" } as React.CSSProperties} role="tablist" aria-label="Catégories de photos" id="tabs">
              <button role="tab" aria-selected="true" data-set="salle">La salle</button>
              {" "}
              <button role="tab" aria-selected="false" data-set="table">À table</button>
              {" "}
              <button role="tab" aria-selected="false" data-set="traiteur">Traiteur</button>
            </div>
          </div>
          <div className="gal" id="gal" data-cursor="Ouvrir" role="group" aria-label="Galerie photo — flèches gauche/droite pour naviguer"></div>
          <div className="gal-meta">
            <div className="arrows">
              <button type="button" id="galPrev" aria-label="Photo précédente">←</button>
              <button type="button" id="galNext" aria-label="Photo suivante">→</button>
            </div>
          </div>
        </div>
      </section>
      <section id="nostalgie" data-chapter="Nostalgie">
        <div className="wrap nos-grid">
          <div className="nos-copy">
            <p className="eyebrow rv">Souvenirs de la maison</p>
            <h2 className="nos-title rv" style={{ "--d": "100" } as React.CSSProperties}>Nostalgie</h2>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>
              Tables dressées, soirs d’été en terrasse, lumière de la rue d’Alésia : quelques images de la maison, que l’on feuillette comme des souvenirs.
            </p>
            <div className="nos-count rv" style={{ "--d": "300" } as React.CSSProperties}>
              <span>Cliquez sur la pile pour feuilleter</span>
            </div>
          </div>
          <div className="deck rv rv-s" id="deck" tabIndex={0} role="button" aria-label="Photo suivante" data-cursor="Suivante" style={{ "--d": "150" } as React.CSSProperties}>
            <span className="deck-tip">Cliquez ↻</span>
          </div>
        </div>
      </section>
      <section id="recevoir" className="on-dark" data-chapter="Recevoir" data-dark>
        <div className="wrap">
          <div className="rec-head">
            <p className="eyebrow rv">Recevoir chez Assanabel</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Chez nous, ou chez vous.</h2>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>
              Une occasion à célébrer : nous ouvrons les portes de la maison, ou nous portons le Liban jusqu’à vous.
            </p>
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
                Un dîner d’entreprise, un anniversaire, un mariage intimiste : la maison vous est ouverte, au cœur du 14
                <sup>e</sup>
                , pour une soirée qui n’appartient qu’à vous.
              </p>
              <ul>
                <li>Dîners</li>
                <li>Séminaires</li>
                <li>Réceptions familiales</li>
              </ul>
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
                Plateaux-repas, buffets, cocktails, pièces à partager : le goût du Liban, dressé avec soin sur le lieu de votre réception. Pour les particuliers comme pour les entreprises, avec des menus adaptés aux allergies et aux régimes.
              </p>
              <ul>
                <li>Plateaux-repas</li>
                <li>Buffets</li>
                <li>Cocktails</li>
                <li>Livraison 7j/7</li>
              </ul>
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
      <section id="insta">
        <div className="wrap">
          <div className="ig-head">
            <div>
              <p className="eyebrow rv">Au quotidien</p>
              <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Retrouvez-nous sur Instagram</h2>
            </div>
            {" "}
            <span className="btn-wrap rv">
              <a className="btn compact" href="https://www.instagram.com/" target="_blank" rel="noopener">Suivre Assanabel</a>
            </span>
          </div>
          <div className="ig rv" data-ig></div>
        </div>
      </section>
    </MaisonPage>
  );
}
