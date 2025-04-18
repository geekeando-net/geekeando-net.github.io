import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, b as renderTemplate } from './astro/server_BysZ_O6H.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro("https://www.geekeando.net");
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const { title, subTitle, align = "center", accentColor = "amber" } = Astro2.props;
  const colorVariants = {
    amber: "from-amber-400 to-amber-600",
    purple: "from-purple-400 to-pink-600",
    blue: "from-blue-400 to-cyan-600",
    green: "from-emerald-400 to-teal-600"
  };
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${align === "center" ? "text-center mx-auto" : "text-left"} max-w-3xl`, "class")} data-astro-cid-ityb2zsg> <!-- Título con gradiente dinámico --> <h1 class="text-balance text-3xl font-bold tracking-tight text-neutral-100 sm:text-4xl md:text-5xl md:leading-tight [text-wrap:balance]" data-astro-cid-ityb2zsg> <span${addAttribute(`bg-gradient-to-r ${colorVariants[accentColor]} bg-clip-text text-transparent`, "class")} data-astro-cid-ityb2zsg> ${title} </span> </h1> <!-- Subtítulo con animación sutil --> ${subTitle && renderTemplate`<p${addAttribute(`mt-4 text-pretty text-lg leading-relaxed text-neutral-400 ${align === "center" ? "mx-auto" : ""} md:max-w-[80%]`, "class")} data-astro-cid-ityb2zsg> ${subTitle} </p>`} <!-- Decoración opcional (raya decorativa) --> ${align === "center" && renderTemplate`<div${addAttribute(`mt-6 h-1 w-20 mx-auto bg-gradient-to-r ${colorVariants[accentColor]} rounded-full`, "class")} data-astro-cid-ityb2zsg></div>`} </div> `;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/TitleSection.astro", void 0);

export { $$TitleSection as $ };
