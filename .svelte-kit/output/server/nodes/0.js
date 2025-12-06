import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Dp4b8UlA.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/C4R8AOW0.js","_app/immutable/chunks/D1oGZTsy.js","_app/immutable/chunks/B1MnhbZ5.js","_app/immutable/chunks/PB7Hq9zz.js","_app/immutable/chunks/D4Go4Mid.js","_app/immutable/chunks/Da-75qmh.js","_app/immutable/chunks/CzPoRetE.js","_app/immutable/chunks/doXf9iM1.js","_app/immutable/chunks/egzGdBxD.js","_app/immutable/chunks/Bb6sNcr1.js"];
export const stylesheets = ["_app/immutable/assets/0.Bih6CoHF.css"];
export const fonts = [];
