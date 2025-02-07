# Projet : Chat en ligne avec React Chat Engine

Ce projet est une application de chat en temps réel développée avec **ReactJS** et **React Chat Engine**. Il permet aux utilisateurs de se connecter, de rejoindre des salons de discussion, et d'échanger des messages en temps réel.

---

## Description

L'application offre une interface intuitive pour les utilisateurs afin de :
- Se connecter et s'authentifier.
- Rejoindre ou créer des salons de discussion.
- Envoyer et recevoir des messages en temps réel.

Le projet utilise **React Chat Engine** pour gérer les fonctionnalités de chat, ce qui permet de se concentrer sur le développement frontend sans avoir à gérer l'infrastructure backend.

---

## Introduction à React Chat Engine

**React Chat Engine** est une plateforme qui simplifie la création d'applications de messagerie en temps réel. Elle fournit des outils et des API pour intégrer facilement des fonctionnalités de chat dans des projets React.

### Avantages de React Chat Engine :
- Gestion des salons de discussion et des utilisateurs.
- Envoi de messages en temps réel sans configuration complexe.
- Pas besoin de gérer des websockets ou une infrastructure backend.

### Comment l'utiliser :
1. Inscrivez-vous sur le site de [React Chat Engine](https://react-chat-engine.pages.dev/).
2. Obtenez un **projectID** après la création d'un projet.
3. Intégrez ce **projectID** dans votre application React pour connecter votre application au service de messagerie.

---

## Fonctionnalités

- **Authentification des utilisateurs** : Connexion sécurisée pour accéder aux salons de discussion.
- **Création de salons de discussion** : Les utilisateurs peuvent créer ou rejoindre des salons.
- **Messagerie en temps réel** : Envoi et réception de messages instantanés.
- **Interface réactive** : Développée avec ReactJS pour une expérience utilisateur fluide.

---

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :
- **Node.js** (version 16 ou supérieure recommandée).
- **npm** ou **yarn** pour gérer les dépendances.

---

## Installation

Suivez ces étapes pour installer et exécuter le projet localement :

1. Clonez ce dépôt sur votre machine locale :
   
   git clone https://github.com/chedi-ouerghi/ChatAPP.git

2.Allez dans le répertoire du projet :

cd ChatAPP

3.Installez les dépendances avec npm ou yarn :

npm install


4.Créez un compte sur React Chat Engine et obtenez votre projectID.

5.Remplissez votre projectID dans le fichier .env :

REACT_APP_PROJECT_ID=VotreProjectID

6.Lancez l'application en mode développement :

npm start

---

## Structure du projet

ChatAPP/
├── src/
│   ├── components/
│   │   ├── CesMessage.js
│   │   ├── Chat.js
│   │   ├── Homepage.js
│   │   ├── LoginForm.js
│   │   ├── MessageForm.js
│   │   ├── MonMessage.js
│   │   └── Story.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
├── .env
├── package.json
└── README.md


