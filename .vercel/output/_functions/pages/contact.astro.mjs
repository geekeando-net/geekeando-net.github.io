import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_C_ZC2ylG.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Layout } from '../chunks/Layout_QKbNrxLE.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_BLso68J8.mjs';
import { s as stringsCards } from '../chunks/stringsCards_Cehy2Z6N.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { icon, title, items = [], link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-xl border border-neutral-800 bg-neutral-900/30 p-6 transition-all duration-300 hover:border-amber-500/30 hover:shadow-lg hover:shadow-amber-500/10"> <div class="flex items-start gap-4"> <!-- Icono --> <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400"> ${icon.startsWith("mdi:") ? renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "h-6 w-6" })}` : renderTemplate`<span class="text-xl">${icon}</span>`} </div> <!-- Contenido --> <div class="flex-1"> <h3 class="text-lg font-bold text-neutral-200">${title}</h3> <ul class="mt-2 space-y-1.5"> ${items.map((item, i) => renderTemplate`<li${addAttribute(i, "data-key")} class="text-neutral-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(item)}` })} </li>`)} </ul> ${link && renderTemplate`<a${addAttribute(link.href, "href")} class="mt-3 inline-flex items-center text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors"> ${link.text} ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })} </a>`} </div> </div> </div>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/ContactCard.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const title = "Cont\xE1ctanos";
  const subTitle = "\xBFTienes alguna pregunta o quieres colaborar con nosotros?";
  const formTitle = "Escr\xEDbenos";
  const formSubTitle = "Te responderemos en menos de 24 horas";
  const stringsContact = stringsCards.stringsContact;
  const errors = { name: "", lastName: "", email: "", phone: "", message: "" };
  let formSuccess = false;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const formData = {
      name: data.get("name")?.toString() || "",
      lastName: data.get("lastName")?.toString() || "",
      email: data.get("email")?.toString() || "",
      phone: data.get("phone")?.toString() || "",
      message: data.get("message")?.toString() || ""
    };
    if (formData.name.length < 3) errors.name = "Nombre muy corto (m\xEDn. 3 caracteres)";
    if (formData.lastName.length < 3) errors.lastName = "Apellido muy corto (m\xEDn. 3 caracteres)";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Email no v\xE1lido";
    if (formData.phone.length < 8) errors.phone = "Tel\xE9fono muy corto (m\xEDn. 8 d\xEDgitos)";
    if (formData.message.length < 10) errors.message = "Mensaje muy corto (m\xEDn. 10 caracteres)";
    if (!Object.values(errors).some(Boolean)) {
      formSuccess = true;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16"> <!-- Encabezado con estilo --> <div class="mx-auto max-w-4xl text-center"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "accentColor": "amber" })} </div> <!-- Contenido principal --> <div class="mt-12 grid items-start gap-8 grid-cols-1 lg:grid-cols-2 lg:gap-12"> <!-- Formulario mejorado --> <div class="rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-neutral-900/30 p-6 sm:p-8 shadow-lg shadow-neutral-950/50"> <h2 class="mb-6 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600"> ${formTitle} </h2> ${formSuccess ? renderTemplate`<!-- Mensaje de éxito -->
                    <div class="rounded-lg bg-green-900/30 border border-green-800/50 p-6 text-center"> <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20 mb-4"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:check-circle", "class": "h-6 w-6 text-green-400" })} </div> <h3 class="text-lg font-medium text-green-400">¡Mensaje enviado!</h3> <p class="mt-2 text-sm text-green-300">Gracias por contactarnos. Te responderemos pronto.</p> <button onclick="window.location.href='/contacto'" class="mt-4 inline-flex items-center rounded-lg bg-green-900/40 px-4 py-2 text-sm font-medium text-green-300 hover:bg-green-800/30 border border-green-800/50">
Enviar otro mensaje
</button> </div>` : renderTemplate`<form method="POST" class="space-y-5"> <!-- Grid de nombres --> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2"> <div> <label for="name" class="mb-2 block text-sm font-medium text-neutral-300">
Nombre *
</label> <input type="text" id="name" name="name"${addAttribute(`block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.name ? "border-red-500 bg-red-900/20 text-red-200 placeholder-red-400 focus:ring-red-500" : "border-neutral-700 bg-neutral-800/50 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:ring-amber-400/30"}`, "class")} placeholder="Tu nombre" required> ${errors.name && renderTemplate`<p class="mt-1 text-xs text-red-400">${errors.name}</p>`} </div> <div> <label for="lastName" class="mb-2 block text-sm font-medium text-neutral-300">
Apellido *
</label> <input type="text" id="lastName" name="lastName"${addAttribute(`block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-500 bg-red-900/20 text-red-200 placeholder-red-400 focus:ring-red-500" : "border-neutral-700 bg-neutral-800/50 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:ring-amber-400/30"}`, "class")} placeholder="Tu apellido" required> ${errors.lastName && renderTemplate`<p class="mt-1 text-xs text-red-400">${errors.lastName}</p>`} </div> </div> <!-- Email --> <div> <label for="email" class="mb-2 block text-sm font-medium text-neutral-300">
Email *
</label> <input type="email" id="email" name="email" autocomplete="email"${addAttribute(`block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 bg-red-900/20 text-red-200 placeholder-red-400 focus:ring-red-500" : "border-neutral-700 bg-neutral-800/50 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:ring-amber-400/30"}`, "class")} placeholder="tucorreo@ejemplo.com" required> ${errors.email && renderTemplate`<p class="mt-1 text-xs text-red-400">${errors.email}</p>`} </div> <!-- Teléfono --> <div> <label for="phone" class="mb-2 block text-sm font-medium text-neutral-300">
Teléfono *
</label> <input type="tel" id="phone" name="phone"${addAttribute(`block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.phone ? "border-red-500 bg-red-900/20 text-red-200 placeholder-red-400 focus:ring-red-500" : "border-neutral-700 bg-neutral-800/50 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:ring-amber-400/30"}`, "class")} placeholder="+1 234 567 890" required> ${errors.phone && renderTemplate`<p class="mt-1 text-xs text-red-400">${errors.phone}</p>`} </div> <!-- Mensaje --> <div> <label for="message" class="mb-2 block text-sm font-medium text-neutral-300">
Mensaje *
</label> <textarea id="message" name="message" rows="5"${addAttribute(`block w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 ${errors.message ? "border-red-500 bg-red-900/20 text-red-200 placeholder-red-400 focus:ring-red-500" : "border-neutral-700 bg-neutral-800/50 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:ring-amber-400/30"}`, "class")} placeholder="Cuéntanos sobre tu proyecto o consulta..." required></textarea> ${errors.message && renderTemplate`<p class="mt-1 text-xs text-red-400">${errors.message}</p>`} </div> <!-- Botón de envío --> <div class="pt-2"> <button type="submit" class="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-3 font-bold text-neutral-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300"> <span class="relative z-10">Enviar mensaje</span> <span class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:send", "class": "ml-2 h-5 w-5 text-neutral-900 transition-transform duration-300 group-hover:translate-x-1" })} </button> </div> <p class="text-center text-sm text-neutral-500"> ${formSubTitle} </p> </form>`} </div> <!-- Información de contacto --> <div class="space-y-1 hidden lg:block"> ${stringsContact.map((item, index) => renderTemplate`${renderComponent($$result2, "ContactCard", $$ContactCard, { "icon": item.icon, "title": item.title, "items": [
    item.text1,
    item.text2,
    item.text3
  ].filter(Boolean), "link": item.link, "key": index })}`)} <!-- Mapa o imagen de ubicación --> </div> <div class="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 col-span-1 lg:col-span-2 shadow-lg shadow-neutral-900/50"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.3517743557354!2d-65.2600836!3d-19.0482651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf36656fb06b%3A0x5e4f23584d3c808f!2sPl.%2025%20de%20Mayo%2C%20Sucre!5e0!3m2!1ses-419!2sbo!4v1745005183472!5m2!1ses-419!2sbo" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" class="pointer-events-none select-none"></iframe> </div> </div> </section> ` })}`;
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
