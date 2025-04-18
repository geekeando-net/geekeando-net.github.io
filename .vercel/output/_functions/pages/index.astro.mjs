/* empty css                                 */
import { a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_DbQ_YTb6.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DGO899ao.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_l9AvUEr8.mjs';
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
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full"> <div> <h1 class="block text-balance text-3xl font-bold tracking-tight text-neutral-200 sm:text-4xl lg:text-6xl lg:leading-tight">
Disfruta de tu dia y tus hobbies con <span class="text-yellow-400">GeeKeando</span> </h1> <p class="mt-3 text-pretty text-lg leading-relaxed text-neutral-400 lg:w-4/5">
Encuentra los productos que te gustan y disfruta de tus hobbies con
            la mejor calidad y precio.
</p> </div> <div class="flex w-full"> <div class="top-12 overflow-hidden"> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "Hero", "format": "jpg", "class": "h-full w-full scale-110 object-cover object-center" })} </div> </div> </section>`;
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
