import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML, F as Fragment } from './astro/server_DbQ_YTb6.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Layout_DGO899ao.mjs';

const $$Astro = createAstro("https://www.geekeando.net");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { icon, title, text1, text2, text3, link, svg } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-x-7 py-6"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon })}`} <div class="grow"> <h3 class="font-bold text-neutral-300"> ${title} </h3> <p class="mt-1 text-sm text-neutral-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text1)}` })} </p> <p class="mt-1 text-sm text-neutral-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text2)}` })} </p> <p class="mt-1 text-sm text-neutral-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text3)}` })} </p> ${link && renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium outline-none transition duration-300  focus-visible:ring text-zinc-400 ring-zinc-200 hover:text-zinc-200 focus:outline-none focus:ring-1"${addAttribute(link.href, "href")}> ${link.text} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(svg)}` })} </a>`} </div> </div>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/Card.astro", void 0);

const stringsAbout = [
  {
    title: "Geekeando: Tu universo geek al alcance de un clic.",
    text1: "Somos una comunidad apasionada que te invita a sumergirte en el fascinante mundo geek. En Geekeando, encontrarás todo lo que necesitas para alimentar tu curiosidad y conectar con otros amantes de la cultura pop.",
    text2: "",
    text3: ""
  },
  {
    title: "Nuestra misión",
    text1: "<b>Informar:</b> Te mantenemos actualizado sobre las últimas novedades del mundo geek, desde videojuegos y anime hasta ciencia ficción y tecnología.",
    text2: "<b>Crear comunidad:</b> Fomentamos un espacio donde puedas compartir tus intereses, conocer a personas con tus mismas pasiones y participar en conversaciones enriquecedoras.",
    text3: "<b>Inspirar:</b> Despertamos tu imaginación y te motivamos a explorar nuevos horizontes dentro del universo geek."
  },
  {
    title: "¿A quién va dirigido Geekeando?",
    text1: "A todos aquellos que sienten curiosidad por el mundo geek y desean ampliar sus conocimientos. Si eres un fanático de los videojuegos, el anime, los cómics, la ciencia ficción o la tecnología, este es tu lugar.",
    text2: "",
    text3: ""
  },
  {
    title: "¿Qué nos hace únicos?",
    text1: "<b>Contenido de calidad:</b> Ofrecemos artículos, reseñas y análisis rigurosos y entretenidos.",
    text2: "<b>Comunidad activa:</b> Nuestra comunidad es un espacio acogedor donde todos son bienvenidos.",
    text3: "<b>Pasión por lo geek:</b> Nuestro equipo está formado por verdaderos apasionados que comparten tu misma afición."
  }
];
const stringsContact = [
  {
    icon: "question",
    title: "Base de Conocimiento",
    text1: "Consulte todos los artículos de nuestra base de conocimientos.",
    text2: "",
    text3: "",
    link: { href: "#", text: "Visitar guías y tutoriales" }
  },
  {
    icon: "chatBubble",
    title: "FAQ",
    text1: "Explore nuestras preguntas frecuentes para obtener respuestas rápidas y claras a las dudas más comunes.",
    text2: "",
    text3: "",
    link: { href: "faq", text: "Visitar FAQ" }
  },
  {
    icon: "mapPin",
    title: "Visita Nuestras Oficinas",
    text1: "GeekEando.",
    text2: "<i>Av. Siempre Viva 742, Springfield</i>",
    text3: ""
  },
  {
    icon: "envelopeOpen",
    title: "Contactenos por correo electrónico",
    text1: "¿Prefiere la palabra escrita? Envíanos un correo electrónico.",
    text2: "",
    text3: "",
    link: { href: "mailto:draexx@geekeando.net", text: "draexx@geekeando.net" }
  }
];
const stringsCards = {
  stringsAbout,
  stringsContact
};

export { $$Card as $, stringsCards as s };
