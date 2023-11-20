

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/register/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.b67049e8.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js","_app/immutable/chunks/SvelteTypedJs.e34ba699.js","_app/immutable/chunks/navigation.6ee81ba0.js","_app/immutable/chunks/singletons.06befeee.js","_app/immutable/chunks/index.cc4da14a.js"];
export const stylesheets = ["_app/immutable/assets/5.d95c4356.css","_app/immutable/assets/SvelteTypedJs.0227214d.css"];
export const fonts = [];
