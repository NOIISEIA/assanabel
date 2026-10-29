import type { Metadata } from "next";
import Link from "next/link";
import { MaisonPage } from "@/components/maison/MaisonPage";

import { pageMetadata, SEO } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(SEO.confiance, {
  canonical: "/ils-nous-font-confiance",
});

/** Page Ils nous font confiance (ex `/a-propos`) — maquette site-html/src/a-propos.html. */
export default function Page() {
  return (
    <MaisonPage page="confiance" className="page-confiance">
      <section id="intro" className="on-dark" data-chapter="Intro" data-dark>
        <div className="bg" aria-hidden="true"></div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow fade-in" style={{ "--dl": ".2s" } as React.CSSProperties}>Références</p>
            <h1>
              <span className="l">
                <span>Ils nous</span>
              </span>
              <span className="l">
                <span>font confiance</span>
              </span>
            </h1>
            <p className="lead fade-in" style={{ "--dl": ".8s" } as React.CSSProperties}>
              Institutions, entreprises, hôpitaux, grandes écoles : ils nous confient leurs déjeuners, leurs cocktails, leurs réceptions. Une partie seulement de ceux qui se sont assis à notre table.
            </p>
            <div className="hero-ctas fade-in" style={{ "--dl": "1s" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" href="/traiteur">Demander un devis traiteur</Link>
              </span>
              {" "}
              <span className="btn-wrap clair">
                <Link className="btn" href="/privatisation">Privatiser</Link>
              </span>
            </div>
          </div>
          <div className="orbit fade-in" style={{ "--dl": ".5s" } as React.CSSProperties} id="orbit" aria-hidden="true">
            <i className="dash"></i>
            <i className="dash b"></i>
            {" "}
            <div className="orbit-ring" id="ring"></div>
            <div className="core">
              <b>ASSANABEL</b>
              <span>Depuis 1988</span>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="wrap">
            <div className="stat">
              <b data-count="38" data-from="1988">38</b>
              <span>ans à Paris 14</span>
            </div>
            <div className="stat">
              <b>
                +
                <i data-count="25" style={{ fontStyle: "normal" }}>25</i>
              </b>
              <span>ans d’événementiel</span>
            </div>
          </div>
        </div>
      </section>
      <section id="references" data-chapter="Références">
        <div className="wrap">
          <div className="ref-head">
            <div>
              <p className="eyebrow rv">Nos références</p>
              <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>
                Des maisons exigeantes,
                <br />
                une même table.
              </h2>
            </div>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>
              Institutions, entreprises, hôpitaux et grandes écoles nous confient leurs réceptions. Sélectionnez une référence pour en savoir plus.
            </p>
          </div>
          <div className="tabs2 rv" id="tabs2" role="group" aria-label="Filtrer par univers" style={{ "--d": "250" } as React.CSSProperties}>
            <i className="ink" id="ink" aria-hidden="true"></i>
          </div>
          <div className="refs">
            <div className="wall rv" id="wall" role="tablist" aria-label="Références" aria-orientation="horizontal" style={{ "--d": "100" } as React.CSSProperties}></div>
            <aside className="panel" id="panel" role="tabpanel" aria-live="polite" aria-label="Fiche de la référence sélectionnée">
              <button className="close" id="pClose" aria-label="Fermer">×</button>
              {" "}
              <div className="swapbox">
                <div className="lgo">
                  <img id="pImg" alt="" />
                </div>
                {" "}
                <small id="pCat"></small>
                {" "}
                <h3 id="pName"></h3>
                <div className="rule"></div>
                <div className="txt" id="pTxt"></div>
                <p className="invite">Votre événement mérite la même attention.</p>
                <div className="ctas">
                  <span className="btn-wrap">
                    <Link className="btn" href="/traiteur">Devis traiteur</Link>
                  </span>
                  {" "}
                  <span className="btn-wrap clair">
                    <Link className="btn" href="/privatisation">Privatiser la maison</Link>
                  </span>
                </div>
              </div>
              <div className="nav">
                <span>Parcourir les références</span>
                <div>
                  <button type="button" id="pPrev" aria-label="Référence précédente">←</button>
                  <button type="button" id="pNext" aria-label="Référence suivante">→</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="scrim" id="scrim"></div>
      <section id="formats" data-chapter="Formats">
        <div className="wrap">
          <div className="fm-head">
            <p className="eyebrow rv">Ce que nous préparons</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>
              Un format pour
              <br />
              chaque occasion.
            </h2>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>
              Du cocktail de bienvenue au dîner privatisé : même exigence, même générosité, même soin du produit.
            </p>
          </div>
          <div className="stack" id="stack">
            <article className="scard" style={{ "--i": "0", "--bg": "var(--bronze)", "--fg": "var(--ink)" } as React.CSSProperties}>
              <div className="txt">
                <h3>Cocktail d’entreprise</h3>
                <p>
                  Pièces à partager, verrines, plateaux de mezzeh, buffet cocktail : un accueil debout, généreux, dressé avec soin. Des menus adaptés aux goûts, aux allergies et aux régimes de chacun.
                </p>
                <ul>
                  <li>Verrines</li>
                  <li>Mezzeh</li>
                  <li>Buffet cocktail</li>
                  <li>Allergies{" "}&amp;{" "}régimes</li>
                </ul>
                <div>
                  <span className="btn-wrap clair">
                    <Link className="btn" href="/traiteur">Devis traiteur</Link>
                  </span>
                  <Link className="link-arrow" href="/traiteur">Voir le service traiteur →</Link>
                </div>
              </div>
              <div className="ph">
                <img src="/site/images/cocktail.webp" alt="Buffet de cocktail Assanabel" loading="lazy" />
              </div>
            </article>
            <article className="scard" style={{ "--i": "1", "--bg": "var(--olive)", "--fg": "#fff" } as React.CSSProperties}>
              <div className="txt">
                <h3>Déjeuner professionnel</h3>
                <p>
                  Plateaux-repas livrés, repas de réunion ou déjeuner à table : une cuisine libanaise fraîche et partagée, qui s’adapte à vos équipes comme à vos invités.
                </p>
                <ul>
                  <li>Plateaux-repas</li>
                  <li>Livraison</li>
                  <li>Au restaurant</li>
                </ul>
                <div>
                  <span className="btn-wrap clair">
                    <Link className="btn" href="/devis">Réserver votre événement</Link>
                  </span>
                  <Link className="link-arrow" href="/traiteur">Ou sur votre site →</Link>
                </div>
              </div>
              <div className="ph">
                <img src="/site/images/mezzeh-dessus.webp" alt="Table de mezzeh vue du dessus" loading="lazy" />
              </div>
            </article>
            <article className="scard" style={{ "--i": "2", "--bg": "var(--grenade)", "--fg": "#fff" } as React.CSSProperties}>
              <div className="txt">
                <h3>Buffet de réception</h3>
                <p>
                  Buffets et pièces à partager pour vos inaugurations, remises de prix et fêtes d’équipe, sur votre lieu de réception, avec un service à table possible.
                </p>
                <ul>
                  <li>Buffets</li>
                  <li>Service à table</li>
                  <li>Prestations à domicile</li>
                </ul>
                <div>
                  <span className="btn-wrap clair">
                    <Link className="btn" href="/traiteur">Demander un devis</Link>
                  </span>
                  <Link className="link-arrow" href="/traiteur">Voir le service traiteur →</Link>
                </div>
              </div>
              <div className="ph">
                <img src="/site/images/buffet-festif.webp" alt="Buffet de réception Assanabel" loading="lazy" style={{ objectPosition: "center 40%" }} />
              </div>
            </article>
            <article className="scard" style={{ "--i": "3", "--bg": "var(--ink)", "--fg": "var(--ivory)" } as React.CSSProperties}>
              <div className="txt">
                <h3>Dîner{" "}&amp;{" "}séminaire privatisés</h3>
                <p>
                  Pour un dîner d’entreprise ou un séminaire, la maison vous est ouverte, au cœur du 14
                  <sup>e</sup>
                  {" "}
                  : une soirée qui n’appartient qu’à vous.
                </p>
                <ul>
                  <li>Dîner d’entreprise</li>
                  <li>Séminaire</li>
                  <li>Soirée privée</li>
                </ul>
                <div>
                  <span className="btn-wrap">
                    <Link className="btn" href="/privatisation">Privatiser la maison</Link>
                  </span>
                </div>
              </div>
              <div className="ph">
                <img src="/site/images/salle-rose.webp" alt="La salle d'Assanabel" loading="lazy" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <section id="avis" data-chapter="Avis">
        <div className="wrap avis-grid">
          <div className="avis-head">
            <p className="eyebrow rv">Avis clients</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Excellent</h2>
            {" "}
            <span className="stars rv" style={{ "--d": "150" } as React.CSSProperties} role="img" aria-label="Note Google : excellent">
              ★★★★
              <span className="half">★</span>
            </span>
            {" "}
            <p className="lead rv" style={{ "--d": "200" } as React.CSSProperties}>894 avis sur Google.</p>
            {" "}
            <a className="link-arrow rv" style={{ "--d": "250", color: "var(--bronze-deep)" } as React.CSSProperties} href="https://www.google.com/maps/search/?api=1&query=Assanabel+6+rue+d%27Al%C3%A9sia+75014+Paris" target="_blank" rel="noopener noreferrer">Lire les avis →</a>
          </div>
          <div className="avis-slider rv" style={{ "--d": "150" } as React.CSSProperties} data-slider data-cursor="Glisser" aria-roledescription="carrousel" aria-label="Avis de nos clients">
            <div className="avis-stage" aria-live="polite">
              <figure className="avis on">
                <blockquote lang="en">
                  Best Lebanese food! Had a great time and the service is above excellent. Exceptional place
                </blockquote>
                <figcaption>
                  <b>Mariam Al Zamel</b>
                  <span className="s" aria-label="5 étoiles sur 5">★★★★★</span>
                  <span>Avis Google · octobre 2021</span>
                </figcaption>
              </figure>
              <figure className="avis">
                <blockquote lang="en">Very tasty food and great service! Stuff are really friendly and respectful</blockquote>
                <figcaption>
                  <b>ali Sidani</b>
                  <span className="s" aria-label="5 étoiles sur 5">★★★★★</span>
                  <span>Avis Google · octobre 2021</span>
                </figcaption>
              </figure>
              <figure className="avis">
                <blockquote lang="fr">
                  Service très long et cher pour ce que c’est
                  <br />
                  A part le prix, les plats sont bons
                </blockquote>
                <figcaption>
                  <b>Arthur Miquel</b>
                  <span className="s" aria-label="3 étoiles sur 5">
                    ★★★
                    <i>★★</i>
                  </span>
                  <span>Avis Google · septembre 2021</span>
                </figcaption>
              </figure>
              <figure className="avis">
                <blockquote lang="fr">Très bon restaurant, le cadre est chic, le service soigné et la nourriture au top</blockquote>
                <figcaption>
                  <b>Abdennour AISSOU</b>
                  <span className="s" aria-label="5 étoiles sur 5">★★★★★</span>
                  <span>Avis Google · septembre 2021</span>
                </figcaption>
              </figure>
              <figure className="avis">
                <blockquote lang="en">Great Lebanese Food,</blockquote>
                <figcaption>
                  <b>Fadi Dalati</b>
                  <span className="s" aria-label="4 étoiles sur 5">
                    ★★★★
                    <i>★</i>
                  </span>
                  <span>Avis Google · septembre 2021</span>
                </figcaption>
              </figure>
            </div>
            <div className="avis-ctrl">
              <div className="avis-bar" aria-hidden="true">
                <i></i>
              </div>
              <div className="avis-arrows">
                <button type="button" data-aprev aria-label="Avis précédent">←</button>
                <button type="button" data-anext aria-label="Avis suivant">→</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recevoir" className="on-dark" data-chapter="Votre tour" data-dark>
        <div className="wrap fin">
          <Link className="slot rv rv-s" href="/contact" data-cursor="Écrivez-nous" aria-label="Nous écrire">
            <div>
              <span>Vous&nbsp;?</span>
              <small>Votre logo ici</small>
            </div>
          </Link>
          {" "}
          <div>
            <p className="eyebrow rv">À votre tour</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Et si votre maison rejoignait le cercle&nbsp;?</h2>
            <p className="rv" style={{ "--d": "200" } as React.CSSProperties}>
              Parlez-nous de votre événement : convives, lieu, date. Nous revenons vers vous avec une proposition sur mesure, au traiteur ou à la maison.
            </p>
            <div className="ctas rv" style={{ "--d": "300" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" href="/traiteur">Demander un devis traiteur</Link>
              </span>
              {" "}
              <span className="btn-wrap clair">
                <Link className="btn" href="/privatisation">Privatiser la maison</Link>
              </span>
              {" "}
              <Link className="link-arrow" href="/contact">Nous écrire →</Link>
            </div>
          </div>
        </div>
      </section>
    </MaisonPage>
  );
}
