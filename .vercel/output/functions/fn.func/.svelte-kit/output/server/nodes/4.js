

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/login/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.94276681.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js","_app/immutable/chunks/SvelteTypedJs.e34ba699.js","_app/immutable/chunks/navigation.6ee81ba0.js","_app/immutable/chunks/singletons.06befeee.js","_app/immutable/chunks/index.cc4da14a.js"];
export const stylesheets = ["_app/immutable/assets/4.76369b3b.css","_app/immutable/assets/SvelteTypedJs.0227214d.css"];
export const fonts = [];
