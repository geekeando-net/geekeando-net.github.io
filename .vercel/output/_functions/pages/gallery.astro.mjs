/* empty css                                 */
import { _ as __vite_glob_0_17, a as __vite_glob_0_16, b as __vite_glob_0_15, c as __vite_glob_0_14, d as __vite_glob_0_13, e as __vite_glob_0_12, f as __vite_glob_0_11, g as __vite_glob_0_10, h as __vite_glob_0_9, i as __vite_glob_0_8, j as __vite_glob_0_7, k as __vite_glob_0_6, l as __vite_glob_0_5, m as __vite_glob_0_4, n as __vite_glob_0_3, o as __vite_glob_0_2, p as __vite_glob_0_1, q as __vite_glob_0_0 } from '../chunks/image9_LQ8-QX_j.mjs';
import { c as createComponent, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C_ZC2ylG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_UoTbEvCZ.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_GCAWdQl6.mjs';
/* empty css                                      */
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const allImagesFile = /* #__PURE__ */ Object.assign({"/src/assets/images/gallery/eventos/image1.png": __vite_glob_0_0,"/src/assets/images/gallery/eventos/image2.png": __vite_glob_0_1,"/src/assets/images/gallery/eventos/image3.png": __vite_glob_0_2,"/src/assets/images/gallery/eventos/image4.png": __vite_glob_0_3,"/src/assets/images/gallery/eventos/image5.png": __vite_glob_0_4,"/src/assets/images/gallery/wallpaper/image1.jpg": __vite_glob_0_5,"/src/assets/images/gallery/wallpaper/image10.jpg": __vite_glob_0_6,"/src/assets/images/gallery/wallpaper/image11.jpg": __vite_glob_0_7,"/src/assets/images/gallery/wallpaper/image12.jpg": __vite_glob_0_8,"/src/assets/images/gallery/wallpaper/image13.jpg": __vite_glob_0_9,"/src/assets/images/gallery/wallpaper/image2.jpg": __vite_glob_0_10,"/src/assets/images/gallery/wallpaper/image3.jpg": __vite_glob_0_11,"/src/assets/images/gallery/wallpaper/image4.jpg": __vite_glob_0_12,"/src/assets/images/gallery/wallpaper/image5.jpg": __vite_glob_0_13,"/src/assets/images/gallery/wallpaper/image6.jpg": __vite_glob_0_14,"/src/assets/images/gallery/wallpaper/image7.jpg": __vite_glob_0_15,"/src/assets/images/gallery/wallpaper/image8.jpg": __vite_glob_0_16,"/src/assets/images/gallery/wallpaper/image9.jpg": __vite_glob_0_17});
  const allImages = Object.values(allImagesFile);
  const title = "Galer\xEDa Geek";
  const subTitle = "Explora nuestro universo visual";
  const allCategories = Array.from(new Set(
    Object.keys(allImagesFile).map((path) => path.split("/gallery/")[1]?.split("/")[0]).filter((folder) => folder && !folder.includes("."))
  ));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-avfgzb42": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16" data-astro-cid-avfgzb42> <div class="mx-auto max-w-4xl text-center mb-12" data-astro-cid-avfgzb42> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "data-astro-cid-avfgzb42": true })} <!-- Filtros de categoría --> <div class="mt-8 flex flex-wrap justify-center gap-3" data-astro-cid-avfgzb42> <button class="filter-btn active" data-astro-cid-avfgzb42><a href="/gallery" data-astro-cid-avfgzb42>General</a></button> ${allCategories.map((cat) => renderTemplate`<button class="filter-btn" data-astro-cid-avfgzb42> <a${addAttribute(`/gallery/${cat}`, "href")} data-astro-cid-avfgzb42> ${cat.charAt(0).toUpperCase() + cat.slice(1)} </a> </button>`)} </div> </div> <div class="divide-y divide-neutral-300 dark:divide-neutral-700" data-astro-cid-avfgzb42> <!-- Contenedor principal de Swiper --> <div class="swiper w-auto" data-astro-cid-avfgzb42> <!-- Wrapper adicional requerido --> <div class="swiper-wrapper w-auto lg:max-w-5xl xl:max-w-6xl xl:content-center" id="my-slider" data-astro-cid-avfgzb42> <!-- Los slides --> ${allImages.map((image, index) => renderTemplate`<div class="swiper-slide group" data-astro-cid-avfgzb42> <a class="swiper-slide overflow-hidden rounded-xl shadow-lg shadow-neutral-950/50"${addAttribute(image.default.src, "href")}${addAttribute(image.default.width, "data-pswp-width")}${addAttribute(image.default.height, "data-pswp-height")} data-cropped="true" target="_blank" data-astro-cid-avfgzb42> <img${addAttribute(image.default.src, "src")}${addAttribute(`Wallpaper ${index + 1} de la galer\xEDa Geekeando`, "alt")} class="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105" data-astro-cid-avfgzb42> <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" data-astro-cid-avfgzb42> <span class="text-neutral-100" data-astro-cid-avfgzb42>Categoría: ${image.default.src.split("/").slice(-2, -1)[0].charAt(0).toUpperCase() + image.default.src.split("/").slice(-2, -1)[0].slice(1)}</span> <span class="text-neutral-100 font-mono" data-astro-cid-avfgzb42>Nombre: ${image.default.src.split("/").pop().split("?")[0].split(".")[0].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span> <span class="text-neutral-100" data-astro-cid-avfgzb42>Ancho: ${image.default.width}px</span> <span class="text-neutral-100" data-astro-cid-avfgzb42>Alto: ${image.default.height}px</span> </div> </a> </div>`)} </div> <!-- Si necesitamos botones de navegación --> <div class="swiper-button-prev swiper-nav-btn" data-astro-cid-avfgzb42></div> <div class="swiper-button-next swiper-nav-btn" data-astro-cid-avfgzb42></div> </div> </div> </section> ` })}  ${renderScript($$result, "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery/index.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery/index.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
