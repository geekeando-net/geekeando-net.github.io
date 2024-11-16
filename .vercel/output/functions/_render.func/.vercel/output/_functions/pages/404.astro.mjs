/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B4aHde3m.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Layout } from '../chunks/Layout_E72YIkPM.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  const urlPath = "/";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="grid h-svh place-content-center"> <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16"> <div class="mx-auto max-w-screen-sm text-center"> <h1 class="mb-4 text-7xl font-extrabold text-yellow-400 lg:text-9xl">
404
</h1> <p class="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-400 md:text-4xl">
La pagina que buscas no existe
</p> <button class="inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-50 ring-zinc-200 transition duration-300 focus-visible:ring outline-none border border-transparent bg-orange-400 hover:bg-orange-500 active:bg-orange-500 focus:outline-none disabled:pointer-events-none disabled:opacity-50 2xl:text-base"${addAttribute(`window.location.href='${urlPath}'`, "onclick")}>
Go back!
${renderComponent($$result2, "Icon", $$Icon, { "name": "arrowRight" })} </button> <!-- <div class="mb-4 text-balance text-3xl font-bold tracking-tight text-neutral-400 md:text-4xl">
                    <a href="/" class="text-blue-600 hover:underline">Volver al inicio</a>
                </div> --> </div> </div> </section> ` })}`;
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
