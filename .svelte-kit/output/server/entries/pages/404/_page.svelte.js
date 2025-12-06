import { v as head } from "../../../chunks/index2.js";
function _page($$payload) {
  head($$payload, ($$payload2) => {
    $$payload2.title = `<title>Page not found | FAIT Consulting</title>`;
  });
  $$payload.out += `<main class="page-shell"><section class="section hero"><div class="container hero-grid"><div><span class="pill">404</span> <h1>Looks like that page is missing.</h1> <p class="lede">The page you are looking for does not exist. Start at the homepage or reach out if you need something specific.</p> <div class="hero-actions"><a class="primary" href="/">Back to home</a> <a class="ghost" href="/contact">Contact us</a></div></div></div></section></main>`;
}
export {
  _page as default
};
