import { y as fallback, q as ensure_array_like, u as escape_html, x as bind_props, v as head } from "../../../chunks/index2.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { B as Book_open, U as User_check, S as Sparkles, W as Workflow } from "../../../chunks/workflow.js";
function StatsGrid($$payload, $$props) {
  let stats = fallback($$props["stats"], () => [], true);
  const each_array = ensure_array_like(stats);
  $$payload.out += `<div class="stats"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$payload.out += `<div class="stat"><div class="value">${escape_html(stat.value)}</div> <div class="label">${escape_html(stat.label)}</div> `;
    if (stat.detail) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p>${escape_html(stat.detail)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { stats });
}
function _page($$payload) {
  const principles = [
    {
      icon: Book_open,
      title: "Document before you automate",
      body: "We map the process, owners, and exceptions first so automation is stable and transparent."
    },
    {
      icon: User_check,
      title: "Humans stay in the loop",
      body: "Automation should support good judgment, not replace it. Clear checkpoints keep quality high."
    },
    {
      icon: Sparkles,
      title: "Ship, measure, improve",
      body: "Quick wins first, then iterate with metrics to make the changes stick."
    },
    {
      icon: Workflow,
      title: "Use what you have",
      body: "We work with your current tools when possible and only add new ones if ROI is obvious."
    }
  ];
  const aboutStats = [
    {
      value: "10+ yrs",
      label: "Ops + systems experience",
      detail: "Across ops, dev, and program leadership."
    },
    {
      value: "50+",
      label: "Processes documented",
      detail: "From trades to professional services."
    },
    {
      value: "3 weeks",
      label: "Time to first win",
      detail: "We start small and ship quickly."
    },
    {
      value: "CO",
      label: "Based in Centennial",
      detail: "Working with clients across the US."
    }
  ];
  const each_array = ensure_array_like(principles);
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>About | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description" content="FAIT Consulting combines operations, systems, and engineering experience to document, automate, and optimize your business."/>`;
  });
  $$payload.out += `<section class="section about-hero"><div class="container hero-grid"><div><span class="pill">About</span> <h1>Systems-first consulting for small businesses.</h1> <p class="lede">FAIT was started to give operators a partner who can document, automate, and optimize without bloated
        software or endless strategy decks.</p> <div class="about-story"><p>With a background across operations, software, and program leadership, we bridge the gap between how
          work happens on the ground and the systems that support it. Every engagement starts with clarity: who
          owns what, how work flows today, and what "good" looks like in the future.</p></div></div> <div class="content-card"><div class="title">What to expect</div> <ul><li>Direct access to the person doing the work.</li> <li>Clear scope, deliverables, and timelines.</li> <li>Documentation and training, not just build.</li> <li>Metrics to prove the change is working.</li></ul></div></div></section> <section class="section muted"><div class="container"><div class="section-header"><h2>Principles</h2> <p>How we approach every engagement.</p></div> <div class="principles"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let principle = each_array[$$index];
    $$payload.out += `<div class="principle-card"><div class="icon"><!---->`;
    principle.icon?.($$payload, { size: "20" });
    $$payload.out += `<!----></div> <h3>${escape_html(principle.title)}</h3> <p>${escape_html(principle.body)}</p></div>`;
  }
  $$payload.out += `<!--]--></div></div></section> <section class="section"><div class="container two-col-tight"><div class="content-card"><h3>Why FAIT over a generic consultant</h3> <ul><li>We build and document, not just advise.</li> <li>We work with your tools first to avoid disruption.</li> <li>We deliver quick wins before deep change.</li> <li>We focus on measurable ops outcomes, not vanity metrics.</li></ul></div> <div class="content-card"><h3>Results we target</h3> `;
  StatsGrid($$payload, { stats: aboutStats });
  $$payload.out += `<!----></div></div></section> `;
  CTASection($$payload, {
    pill: "Talk through your operations",
    title: "Book a 30-minute working session",
    body: "We will map a core workflow together and highlight the fastest path to improvement."
  });
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
