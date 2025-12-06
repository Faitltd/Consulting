import { y as fallback, q as ensure_array_like, t as attr, u as escape_html, x as bind_props } from "./index2.js";
import { A as Arrow_up_right } from "./arrow-up-right.js";
function CaseStudyCard($$payload, $$props) {
  let title = $$props["title"];
  let summary = $$props["summary"];
  let href = $$props["href"];
  let result = $$props["result"];
  let category = $$props["category"];
  let tags = fallback($$props["tags"], () => [], true);
  const each_array = ensure_array_like(tags);
  $$payload.out += `<a class="case-card"${attr("href", href)}><div class="result">${escape_html(result)}</div> <h3>${escape_html(title)}</h3> <p>${escape_html(summary)}</p> <div class="meta"><span class="pill">${escape_html(category)}</span> <div class="tags"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let tag = each_array[$$index];
    $$payload.out += `<span>${escape_html(tag)}</span>`;
  }
  $$payload.out += `<!--]--></div></div> <span class="cta-link">Read case study `;
  Arrow_up_right($$payload, { size: "16" });
  $$payload.out += `<!----></span></a>`;
  bind_props($$props, {
    title,
    summary,
    href,
    result,
    category,
    tags
  });
}
export {
  CaseStudyCard as C
};
