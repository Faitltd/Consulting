import { q as ensure_array_like, v as head } from "../../../chunks/index2.js";
import { C as CaseStudyCard } from "../../../chunks/CaseStudyCard.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { c as caseStudies } from "../../../chunks/case-studies.js";
function _page($$payload) {
  const each_array = ensure_array_like(caseStudies);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Case Studies | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description" content="See how FAIT Consulting helps teams reduce waste, automate processes, and improve delivery."/>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero"><div class="container hero-grid"><div><span class="pill">Case Studies</span> <h1>Real outcomes with systems-first consulting.</h1> <p class="lede">Each engagement starts with clarity, quick wins, and measurable improvements in speed, quality, and cost.</p></div> <div class="note"><div class="title">Industries</div> <div class="chips"><span>Construction</span> <span>Field Services</span> <span>Professional Services</span></div> <div class="title" style="color: var(--muted); font-weight: 600;">More sectors coming as we publish new work.</div></div></div></section> <section class="section"><div class="container"><div class="case-grid"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let study = each_array[$$index];
    CaseStudyCard($$payload, {
      href: `/case-studies/${study.slug}`,
      title: study.title,
      description: study.summary,
      industry: study.industry,
      result: study.result,
      tags: study.tags
    });
  }
  $$payload.out += `<!--]--></div></div></section> `;
  CTASection($$payload, {});
  $$payload.out += `<!----></main>`;
}
export {
  _page as default
};
