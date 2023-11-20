

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.a81dbc8f.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js","_app/immutable/chunks/singletons.06befeee.js","_app/immutable/chunks/index.cc4da14a.js"];
export const stylesheets = [];
export const fonts = [];
