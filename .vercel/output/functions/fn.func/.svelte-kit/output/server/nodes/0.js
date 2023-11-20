

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.5360b41a.js","_app/immutable/chunks/scheduler.3139b196.js","_app/immutable/chunks/index.e28029e5.js"];
export const stylesheets = [];
export const fonts = [];
