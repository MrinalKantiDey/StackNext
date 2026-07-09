/**
 * UI translation strings
 *
 * Add a key here once, then translate it for every supported locale.
 * Missing translations fall back to the default-locale string at render
 * time via `useTranslations()` in `src/i18n/utils.ts`.
 */

import { defaultLocale } from './config';

export const ui = {
  en: {
    'nav.about':       'Who We Are',
    'nav.services':    'Services',
    'nav.work':        'Work',
    'nav.insights':    'Insights',
    'nav.contact':     'Get in Touch',
    'cta.startProject':'Start a project',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'Language',
    'switcher.aria':   'Change language',
  },
  ru: {
    'nav.about':       'О нас',
    'nav.services':    'Услуги',
    'nav.work':        'Работы',
    'nav.insights':    'Блог',
    'nav.contact':     'Связаться',
    'cta.startProject':'Начать проект',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'Язык',
    'switcher.aria':   'Сменить язык',
  },
  es: {
    'nav.about':       'Quiénes somos',
    'nav.services':    'Servicios',
    'nav.work':        'Proyectos',
    'nav.insights':    'Blog',
    'nav.contact':     'Contacto',
    'cta.startProject':'Iniciar un proyecto',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'Idioma',
    'switcher.aria':   'Cambiar idioma',
  },
  it: {
    'nav.about':       'Chi siamo',
    'nav.services':    'Servizi',
    'nav.work':        'Progetti',
    'nav.insights':    'Blog',
    'nav.contact':     'Contatti',
    'cta.startProject':'Avvia un progetto',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'Lingua',
    'switcher.aria':   'Cambia lingua',
  },
  de: {
    'nav.about':       'Über uns',
    'nav.services':    'Leistungen',
    'nav.work':        'Projekte',
    'nav.insights':    'Blog',
    'nav.contact':     'Kontakt',
    'cta.startProject':'Projekt starten',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'Sprache',
    'switcher.aria':   'Sprache wechseln',
  },
  fr: {
    'nav.about':       'Qui sommes-nous',
    'nav.services':    'Services',
    'nav.work':        'Projets',
    'nav.insights':    'Blog',
    'nav.contact':     'Contact',
    'cta.startProject':'Démarrer un projet',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'Langue',
    'switcher.aria':   'Changer de langue',
  },
  hi: {
    'nav.about':       'हमारे बारे में',
    'nav.services':    'सेवाएँ',
    'nav.work':        'काम',
    'nav.insights':    'ब्लॉग',
    'nav.contact':     'संपर्क करें',
    'cta.startProject':'प्रोजेक्ट शुरू करें',
    'cta.astroRocket': 'Astro Rocket',
    'switcher.label':  'भाषा',
    'switcher.aria':   'भाषा बदलें',
  },
} as const satisfies Record<string, Record<string, string>>;

export type Locale = keyof typeof ui;
export type UIKey = keyof typeof ui[typeof defaultLocale];
