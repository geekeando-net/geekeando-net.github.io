/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_C_ZC2ylG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BogMbZCy.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DtmZ008b.mjs';
export { renderers } from '../renderers.mjs';

const heroImage = new Proxy({"src":"/_astro/hero.VzD7ZRpO.jpg","width":612,"height":459,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/draexx/Proyecto/geekeando-main/src/assets/images/hero.jpg";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full bg-gradient-to-br from-neutral-900/90 via-neutral-900 to-neutral-950/80 rounded-xl border border-neutral-800/50"> <div class="space-y-6"> <h1 class="text-balance text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl lg:leading-tight">
Disfruta de tu día y tus hobbies con <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Geekeando</span> </h1> <p class="text-pretty text-lg leading-relaxed text-neutral-300 lg:w-4/5">
Encuentra los productos que te gustan y disfruta de tus hobbies con la mejor calidad y precio.
</p> <div class="flex flex-wrap gap-4 pt-2"> <a href="/blog" class="rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 font-medium text-neutral-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">
Explorar artículos
</a> <a href="/comunidad" class="rounded-lg border-2 border-neutral-600 px-6 py-3 font-medium text-neutral-200 hover:border-amber-500 hover:text-amber-500 transition-all duration-300">
Únete a la comunidad
</a> </div> </div> <div class="relative overflow-hidden rounded-xl shadow-2xl shadow-neutral-900/50"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "Persona disfrutando de hobbies geek (videojuegos, c\xF3mics, tecnolog\xEDa)", "format": "avif", "loading": "eager", "class": "h-full w-full object-cover object-center hover:scale-[1.02] transition-transform duration-500", "widths": [600, 800, 1200], "sizes": "(max-width: 768px) 100vw, 50vw" })} <!-- Efecto de overlay para mejorar legibilidad del texto --> <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent md:bg-gradient-to-r"></div> </div> </section>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to GeekEando" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, {})} ${maybeRenderHead()}<section> <h1 class="bg-gray-100 p-8">Bienvenido a GeekEando</h1> <p class="text-center mt-4">tu fuente de productos  Geek</p> </section> ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/index.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
