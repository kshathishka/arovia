import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { en } from './locales/en';
import { hi } from './locales/hi';
import { te } from './locales/te';
import { bn } from './locales/bn';
import { mr } from './locales/mr';
import { ta } from './locales/ta';
import { gu } from './locales/gu';
import { kn } from './locales/kn';
import { ml } from './locales/ml';
import { pa } from './locales/pa';
import { ur } from './locales/ur';
import { or } from './locales/or';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en, hi, te, bn, mr, ta, gu, kn, ml, pa, ur, or
        },
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;
