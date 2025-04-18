/* empty css                                 */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DbQ_YTb6.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DGO899ao.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_htzMzl_6.mjs';
import { $ as $$Card, s as stringsCards } from '../chunks/stringsCards_CjeQCOh0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.geekeando.net");
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const title = "Contactanos";
  const subTitle = "\xBFTienes alguna pregunta o quieres hablar de un proyecto?. Completa el formulario a continuacion o utiliza la informacion de contacto para comunicarte con nosotros";
  const formTitle = "LLene el siguiente formulario";
  const formSubTitle = "Le responderemos en 1-2 d\xEDas laborables.";
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  const stringsContact = stringsCards.stringsContact;
  const errors = { name: "", lastName: "", email: "", phone: "", message: "" };
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const name = data.get("hs-firstname-contacts");
      const lastName = data.get("hs-lastname-contacts");
      const email = data.get("hs-email-contacts");
      const phone = data.get("hs-phone-number");
      const message = data.get("hs-about-contacts");
      if (typeof name !== "string" || name.length < 3) {
        errors.name = "El nombre es requerido y debe tener al menos 3 caracteres";
      }
      if (typeof lastName !== "string" || lastName.length < 3) {
        errors.lastName = "El apellido es requerido y debe tener al menos 3 caracteres";
      }
      if (typeof email !== "string" || !email.includes("@")) {
        errors.email = "El email es requerido y debe ser v\xE1lido";
      }
      if (typeof phone !== "string" || phone.length < 8) {
        errors.phone = "El tel\xE9fono es requerido y debe tener al menos 7 caracteres";
      }
      if (typeof message !== "string" || message.length < 10) {
        errors.message = "El mensaje es requerido y debe tener al menos 10 caracteres";
      }
      if (Object.values(errors).some((value) => value)) {
        throw new Error("Por favor, corrija los errores en el formulario");
      }
      console.log(name, lastName, email, phone, message);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle })} </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16"> <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8"> <h2 class="mb-8 text-xl font-bold text-neutral-300"> ${formTitle} </h2> <form method="post"> <div class="grid gap-4"> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> <div> <label for="hs-firstname-contacts" class="sr-only">
Nombre
</label> <input type="text" name="hs-firstname-contacts" id="hs-firstname-contacts"${addAttribute(`block w-full rounded-lg border px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 ${errors.name ? "border-red-500 bg-red-50 text-neutral-800" : "border-neutral-600 bg-neutral-700/30"} text-neutral-300 placeholder:text-neutral-400 focus:ring-1`, "class")} placeholder="Nombre"> </div> <div> <label for="hs-lastname-contacts" class="sr-only">
Apellido
</label> <input type="text" name="hs-lastname-contacts" id="hs-lastname-contacts"${addAttribute(`block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 ${errors.lastName ? "border-red-500 bg-red-50 text-neutral-800" : "border-neutral-600 bg-neutral-700/30"} text-neutral-300 placeholder:text-neutral-400 focus:ring-1`, "class")} placeholder="Apellido"> </div> </div> <div> <!-- Label for the email input field, visually hidden but accessible to screen readers --> <label for="hs-email-contacts" class="sr-only">
Email
</label> <!-- Email input field --> <input type="email" name="hs-email-contacts" id="hs-email-contacts" autocomplete="email"${addAttribute(`block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50${errors.email ? "border-red-500 bg-red-50 text-neutral-800" : " border-neutral-600 bg-neutral-700/30"} text-neutral-300 placeholder:text-neutral-400 focus:ring-1`, "class")} placeholder="Email"> </div> <div> <label for="hs-phone-number" class="sr-only">
Telefono
</label> <input type="tel" name="hs-phone-number" id="hs-phone-number"${addAttribute(`block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 ${errors.phone ? "border-red-500 bg-red-50 text-neutral-800" : "border-neutral-600 bg-neutral-700/30"} text-neutral-300 placeholder:text-neutral-400 focus:ring-1`, "class")} placeholder="Telefono"> </div> <div> <label for="hs-about-contacts" class="sr-only">
Mensaje
</label> <textarea id="hs-about-contacts" name="hs-about-contacts" rows="4"${addAttribute(`block w-full rounded-lg border bg-neutral-50 px-4 py-3 text-sm focus:border-neutral-200 focus:outline-none focus:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 ${errors.message ? "border-red-500 bg-red-50 text-neutral-800" : "border-neutral-600 bg-neutral-700/30"} text-neutral-300 placeholder:text-neutral-400 focus:ring-1`, "class")} placeholder="Detalle"></textarea> </div> </div> <div class="mt-4 grid"> <button type="submit" class="inline-flex w-full items-center justify-center gap-x-2 rounded-lg px-4 py-3 text-sm font-bold text-neutral-700 focus-visible:ring outline-none transition duration-300 border border-transparent bg-yellow-400 focus:outline-none hover:bg-yellow-500 2xl:text-base disabled:pointer-events-none disabled:opacity-50 ring-zinc-200">
Enviar
</button> </div> <div class="mt-3 text-center"> <p class="text-sm text-neutral-600 dark:text-neutral-400"> ${formSubTitle} </p> <p${addAttribute(`${Object.values(errors).some((msg) => msg) ? "visible text-neutral-400" : "invisible"}`, "class")}>Por favor, corrija los errores en el formulario</p> </div> </form> </div> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${stringsContact.map((item, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "icon": item.icon, "title": item.title, "text1": item.text1, "text2": item.text2, "text3": item.text3, "link": item.link, "svg": arrowSVG, "key": index })}`)} </div> </div> </section> ` })}`;
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
