import { q as ensure_array_like, v as head, u as escape_html, x as bind_props, t as attr } from "../../../../chunks/index2.js";
import { C as CTASection } from "../../../../chunks/CTASection.js";
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { study } = data;
  const each_array = ensure_array_like(study.highlight);
  const each_array_1 = ensure_array_like(study.problem);
  const each_array_2 = ensure_array_like(study.approach);
  const each_array_3 = ensure_array_like(study.results);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(study.title)} | Case Study | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description"${attr("content", study.summary)}/>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero"><div class="container hero-grid"><div><span class="pill">${escape_html(study.industry)}</span> <h1>${escape_html(study.title)}</h1> <p class="lede">${escape_html(study.summary)}</p> <div class="hero-badge-row"><span class="badge">${escape_html(study.year)}</span> <span class="badge">${escape_html(study.result)}</span></div></div> <div class="card"><div class="title">Highlights</div> <div class="chips"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<span>${escape_html(item)}</span>`;
  }
  $$payload.out += `<!--]--></div> <p class="profile">${escape_html(study.profile)}</p></div></div></section> <section class="section"><div class="container grid"><div class="card"><h3>Problem</h3> <ul><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out += `<li><span>•</span><span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="card"><h3>Approach</h3> <ul><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    $$payload.out += `<li><span>•</span><span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="card"><h3>Results</h3> <ul><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$payload.out += `<li><span>•</span><span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></section> `;
  CTASection($$payload, {
    pill: "Want similar results?",
    title: "Let's map your next win",
    body: "Book a short call to identify the fastest way to remove waste or automate a key workflow."
  });
  $$payload.out += `<!----></main>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
