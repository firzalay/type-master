import { c as create_ssr_component, v as validate_component, f as add_attribute } from "../../../chunks/ssr.js";
import { S as SvelteTypedJs } from "../../../chunks/SvelteTypedJs.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: '.container.svelte-cduexf.svelte-cduexf{font-family:"Lexand Deca", sans-serif}.sign-in.svelte-cduexf p.svelte-cduexf{letter-spacing:0.5px;padding:20px 0;font-size:20px;font-weight:500;font-family:"Roboto Mono", monospace}.sign-in.svelte-cduexf button.svelte-cduexf{background-color:#45346c;color:#e2e1e1;font-size:12px;padding:10px 45px;border:1px solid transparent;border-radius:8px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;margin-top:10px;cursor:pointer}.container.svelte-cduexf form.svelte-cduexf{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:0 40px;height:100%}.container.svelte-cduexf input.svelte-cduexf{background-color:#eee;border:none;margin:8px 0;padding:10px 15px;font-size:13px;border-radius:8px;width:70%;outline:none}.form-container.svelte-cduexf.svelte-cduexf{position:absolute;top:0;height:100%;transition:all 0.6s ease-in-out}.sign-in.svelte-cduexf.svelte-cduexf{left:0;width:50%;z-index:2}@keyframes svelte-cduexf-move{0%,49.99%{opacity:0;z-index:1}50%,100%{opacity:1;z-index:5}}.toggle-container.svelte-cduexf.svelte-cduexf{position:absolute;top:0;left:50%;width:50%;height:100%;overflow:hidden;transition:all 0.6s ease-in-out;z-index:1000}.sign-in.svelte-cduexf h1.svelte-cduexf{color:white}video.svelte-cduexf.svelte-cduexf{object-fit:cover;width:50vw;height:100vh;position:fixed}.register-p.svelte-cduexf p.svelte-cduexf{font-family:"Lexend Deca", sans-serif;font-size:16px}.register-p.svelte-cduexf a.svelte-cduexf{color:white;text-decoration:none;font-weight:bold}.error.svelte-cduexf p.svelte-cduexf{font-family:"Lexend Deca", sans-serif;margin:10px 0;color:red;font-weight:600}.error.svelte-cduexf p.svelte-cduexf{color:red;font-size:14px}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  let password = "";
  $$result.css.add(css);
  return `<div class="container svelte-cduexf" id="container"><div class="form-container sign-in svelte-cduexf"><form class="svelte-cduexf"><h1 class="svelte-cduexf" data-svelte-h="svelte-1j1gwcy">Register Page</h1> ${validate_component(SvelteTypedJs, "SvelteTypedJs").$$render(
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
        return `<p class="typing-animation svelte-cduexf" data-svelte-h="svelte-1qh7i78">Become The Best <span class="typing"></span> 👑</p>`;
      }
    }
  )} <input type="name" placeholder="Name" class="svelte-cduexf"${add_attribute("value", name, 0)}> <input type="password" placeholder="Password" class="svelte-cduexf"${add_attribute("value", password, 0)}> ${``} <button class="svelte-cduexf" data-svelte-h="svelte-9oco1z">Register</button> <div class="register-p svelte-cduexf" data-svelte-h="svelte-1t5vwq4"><p class="svelte-cduexf">Already have an account? <a href="/login" class="svelte-cduexf">Login Now!</a></p></div></form></div> <div class="toggle-container svelte-cduexf" data-svelte-h="svelte-vz7cl6"><video playsinline autoplay muted loop class="svelte-cduexf"><source src="logos.mp4" type="video/mp4"></video></div> </div>`;
});
export {
  Page as default
};
