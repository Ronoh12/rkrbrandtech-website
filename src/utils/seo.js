// src/utils/seo.js
export function setMeta({
  title,
  description,
  url = "https://rkrbrandtech.com",
  image = "https://rkrbrandtech.com/og-image.png",
}) {
  document.title = title || "RKR BrandTech Solutions";

  const setTag = (attr, key, value) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  // Basic
  setTag("name", "description", description || "");

  // Open Graph
  setTag("property", "og:title", title || "");
  setTag("property", "og:description", description || "");
  setTag("property", "og:type", "website");
  setTag("property", "og:url", url);
  setTag("property", "og:image", image);

  // Twitter
  setTag("name", "twitter:card", "summary_large_image");
  setTag("name", "twitter:title", title || "");
  setTag("name", "twitter:description", description || "");
  setTag("name", "twitter:image", image);
}
