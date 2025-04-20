/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/css-grid-layout-tutorial_80qqAsBm.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/flexbox-guia-completa-diseno-responsive_aXoR7fUs.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/menu-navegacion-html-css-hover-efectos_CwUU3fkQ.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/postgres-backup-restore-guide_7aFxSqfs.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/tag-cloud-tutorial_DYkohY_O.mjs';
import { c as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C_ZC2ylG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_UoTbEvCZ.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_GCAWdQl6.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allPosts = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4]);
  const allTags = allPosts.map((post) => post.frontmatter.tags || []).flat();
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const tags = Object.keys(tagCounts);
  const title = "Nube de Etiquetas";
  const subTitle = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14" data-astro-cid-os4i7owy> <div class="mx-auto max-w-2xl lg:max-w-5xl" data-astro-cid-os4i7owy> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "data-astro-cid-os4i7owy": true })} <div class="divide-y divide-neutral-300 dark:divide-neutral-700" data-astro-cid-os4i7owy> <ul class="cloud" role="navigation" aria-label="Webdev tag cloud" data-astro-cid-os4i7owy> ${tags.map((tag) => renderTemplate`<li data-astro-cid-os4i7owy>  <a${addAttribute(tagCounts[tag], "data-weight")}${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a> </li>`)} </ul> </div> </div> </section> ` })} `;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/tags/index.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
