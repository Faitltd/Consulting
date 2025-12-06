import { y as fallback, u as escape_html, t as attr, x as bind_props } from "./index2.js";
function CTASection($$payload, $$props) {
  let pill = fallback($$props["pill"], "Ready to move faster?");
  let title = fallback($$props["title"], "Book a consultation");
  let body = fallback($$props["body"], "Schedule a 30-minute call to map your operations and build a quick-win plan for automation.");
  let primaryHref = fallback($$props["primaryHref"], "mailto:admin@itsfait.com");
  let primaryLabel = fallback($$props["primaryLabel"], "Book Consultation");
  let secondaryHref = fallback($$props["secondaryHref"], "mailto:admin@itsfait.com");
  let secondaryLabel = fallback($$props["secondaryLabel"], "Email the team");
  $$payload.out += `<section class="cta"><div class="container cta-inner"><div class="copy"><span class="pill">${escape_html(pill)}</span> <h3>${escape_html(title)}</h3> <p>${escape_html(body)}</p></div> <div class="actions"><a class="primary"${attr("href", primaryHref)} target="_blank" rel="noreferrer">${escape_html(primaryLabel)}</a> <a class="ghost"${attr("href", secondaryHref)}>${escape_html(secondaryLabel)}</a></div></div> <div class="glow"></div></section>`;
  bind_props($$props, {
    pill,
    title,
    body,
    primaryHref,
    primaryLabel,
    secondaryHref,
    secondaryLabel
  });
}
export {
  CTASection as C
};
