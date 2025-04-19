import { c as createComponent, r as renderComponent, b as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_dg1IQH5B.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$Icon } from '../chunks/Layout_Cw2jJvHY.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const urlPath = "/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="grid min-h-svh place-content-center bg-gradient-to-br from-neutral-950 to-neutral-900 px-4 py-8"> <div class="mx-auto max-w-2xl text-center"> <!-- Efecto de glitch en el 404 --> <div class="relative mb-6"> <h1 class="glitch-effect text-8xl font-bold text-amber-400 md:text-9xl">\n404\n</h1> <div class="glitch-layers" aria-hidden="true"> <span class="glitch-layer">404</span> <span class="glitch-layer">404</span> <span class="glitch-layer">404</span> </div> </div> <!-- Mensaje principal --> <p class="mb-6 text-balance text-3xl font-bold tracking-tight text-neutral-200 md:text-4xl">\n\xA1UPS! P\xE1gina no encontrada\n</p> <!-- Mensaje secundario con estilo terminal --> <div class="mx-auto mb-8 max-w-md rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 text-left font-mono text-sm text-neutral-400"> <span class="block text-amber-400">$ <span class="blink">_</span></span> <span class="block">Error: Ruta no reconocida</span> <span class="block">Status: 404 Not Found</span> <span class="block mt-2">Sugerencia: Verifica la URL o navega al inicio</span> </div> <!-- Bot\xF3n con efecto ne\xF3n --> <button', ' class="group relative inline-flex items-center justify-center gap-x-2 overflow-hidden rounded-lg px-6 py-3 text-lg font-bold text-neutral-900 transition-all duration-300 hover:shadow-lg" style="background: linear-gradient(to right, #f59e0b, #f97316);"> <span class="relative z-10">Volver al inicio</span> ', ` <span class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span> </button> <!-- Efecto de part\xEDculas opcional (puedes usar una librer\xEDa como particles.js) --> <div class="absolute inset-0 -z-10 opacity-20" id="particles-js"></div> </div> </section>  <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"><\/script> <script>
    document.addEventListener('DOMContentLoaded', () => {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#f59e0b" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#f59e0b", "opacity": 0.2, "width": 1 },
                "move": { "enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out" }
            },
            "interactivity": {
                "events": { "onhover": { "enable": true, "mode": "grab" } }
            }
        });
    });
    <\/script> `])), maybeRenderHead(), addAttribute(`window.location.href='${urlPath}'`, "onclick"), renderComponent($$result2, "Icon", $$Icon, { "name": "arrowRight", "class": "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" })) })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/404.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
