import * as universal from '../entries/pages/case-studies/_page.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/case-studies/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/case-studies/+page.ts";
export const imports = ["_app/immutable/nodes/4.CXLCWSRm.js","_app/immutable/chunks/BOVbqb2w.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BCHcx9qG.js","_app/immutable/chunks/DSpJZVee.js","_app/immutable/chunks/c5NWnUeM.js","_app/immutable/chunks/DTAtkvOO.js","_app/immutable/chunks/hPbPQDID.js","_app/immutable/chunks/CPxqookN.js","_app/immutable/chunks/Bs-7sbN0.js","_app/immutable/chunks/D2i1s2UK.js","_app/immutable/chunks/Iv-3a-m7.js"];
export const stylesheets = ["_app/immutable/assets/CaseStudyCard.DfcRrpSm.css","_app/immutable/assets/CTASection.DG_vamSk.css","_app/immutable/assets/4.BTVx4cqx.css"];
export const fonts = [];
