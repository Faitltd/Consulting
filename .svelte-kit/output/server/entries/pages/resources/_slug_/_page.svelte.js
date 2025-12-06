import { q as ensure_array_like, v as head, u as escape_html, x as bind_props, t as attr } from "../../../../chunks/index2.js";
import { C as CTASection } from "../../../../chunks/CTASection.js";
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { resource } = data;
  const each_array = ensure_array_like(resource.tags);
  const each_array_1 = ensure_array_like(resource.sections);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(resource.title)} | Resources | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description"${attr("content", resource.summary)}/>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero"><div class="container hero-grid"><div><span class="pill">${escape_html(resource.date)}</span> <h1>${escape_html(resource.title)}</h1> <p class="lede">${escape_html(resource.summary)}</p> <div class="tags"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span>${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></div></div></section> <section class="section"><div class="container sections"><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let section = each_array_1[$$index_2];
    const each_array_2 = ensure_array_like(section.bullets);
    $$payload.out += `<div class="section-card"><h3>${escape_html(section.title)}</h3> <!--[-->`;
    for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
      let bullet = each_array_2[$$index_1];
      $$payload.out += `<p>${escape_html(bullet)}</p>`;
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div></section> `;
  CTASection($$payload, {
    pill: resource.ctaPill,
    title: resource.ctaTitle,
    body: resource.ctaBody
  });
  $$payload.out += `<!----></main>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
