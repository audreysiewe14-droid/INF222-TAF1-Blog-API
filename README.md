#  Blog API — INF222 EC1 TAF1

> Mon premier pas dans le backend, et pas des moindres.
Quand on commence a zero, chaque ligne de code est une victoire.

> Une API REST pour gérer un blog, construite pas à pas avec **Node.js**, **Express.js** et **SQLite**. Ce projet représente ma première plongée dans le développement backend — avec ses doutes, ses erreurs et surtout ses apprentissages. Architecture routes/controllers/models, validation des données, codes HTTP corrects. Simple, propre et fonctionnel.


**Université de Yaoundé I** • Licence 2 Informatique • INF222 EC1 • 2025/2026

---
##  API en ligne

My first API REST est déployée et accessible ici :  
 **https://inf222-taf1-blog-api.onrender.com**

##  Fonctionnalités

-  Créer, lire, modifier et supprimer des articles (CRUD complet)
-  Filtrer les articles par catégorie, auteur ou date
-  Recherche dans le titre et le contenu
-  Validation des entrées utilisateurs
-  Codes HTTP sémantiques (200, 201, 400, 404, 500)
-  Architecture propre routes / controllers / models

---

##  Technologies utilisées

| Technologie | Rôle |
|-------------|------|
| Node.js | Environnement d'exécution |
| Express.js v4 | Framework web |
| SQLite3 | Base de données locale |
| Git & GitHub | Versionnement du code |

---

##  Structure du projet
```
blog-api/
├── index.js              ← Point d'entrée — démarre le serveur
├── database.js           ← Connexion et initialisation SQLite
├── routes/
│   └── articles.js       ← Définition des URLs (endpoints)
├── controllers/
│   └── articles.js       ← Logique de traitement des requêtes
├── models/
│   └── article.js        ← Requêtes SQL vers la base de données
├── package.json
└── README.md
```

---

##  Installation et démarrage
```bash
# 1. Cloner le dépôt
git clone https://github.com/audreysiewe14-droid/INF222-TAF1-Blog-API.git

# 2. Aller dans le dossier
cd INF222-TAF1-Blog-API

# 3. Installer les dépendances
npm install

# 4. Démarrer le serveur
node index.js
```

Le serveur démarre sur → **http://localhost:3000** 

---

##  Documentation des Endpoints

###  Créer un article
```
POST /api/articles
```
**Body JSON :**
```json
{
  "titre": "Mon amour pour l'art culinaire",
  "contenu": "Faire a manger est l'un des hobbies preferes",
  "auteur": "Audrey",
  "date": "2026-03-22",
  "categorie": "Art culinaire",
  "tags": "chef ANTO,NESSY"
}
```
**Réponse (201) :**
```json
{
  "message": " Votre article a ete cree avec succes",
  "id": 1
}
```

---

###  Lire tous les articles
```
GET /api/articles
```
**Filtres optionnels :**
```
GET /api/articles?categorie=Art culinaire
GET /api/articles?auteur=Audrey
GET /api/articles?date=2026-03-22
GET /api/articles?categorie=Art culinaire&auteur=Audrey
```
**Réponse (200) :**
```json
{
  "articles": [
    {
      "id": 1,
      "titre": "Mon amour pour l'art culinaire",
      "auteur": "Audrey",
      "date": "2026-03-22",
      "categorie": "Art culinaire",
      "tags": "chef ANTO,NESSY"
    }
  ]
}
```

---

###  Lire un article par ID
```
GET /api/articles/:id
```
**Réponse (200) :** toutes les informations de l'article  
**Réponse (404) :** `{ "message": "Desole article non trouve" }`

---

###  Modifier un article
```
PUT /api/articles/:id
```
**Body JSON :**
```json
{
  "titre": "Titre mis à jour",
  "contenu": "Contenu mis à jour",
  "categorie": "Développement",
  "tags": "tag1,tag2"
}
```
**Réponse (200) :**
```json
{
  "message": "Votre article a ete modifie avec succes"
}
```

---

###  Supprimer un article
```
DELETE /api/articles/:id
```
**Réponse (200) :**
```json
{
  "message": "Votre article a ete supprime avec succes"
}
```

---

###  Rechercher des articles
```
GET /api/articles/search?query=texte
```
Recherche dans le **titre** et le **contenu** des articles.

**Réponse (200) :**
```json
{
  "articles": [...]
}
```

---

##  Codes HTTP utilisés

| Code | Signification | Quand ? |
|------|--------------|---------|
| 200 | OK | Requête réussie |
| 201 | Created | Article créé avec succès |
| 400 | Bad Request | Champs obligatoires manquants |
| 404 | Not Found | Desole article non trouve |
| 500 | Server Error | Erreur interne du serveur |

---

##  Architecture MVC
```
Requête HTTP
     ↓
  Routes        → définit QUELLE URL va OÙ
     ↓
 Controller     → traite la requête, valide les données
     ↓
   Model        → exécute les requêtes SQL
     ↓
  SQLite DB     → stocke et retourne les données
     ↓
Réponse JSON
```

---

##  Auteure

**SIEWE SANTHE AUDREY CAMILA** 
**MATRICULE: 24G2854** 
Licence 2 Informatique — Systèmes et Réseaux  
Université de Yaoundé I, Cameroun  
UE INF222 EC1 — Développement Backend  
Année académique 2025/2026

---

*Réalisé dans le cadre du TAF1 — INF222 EC1, proposé par Charles Njiosseu*