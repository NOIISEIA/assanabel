import type { Metadata } from "next";
import Link from "next/link";
import { MaisonPage } from "@/components/maison/MaisonPage";

export const metadata: Metadata = {
  title: "Traiteur libanais à Paris | Assanabel",
  description: "Traiteur libanais à Paris et en Île-de-France : plateaux-repas, buffets, cocktails, service à table. Plus de 25 ans d'expérience dans l'événementiel. Demandez votre devis.",
  alternates: { canonical: "/traiteur" },
};

/** Page issue de la maquette site-html/src/traiteur.html (markup identique, styles dans src/styles/maison-pages.css). */
export default function Page() {
  return (
    <MaisonPage page="traiteur" className="page-traiteur tp">
      <section id="intro" className="on-dark" data-chapter="Intro" data-dark>
        <div className="bg" style={{ backgroundImage: "url(images/buffet-festif.webp)" }} aria-hidden="true"></div>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow fade-in" style={{ "--dl": ".2s" } as React.CSSProperties}>Traiteur · Hors les murs</p>
            <h1>
              <span className="l">
                <span>Traiteur</span>
              </span>
            </h1>
            <p className="lead fade-in" style={{ "--dl": ".7s" } as React.CSSProperties}>Marquer le coup, où que vous receviez.</p>
            <p className="sub fade-in" style={{ "--dl": ".9s" } as React.CSSProperties}>
              Du cocktail classique à l’événement le plus sophistiqué, Assanabel apporte le goût du Liban sur le lieu de votre réception, avec une touche orientale que l’on n’oublie pas.
            </p>
            <div className="hero-ctas fade-in" style={{ "--dl": "1.1s" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" href="/devis?type=traiteur">Demander un devis</Link>
              </span>
              {" "}
              <Link className="link-arrow" href="/privatisation">Recevoir chez nous →</Link>
            </div>
          </div>
          <div className="arch fade-in" style={{ "--dl": ".5s" } as React.CSSProperties}>
            <div className="sh" aria-hidden="true"></div>
            <div className="im">
              <img src="/site/images/cocktail.webp" alt="Cocktail Assanabel : pièces à partager et verrines" />
            </div>
            <p className="tag">
              Livraison
              <br />
              Île-de-France
            </p>
          </div>
        </div>
        <div className="scroll-hint" aria-hidden="true">
          Défiler
          <i></i>
        </div>
      </section>
      <section className="sec" id="essentiel">
        <div className="wrap">
          <div className="facts">
            <div className="fact rv">
              <b>Plus de 25 ans</b>
              <p>
                d’expérience dans l’événementiel, et une équipe qui adapte chaque prestation à votre projet.
              </p>
            </div>
            <div className="fact rv" style={{ "--d": "120" } as React.CSSProperties}>
              <b>Jusqu’à 2&nbsp;000 convives</b>
              <p>
                Spécialistes des grands volumes, nous assurons la logistique de vos réceptions et de vos repas.
              </p>
            </div>
            <div className="fact rv" style={{ "--d": "240" } as React.CSSProperties}>
              <b>Toute l’Île-de-France</b>
              <p>
                Livraison et installation, y compris pour une commande de dernière minute : livraison le jour même ou retrait à emporter.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="fsplit on-dark" id="formules" data-chapter="Formules" data-dark data-fs>
        <div className="fs-left">
          <p className="eyebrow rv">Nos formules</p>
          <h2 className="sr-only">Une prestation pour chaque occasion</h2>
          <p className="fs-lead rv" style={{ "--d": "100" } as React.CSSProperties}>Du plateau-repas au buffet de réception, chaque formule se compose avec vous.</p>
          <ul className="fs-list rv" style={{ "--d": "150" } as React.CSSProperties} role="tablist" aria-label="Nos formules" aria-orientation="vertical">
            <li className="fs-item" role="presentation">
              <button type="button" role="tab" aria-selected="false" aria-expanded="false">Plateaux-repas</button>
              <div data-fp aria-hidden="true">
                <p>
                  Déjeuners d’affaires, repas de réunion, tournages : des plateaux frais et gourmands, dressés avec soin et livrés sur votre lieu de travail.
                </p>
                <ul className="chips">
                  <li>Déjeuners d’affaires</li>
                  <li>Réunions</li>
                  <li>Tournages</li>
                </ul>
              </div>
            </li>
            <li className="fs-item" role="presentation">
              <button type="button" role="tab" aria-selected="false" aria-expanded="false">Buffets</button>
              <div data-fp aria-hidden="true">
                <p>
                  Mezzeh, grillades, plats chauds et douceurs : des buffets généreux, installés sur votre lieu de réception, pour les petits comme pour les très grands groupes.
                </p>
                <ul className="chips">
                  <li>Réceptions</li>
                  <li>Inaugurations</li>
                  <li>Fêtes d’équipe</li>
                </ul>
              </div>
            </li>
            <li className="fs-item" role="presentation">
              <button type="button" role="tab" aria-selected="false" aria-expanded="false">
                Cocktails{" "}&amp;{" "}finger food
              </button>
              <div data-fp aria-hidden="true">
                <p>
                  Pièces à partager, verrines, tartelettes et mignardises : un cocktail debout, raffiné, qui laisse la conversation au premier plan.
                </p>
                <ul className="chips">
                  <li>Verrines</li>
                  <li>Mezzeh chauds et froids</li>
                  <li>Mignardises</li>
                </ul>
              </div>
            </li>
            <li className="fs-item" role="presentation">
              <button type="button" role="tab" aria-selected="false" aria-expanded="false">Service à table</button>
              <div data-fp aria-hidden="true">
                <p>
                  Pour un repas assis, nos chefs composent le menu et notre équipe en assure le service, de l’installation au dessert.
                </p>
                <ul className="chips">
                  <li>Menus sur mesure</li>
                  <li>Installation</li>
                  <li>Personnel de service en option</li>
                </ul>
              </div>
            </li>
            <li className="fs-item" role="presentation">
              <button type="button" role="tab" aria-selected="false" aria-expanded="false">
                Livraison{" "}&amp;{" "}logistique
              </button>
              <div data-fp aria-hidden="true">
                <p>
                  Livraison dans toute l’Île-de-France, 7 jours sur 7 selon vos besoins. Le conditionnement s’adapte au format : buffet, plateau-repas ou finger food. Pour une urgence, livraison le jour même ou retrait à emporter.
                </p>
                <ul className="chips">
                  <li>Île-de-France</li>
                  <li>7j/7</li>
                  <li>Dernière minute</li>
                </ul>
              </div>
            </li>
          </ul>
          <p className="fs-note rv" style={{ "--d": "250" } as React.CSSProperties}>
            Allergies, régimes, restrictions alimentaires : tous nos menus s’adaptent. Installation et personnel de service font l’objet de frais supplémentaires.
          </p>
        </div>
        <div className="fs-right">
          <img data-fi src="/site/images/brochettes-poulet.webp" alt="Plateaux-repas : brochettes de poulet" decoding="async" />
          <img data-fi src="/site/images/buffet-festif.webp" alt="Buffet de réception" decoding="async" />
          <img data-fi src="/site/images/cocktail.webp" alt="Cocktail et pièces à partager" decoding="async" />
          <img data-fi src="/site/images/table-mezzeh.webp" alt="Table de mezzeh" decoding="async" />
          <img data-fi src="/site/images/plateau-chaud.webp" alt="Plateau chaud" decoding="async" />
        </div>
      </section>
      <section className="sec" id="pour-qui" data-chapter="Pour qui">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Pour qui</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Tous les moments où l’on se réunit</h2>
          </div>
          <div className="who">
            <div className="rv" style={{ "--d": "150" } as React.CSSProperties}>
              <div className="utabs" data-tabs role="tablist" aria-label="Type de client">
                <button role="tab" aria-selected="true" data-tab="pro">Entreprises{" "}&amp;{" "}institutions</button>
                {" "}
                <button role="tab" aria-selected="false" data-tab="prive">Particuliers</button>
                {" "}
                <i className="ink" aria-hidden="true"></i>
              </div>
              <div className="tpanel on" data-panel="pro">
                <ul className="ticks">
                  <li>Plateaux-repas et déjeuners d’affaires</li>
                  <li>Cocktails, buffets, séminaires et congrès</li>
                  <li>Inaugurations, lancements de produits et salons</li>
                  <li>Laboratoires pharmaceutiques et agences</li>
                  <li>Tournages et prestations pour l’image</li>
                  <li>Réceptions institutionnelles</li>
                  <li>Repas d’équipe de fin d’année</li>
                </ul>
                <p className="note">Pour les institutions et administrations, nous travaillons avec Chorus.</p>
              </div>
              <div className="tpanel" data-panel="prive">
                <ul className="ticks">
                  <li>Mariages, fiançailles et anniversaires</li>
                  <li>Buffets et cocktails pour vos fêtes</li>
                  <li>Réceptions et grandes réunions de famille</li>
                  <li>Noël, Nouvel An et repas de fête</li>
                  <li>Menus et formules sur mesure</li>
                </ul>
              </div>
            </div>
            <div className="arch rv rv-s" style={{ "--d": "200" } as React.CSSProperties}>
              <div className="sh" aria-hidden="true"></div>
              <div className="im">
                <img data-for="pro" className="on" src="/site/images/buffet-entreprise.webp" alt="Buffet d'entreprise" loading="lazy" />
                {" "}
                <img data-for="prive" src="/site/images/buffet-jardin.webp" alt="Buffet dressé au jardin pour une fête privée" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec tint" id="references">
        <div className="wrap">
          <div className="sec-head" style={{ marginBottom: "2.4rem" }}>
            <p className="eyebrow rv">Ils nous font confiance</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Des maisons exigeantes nous confient leurs réceptions</h2>
          </div>
          <div className="logos rv" style={{ "--d": "150" } as React.CSSProperties}>
            <div>
              <img src="/site/logos/bouygues.webp" alt="Bouygues Telecom" loading="lazy" />
            </div>
            <div>
              <img src="/site/logos/cnrs.webp" alt="CNRS" loading="lazy" />
            </div>
            <div>
              <img src="/site/logos/unesco.webp" alt="UNESCO" loading="lazy" />
            </div>
            <div>
              <img src="/site/logos/natixis.webp" alt="Natixis" loading="lazy" />
            </div>
            <div>
              <img src="/site/logos/pfizer.webp" alt="Pfizer" loading="lazy" />
            </div>
            <div>
              <img src="/site/logos/sciencespo.webp" alt="Sciences Po" loading="lazy" />
            </div>
          </div>
          <div className="logos-foot rv">
            <p>Institutions, entreprises, hôpitaux et grandes écoles.</p>
            <Link className="link-arrow" href="/ils-nous-font-confiance" style={{ color: "var(--bronze-deep)" }}>Toutes nos références →</Link>
          </div>
        </div>
      </section>
      <section className="sec" id="galerie" data-chapter="Galerie" style={{ paddingBottom: 0 }}>
        <div className="wrap rail-head">
          <div className="sec-head" style={{ marginBottom: "2rem" }}>
            <p className="eyebrow rv">En images</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Marquer le coup</h2>
            <p className="lead rv" style={{ "--d": "200" } as React.CSSProperties}>Quelques tables, quelques réceptions.</p>
          </div>
          <div className="rail-ctrl">
            <button type="button" data-prev aria-label="Photos précédentes">←</button>
            <button type="button" data-next aria-label="Photos suivantes">→</button>
          </div>
        </div>
        <div data-rail-wrap>
          <div className="rail" data-rail data-cursor="Glisser" tabIndex={0} aria-label="Galerie de réceptions">
            <figure>
              <img src="/site/images/buffet-festif.webp" alt="Buffet festif" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/cocktail.webp" alt="Cocktail et pièces à partager" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/falafels.webp" alt="Falafels dorés et sauce" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/mignardises.webp" alt="Verrines et mignardises" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/tartelettes.webp" alt="Tartelettes pour apéritif" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/brochettes-tomates.webp" alt="Brochettes de tomates cerises et menthe" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/buffet-entreprise.webp" alt="Buffet d'entreprise" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/buffet-jardin.webp" alt="Buffet au jardin" loading="lazy" />
            </figure>
            <figure>
              <img src="/site/images/baklawa.webp" alt="Pâtisseries libanaises" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>
      <section className="sec tint" id="deroule">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Comment ça se passe</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>De votre demande au jour J</h2>
          </div>
          <div className="proc rv" style={{ "--d": "150" } as React.CSSProperties}>
            <div className="fill"></div>
            <div className="pstep">
              <h3>Votre demande</h3>
              <p>Dites-nous l’occasion, le lieu, le nombre de convives et vos contraintes alimentaires.</p>
            </div>
            <div className="pstep">
              <h3>Notre proposition</h3>
              <p>Nous composons un menu et un devis sur mesure, adaptés au format de votre réception.</p>
            </div>
            <div className="pstep">
              <h3>Le jour J</h3>
              <p>
                Livraison, installation et, si vous le souhaitez, personnel de service. Vous recevez, nous veillons au reste.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec" id="faq" data-chapter="Questions">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow rv">Questions fréquentes</p>
            <h2 className="rv" style={{ "--d": "100" } as React.CSSProperties}>Avant de nous écrire</h2>
          </div>
          <div className="faq-list rv" style={{ "--d": "150" } as React.CSSProperties}>
            <details className="faq" open>
              <summary>
                Pouvez-vous adapter les menus aux allergies et aux régimes ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Oui. La cuisine libanaise s’y prête naturellement et nos menus s’adaptent aux goûts, aux allergies et aux restrictions alimentaires de vos invités. Précisez-les dans votre demande.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Livrez-vous en dehors de Paris ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Nous livrons dans toute l’Île-de-France. La livraison et les prestations peuvent être proposées 7 jours sur 7, selon vos besoins et le type d’événement.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Acceptez-vous les commandes de dernière minute ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Oui, pour vos besoins urgents : livraison le jour même ou retrait à emporter, selon les disponibilités.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                Quel volume pouvez-vous traiter ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Nous sommes spécialistes des grands volumes et assurons la logistique de réceptions jusqu’à plus de 2
                  &nbsp;
                  000 personnes.
                </p>
              </div>
            </details>
            <details className="faq">
              <summary>
                L’installation et le service sont-ils inclus ?
                <i></i>
              </summary>
              <div className="ans">
                <p>
                  Ils sont proposés en option : installation et personnel de service font l’objet de frais supplémentaires, précisés dans votre devis.
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
              Un formulaire en quatre étapes pour nous dire l’essentiel. Nous revenons vers vous avec une proposition sur mesure.
            </p>
            <div className="devis-cta rv" style={{ "--d": "300" } as React.CSSProperties}>
              <span className="btn-wrap">
                <Link className="btn" id="devisBtn" href="/devis?type=traiteur">Démarrer ma demande de devis</Link>
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
              Vous préférez recevoir chez nous ?
              {" "}
              <Link href="/privatisation">Découvrez la privatisation</Link>
              .
            </p>
          </div>
          <div className="prev rv rv-s" style={{ "--d": "200" } as React.CSSProperties} aria-label="Les étapes du formulaire">
            <small>Le formulaire, étape par étape</small>
            {" "}
            <ol>
              <li>
                <b>Votre événement</b>
                <span>Occasion, date et lieu</span>
              </li>
              <li>
                <b>Vos invités</b>
                <span>Nombre de convives et format souhaité</span>
              </li>
              <li>
                <b>Vos envies</b>
                <span>Formules, régimes et allergies</span>
              </li>
              <li>
                <b>Vos coordonnées</b>
                <span>Pour vous répondre avec une proposition</span>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </MaisonPage>
  );
}
