/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_D9GjGfaR.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_Bah5QcA6.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_DPt04_qM.mjs';
import { $ as $$IconPart } from '../chunks/IconPart_CRQDEQNZ.mjs';
/* empty css                                 */
import { s as stringsCards } from '../chunks/stringsCards_B1d3POVN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AboutCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AboutCard;
  const {
    icon = "\u{1F4CC}",
    title,
    text1,
    text2,
    text3,
    link,
    svg,
    cardClass = "",
    accentColor = "amber"
  } = Astro2.props;
  const colorVariants = {
    amber: "text-amber-400 border-amber-400/20",
    purple: "text-purple-400 border-purple-400/20",
    blue: "text-blue-400 border-blue-400/20",
    green: "text-emerald-400 border-emerald-400/20"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`group relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:shadow-lg ${colorVariants[accentColor]} ${cardClass}`, "class")} data-astro-cid-6yrnsrat> <!-- Icono con efecto flotante --> ${icon && renderTemplate`<div${addAttribute(`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border bg-gradient-to-br from-neutral-900/50 to-neutral-900/80 text-2xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md ${colorVariants[accentColor]}`, "class")} data-astro-cid-6yrnsrat> ${icon.startsWith("mdi:") ? renderTemplate`${renderComponent($$result, "Icon", $$IconPart, { "name": icon, "class": "h-6 w-6", "data-astro-cid-6yrnsrat": true })}` : renderTemplate`<span data-astro-cid-6yrnsrat>${icon}</span>`} </div>`} <!-- Contenido --> <div class="flex-grow" data-astro-cid-6yrnsrat> <!-- Título con efecto gradiente --> <h3${addAttribute(`mb-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${accentColor === "amber" ? "from-amber-400 to-amber-600" : accentColor === "purple" ? "from-purple-400 to-pink-500" : "from-blue-400 to-cyan-500"}`, "class")} data-astro-cid-6yrnsrat> ${title} </h3> <!-- Textos con animación de aparición --> <div class="space-y-3" data-astro-cid-6yrnsrat> ${text1 && renderTemplate`<p class="text-neutral-300 transition-all duration-300 group-hover:text-neutral-100" data-astro-cid-6yrnsrat> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text1)}` })} </p>`} ${text2 && renderTemplate`<p class="text-neutral-400 transition-all duration-300 group-hover:text-neutral-300" data-astro-cid-6yrnsrat> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text2)}` })} </p>`} ${text3 && renderTemplate`<p class="text-neutral-500 transition-all duration-300 group-hover:text-neutral-400" data-astro-cid-6yrnsrat> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text3)}` })} </p>`} </div> </div> <!-- Enlace/Botón --> ${link && renderTemplate`<div class="mt-6" data-astro-cid-6yrnsrat> <a${addAttribute(link.href, "href")}${addAttribute(`inline-flex items-center gap-x-1 text-sm font-medium transition-all duration-300 ${accentColor === "amber" ? "text-amber-400 hover:text-amber-300" : "text-purple-400 hover:text-purple-300"}`, "class")}${addAttribute(`${link.text} sobre ${title}`, "aria-label")} data-astro-cid-6yrnsrat> ${link.text} ${svg ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(svg)}` })}` : renderTemplate`${renderComponent($$result, "Icon", $$IconPart, { "name": "mdi:arrow-right", "class": "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1", "data-astro-cid-6yrnsrat": true })}`} </a> </div>`} </div> `;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/AboutCard.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const about = stringsCards.stringsAbout;
  const title = "Acerca de Nosotros";
  const subTitle = "Tu universo geek al alcance de un clic";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"> <div class="mx-auto max-w-4xl text-center"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "accentColor": "purple", "Cambio": true, "de": true, "color": true, "para": true, "diferenciar": true, "secci\xF3n": true })} <div class="mt-8 rounded-xl bg-gradient-to-r from-purple-900/30 to-neutral-900/50 p-8 border border-purple-800/30"> <p class="text-lg text-neutral-300">
Somos una comunidad apasionada que te invita a sumergirte en el fascinante mundo geek. 
                    En Geekeando, encontrarás todo lo que necesitas para alimentar tu curiosidad y conectar 
                    con otros amantes de la cultura pop.
</p> </div> </div> </section> <section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-10"> <div class="mx-auto max-w-4xl"> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${about.map((item, index) => renderTemplate`${renderComponent($$result2, "Card", $$AboutCard, { "icon": item.icon || "\u{1F4CC}", "title": item.title, "text1": item.text1, "text2": item.text2, "text3": item.text3, "key": index, "accentColor": "purple" })}`)} </div> </div> </section> ` })}`;
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
