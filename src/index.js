import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'normalize.css';
import Home from '../src/pages/Home/home';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en.json'; // Chemin vers le fichier en.json
import frTranslation from './locales/fr.json'; // Chemin vers le fichier fr.json

i18n
  .use(initReactI18next)
  .init({
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la traduction n'est pas disponible
    supportedLngs: ['fr', 'en'], // Langues prises en charge
    resources: {
      en: { translation: enTranslation }, // Charger les traductions pour l'anglais
      fr: { translation: frTranslation } // Charger les traductions pour le français
    },
    react: {
      useSuspense: false // Désactivez si vous ne voulez pas utiliser Suspense
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename={'/P8_Portfolio'}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </React.StrictMode>
);