import { q as ensure_array_like, v as head, u as escape_html, x as bind_props, t as attr } from "../../../../chunks/index2.js";
import { C as CTASection } from "../../../../chunks/CTASection.js";
import { C as Circle_check, R as Rocket } from "../../../../chunks/rocket.js";
function _page($$payload, $$props) {
  let data = $$props["data"];
  const { service } = data;
  const each_array = ensure_array_like(service.summaryPoints);
  const each_array_1 = ensure_array_like(service.who);
  const each_array_2 = ensure_array_like(service.problems);
  const each_array_3 = ensure_array_like(service.deliverables);
  const each_array_4 = ensure_array_like(service.outcomes);
  const each_array_5 = ensure_array_like(service.faq);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>${escape_html(service.name)} | Services | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description"${attr("content", service.summary)}/>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero service-hero"><div class="container hero-grid"><div><span class="pill">${escape_html(service.name)}</span> <h1>${escape_html(service.heroTitle)}</h1> <p class="lede">${escape_html(service.heroLead)}</p> <div class="hero-actions"><a class="primary" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">Book Consultation</a> <a class="ghost" href="mailto:admin@itsfait.com">Email the team</a></div></div> <div class="summary-card"><div class="summary-title">${escape_html(service.summaryTitle)}</div> <ul><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let point = each_array[$$index];
    $$payload.out += `<li>`;
    Circle_check($$payload, { size: 18 });
    $$payload.out += `<!----> <span>${escape_html(point)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul> <div class="tag">`;
  Rocket($$payload, { size: 14 });
  $$payload.out += `<!----> ${escape_html(service.tag)}</div></div></div></section> <section class="section"><div class="container two-col"><div class="card"><h3>Who this is for</h3> <ul><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out += `<li>`;
    Circle_check($$payload, { size: 16 });
    $$payload.out += `<!----> <span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="card"><h3>Typical problems</h3> <ul><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
    let item = each_array_2[$$index_2];
    $$payload.out += `<li>`;
    Circle_check($$payload, { size: 16 });
    $$payload.out += `<!----> <span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></section> <section class="section muted-section"><div class="container two-col"><div class="card"><h3>Deliverables</h3> <ul><!--[-->`;
  for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
    let item = each_array_3[$$index_3];
    $$payload.out += `<li>`;
    Circle_check($$payload, { size: 16 });
    $$payload.out += `<!----> <span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div> <div class="card"><h3>Example outcomes</h3> <ul><!--[-->`;
  for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
    let item = each_array_4[$$index_4];
    $$payload.out += `<li>`;
    Circle_check($$payload, { size: 16 });
    $$payload.out += `<!----> <span>${escape_html(item)}</span></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div></section> <section class="section"><div class="container"><div class="section-header"><h2>FAQ</h2> <p>Answers to the common questions teams ask before we start.</p></div> <div class="faq-grid"><!--[-->`;
  for (let $$index_5 = 0, $$length = each_array_5.length; $$index_5 < $$length; $$index_5++) {
    let item = each_array_5[$$index_5];
    $$payload.out += `<div class="faq-card"><h3>${escape_html(item.question)}</h3> <p>${escape_html(item.answer)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> `;
  CTASection($$payload, {
    pill: "Ready to move faster?",
    title: "Book a consultation",
    body: "Schedule a 30-minute call to map your operations and build a quick-win plan for automation."
  });
  $$payload.out += `<!----></main>`;
  bind_props($$props, { data });
}
export {
  _page as default
};
