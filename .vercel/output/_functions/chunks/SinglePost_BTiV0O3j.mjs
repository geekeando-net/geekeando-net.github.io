import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML, F as Fragment } from './astro/server_DbQ_YTb6.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './Layout_DGO899ao.mjs';
import { $ as $$CustomImage } from './PostLayout_CvYdYdvO.mjs';

const $$Astro = createAstro("https://www.geekeando.net");
const $$SinglePost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SinglePost;
  const { icon, title, text, link, svg, image } = Astro2.props;
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
    } else {
      console.error(`No se encontr\xF3 la imagen: ${imageFileName}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<div class="flex gap-x-7 py-6 items-start"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon })}`} <div class="flex flex-col lg:flex-row gap-4 w-full"> <div class="grow"> <h3 class="font-bold text-neutral-300"> ${title} </h3> <p class="mt-1 text-sm text-justify text-neutral-400"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </p> ${link && renderTemplate`<a class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium outline-none transition duration-300  focus-visible:ring text-zinc-400 ring-zinc-200 hover:text-zinc-200 focus:outline-none focus:ring-1"${addAttribute(link.href, "href")}> ${link.text} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(svg)}` })} </a>`} </div> ${imageLocalUrl && renderTemplate`<div class="shrink-0 flex align-center justify-center w-40 lg:w-96 h-auto "> ${renderComponent($$result, "CustomImage", $$CustomImage, { "class": "object-cover", "src": imageLocalUrl, "alt": image.alt ?? "" })} </div>`} </div> </div>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/SinglePost.astro", void 0);

export { $$SinglePost as $ };
