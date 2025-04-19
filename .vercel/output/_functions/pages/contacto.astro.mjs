import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_dg1IQH5B.mjs';
import 'kleur/colors';
import { b as $$Icon, $ as $$Layout } from '../chunks/Layout_Cw2jJvHY.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_Bourx7aR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { variant = "standard", fields = [] } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form class="space-y-5"> ${fields.includes("name") && renderTemplate`<div> <label class="mb-2 block text-sm font-medium text-neutral-300">Nombre completo *</label> <input type="text" class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-neutral-200 placeholder-neutral-500 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30" required> </div>`} ${fields.includes("project_type") && variant === "priority" && renderTemplate`<div> <label class="mb-2 block text-sm font-medium text-neutral-300">Tipo de proyecto *</label> <select class="w-full rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-3 text-neutral-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30"> <option value="">Seleccionar...</option> <option>Desarrollo Web</option> <option>Diseño Gráfico</option> <option>Marketing Digital</option> <option>Consultoría</option> </select> </div>`} <!-- Más campos según variant... --> <button type="submit"${addAttribute(`w-full rounded-lg py-3 px-4 font-bold transition-all ${variant === "priority" ? "bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 hover:shadow-lg hover:shadow-amber-500/20" : "bg-neutral-800 text-neutral-200 hover:bg-neutral-700"}`, "class")}> ${variant === "priority" ? renderTemplate`<span class="flex items-center justify-center gap-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:send-clock", "class": "h-5 w-5" })}
Enviar solicitud urgente
</span>` : "Enviar mensaje"} </button> </form>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/ContactForm.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const title = "Contacto Prioritario";
  const subTitle = "\xBFNecesitas ayuda urgente o tienes un proyecto especial? Nuestro equipo te responder\xE1 en menos de 12 horas.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-16 sm:px-6 lg:px-8 lg:py-20"> <!-- Hero Section --> <div class="mx-auto max-w-3xl text-center mb-12"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "accentColor": "amber" })} </div> <!-- Formulario Destacado --> <div class="mx-auto max-w-2xl"> <div class="relative rounded-xl border-2 border-amber-500/30 bg-gradient-to-br from-neutral-900 to-neutral-950 p-1 shadow-lg shadow-amber-500/10"> <div class="rounded-lg bg-neutral-900/80 p-8 backdrop-blur-sm"> <div class="mb-6 flex items-center gap-3"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:star-circle", "class": "h-8 w-8 text-amber-400" })} <h3 class="text-xl font-bold text-amber-400">Atención Prioritara</h3> </div> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "variant": "priority", "fields": ["name", "email", "phone", "project_type", "urgency"] })} </div> <!-- Badge de garantía --> <div class="absolute -top-3 -right-3"> <span class="inline-flex items-center gap-x-1.5 rounded-full bg-amber-900 px-3 py-1 text-xs font-medium text-amber-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:clock-fast", "class": "h-4 w-4" })}
Respuesta en ≤12h
</span> </div> </div> </div> <!-- Soporte 24/7 (opcional) --> <div class="mt-16 text-center"> <div class="inline-flex items-center gap-x-3 rounded-full border border-purple-500/30 bg-purple-900/20 px-6 py-3 text-purple-300"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:headset", "class": "h-6 w-6" })} <span class="font-medium text-neutral-400">Soporte VIP: <a href="tel:+123456789" class="text-amber-400 hover:underline">+591 (234) 567-89</a></span> </div> </div> </section> ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/contacto.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
