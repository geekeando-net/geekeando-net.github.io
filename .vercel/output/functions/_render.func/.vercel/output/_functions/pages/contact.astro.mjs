/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B4aHde3m.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_E72YIkPM.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_CMZQqAdZ.mjs';
import { $ as $$Card, s as stringsCards } from '../chunks/stringsCards_Bj8e6Ce6.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Contactanos";
  const subTitle = "\xBFTienes alguna pregunta o quieres hablar de un proyecto?. Completa el formulario a continuacion o utiliza la informacion de contacto para comunicarte con nosotros";
  const formTitle = "LLene el siguiente formulario";
  const formSubTitle = "Le responderemos en 1-2 d\xEDas laborables.";
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  const stringsContact = stringsCards.stringsContact;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle })} </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-300"> ${formTitle} </h2> <form> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> <div> <label for="hs-firstname-contacts" class="sr-only">
Nombre
</label> <input type="text" name="hs-firstname-contacts" id="hs-firstname-contacts" class="block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 border-neutral-600 bg-neutral-700/30 text-neutral-300 placeholder:text-neutral-400 focus:ring-1" placeholder="Nombre"> </div> <div> <label for="hs-lastname-contacts" class="sr-only">
Apellido
</label> <input type="text" name="hs-lastname-contacts" id="hs-lastname-contacts" class="block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 border-neutral-600 bg-neutral-700/30 text-neutral-300 placeholder:text-neutral-400 focus:ring-1" placeholder="Apellido"> </div> </div> <div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label for="hs-email-contacts" class="sr-only">
Email
</label> <!-- Email input field --> <input type="email" name="hs-email-contacts" id="hs-email-contacts" autocomplete="email" class="block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 border-neutral-600 bg-neutral-700/30 text-neutral-300 placeholder:text-neutral-400 focus:ring-1" placeholder="Email"> </div> <div> <label for="hs-phone-number" class="sr-only">
Telefono
</label> <input type="tel" name="hs-phone-number" id="hs-phone-number" class="block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 border-neutral-600 bg-neutral-700/30 text-neutral-300 placeholder:text-neutral-400 focus:ring-1" placeholder="Telefono"> </div> <div> <label for="hs-about-contacts" class="sr-only">
Mensaje
</label> <textarea id="hs-about-contacts" name="hs-about-contacts" rows="4" class="block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 border-neutral-600 bg-neutral-700/30 text-neutral-300 placeholder:text-neutral-400 focus:ring-1" placeholder="Detalle"></textarea> </div> </div> <div class="mt-4 grid"> <button type="submit" class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300 border border-transparent bg-yellow-400 focus:outline-none hover:bg-yellow-500 2xl:text-base disabled:pointer-events-none disabled:opacity-50 ring-zinc-200">
Enviar
</button> </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> </div> </form> </div> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${stringsContact.map((item, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "icon": item.icon, "title": item.title, "text1": item.text1, "text2": item.text2, "text3": item.text3, "link": item.link, "svg": arrowSVG, "key": index })}`)} </div> </div> </section> ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/contact.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contact,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
