import { n as noop, b as assign, i as identity, c as create_ssr_component, a as subscribe } from "../../chunks/ssr.js";
import { w as writable } from "../../chunks/index2.js";
/* empty css                */const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const authenticated = writable(false);
const authenticatedUser = writable(null);
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: 'h1.svelte-1xdj161.svelte-1xdj161{font-family:"Lexend Deca", sans-serif;font-size:1.8rem;color:var(--fg-200);letter-spacing:2px}.icon-flipped.svelte-1xdj161.svelte-1xdj161{transform:scaleX(-1);-moz-transform:scaleX(-1);-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1)}.layout.svelte-1xdj161.svelte-1xdj161{height:100%;display:grid;grid-template-rows:auto 1fr;align-items:center;padding:2rem}nav.svelte-1xdj161.svelte-1xdj161{display:flex;justify-content:space-between}.nav-link.svelte-1xdj161 a.svelte-1xdj161{color:var(--fg-200);text-decoration:none;font-size:20px;padding:0 5px;cursor:pointer;opacity:0.4;transition:all 0.3s ease}.nav-link.svelte-1xdj161 a.svelte-1xdj161:hover{cursor:pointer;opacity:1}.nav-link.svelte-1xdj161 button.svelte-1xdj161{font-size:18px}.game.svelte-1xdj161.svelte-1xdj161{position:relative}.game.svelte-1xdj161 .input.svelte-1xdj161{position:absolute;opacity:0}.game.svelte-1xdj161 .time.svelte-1xdj161{position:absolute;top:-48px;font-size:1.5rem;color:var(--primary);opacity:0;transition:all 0.3s ease}.game[data-game="in progress"].svelte-1xdj161 .time.svelte-1xdj161{opacity:1}.words.svelte-1xdj161.svelte-1xdj161{--line-height:1em;--lines:3;width:100%;max-height:calc(var(--line-height) * var(--lines) * 1.42);display:flex;flex-wrap:wrap;gap:0.6em;position:relative;font-size:1.5rem;line-height:var(--line-height);overflow:hidden;user-select:none}.letter.svelte-1xdj161.svelte-1xdj161{opacity:0.4;transition:all 0.3s ease;&[data-letter="correct"] {\n            opacity: 0.8;\n        };&[data-letter="incorrect"] {\n            color: var(--primary);\n            opacity: 1;\n        };&[data-letter="skipped"] {\n            text-decoration: underline rgb(255, 55, 0);\n        }}.caret.svelte-1xdj161.svelte-1xdj161{position:absolute;height:1.8rem;top:0;border-right:3px solid #f8de22;animation:svelte-1xdj161-caret 1s infinite;transition:all 0.2s ease}@keyframes svelte-1xdj161-caret{0%,to{opacity:0}50%{opacity:1}}.results.svelte-1xdj161 .title.svelte-1xdj161{font-size:2rem;color:var(--fg-200)}.results.svelte-1xdj161 .score.svelte-1xdj161{font-size:4rem;color:var(--primary)}.reset.svelte-1xdj161.svelte-1xdj161{width:100%;display:grid;justify-content:center;margin-top:2rem}.user.svelte-1xdj161.svelte-1xdj161{margin:60px 0}.user.svelte-1xdj161 h3.svelte-1xdj161{font-family:"Lexand Deca", sans-serif;font-size:24px}.loader.svelte-1xdj161.svelte-1xdj161{border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid #234c67;width:90px;height:90px;-webkit-animation:svelte-1xdj161-spin 2s linear infinite;animation:svelte-1xdj161-spin 2s linear infinite}.loader-layout.svelte-1xdj161.svelte-1xdj161{display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column;gap:2rem}@-webkit-keyframes svelte-1xdj161-spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes svelte-1xdj161-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.logo.svelte-1xdj161 h1.svelte-1xdj161{margin-left:3.5em;margin-top:0.8em}.logo.svelte-1xdj161 img.svelte-1xdj161{position:absolute;top:10px;width:130px;height:130px}.social-media.svelte-1xdj161.svelte-1xdj161{display:flex;justify-content:center;align-items:center;gap:2em}.social-icon.svelte-1xdj161 a.svelte-1xdj161,i.svelte-1xdj161.svelte-1xdj161{font-family:"Lexand Deca" sans-serif;text-decoration:none;color:rgb(236, 229, 229);padding:5px}.social-icon.svelte-1xdj161.svelte-1xdj161{opacity:0.5;transition:all 0.3s}.social-icon.svelte-1xdj161.svelte-1xdj161:hover{opacity:1}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_authenticatedUser;
  let $$unsubscribe_accuracy;
  let $$unsubscribe_wordsPerMinute;
  $$unsubscribe_authenticatedUser = subscribe(authenticatedUser, (value) => value);
  let wordsPerMinute = tweened(0, { delay: 300, duration: 1e3 });
  $$unsubscribe_wordsPerMinute = subscribe(wordsPerMinute, (value) => value);
  let accuracy = tweened(0, { delay: 1300, duration: 1e3 });
  $$unsubscribe_accuracy = subscribe(accuracy, (value) => value);
  authenticated.subscribe((a) => a);
  $$result.css.add(css);
  $$unsubscribe_authenticatedUser();
  $$unsubscribe_accuracy();
  $$unsubscribe_wordsPerMinute();
  return `${`<div class="loader-layout svelte-1xdj161" data-svelte-h="svelte-40hadk"><div class="loader svelte-1xdj161"></div> <h1 class="svelte-1xdj161">Wait Master 🙏🏻</h1></div>`}`;
});
export {
  Page as default
};
