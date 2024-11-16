import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_B4aHde3m.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <h1 class="text-balance text-2xl font-bold tracking-tight text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="mt-1 text-pretty text-neutral-400"> ${subTitle} </p> </div>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/TitleSection.astro", void 0);

export { $$TitleSection as $ };
