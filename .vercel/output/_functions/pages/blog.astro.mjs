/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/css-grid-layout-tutorial_BIE7j4kP.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/flexbox-guia-completa-diseno-responsive_cRPILaKW.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/menu-navegacion-html-css-hover-efectos_CTys_Jmy.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/postgres-backup-restore-guide_3fh43cjR.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/tag-cloud-tutorial_DPxt1TDm.mjs';
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BysZ_O6H.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CD72lvyj.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_bTZX-OIn.mjs';
import { $ as $$SinglePost } from '../chunks/SinglePost_BgMSk_0U.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.geekeando.net");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
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
  const allPostsTags = await Astro2.glob(/* #__PURE__ */ Object.assign({"/src/pages/posts/css-grid-layout-tutorial.md": () => import('../chunks/css-grid-layout-tutorial_BIE7j4kP.mjs').then(n => n._),"/src/pages/posts/flexbox-guia-completa-diseno-responsive.md": () => import('../chunks/flexbox-guia-completa-diseno-responsive_cRPILaKW.mjs').then(n => n._),"/src/pages/posts/menu-navegacion-html-css-hover-efectos.md": () => import('../chunks/menu-navegacion-html-css-hover-efectos_CTys_Jmy.mjs').then(n => n._),"/src/pages/posts/postgres-backup-restore-guide.md": () => import('../chunks/postgres-backup-restore-guide_3fh43cjR.mjs').then(n => n._),"/src/pages/posts/tag-cloud-tutorial.md": () => import('../chunks/tag-cloud-tutorial_DPxt1TDm.mjs').then(n => n._)}), () => "@posts/*.md");
  const allTags = allPostsTags.map((post) => post.frontmatter.tags).flat();
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const tags = Object.keys(tagCounts);
  const title = "Blog Geekeando";
  const subTitle = "Descubre art\xEDculos sobre tecnolog\xEDa, gaming y cultura geek";
  const arrowSVG = `<svg
class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ijnerlr2": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14" data-astro-cid-ijnerlr2> <div class="mx-auto max-w-2xl lg:max-w-5xl mb-12 text-center" data-astro-cid-ijnerlr2> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "data-astro-cid-ijnerlr2": true })} <!-- Filtros por categoría --> <div class="mt-6 flex flex-wrap justify-center gap-3" data-astro-cid-ijnerlr2> <button class="filter-btn active" data-astro-cid-ijnerlr2> <a href="/blog" data-astro-cid-ijnerlr2>Todos</a> </button> ${tags.map((tag) => renderTemplate`<button class="filter-btn" data-astro-cid-ijnerlr2> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-ijnerlr2> ${tag} </a> </button>`)} </div> </div> <div class="space-y-8" data-astro-cid-ijnerlr2> ${allPosts.map((post, index) => renderTemplate`${renderComponent($$result2, "SinglePost", $$SinglePost, { "icon": "", "title": post.frontmatter?.title || "Sin Titulo", "text": post.frontmatter?.description, "link": { href: post.url, text: "Continuar Leyendo" }, "tags": post.frontmatter?.tags, "pubDate": post.frontmatter?.pubDate, "author": post.frontmatter?.author, "svg": arrowSVG, "image": post.frontmatter?.image, "key": index, "data-astro-cid-ijnerlr2": true })}`)} </div> <!-- Paginación (Opcional) --> <div class="mt-12 flex justify-center gap-2" data-astro-cid-ijnerlr2> <button class="pagination-btn disabled" disabled data-astro-cid-ijnerlr2>
Anterior
</button> <button class="pagination-btn active" data-astro-cid-ijnerlr2>1</button> <button class="pagination-btn" data-astro-cid-ijnerlr2>2</button> <button class="pagination-btn" data-astro-cid-ijnerlr2>Siguiente</button> </div> </section>  ` })}`;
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
