import { c as create_ssr_component, v as validate_component, f as add_attribute } from "../../../chunks/ssr.js";
import { S as SvelteTypedJs } from "../../../chunks/SvelteTypedJs.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-mw73a4.svelte-mw73a4{font-family:"Lexand Deca", sans-serif}.typing-animation.svelte-mw73a4 p.svelte-mw73a4{letter-spacing:0.5px;padding:20px 0;font-size:20px;font-weight:500;font-family:"Roboto Mono", monospace}.sign-in.svelte-mw73a4 button.svelte-mw73a4{background-color:#45346c;color:#e2e1e1;font-size:12px;padding:10px 45px;border:1px solid transparent;border-radius:8px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-top:10px;cursor:pointer}.container.svelte-mw73a4 form.svelte-mw73a4{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;height:100%}.container.svelte-mw73a4 input.svelte-mw73a4{background-color:#eee;border:none;margin:8px 0;padding:10px 15px;font-size:13px;border-radius:8px;width:70%;outline:none}.form-container.svelte-mw73a4.svelte-mw73a4{position:absolute;top:0;height:100%;transition:all 0.6s ease-in-out}.sign-in.svelte-mw73a4.svelte-mw73a4{left:0;width:50%;z-index:2}@keyframes svelte-mw73a4-move{0%,49.99%{opacity:0;z-index:1}50%,100%{opacity:1;z-index:5}}.toggle-container.svelte-mw73a4.svelte-mw73a4{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:all 0.6s ease-in-out;z-index:1000}.sign-in.svelte-mw73a4 h1.svelte-mw73a4{color:white}video.svelte-mw73a4.svelte-mw73a4{object-fit:cover;width:50vw;height:100vh;position:fixed}.register-p.svelte-mw73a4.svelte-mw73a4{display:flex;justify-content:center;align-items:center;flex-direction:column;gap:10px;padding:20px 0}.register-p.svelte-mw73a4 p.svelte-mw73a4{font-family:"Lexend Deca", sans-serif;font-size:16px}.register-p.svelte-mw73a4 a.svelte-mw73a4{color:white;text-decoration:none;font-weight:bold}.error.svelte-mw73a4.svelte-mw73a4{font-family:"Lexend Deca", sans-serif;margin:10px 0;color:red;font-weight:600}.error.svelte-mw73a4.svelte-mw73a4{color:red;font-size:14px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="container svelte-mw73a4" id="container"><div class="form-container sign-in svelte-mw73a4"><form class="svelte-mw73a4"><h1 class="svelte-mw73a4" data-svelte-h="svelte-1r2j0ac">Login Page</h1> ${validate_component(SvelteTypedJs, "SvelteTypedJs").$$render(
    $$result,
    {
      strings: ["Type Master"],
      typeSpeed: "10",
      backSpeed: "10",
      loop: "true"
    },
    {},
    {
      default: () => {
        return `<div class="typing-animation svelte-mw73a4" data-svelte-h="svelte-1wxv3rx"><p class="svelte-mw73a4">Become The Best <span class="typing"></span> 👑</p></div>`;
      }
    }
  )} <input type="name" placeholder="Name" id="name" name="name" class="svelte-mw73a4"${add_attribute("value", name, 0)}> <input type="password" placeholder="Password" id="password" name="password" class="svelte-mw73a4"${add_attribute("value", password, 0)}> ${``} <button class="svelte-mw73a4" data-svelte-h="svelte-1upmudf">Log In</button> <div class="register-p svelte-mw73a4" data-svelte-h="svelte-1idzcgi"><p class="svelte-mw73a4">Dont have an account? <a href="/register" class="svelte-mw73a4">Register First!</a></p> <p class="svelte-mw73a4">Or <a href="/" class="svelte-mw73a4">Just Play!</a></p></div></form></div> <div class="toggle-container svelte-mw73a4" data-svelte-h="svelte-vz7cl6"><video playsinline autoplay muted loop class="svelte-mw73a4"><source src="logos.mp4" type="video/mp4"></video></div> </div>`;
});
export {
  Page as default
};
