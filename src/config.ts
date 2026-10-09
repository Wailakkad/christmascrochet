/**
 * Google Apps Script Web App endpoint.
 *
 * Deploy the script in `apps-script/Code.gs`, then paste your /exec URL below.
 * You can also override it without touching this file by creating a
 * `.env.local` file with:  VITE_APPS_SCRIPT_URL=https://script.google.com/macros/s/XXXX/exec
 */
const ENV_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string | undefined;

export const APPS_SCRIPT_URL: string =
  ENV_URL && ENV_URL.length > 0
    ? ENV_URL
    : 'https://script.google.com/macros/s/AKfycbwB5A75QgklM7r4lXuXHlGeIqc1HuuoAe3t0O8FlMO7zOxIYSZt9ygj83pf5Sks1IyF4w/exec';

/** Public path to the free guide PDF (lives in /public). */
export const FREE_GUIDE_PDF_URL = '/easy-1-hour-crochet-christmas-tree-3-ornaments.pdf';

/** File name offered to the user on download. */
export const FREE_GUIDE_PDF_FILENAME = 'Easy-1-Hour-Crochet-Christmas-Tree-and-3-Ornaments.pdf';

export function isAppsScriptConfigured(): boolean {
  return (
    APPS_SCRIPT_URL.startsWith('https://script.google.com/') &&
    APPS_SCRIPT_URL.endsWith('/exec')
  );
}
