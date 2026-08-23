/**
 * Smoothly scrolls to a section by its element id, accounting for the
 * fixed navbar height.
 */
export function scrollToSection(id, offset = 76) {
  const el = document.getElementById(id);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Builds a WhatsApp click-to-chat URL with a pre-filled message.
 */
export function buildWhatsAppLink(number, message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}
