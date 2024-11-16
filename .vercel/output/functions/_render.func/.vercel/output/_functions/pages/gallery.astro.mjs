/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_B4aHde3m.mjs';
import 'kleur/colors';
import { a as $$Layout } from '../chunks/Layout_E72YIkPM.mjs';
import { $ as $$TitleSection } from '../chunks/TitleSection_CMZQqAdZ.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  const title = "Galeria";
  const subTitle = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-sahthylw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14" data-astro-cid-sahthylw> <div class="mx-auto max-w-2xl lg:max-w-5xl" data-astro-cid-sahthylw> ${renderComponent($$result2, "TitleSection", $$TitleSection, { "title": title, "subTitle": subTitle, "data-astro-cid-sahthylw": true })} </div> <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16" data-astro-cid-sahthylw> <!-- Contenedor principal de Swiper --> <div class="swiper w-auto" data-astro-cid-sahthylw> <!-- Wrapper adicional requerido --> <div class="swiper-wrapper w-auto lg:max-w-5xl xl:max-w-6xl" data-astro-cid-sahthylw> <!-- Los slides --> <div class="swiper-slide" data-astro-cid-sahthylw> <!-- <Image src="/images/image1.jpg" alt="" width={800} height={600} /> --> <img src="/images/image1.jpg" alt="" data-astro-cid-sahthylw> </div> <div class="swiper-slide" data-astro-cid-sahthylw> <!-- <Image src="/images/image2.jpg" alt="" width={800} height={600} /> --> <img src="/images/image2.jpg" alt="" data-astro-cid-sahthylw> </div> <div class="swiper-slide" data-astro-cid-sahthylw> <!-- <Image src="/images/image3.jpg" alt="" width={800} height={600} /> --> <img src="/images/image3.jpg" alt="" data-astro-cid-sahthylw> </div> <div class="swiper-slide" data-astro-cid-sahthylw> <!-- <Image src="/images/image4.jpg" alt="" width={800} height={600} /> --> <img src="/images/image4.jpg" alt="" data-astro-cid-sahthylw> </div> <div class="swiper-slide" data-astro-cid-sahthylw> <!-- <Image src="/images/image5.jpg" alt="" width={800} height={600} /> --> <img src="/images/image5.jpg" alt="" data-astro-cid-sahthylw> </div> </div> <!-- Si necesitamos botones de navegación --> <div class="swiper-button-prev" data-astro-cid-sahthylw></div> <div class="swiper-button-next" data-astro-cid-sahthylw></div> </div> </div> </section> ` })}  `;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Gallery,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
