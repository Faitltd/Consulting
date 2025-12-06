import { u as escape_html, x as bind_props, m as pop, p as push } from "../../chunks/index2.js";
function _error($$payload, $$props) {
  push();
  let error = $$props["error"];
  let status = $$props["status"];
  $$payload.out += `<section class="section not-found"><div class="container"><span class="pill">${escape_html(status === 404 ? "404" : "Error")}</span> <h1>${escape_html(status === 404 ? "Page not found." : "Something went wrong.")}</h1> <p>${escape_html(error?.message ?? "An unexpected error occurred.")}</p> <div class="hero-actions" style="justify-content:center"><a class="primary" href="/">Back to home</a> <a class="ghost" href="/contact">Contact us</a></div></div></section>`;
  bind_props($$props, { error, status });
  pop();
}
export {
  _error as default
};
