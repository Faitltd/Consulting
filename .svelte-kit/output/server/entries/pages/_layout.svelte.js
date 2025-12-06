import { q as ensure_array_like, t as attr, u as escape_html, v as head, w as slot } from "../../chunks/index2.js";
import { s as services } from "../../chunks/services.js";
import { C as Chevron_down, E as External_link, M as Menu } from "../../chunks/menu.js";
import "clsx";
function Header($$payload) {
  const navLinks = [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/resources", label: "Resources" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];
  const each_array = ensure_array_like(services);
  const each_array_1 = ensure_array_like(navLinks);
  $$payload.out += `<header class="header"><div class="container header-inner"><a class="logo" href="/">FAIT Consulting</a> <nav class="nav"><ul class="nav-links"><li class="has-children"><a href="/services"><span>Services</span> `;
  Chevron_down($$payload, { size: "16" });
  $$payload.out += `<!----></a> <div class="dropdown"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let service = each_array[$$index];
    $$payload.out += `<a${attr("href", `/services/${service.slug}`)}>${escape_html(service.name)}</a>`;
  }
  $$payload.out += `<!--]--></div></li> <!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let link = each_array_1[$$index_1];
    $$payload.out += `<li><a${attr("href", link.href)}><span>${escape_html(link.label)}</span></a></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="nav-cta"><a class="ghost-link" href="/case-studies">Results</a> <a class="primary" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">Book Consultation `;
  External_link($$payload, { size: "16" });
  $$payload.out += `<!----></a></div> <button class="menu-button" aria-label="Toggle menu">`;
  {
    $$payload.out += "<!--[!-->";
    Menu($$payload, { size: "22" });
  }
  $$payload.out += `<!--]--></button></nav></div> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></header>`;
}
function Footer($$payload) {
  $$payload.out += `<footer class="footer"><div class="container footer-grid"><div class="brand"><div class="brand-mark">FAIT Consulting</div> <p>Systems-first consulting for small businesses. We document, automate, and optimize the processes that keep your operation running.</p> <a class="inline-link" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">Book a consultation</a></div> <div><h4>Company</h4> <nav class="link-list"><a href="/about">About</a> <a href="/case-studies">Case Studies</a> <a href="/resources">Resources</a></nav></div> <div><h4>Services</h4> <nav class="link-list"><a href="/services/process-automation">Process Automation</a> <a href="/services/waste-analysis">Waste Analysis</a> <a href="/services/business-optimization">Business Optimization</a></nav></div> <div><h4>Contact</h4> <div class="contact link-list"><span><a href="mailto:admin@itsfait.com">admin@itsfait.com</a></span> <span>Centennial, CO</span></div></div></div> <div class="container footer-bottom"><span>(c) 2025 FAIT Consulting. All rights reserved.</span> <div class="legal-links"><a href="/legal/privacy-policy">Privacy</a> <a href="/legal/terms">Terms</a></div></div></footer>`;
}
function _layout($$payload, $$props) {
  head($$payload, ($$payload2) => {
    $$payload2.out += `<link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""/> <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap" rel="stylesheet"/> <link rel="icon" href="/favicon.svg"/> <meta name="description" content="FAIT Consulting helps small businesses document processes, automate workflows, and eliminate waste to unlock capacity."/> <script defer data-domain="consulting.itsfait.com" src="https://plausible.io/js/script.js"><\/script>`;
  });
  Header($$payload);
  $$payload.out += `<!----> <!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----> `;
  Footer($$payload);
  $$payload.out += `<!---->`;
}
export {
  _layout as default
};
