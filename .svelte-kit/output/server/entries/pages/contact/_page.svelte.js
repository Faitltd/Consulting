import { v as head } from "../../../chunks/index2.js";
import { C as CTASection } from "../../../chunks/CTASection.js";
import { M as Mail, C as Calendar_days, a as Map_pin, P as Phone_call, b as Message_square } from "../../../chunks/phone-call.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Contact | FAIT Consulting</title>`;
    $$payload2.out += `<meta name="description" content="Contact FAIT Consulting to discuss operations, automation, and waste reduction."/>`;
  });
  $$payload.out += `<section class="section contact-hero"><div class="container hero-grid"><div><span class="pill">Contact</span> <h1>Tell us about your operations.</h1> <p class="lede">We do not use a contact form or CRM. Reach out directly and we will set up a working session.</p> <div class="contact-cards"><a class="contact-card" href="mailto:admin@itsfait.com">`;
  Mail($$payload, { size: "18" });
  $$payload.out += `<!----> <div><div class="label">Email</div> <div class="value">admin@itsfait.com</div></div></a> <a class="contact-card" href="mailto:admin@itsfait.com" target="_blank" rel="noreferrer">`;
  Calendar_days($$payload, { size: "18" });
  $$payload.out += `<!----> <div><div class="label">Schedule a call</div> <div class="value">30-minute consultation</div></div></a> <div class="contact-card static">`;
  Map_pin($$payload, { size: "18" });
  $$payload.out += `<!----> <div><div class="label">Location</div> <div class="value">Centennial, CO (working nationwide)</div></div></div></div></div> <div class="content-card"><h3>What to expect</h3> <ol><li>A short discovery call to align on goals and current tools.</li> <li>A quick audit of your workflows, pain points, and handoffs.</li> <li>A proposal with quick wins and longer-term recommendations.</li></ol> <div class="contact-note">`;
  Phone_call($$payload, { size: "16" });
  $$payload.out += `<!----> We keep calls focused and actionable. No sales scripts.</div></div></div></section> <section class="section muted"><div class="container"><div class="section-header"><h2>Common topics</h2> <p>Show up with a messy workflow or half-baked process. We will help you organize it.</p></div> <div class="topics"><div class="topic-card">`;
  Message_square($$payload, { size: "16" });
  $$payload.out += `<!----> <span>Operational bottlenecks slowing down delivery or billing.</span></div> <div class="topic-card">`;
  Message_square($$payload, { size: "16" });
  $$payload.out += `<!----> <span>Where to start with automation across your existing tools.</span></div> <div class="topic-card">`;
  Message_square($$payload, { size: "16" });
  $$payload.out += `<!----> <span>How to document processes so new hires can ramp quickly.</span></div> <div class="topic-card">`;
  Message_square($$payload, { size: "16" });
  $$payload.out += `<!----> <span>Building dashboards for throughput, cycle time, and quality.</span></div></div></div></section> `;
  CTASection($$payload, {});
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
