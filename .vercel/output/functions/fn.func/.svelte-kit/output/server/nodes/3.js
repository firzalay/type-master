

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/leaderboards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.bc8365e7.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js","_app/immutable/chunks/app.cec18116.js","_app/immutable/chunks/index.cc4da14a.js"];
export const stylesheets = ["_app/immutable/assets/3.ad9e06f5.css","_app/immutable/assets/app.a7bc8b4e.css"];
export const fonts = [];
