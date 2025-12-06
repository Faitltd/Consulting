import { y as fallback, q as ensure_array_like, u as escape_html, x as bind_props, v as head, z as attr_style, m as pop, p as push } from "../../chunks/index2.js";
import { G as Gauge, S as ServiceCard, C as Chart_column, T as Target } from "../../chunks/ServiceCard.js";
import { C as CaseStudyCard } from "../../chunks/CaseStudyCard.js";
import { C as CTASection } from "../../chunks/CTASection.js";
import { C as Circle_check, R as Rocket } from "../../chunks/rocket.js";
import { W as Workflow } from "../../chunks/workflow.js";
function StatGrid($$payload, $$props) {
  let stats = fallback($$props["stats"], () => [], true);
  const each_array = ensure_array_like(stats);
  $$payload.out += `<div class="stats"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let stat = each_array[$$index];
    $$payload.out += `<div class="stat"><div class="value">${escape_html(stat.value)}</div> <div class="label">${escape_html(stat.label)}</div> `;
    if (stat.body) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<p>${escape_html(stat.body)}</p>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div>`;
  }
  $$payload.out += `<!--]--></div>`;
  bind_props($$props, { stats });
}
function _page($$payload, $$props) {
  push();
  let parallax = 0;
  const stats = [
    {
      value: "50+",
      label: "Processes documented",
      body: "Across trades and professional services."
    },
    {
      value: "30%+",
      label: "Cost reduction",
      body: "Typical waste removed from admin time."
    },
    {
      value: "2-4x",
      label: "Faster delivery",
      body: "From clearer scopes and automated handoffs."
    },
    {
      value: "3",
      label: "Weeks to first win",
      body: "Time to ship the first automation or playbook."
    }
  ];
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>FAIT Consulting | Operations, Automation, Waste Analysis</title>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero"><div class="hero-visual" aria-hidden="true"><img class="hero-img" src="/images/Fait%20Consulting.jpg?v=3" alt="Consultant presenting results to executives" fetchpriority="high"${attr_style(`object-position: center 37%; transform: translateY(${parallax * -0.15}px);`)}/></div> <div class="container hero-grid"><div class="hero-copy"><span class="pill">Operations / Automation / Waste Reduction</span> <h1>Transform your business. Minimize waste.</h1> <p class="lede">We build the playbooks, automations, and visibility you need to scale without chaos - starting with the
          highest-value processes in your operation.</p> <div class="hero-actions"><a class="primary" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">Book Consultation</a> <a class="ghost" href="/case-studies">View case studies</a></div> <div class="hero-points"><div class="point">`;
  Circle_check($$payload, { size: 18 });
  $$payload.out += `<!----> <div><div class="point-title">Document and standardize</div> <div class="point-body">Clear SOPs, ownership, and exceptions in one place.</div></div></div> <div class="point">`;
  Circle_check($$payload, { size: 18 });
  $$payload.out += `<!----> <div><div class="point-title">Automate the repetitive</div> <div class="point-body">Trigger-based workflows across tools you already use.</div></div></div> <div class="point">`;
  Circle_check($$payload, { size: 18 });
  $$payload.out += `<!----> <div><div class="point-title">Measure what matters</div> <div class="point-body">Visibility into throughput, bottlenecks, and quality.</div></div></div></div></div> <div class="hero-panel"><div class="panel-heading">`;
  Gauge($$payload, { size: 18 });
  $$payload.out += `<!----> <span>Operations Snapshot</span></div> <div class="meter"><div class="meter-label">Process coverage</div> <div class="meter-bar"><span style="width:72%"></span></div> <div class="meter-value">72% documented</div></div> <div class="panel-metrics"><div><div class="metric">18</div> <div class="meta">active workflows</div></div> <div><div class="metric">3.2x</div> <div class="meta">faster handoffs</div></div> <div><div class="metric">-28%</div> <div class="meta">ops overhead</div></div></div> <div class="panel-footer">`;
  Rocket($$payload, { size: 16 });
  $$payload.out += `<!----> Quick wins shipped in 3 weeks or less.</div></div></div></section> <section class="section" id="services"><div class="container"><div class="section-header"><h2>What we deliver</h2> <p>Three focused service lines to document, automate, and optimize how your business runs.</p></div> <div class="services-grid">`;
  ServiceCard($$payload, {
    title: "Process Automation",
    description: "Automate repetitive work, standardize handoffs, and connect your tools so teams move faster.",
    href: "/services/process-automation",
    icon: Workflow
  });
  $$payload.out += `<!----> `;
  ServiceCard($$payload, {
    title: "Waste Analysis",
    description: "Identify bottlenecks, duplicate data entry, and slow approvals to reclaim capacity and cash.",
    href: "/services/waste-analysis",
    icon: Chart_column
  });
  $$payload.out += `<!----> `;
  ServiceCard($$payload, {
    title: "Business Optimization",
    description: "Align pricing, capacity, and delivery with a repeatable playbook that scales without chaos.",
    href: "/services/business-optimization",
    icon: Target
  });
  $$payload.out += `<!----></div></div></section> <section class="section muted-section"><div class="container"><div class="section-header"><h2>Proof you can measure</h2> <p>Clarity, speed, and cost reduction - not vanity metrics.</p></div> `;
  StatGrid($$payload, { stats });
  $$payload.out += `<!----></div></section> <section class="section" id="how"><div class="container"><div class="section-header"><h2>How it works</h2> <p>Simple, transparent steps. Quick wins first, long-term stability next.</p></div> <div class="steps"><div class="approach-card"><div class="icon"><span>01</span></div> <h3>Discovery Call</h3> <p>Map your workflows, systems, and friction points. Align on outcomes and risks.</p></div> <div class="approach-card"><div class="icon"><span>02</span></div> <h3>Analysis &amp; Proposal</h3> <p>Rank opportunities by impact and effort. Deliver a clear plan with quick wins first.</p></div> <div class="approach-card"><div class="icon"><span>03</span></div> <h3>Implementation &amp; Iteration</h3> <p>Document, automate, and measure. Tune with your team until it sticks.</p></div></div></div></section> <section class="section muted-section" id="case-studies"><div class="container"><div class="section-header"><h2>Case studies</h2> <p>Recent engagements across trades, field services, and professional services.</p></div> <div class="case-grid">`;
  CaseStudyCard($$payload, {
    href: "/case-studies/construction-remodeler-efficiency",
    title: "Construction Remodeler: Cutting Setup Time by 60%",
    description: "Standardized scopes, automated handoffs, and templated estimating to reduce admin time.",
    industry: "Construction / Trades",
    result: "60% faster job setup",
    tags: ["automation", "construction", "process"]
  });
  $$payload.out += `<!----> `;
  CaseStudyCard($$payload, {
    href: "/case-studies/field-services-visibility",
    title: "Field Services: Real-Time Ops Visibility",
    description: "Centralized scheduling, status dashboards, and alerting to keep dispatch and crews aligned.",
    industry: "Field Services",
    result: "35% faster dispatch decisions",
    tags: ["operations", "dashboards", "automation"]
  });
  $$payload.out += `<!----></div></div></section> `;
  CTASection($$payload, {
    pill: "Let's fix the biggest bottleneck first",
    title: "Ready to map your operations?",
    body: "Book a working session to document a core workflow and identify the quickest win for your team."
  });
  $$payload.out += `<!----></main>`;
  pop();
}
export {
  _page as default
};
