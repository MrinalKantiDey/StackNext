/**
 * i18n helper functions
 *
 * Pure functions — usable from both Astro frontmatter (server-side rendering)
 * and from inline <script> blocks (client-side navigation), although the
 * client-side switcher script keeps its own copy for isolation.
 */

import { defaultLocale, localeCodes } from './config';
import { ui, type Locale, type UIKey } from './ui';

/**
 * Pull the locale out of a URL's pathname. Returns the default locale
 * when the path has no recognised prefix.
 */
export function getLocaleFromUrl(url: URL | string): Locale {
  const pathname = typeof url === 'string' ? url : url.pathname;
  const first = pathname.split('/').filter(Boolean)[0];
  if (first && (localeCodes as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale as Locale;
}

/**
 * Returns a `t(key)` translator bound to the given locale. Falls back
 * to the default-locale string when a translation is missing.
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    const localeDict = ui[locale] ?? ui[defaultLocale as Locale];
    return (localeDict as Record<string, string>)[key]
      ?? (ui[defaultLocale as Locale] as Record<string, string>)[key]
      ?? key;
  };
}

/**
 * Convert a flag emoji (e.g. '🇬🇧') to its Twemoji SVG URL. Windows doesn't
 * render regional-indicator flag emoji as actual flags, so the UI renders
 * this image instead of the raw emoji glyph.
 */
export function getFlagUrl(flag: string): string {
  const codepoints = Array.from(flag)
    .map((char) => char.codePointAt(0)!.toString(16))
    .join('-');
  return `https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/${codepoints}.svg`;
}

/**
 * Strip the locale prefix from a pathname and re-apply a different one.
 *
 *   localizePath('/about', 'en', 'de')     -> '/de/about'
 *   localizePath('/de/about', 'de', 'en')  -> '/about'
 *   localizePath('/', 'en', 'fr')          -> '/fr/'
 *   localizePath('/fr/', 'fr', 'en')       -> '/'
 *
 * Default locale is unprefixed (matches `prefixDefaultLocale: false`).
 */
export function localizePath(
  pathname: string,
  _currentLocale: string,
  targetLocale: string,
): string {
  // Strip any known locale prefix
  let stripped = pathname;
  for (const code of localeCodes) {
    if (code === defaultLocale) continue;
    if (pathname === `/${code}` || pathname === `/${code}/`) {
      stripped = '/';
      break;
    }
    if (pathname.startsWith(`/${code}/`)) {
      stripped = pathname.slice(`/${code}`.length);
      break;
    }
  }
  if (!stripped.startsWith('/')) stripped = '/' + stripped;

  if (targetLocale === defaultLocale) return stripped;
  if (stripped === '/') return `/${targetLocale}/`;
  return `/${targetLocale}${stripped}`;
}
