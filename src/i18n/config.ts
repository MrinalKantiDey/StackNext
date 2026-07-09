/**
 * i18n locale configuration
 *
 * Single source of truth for the supported languages. Mirrored in
 * astro.config.mjs (codes + defaultLocale) — keep these in sync if you
 * add or remove a locale.
 */

export interface LocaleInfo {
  code: string;
  label: string;
  nativeLabel: string;
  flag: string;
  dir?: 'ltr' | 'rtl';
}

export const defaultLocale = 'en' as const;

export const locales: LocaleInfo[] = [
  { code: 'en', label: 'English',  nativeLabel: 'English',  flag: '🇬🇧' },
  { code: 'ru', label: 'Russian',  nativeLabel: 'Русский',  flag: '🇷🇺' },
  { code: 'es', label: 'Spanish',  nativeLabel: 'Español',  flag: '🇪🇸' },
  { code: 'it', label: 'Italian',  nativeLabel: 'Italiano', flag: '🇮🇹' },
  { code: 'de', label: 'German',   nativeLabel: 'Deutsch',  flag: '🇩🇪' },
  { code: 'fr', label: 'French',   nativeLabel: 'Français', flag: '🇫🇷' },
];

export const localeCodes = locales.map((l) => l.code);

export function getLocaleInfo(code: string | undefined): LocaleInfo {
  return locales.find((l) => l.code === code) ?? locales[0];
}
