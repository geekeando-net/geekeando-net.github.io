/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/css-grid-layout-tutorial_KrTwnfj0.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/flexbox-guia-completa-diseno-responsive_CaEyn1b7.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/menu-navegacion-html-css-hover-efectos_D0VFIvs3.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/postgres-backup-restore-guide_D-RlpTEa.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/tag-cloud-tutorial_CjmqkTlU.mjs';
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderComponent, d as renderTemplate, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_D9GjGfaR.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_Bah5QcA6.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_DPt04_qM.mjs';
import { $ as $$CustomImage } from '../chunks/CustomImage_DOw1OwCU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$SinglePostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SinglePostCard;
  const { title, text, link, svg, image, tags, pubDate, author } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"../../../assets/images/posts/cloud-tags.png": () => import('../chunks/cloud-tags_DIvao_fJ.mjs'),"../../../assets/images/posts/css-grid-layout-tutorial.png": () => import('../chunks/css-grid-layout-tutorial_DmrgybVA.mjs'),"../../../assets/images/posts/flexbox-guia-completa-diseno-responsive.png": () => import('../chunks/flexbox-guia-completa-diseno-responsive_BVTrIYC0.mjs'),"../../../assets/images/posts/menu-despegable.png": () => import('../chunks/menu-despegable_DH9Be08Q.mjs'),"../../../assets/images/posts/menu-navegacion-html-css-hover-efectos.png": () => import('../chunks/menu-navegacion-html-css-hover-efectos_mYAyq0Ah.mjs'),"../../../assets/images/posts/postgres-backup-restore-guide.png": () => import('../chunks/postgres-backup-restore-guide_CzHjUWES.mjs'),"../../../assets/images/posts/tag-cloud-tutorial.png": () => import('../chunks/tag-cloud-tutorial_3HKdCm4Q.mjs')});
  let imageLocalUrl = null;
  if (image?.url) {
    const imageFileName = image.url.split("/").pop();
    const imageKey = Object.keys(images).find((key) => key.endsWith(imageFileName));
    if (imageKey) {
      try {
        const module = await images[imageKey]();
        imageLocalUrl = module.default;
      } catch (e) {
        console.error(`Error cargando la imagen: ${imageKey}`, e);
      }
    }
  }
  return renderTemplate`${maybeRenderHead()}<article class="group h-full flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-amber-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"> <!-- Imagen --> ${imageLocalUrl && renderTemplate`<div class="lg:w-1/3 overflow-hidden rounded-lg border border-neutral-800 shadow-lg shadow-neutral-950/50"> ${renderComponent($$result, "CustomImage", $$CustomImage, { "src": imageLocalUrl, "alt": `Portada para ${image.alt || title}`, "class": "w-full lg:h-full object-cover transition-transform duration-500 group-hover:scale-105", "loading": "lazy", "widths": [400, 600, 800], "sizes": "(max-width: 1024px) 100vw, 33vw", "format": "webp" })} </div>`} <!-- Contenido --> <div class="flex-grow p-6 flex flex-col"> <!-- Categoría y fecha --> <div class="flex justify-between items-center mb-3"> ${tags.map((tag) => renderTemplate`<span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400"> <a${addAttribute(`/tags/${tag}`, "href")} class="no-underline text-amber-400 hover:text-amber-300 transition-colors"> ${tag} </a> </span>`)} <span class="text-xs text-neutral-500">${pubDate}</span> </div> <!-- Título --> <h3 class="text-xl font-bold text-neutral-100 mb-2 group-hover:text-amber-400 transition-colors line-clamp-2"> <a${addAttribute(link.href, "href")}>${title}</a> </h3> <!-- Descripción --> <p class="text-neutral-400 mb-4 line-clamp-3 flex-grow"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </p> <!-- Metadata inferior --> <div class="mt-auto pt-4 border-t border-neutral-800"> <div class="flex justify-between items-center text-sm"> <span class="text-xs text-neutral-500">${new Date(pubDate).toLocaleDateString("es-LA", { year: "numeric", month: "numeric", day: "numeric" })}</span> <span class="text-xs text-neutral-500">${author}</span> <a${addAttribute(link.href, "href")} class="flex items-center text-amber-400 hover:text-amber-300 transition-colors font-medium">
Leer más ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(svg)}` })} </a> </div> </div> </div> </article>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/post/SinglePostCard.astro", void 0);

const $$Blogs = createComponent(($$result, $$props, $$slots) => {
  const allPostsFile = /* #__PURE__ */ Object.assign({"/src/pages/posts/css-grid-layout-tutorial.md": __vite_glob_0_0,"/src/pages/posts/flexbox-guia-completa-diseno-responsive.md": __vite_glob_0_1,"/src/pages/posts/menu-navegacion-html-css-hover-efectos.md": __vite_glob_0_2,"/src/pages/posts/postgres-backup-restore-guide.md": __vite_glob_0_3,"/src/pages/posts/tag-cloud-tutorial.md": __vite_glob_0_4});
  const allPosts = Object.entries(allPostsFile).map(([filePath, post]) => {
    const flatPost = Object.assign({}, post);
    const slug = filePath.replace("/src/pages/posts/", "").replace(".md", "");
    return {
      ...flatPost,
      url: `/posts/${slug}`,
      pubDate: new Date(flatPost.frontmatter?.pubDate || 0)
    };
  });
  const allPostsTags = Object.values([__vite_glob_0_0,__vite_glob_0_1,__vite_glob_0_2,__vite_glob_0_3,__vite_glob_0_4]);
  const allTags = allPostsTags.map((post) => post.frontmatter.tags).flat();
  const tagCounts = allTags.reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const tags = Object.keys(tagCounts);
  const sortedPosts = allPosts.sort(
    (a, b) => (b?.pubDate?.getTime() || 0) - (a?.pubDate?.getTime() || 0)
  );
  const title = "Explora el Universo Geek";
  const subTitle = "Descubre art\xEDculos, reviews y gu\xEDas para fans";
  const arrowSVG = `<svg class="h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-zb2vaeus": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16" data-astro-cid-zb2vaeus> <!-- Header con efecto especial --> <div class="mx-auto max-w-4xl text-center" data-astro-cid-zb2vaeus> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "data-astro-cid-zb2vaeus": true })} <div class="mt-8 flex flex-wrap justify-center gap-3" data-astro-cid-zb2vaeus> <button class="filter-btn active" data-astro-cid-zb2vaeus>Todos</button> <!-- <button class="filter-btn">🎮 Gaming</button>
                <button class="filter-btn">🤖 Tecnología</button>
                <button class="filter-btn">📺 Anime</button> --> ${tags.map((tag) => renderTemplate`<button class="filter-btn" data-astro-cid-zb2vaeus> <a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-zb2vaeus> ${tag} </a> </button>`)} </div> </div> <!-- Grid de Cards Verticales --> <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-zb2vaeus> ${sortedPosts.map((post, index) => {
    return renderTemplate`${renderComponent($$result2, "SinglePostCard", $$SinglePostCard, { "link": { href: post.url, text: "Continuar Leyendo" }, "title": post.frontmatter?.title || "Sin t\xEDtulo", "text": post.frontmatter?.description, "image": post.frontmatter?.image, "pubDate": post.frontmatter?.pubDate, "tags": post.frontmatter?.tags, "author": post.frontmatter?.author, "svg": arrowSVG, "key": index, "data-astro-cid-zb2vaeus": true })}`;
  })} </div> <!-- Paginación Estilizada --> <div class="mt-16 flex justify-center gap-2" data-astro-cid-zb2vaeus> <button class="pagination-btn" data-astro-cid-zb2vaeus>← Anterior</button> <button class="pagination-btn active" data-astro-cid-zb2vaeus>1</button> <button class="pagination-btn" data-astro-cid-zb2vaeus>2</button> <button class="pagination-btn" data-astro-cid-zb2vaeus>Siguiente →</button> </div> </section>  ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/blogs.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/blogs.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Blogs,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
