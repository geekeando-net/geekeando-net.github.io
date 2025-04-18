import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderTemplate, d as addAttribute, r as renderComponent, e as renderScript, f as renderSlot } from './astro/server_BysZ_O6H.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_CD72lvyj.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_B3_A6ZKA.mjs';
/* empty css                                            */

const $$Astro$2 = createAstro("https://www.geekeando.net");
const $$TitlePost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TitlePost;
  const { title, subTitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <h1 class="text-center text-balance text-2xl font-bold tracking-tight text-neutral-200 md:text-4xl md:leading-tight"> ${title} </h1> <p class="text-justify mt-1 text-pretty text-neutral-400 py-3"> ${subTitle} </p> </div>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/TitlePost.astro", void 0);

const $$Astro$1 = createAstro("https://www.geekeando.net");
const $$CustomImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CustomImage;
  const { src, alt, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(className, "class")}> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "class": "object-cover w-full h-auto rounded-lg" })} </div>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/CustomImage.astro", void 0);

const $$Astro = createAstro("https://www.geekeando.net");
const $$PostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostLayout;
  const { frontmatter } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"../assets/images/posts/cloud-tags.png": () => import('./cloud-tags_DIvao_fJ.mjs'),"../assets/images/posts/css-grid-layout-tutorial.png": () => import('./css-grid-layout-tutorial_DmrgybVA.mjs'),"../assets/images/posts/flexbox-guia-completa-diseno-responsive.png": () => import('./flexbox-guia-completa-diseno-responsive_BVTrIYC0.mjs'),"../assets/images/posts/menu-despegable.png": () => import('./menu-despegable_DH9Be08Q.mjs'),"../assets/images/posts/menu-navegacion-html-css-hover-efectos.png": () => import('./menu-navegacion-html-css-hover-efectos_mYAyq0Ah.mjs'),"../assets/images/posts/postgres-backup-restore-guide.png": () => import('./postgres-backup-restore-guide_CzHjUWES.mjs'),"../assets/images/posts/tag-cloud-tutorial.png": () => import('./tag-cloud-tutorial_3HKdCm4Q.mjs')});
  let imageLocalUrl = null;
  if (frontmatter.image?.url) {
    const imageFileName = frontmatter.image.url.split("/").pop();
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="mx-auto max-w-[85rem] px-4 py-0 sm:px-6 lg:px-8 lg:py-14"> <header class="text-neutral-200"> ${imageLocalUrl && renderTemplate`<div class="flex justify-center object-cover"> ${renderComponent($$result2, "CustomImage", $$CustomImage, { "src": imageLocalUrl, "alt": frontmatter.image.alt ?? "", "class": "object-cover" })} </div>`} <div class="flex flex-col lg:flex-row lg:justify-between"> <p>Escrito por: ${frontmatter.author}</p> <p class="">Publicado el: ${frontmatter.pubDate.toString().slice(0, 10)}</p> </div> ${renderComponent($$result2, "TitlePost", $$TitlePost, { "title": frontmatter.title, "subTitle": frontmatter.description })} <div class="flex flex-wrap"> <ul class="flex flex-wrap justify-center pl-0 list-none"> ${frontmatter.tags.map((tag) => renderTemplate`<li class="my-0 mx-2"> <a class="block no-underline relative after:text-base focus:outline-dashed focus:outline-1 before:absolute before:bg-orange-400"${addAttribute(`/tags/${tag}`, "href")}>${tag}</a> </li>`)} </ul> </div> </header> <hr> <br> <section id="content-post" class="content-markdown"> ${renderSlot($$result2, $$slots["default"])} </section> </article> ` })} ${renderScript($$result, "/Users/draexx/Proyecto/geekeando-main/src/layouts/PostLayout.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/layouts/PostLayout.astro", void 0);

export { $$CustomImage as $, $$PostLayout as a };
