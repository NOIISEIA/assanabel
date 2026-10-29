import type { Metadata } from "next";
import Link from "next/link";
import { MaisonPage } from "@/components/maison/MaisonPage";

import { pageMetadata, SEO } from "@/lib/seo";

export const metadata: Metadata = pageMetadata(SEO.privatisation, {
  canonical: "/privatisation",
});

/** Page issue de la maquette site-html/src/privatisation.html (markup identique, styles dans src/styles/maison-pages.css). */
export default function Page() {
  return (
    <MaisonPage page="privatisation" className="page-privatisation tp">
      <section id="intro" className="on-dark full" data-chapter="Intro" data-dark>
        <div className="photo" aria-hidden="true">
          <img src="/site/images/salle-panorama.webp" alt="" />
        </div>
        <div className="wrap" style={{ position: "relative", zIndex: 2, width: "100%" }}>
          <div className="hero-copy">
            <p className="eyebrow fade-in" style={{ "--dl": ".2s" } as React.CSSProperties}>Privatisation · Paris 14</p>
            <h1>
              <span className="l">
                <span>Privatisation</span>
              </span>
            </h1>
            <p className="lead fade-in" style={{ "--dl": ".7s" } as React.CSSProperties}>Notre restaurant s’adapte à vos envies.</p>
            <p className="sub fade-in" style={{ "--dl": ".9s" } as React.CSSProperties}>
              Une salle, la terrasse ou toute la maison : nous composons l’écrin de votre événement, du déjeuner d’entreprise au banquet de mariage.
            </p>
            <div className="hero-ctas fade-in" style={{ "--dl": "1.1s" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" href="/devis?type=privatisation">Demander un devis</Link>
              </span>
              {" "}
              <Link className="link-arrow" href="/traiteur">Faire venir le Liban chez vous →</Link>
            </div>
          </div>
        </div>
        <div className="strip-facts fade-in" style={{ "--dl": "1.3s", width: "100%" } as React.CSSProperties}>
          <div className="wrap">
            <div>Midi ou soir</div>
            <div>Privatisation partielle ou complète</div>
            <div>Salle équipée d’un écran de projection</div>
          </div>
        </div>
      </section>
      <section className="sec" id="espaces" data-chapter="Espaces">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Nos espaces</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Trois espaces, une même attention</h2>
            <p className="lead rv" style={{ "--d": "200" } as React.CSSProperties}>Choisissez l’écrin qui correspond à votre événement.</p>
          </div>
          <div className="spaces">
            <article className="space rv" style={{ "--d": "0" } as React.CSSProperties}>
              <div className="ph">
                <img src="/site/images/salle-rose.webp" alt="Le restaurant Assanabel, tables dressées" decoding="async" />
              </div>
              <div className="tx">
                <h3>Le restaurant</h3>
                <p>
                  Disposez de toute la maison, sans limites. Banquet de mariage, baptême, conférence, séminaire : nos chefs adaptent les menus et les présentations à votre événement, avec un service attentionné.
                </p>
              </div>
            </article>
            <article className="space rv" style={{ "--d": "150" } as React.CSSProperties}>
              <div className="ph">
                <img src="/site/images/table-dressee.webp" alt="Table dressée dans la salle privée" decoding="async" style={{ objectPosition: "center 60%" }} />
              </div>
              <div className="tx">
                <h3>La salle</h3>
                <p>
                  Un espace privé avec un serveur dédié, pour une soirée entre amis, en famille ou entre professionnels. Une ambiance chaleureuse et festive, autour des tables.
                </p>
              </div>
            </article>
            <article className="space rv" style={{ "--d": "300" } as React.CSSProperties}>
              <div className="ph">
                <img src="/site/images/terrasse.webp" alt="La terrasse d'Assanabel" decoding="async" />
              </div>
              <div className="tx">
                <h3>La terrasse</h3>
                <p>
                  Un lieu chic et chaleureux, où la cuisine libanaise se savoure en plein air, dans la douceur des beaux jours.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="sec tint" id="formats" data-chapter="Formats">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Formats</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Pour chaque événement, un format</h2>
          </div>
          <div className="formats rv" style={{ "--d": "150" } as React.CSSProperties}>
            <div className="fmt">
              <h3>Repas assis</h3>
              <p>
                Un menu composé avec nos chefs, servi à table : déjeuners d’affaires, dîners, mariages et repas de famille.
              </p>
            </div>
            <div className="fmt">
              <h3>Buffet cocktail</h3>
              <p>
                Pièces à partager, verrines et mezzeh servis debout : idéal pour un cocktail, un pot de départ ou un lancement.
              </p>
            </div>
            <div className="fmt">
              <h3>Réunion{" "}&amp;{" "}séminaire</h3>
              <p>
                Une salle dédiée, équipée d’un écran de projection, au calme et en toute confidentialité, pour vos réunions et présentations de produits.
              </p>
            </div>
            <div className="fmt">
              <h3>Dégustation de vins</h3>
              <p>
                Une dégustation déambulatoire de vins libanais et français, animée par un œnologue, pour vos soirées partenaires et vos événements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="pour-qui" data-chapter="Occasions">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Occasions</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Ce que nous accueillons</h2>
          </div>
          <div className="who">
            <div className="rv" style={{ "--d": "150" } as React.CSSProperties}>
              <div className="utabs" data-tabs role="tablist" aria-label="Type d'événement">
                <button role="tab" aria-selected="true" data-tab="pro">Entreprises{" "}&amp;{" "}institutions</button>
                {" "}
                <button role="tab" aria-selected="false" data-tab="prive">Particuliers</button>
                {" "}
                <i className="ink" aria-hidden="true"></i>
              </div>
              <div className="tpanel on" data-panel="pro">
                <ul className="ticks">
                  <li>Séminaires, réunions et repas d’affaires</li>
                  <li>Présentations et lancements de produits</li>
                  <li>Laboratoires pharmaceutiques et secteur médical</li>
                  <li>Groupes de voyage internationaux</li>
                  <li>Dégustations de vins et soirées partenaires</li>
                  <li>Cocktails, fêtes d’entreprise et pots de départ</li>
                </ul>
              </div>
              <div className="tpanel" data-panel="prive">
                <ul className="ticks">
                  <li>Anniversaires, fiançailles et mariages</li>
                  <li>Baptêmes, célébrations et réunions de famille</li>
                  <li>Déjeuners, dîners et repas de groupe</li>
                  <li>Noël, Nouvel An et repas de fin d’année</li>
                  <li>Soirées et réceptions privatisées</li>
                </ul>
              </div>
            </div>
            <div className="arch rv rv-s" style={{ "--d": "200" } as React.CSSProperties}>
              <div className="sh" aria-hidden="true"></div>
              <div className="im">
                <img data-for="pro" className="on" src="/site/images/salle-panorama.webp" alt="La salle du restaurant" loading="lazy" style={{ objectPosition: "30% center" }} />
                {" "}
                <img data-for="prive" src="/site/images/terrasse-fleurs.webp" alt="Terrasse fleurie d'Assanabel" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="split-img dark" id="groupes">
        <div className="si-img">
          <img src="/site/images/facade-nuit.webp" alt="La façade d'Assanabel le soir" decoding="async" />
        </div>
        <div className="si-txt">
          <p className="eyebrow rv">Groupes{" "}&amp;{" "}voyages</p>
          <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Des groupes venus du monde entier</h2>
          <p className="lead2 rv" style={{ "--d": "200" } as React.CSSProperties}>
            Nous accueillons des groupes de voyage internationaux, au déjeuner comme au dîner, avec des menus et un service adaptés à chaque clientèle.
          </p>
          <div className="langs rv" style={{ "--d": "300" } as React.CSSProperties}>
            <span>Anglophone</span>
            <span>Inde</span>
            <span>Pays du Golfe</span>
            <span>Europe</span>
          </div>
        </div>
      </section>
      <section className="sec" id="adresse" data-chapter="Adresse">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">L’adresse</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>
              Au cœur du 14
              <sup style={{ fontSize: ".5em" }}>e</sup>
              {" "}
              arrondissement
            </h2>
            <p className="lead rv" style={{ "--d": "200" } as React.CSSProperties}>
              6 rue d’Alésia, Paris. Des lieux très fréquentés, faciles d’accès, à quelques minutes à pied.
            </p>
          </div>
          <div className="access rv" style={{ "--d": "150" } as React.CSSProperties}>
            <div>
              <b>Parc Montsouris</b>
              <span>≈ 5 min à pied</span>
            </div>
            <div>
              <b>Hôtel Marriott, près de Denfert-Rochereau</b>
              <span>≈ 6 min à pied</span>
            </div>
            <div>
              <b>Place d’Alésia et métro ligne 4</b>
              <span>≈ 9 min à pied</span>
            </div>
            <div>
              <b>Denfert-Rochereau · lignes 4, 6 et RER B</b>
              <span>≈ 9 min à pied</span>
            </div>
            <div>
              <b>Catacombes de Paris</b>
              <span>≈ 10 min à pied</span>
            </div>
            <div>
              <b>Bus 62, arrêt René Coty</b>
              <span>À proximité</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec tint" id="faq" data-chapter="Questions">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Questions fréquentes</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Avant de nous écrire</h2>
          </div>
          <div className="faq-list rv" style={{ "--d": "150" } as React.CSSProperties}>
            <details className="faq" open>
              <summary>
                Peut-on privatiser seulement une partie du restaurant ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Oui. Vous pouvez privatiser la salle, la terrasse ou l’ensemble du restaurant, selon la taille de votre groupe et le format de votre événement.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Disposez-vous d’une salle pour les réunions et les présentations ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Oui, une salle dédiée, équipée d’un écran de projection, offre le calme et la confidentialité nécessaires à vos réunions.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Peut-on organiser une dégustation de vins ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Oui. Nous proposons des dégustations déambulatoires de vins libanais et français, animées par un œnologue.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Accueillez-vous les groupes le midi comme le soir ?
                <i></i>
              </summary>
              <div className="ans">
                <p>Oui. Nos espaces modulables accueillent groupes et événements au déjeuner comme au dîner.</p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Les menus peuvent-ils être adaptés ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Nos chefs adaptent les menus et les présentations à votre événement, ainsi qu’aux goûts, aux allergies et aux régimes de vos invités.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Comment se déroule l’organisation ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Vous remplissez le formulaire de devis ; nous vous rappelons pour échanger sur votre projet, puis nous vous envoyons une proposition adaptée.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
      <section id="devis" className="on-dark" data-chapter="Devis" data-dark>
        <div className="wrap devis-grid">
          <div>
            <p className="eyebrow rv">Votre devis</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Parlons de votre événement</h2>
            <p className="lead2 rv" style={{ "--d": "200" } as React.CSSProperties}>
              Un formulaire en quatre étapes pour nous dire l’essentiel. Nous vous rappelons pour échanger sur votre projet, puis nous vous envoyons une proposition.
            </p>
            <div className="rv" style={{ "--d": "250" } as React.CSSProperties}>
              <p className="pick-lab">Quel espace vous intéresse ?</p>
              <div className="pick" data-pick role="group" aria-label="Espace souhaité">
                <button type="button" aria-pressed="true" data-v="">Pas encore décidé</button>
                {" "}
                <button type="button" aria-pressed="false" data-v="restaurant">Le restaurant</button>
                {" "}
                <button type="button" aria-pressed="false" data-v="salle">La salle</button>
                {" "}
                <button type="button" aria-pressed="false" data-v="terrasse">La terrasse</button>
              </div>
            </div>
            <div className="devis-cta rv" style={{ "--d": "300" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" id="devisBtn" href="/devis?type=privatisation">Démarrer ma demande de devis</Link>
              </span>
            </div>
            <p className="devis-alt rv" style={{ "--d": "350" } as React.CSSProperties}>
              Une question avant de vous lancer ?
              {" "}
              <Link href="/contact">Écrivez-nous</Link>
              {" "}
              ou appelez le
              {" "}
              <a href="tel:+33142798686">01 42 79 86 86</a>
              .
              <br />
              Vous recevez ailleurs ?
              {" "}
              <Link href="/traiteur">Découvrez notre service traiteur</Link>
              .
            </p>
          </div>
          <div className="prev rv rv-s" style={{ "--d": "200" } as React.CSSProperties} aria-label="Les étapes du formulaire">
            <small>Le formulaire, étape par étape</small>
            {" "}
            <ol>
              <li>
                <b>Votre événement</b>
                <span>Occasion, date, midi ou soir</span>
              </li>
              <li>
                <b>Votre espace</b>
                <span>Restaurant, salle ou terrasse, et nombre de convives</span>
              </li>
              <li>
                <b>Vos envies</b>
                <span>Format, menu, régimes et allergies</span>
              </li>
              <li>
                <b>Vos coordonnées</b>
                <span>Pour vous rappeler et vous répondre</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </MaisonPage>
  );
}
