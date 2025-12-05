import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BxeDasBa.js","_app/immutable/chunks/NZTpNUN0.js","_app/immutable/chunks/BCHcx9qG.js","_app/immutable/chunks/DSpJZVee.js","_app/immutable/chunks/Bs-7sbN0.js","_app/immutable/chunks/hPbPQDID.js","_app/immutable/chunks/c5NWnUeM.js","_app/immutable/chunks/DTAtkvOO.js","_app/immutable/chunks/D2i1s2UK.js","_app/immutable/chunks/r7XeNPf_.js","_app/immutable/chunks/D5AFQtjT.js"];
export const stylesheets = ["_app/immutable/assets/0.DNz2MrS_.css"];
export const fonts = [];
