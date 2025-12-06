import { y as fallback, q as ensure_array_like, t as attr, u as escape_html, x as bind_props, v as head } from "../../../chunks/index2.js";
import { r as resources } from "../../../chunks/resources.js";
function ResourceCard($$payload, $$props) {
  let title = $$props["title"];
  let description = $$props["description"];
  let date = $$props["date"];
  let tags = fallback($$props["tags"], () => [], true);
  let href = $$props["href"];
  const each_array = ensure_array_like(tags);
  $$payload.out += `<a class="resource-card"${attr("href", href)}><div class="meta"><span class="badge">${escape_html(date)}</span></div> <h3>${escape_html(title)}</h3> <p>${escape_html(description)}</p> <div class="tags"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span>${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></a>`;
  bind_props($$props, { title, description, date, tags, href });
}
function _page($$payload) {
  const each_array = ensure_array_like(resources);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Resources | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description" content="Articles and checklists on operations, automation, and process design."/>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero"><div class="container hero-grid"><div><span class="pill">Resources</span> <h1>Playbooks, checklists, and frameworks.</h1> <p class="lede">Practical guidance for documenting, automating, and optimizing your operation.</p></div></div></section> <section class="section"><div class="container"><div class="resource-grid"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let resource = each_array[$$index];
    ResourceCard($$payload, {
      href: `/resources/${resource.slug}`,
      title: resource.title,
      description: resource.summary,
      date: resource.date,
      tags: resource.tags
    });
  }
  $$payload.out += `<!--]--></div></div></section></main>`;
}
export {
  _page as default
};
