import * as universal from '../entries/pages/resources/_slug_/_page.ts.js';

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resources/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/resources/[slug]/+page.ts";
export const imports = ["_app/immutable/nodes/10.BN9vbHgR.js","_app/immutable/chunks/KO2Ukxus.js","_app/immutable/chunks/DNSHY1Ls.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BCHcx9qG.js","_app/immutable/chunks/DSpJZVee.js","_app/immutable/chunks/DTAtkvOO.js","_app/immutable/chunks/c5NWnUeM.js","_app/immutable/chunks/hPbPQDID.js","_app/immutable/chunks/Iv-3a-m7.js","_app/immutable/chunks/Bs-7sbN0.js","_app/immutable/chunks/D2i1s2UK.js"];
export const stylesheets = ["_app/immutable/assets/CTASection.DG_vamSk.css","_app/immutable/assets/10.CdGPlFft.css"];
export const fonts = [];
