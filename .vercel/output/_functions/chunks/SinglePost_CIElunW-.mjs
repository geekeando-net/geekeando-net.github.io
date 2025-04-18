import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, d as addAttribute, F as Fragment, u as unescapeHTML } from './astro/server_BysZ_O6H.mjs';
import 'kleur/colors';
import { $ as $$CustomImage } from './PostLayout_DcChLiPM.mjs';

const $$Astro = createAstro("https://www.geekeando.net");
const $$SinglePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { icon, title, text, link, svg, image, tags, pubDate, author } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"../../assets/images/posts/cloud-tags.png": () => import('./cloud-tags_DIvao_fJ.mjs'),"../../assets/images/posts/css-grid-layout-tutorial.png": () => import('./css-grid-layout-tutorial_DmrgybVA.mjs'),"../../assets/images/posts/flexbox-guia-completa-diseno-responsive.png": () => import('./flexbox-guia-completa-diseno-responsive_BVTrIYC0.mjs'),"../../assets/images/posts/menu-despegable.png": () => import('./menu-despegable_DH9Be08Q.mjs'),"../../assets/images/posts/menu-navegacion-html-css-hover-efectos.png": () => import('./menu-navegacion-html-css-hover-efectos_mYAyq0Ah.mjs'),"../../assets/images/posts/postgres-backup-restore-guide.png": () => import('./postgres-backup-restore-guide_CzHjUWES.mjs'),"../../assets/images/posts/tag-cloud-tutorial.png": () => import('./tag-cloud-tutorial_3HKdCm4Q.mjs')});
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
  return renderTemplate`${maybeRenderHead()}<article class="group py-6 hover:bg-neutral-900/30 transition-all duration-300 rounded-xl px-4"> <div class="flex flex-col lg:flex-row gap-4 w-full"> ${imageLocalUrl && renderTemplate`<div class="lg:w-1/3 overflow-hidden rounded-lg border border-neutral-800 shadow-lg shadow-neutral-950/50"> ${renderComponent($$result, "CustomImage", $$CustomImage, { "src": imageLocalUrl, "alt": image.alt || title, "class": "w-full h-48 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105", "loading": "lazy", "widths": [400, 600, 800], "sizes": "(max-width: 1024px) 100vw, 33vw", "format": "webp" })} </div>`} <div class="lg:w-2/3 space-y-3"> ${tags.map((tag) => renderTemplate`<span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/10 text-amber-400"> <a${addAttribute(`/tags/${tag}`, "href")} class="no-underline text-amber-400 hover:text-amber-300 transition-colors"> ${tag} </a> </span>`)} <h3 class="text-xl font-bold text-neutral-100 group-hover:text-amber-400 transition-colors"> ${title} </h3> <div class="text-neutral-400 line-clamp-3"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </div> ${link && renderTemplate`<a${addAttribute(link.href, "href")} class="mt-3 inline-flex items-center gap-x-1 font-medium text-amber-400 hover:text-amber-300 transition-colors"${addAttribute(`Leer m\xE1s sobre ${title}`, "aria-label")}> ${link.text} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${unescapeHTML(svg)}` })} </a>`} <!-- Metadata adicional (opcional) --> <div class="pt-2 flex items-center gap-3 text-xs text-neutral-500"> <span>
Publicado hace ${Math.floor(((/* @__PURE__ */ new Date()).getTime() - new Date(pubDate).getTime()) / (1e3 * 60 * 60 * 24)) === 1 ? "1 d\xEDa" : `${Math.floor(((/* @__PURE__ */ new Date()).getTime() - new Date(pubDate).getTime()) / (1e3 * 60 * 60 * 24))} d\xEDas`} </span> <span>•</span> <span>By ${author}</span> </div> </div> </div> </article>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/SinglePost.astro", void 0);

export { $$SinglePost as $ };
