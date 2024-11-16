/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B4aHde3m.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_E72YIkPM.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_CMZQqAdZ.mjs';
import { $ as $$Card, s as stringsCards } from '../chunks/stringsCards_Bj8e6Ce6.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const about = stringsCards.stringsAbout;
  const title = "Acerca de Nosotros";
  const subTitle = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle })} <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${about.map((item, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "icon": "", "title": item.title, "text1": item.text1, "text2": item.text2, "text3": item.text3, "key": index })}`)} </div> </div> </section> ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/about.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
