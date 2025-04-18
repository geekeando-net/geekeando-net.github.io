/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/css-grid-layout-tutorial_LCnZXZBr.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/flexbox-guia-completa-diseno-responsive_rtDtmt7M.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/menu-navegacion-html-css-hover-efectos_CaaKL-tV.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/postgres-backup-restore-guide_Bn9MfsvZ.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/tag-cloud-tutorial_DDv57bkz.mjs';
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DbQ_YTb6.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_DGO899ao.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_htzMzl_6.mjs';
import { $ as $$SinglePost } from '../chunks/SinglePost_BTiV0O3j.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const allPostsFile = /* #__PURE__ */ Object.assign({"/src/pages/posts/css-grid-layout-tutorial.md": __vite_glob_0_0,"/src/pages/posts/flexbox-guia-completa-diseno-responsive.md": __vite_glob_0_1,"/src/pages/posts/menu-navegacion-html-css-hover-efectos.md": __vite_glob_0_2,"/src/pages/posts/postgres-backup-restore-guide.md": __vite_glob_0_3,"/src/pages/posts/tag-cloud-tutorial.md": __vite_glob_0_4});
  const allPosts = Object.entries(allPostsFile).map(([filePath, post]) => {
    const flatPost = Object.assign({}, post);
    const slug = filePath.replace("/src/pages/posts/", "").replace(".md", "");
    const url = `/posts/${slug}`;
    return {
      ...flatPost,
      // Incluye el contenido del módulo
      url
      // Convierte el nombre del archivo en una URL
    };
  });
  const title = "Blog";
  const subTitle = "";
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14"> <div class="mx-auto max-w-2xl lg:max-w-5xl"> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle })} </div> <div class="divide-y divide-neutral-300 dark:divide-neutral-700"> ${allPosts.map((post, index) => renderTemplate`${renderComponent($$result2, "SinglePost", $$SinglePost, { "icon": "", "title": post.frontmatter?.title || "Sin Titulo", "text": post.frontmatter?.description, "link": { href: post.url, text: "Continuar Leyendo" }, "svg": arrowSVG, "image": post.frontmatter?.image, "key": index })}`)} </div> </section> ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/blog.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blog,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
