// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    /** Locale requested in the URL prefix, preserved across middleware rewrites. */
    locale?: string;
  }
}
