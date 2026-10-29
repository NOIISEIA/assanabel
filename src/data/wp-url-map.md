# URLs legacy WordPress → Next.js

Conserver **les mêmes chemins** que l’ancien site `restaurant-assanabel.com` pour SEO et liens entrants.

| Ancien slug WP | Titre | Statut cible |
|---|---|---|
| `/` | Accueil | OK |
| `/la-carte/` | La carte | **Page créée** |
| `/traiteur/` | Traiteur | À créer |
| `/privatisation/` | Privatisation | À créer |
| `/reservation/` | Réservation | Redirige → `/devis` (parcours événement) |
| `/commande-en-ligne/` | Commande en ligne | Lien externe (hors périmètre) ou proxy |
| `/nos-evenements/` | Nos évènements | À créer |
| `/a-propos/` | À propos | OK (ex `/a-propos-2`, redirect 301) |
| `/ils-nous-font-confiance/` | Ils nous font confiance | OK (ex contenu `/a-propos` app) |
| `/a-propos-2/` | (legacy) | Redirect 301 → `/a-propos` |
| `/nos-actualites/` | Nos actualités | À créer |
| `/actualites/` | Actualités | Alias / redirection possible |
| `/contact/` | Contact | À créer |
| `/mentions-legales/` | Mentions légales | À créer |
| `/boutique/` `/panier/` `/commander/` `/mon-compte/` | WooCommerce | Hors redesign marketing (à décider) |

Ne pas inventer de nouveaux slugs (`/carte`, `/evenements`, `/la-maison`) sans redirection 301 depuis l’URL legacy.
