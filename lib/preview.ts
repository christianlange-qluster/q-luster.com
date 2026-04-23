/**
 * Shared constants for the preview-access gate. Imported by both the page
 * (Node runtime) and middleware (Edge runtime), so this file must stay
 * dependency-free.
 *
 * To revoke all outstanding preview links, change PREVIEW_KEY to a new
 * value and push. Existing visitors with the old cookie will start getting
 * 404s until they re-visit the unlock URL with the new key.
 */
export const PREVIEW_KEY = "ql-photon-preview-2026";
export const PREVIEW_COOKIE = "ql_preview";
