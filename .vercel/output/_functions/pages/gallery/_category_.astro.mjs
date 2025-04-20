/* empty css                                    */
import { _ as __vite_glob_0_17, a as __vite_glob_0_16, b as __vite_glob_0_15, c as __vite_glob_0_14, d as __vite_glob_0_13, e as __vite_glob_0_12, f as __vite_glob_0_11, g as __vite_glob_0_10, h as __vite_glob_0_9, i as __vite_glob_0_8, j as __vite_glob_0_7, k as __vite_glob_0_6, l as __vite_glob_0_5, m as __vite_glob_0_4, n as __vite_glob_0_3, o as __vite_glob_0_2, p as __vite_glob_0_1, q as __vite_glob_0_0 } from '../../chunks/image9_LQ8-QX_j.mjs';
import { c as createComponent, a as createAstro, r as renderComponent, e as renderScript, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_C_ZC2ylG.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_BogMbZCy.mjs';
import { $ as $$TitleSection } from '../../chunks/TitleSection_BLso68J8.mjs';
/* empty css                                         */
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$category = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const allImagesFile = /* #__PURE__ */ Object.assign({"/src/assets/images/gallery/eventos/image1.png": __vite_glob_0_0,"/src/assets/images/gallery/eventos/image2.png": __vite_glob_0_1,"/src/assets/images/gallery/eventos/image3.png": __vite_glob_0_2,"/src/assets/images/gallery/eventos/image4.png": __vite_glob_0_3,"/src/assets/images/gallery/eventos/image5.png": __vite_glob_0_4,"/src/assets/images/gallery/wallpaper/image1.jpg": __vite_glob_0_5,"/src/assets/images/gallery/wallpaper/image10.jpg": __vite_glob_0_6,"/src/assets/images/gallery/wallpaper/image11.jpg": __vite_glob_0_7,"/src/assets/images/gallery/wallpaper/image12.jpg": __vite_glob_0_8,"/src/assets/images/gallery/wallpaper/image13.jpg": __vite_glob_0_9,"/src/assets/images/gallery/wallpaper/image2.jpg": __vite_glob_0_10,"/src/assets/images/gallery/wallpaper/image3.jpg": __vite_glob_0_11,"/src/assets/images/gallery/wallpaper/image4.jpg": __vite_glob_0_12,"/src/assets/images/gallery/wallpaper/image5.jpg": __vite_glob_0_13,"/src/assets/images/gallery/wallpaper/image6.jpg": __vite_glob_0_14,"/src/assets/images/gallery/wallpaper/image7.jpg": __vite_glob_0_15,"/src/assets/images/gallery/wallpaper/image8.jpg": __vite_glob_0_16,"/src/assets/images/gallery/wallpaper/image9.jpg": __vite_glob_0_17});
  const allImages = Object.entries(allImagesFile).filter(([path]) => path.includes(`/gallery/${category}/`)).map(([, file]) => file);
  const title = "Galer\xEDa Geek";
  const subTitle = "Explora nuestro universo visual";
  const allCategories = Array.from(new Set(
    Object.keys(allImagesFile).map((path) => path.split("/gallery/")[1]?.split("/")[0]).filter(Boolean)
  ));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-7esf47sa": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16" data-astro-cid-7esf47sa> <div class="mx-auto max-w-4xl text-center mb-12" data-astro-cid-7esf47sa> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "data-astro-cid-7esf47sa": true })} <!-- Filtros de categoría --> <div class="mt-8 flex flex-wrap justify-center gap-3" data-astro-cid-7esf47sa> <button class="filter-btn" data-astro-cid-7esf47sa><a href="/gallery" data-astro-cid-7esf47sa>General</a></button> ${allCategories.map((cat) => renderTemplate`<button${addAttribute(`filter-btn` + (cat === category ? " active" : ""), "class")} data-astro-cid-7esf47sa>  <a${addAttribute(`/gallery/${cat}`, "href")} data-astro-cid-7esf47sa> ${cat.charAt(0).toUpperCase() + cat.slice(1)} </a> </button>`)} </div> </div> <div class="divide-y divide-neutral-300 dark:divide-neutral-700" data-astro-cid-7esf47sa> <!-- Contenedor principal de Swiper --> <div class="swiper w-auto" data-astro-cid-7esf47sa> <!-- Wrapper adicional requerido --> <div class="swiper-wrapper w-auto lg:max-w-5xl xl:max-w-6xl xl:content-center" id="my-slider" data-astro-cid-7esf47sa> <!-- Los slides --> ${allImages.map((image, index) => renderTemplate`<div class="swiper-slide group" data-astro-cid-7esf47sa> <a class="swiper-slide overflow-hidden rounded-xl shadow-lg shadow-neutral-950/50"${addAttribute(image.default.src, "href")}${addAttribute(image.default.width, "data-pswp-width")}${addAttribute(image.default.height, "data-pswp-height")} data-cropped="true" target="_blank" data-astro-cid-7esf47sa> <img${addAttribute(image.default.src, "src")}${addAttribute(`Imagen ${index + 1} de la galer\xEDa Geekeando ${category}`, "alt")} loading="lazy" class="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105" data-astro-cid-7esf47sa> <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4" data-astro-cid-7esf47sa> <span class="text-neutral-100" data-astro-cid-7esf47sa>Categoría: ${image.default.src.split("/").slice(-2, -1)[0].charAt(0).toUpperCase() + image.default.src.split("/").slice(-2, -1)[0].slice(1)}</span> <span class="text-neutral-100 font-mono" data-astro-cid-7esf47sa>Nombre: ${image.default.src.split("/").pop().split("?")[0].split(".")[0].replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span> <span class="text-neutral-100" data-astro-cid-7esf47sa>Ancho: ${image.default.width}px</span> <span class="text-neutral-100" data-astro-cid-7esf47sa>Alto: ${image.default.height}px</span> </div> </a> </div>`)} </div> <!-- Si necesitamos botones de navegación --> <div class="swiper-button-prev swiper-nav-btn" data-astro-cid-7esf47sa></div> <div class="swiper-button-next swiper-nav-btn" data-astro-cid-7esf47sa></div> </div> </div> </section> ` })}  ${renderScript($$result, "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery/[category].astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery/[category].astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery/[category].astro";
const $$url = "/gallery/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$category,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
