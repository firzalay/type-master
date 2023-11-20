import { c as create_ssr_component, a as subscribe } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
/* empty css                   */const leaderboard = "";
const scores = writable([]);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.loader.svelte-69pzuz{border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #234c67;width:90px;height:90px;-webkit-animation:svelte-69pzuz-spin 2s linear infinite;animation:svelte-69pzuz-spin 2s linear infinite}.loader-layout.svelte-69pzuz{display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;gap:2rem}h1.svelte-69pzuz{font-family:"Lexend Deca", sans-serif;font-size:1.8rem;color:hsl(220 20% 80%);letter-spacing:2px}@-webkit-keyframes svelte-69pzuz-spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes svelte-69pzuz-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_scores;
  $$unsubscribe_scores = subscribe(scores, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_scores();
  return `<link rel="stylesheet" href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"> ${`<div class="loader-layout svelte-69pzuz" data-svelte-h="svelte-40hadk"><div class="loader svelte-69pzuz"></div> <h1 class="svelte-69pzuz">Wait Master 🙏🏻</h1></div>`}`;
});
export {
  Page as default
};
