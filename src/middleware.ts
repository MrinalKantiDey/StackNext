/**
 * i18n middleware
 *
 * When the URL starts with a non-default locale prefix (e.g. `/de/about`),
 * internally rewrite to the unprefixed default-locale path (`/about`) so the
 * page actually renders. The browser URL stays put, so `Astro.currentLocale`
 * still resolves to the requested locale and the header switcher highlights
 * the correct option.
 *
 * Once you ship genuinely translated pages under `src/pages/de/about.astro`
 * etc., move them into `src/pages/` per locale and remove the locale from
 * the rewrite list — or upgrade this to check page existence first.
 */
import { defineMiddleware } from 'astro:middleware';
import { localeCodes, defaultLocale } from './i18n/config';

const LOCALE_CODES = localeCodes as readonly string[];

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const parts = url.pathname.split('/').filter(Boolean);
  const first = parts[0];

  if (!first || !LOCALE_CODES.includes(first) || first === defaultLocale) {
    return next();
  }

  // Preserve the requested locale across the rewrite so pages can pick it up
  // via Astro.locals.locale (Astro.currentLocale would otherwise resolve to
  // the rewritten URL's locale, which is the default).
  context.locals.locale = first;

  const stripped = url.pathname.slice(`/${first}`.length) || '/';
  return context.rewrite(stripped + url.search);
});
