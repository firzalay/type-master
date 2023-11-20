import { c as create_ssr_component, o as onDestroy, f as add_attribute } from "./ssr.js";
import "typed.js";
const SvelteTypedJs_svelte_svelte_type_style_lang = "";
const css = {
  code: ".typed-element.svelte-1gsxocb{display:flex;align-items:center}.typed-element .typed-cursor{opacity:1;animation:svelte-1gsxocb-typedjsBlink 0.7s infinite}@keyframes svelte-1gsxocb-typedjsBlink{50%{opacity:0}}",
  map: null
};
const SvelteTypedJs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let typedObj = null;
  let typedElement = null;
  onDestroy(() => {
    typedObj.destroy();
  });
  $$result.css.add(css);
  return `<div class="typed-element svelte-1gsxocb"${add_attribute("this", typedElement, 0)}>${slots.default ? slots.default({}) : ``} </div>`;
});
export {
  SvelteTypedJs as S
};
