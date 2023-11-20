

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.22b7b94c.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js","_app/immutable/chunks/app.cec18116.js","_app/immutable/chunks/index.cc4da14a.js","_app/immutable/chunks/navigation.6ee81ba0.js","_app/immutable/chunks/singletons.06befeee.js"];
export const stylesheets = ["_app/immutable/assets/2.78191f7d.css","_app/immutable/assets/app.a7bc8b4e.css"];
export const fonts = [];
