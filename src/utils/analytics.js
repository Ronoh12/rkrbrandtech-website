export const GA_ID = "G-13500766195";

export function pageview(url) {
  if (!window.gtag) return;
  window.gtag("config", GA_ID, {
    page_path: url,
  });
}
