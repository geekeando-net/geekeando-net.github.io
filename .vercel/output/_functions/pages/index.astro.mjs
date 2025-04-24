/* empty css                                 */
import { _ as __vite_glob_0_0 } from '../chunks/css-grid-layout-tutorial_KrTwnfj0.mjs';
import { _ as __vite_glob_0_1 } from '../chunks/flexbox-guia-completa-diseno-responsive_CaEyn1b7.mjs';
import { _ as __vite_glob_0_2 } from '../chunks/menu-navegacion-html-css-hover-efectos_D0VFIvs3.mjs';
import { _ as __vite_glob_0_3 } from '../chunks/postgres-backup-restore-guide_D-RlpTEa.mjs';
import { _ as __vite_glob_0_4 } from '../chunks/tag-cloud-tutorial_CjmqkTlU.mjs';
import { c as createComponent, d as renderTemplate, r as renderComponent, m as maybeRenderHead, a as createAstro, b as addAttribute } from '../chunks/astro/server_D9GjGfaR.mjs';
import 'kleur/colors';
import { $ as $$Icon, a as $$Layout } from '../chunks/Layout_Bah5QcA6.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BfzqWX3C.mjs';
/* empty css                                 */
import { $ as $$CustomImage } from '../chunks/CustomImage_DOw1OwCU.mjs';
export { renderers } from '../renderers.mjs';

const heroImage = new Proxy({"src":"/_astro/hero.VzD7ZRpO.jpg","width":612,"height":459,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/draexx/Proyecto/geekeando-main/src/assets/images/hero.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="relative overflow-hidden"> <!-- Contenedor del carrusel --> <div class="relative h-[600px] md:h-[700px]"> <!-- Slide 1 --> <div id="slide1" class="absolute inset-0 transition-opacity duration-1000 opacity-100"> <div class="mx-auto grid max-w-[85rem] gap-4 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:gap-8 lg:px-8 2xl:max-w-full bg-gradient-to-br from-neutral-900/90 via-neutral-900 to-neutral-950/80 rounded-xl border border-neutral-800/50 h-full"> <div class="space-y-6 z-10"> <h1 class="text-balance text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl lg:text-6xl lg:leading-tight">\nDisfruta de tu d\xEDa y tus hobbies con <span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">Geekeando</span> </h1> <p class="text-pretty text-lg leading-relaxed text-neutral-300 lg:w-4/5">\nEncuentra los productos que te gustan y disfruta de tus hobbies con la mejor calidad y precio.\n</p> <div class="flex flex-wrap gap-4 pt-2"> <a href="/blog" class="rounded-lg bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 font-medium text-neutral-900 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300">\nExplorar art\xEDculos\n</a> <a href="/comunidad" class="rounded-lg border-2 border-neutral-600 px-6 py-3 font-medium text-neutral-200 hover:border-amber-500 hover:text-amber-500 transition-all duration-300">\n\xDAnete a la comunidad\n</a> </div> </div> <div class="relative overflow-hidden rounded-xl shadow-2xl shadow-neutral-900/50 h-full"> ', ' <div class="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent md:bg-gradient-to-r"></div> </div> </div> </div> <!-- Slide 2 --> <div id="slide2" class="absolute inset-0 transition-opacity duration-1000 opacity-0"> <div class="relative bg-gradient-to-br from-neutral-900 to-purple-900/30 h-full flex items-center justify-center"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl font-bold text-neutral-100 sm:text-5xl lg:text-6xl">\nCrea, Comparte y <span class="text-amber-400">Aprende</span> </h1> <p class="mt-6 text-xl text-neutral-300 max-w-3xl mx-auto">\nDescubre proyectos DIY de tecnolog\xEDa, manualidades e innovaci\xF3n para todos los niveles\n</p> <div class="mt-8 flex flex-wrap justify-center gap-4"> <a href="/projects" class="inline-flex items-center justify-center gap-x-2 rounded-lg bg-gradient-to-r from-amber-600 to-pink-600 px-6 py-3 font-bold text-neutral-100 hover:shadow-lg hover:shadow-amber-500/20 transition-all">\nExplorar Proyectos\n', ` </a> <a href="/comunidad" class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-300 hover:bg-neutral-800 transition-colors">
Unirse a la Comunidad
</a> </div> </div> </div> </div> </div> <!-- Controles del carrusel --> <div class="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10"> <button onclick="showSlide(1)" class="h-3 w-3 rounded-full bg-amber-500 focus:outline-none transition-all" aria-label="Mostrar slide 1"></button> <button onclick="showSlide(2)" class="h-3 w-3 rounded-full bg-neutral-600 hover:bg-neutral-500 focus:outline-none transition-all" aria-label="Mostrar slide 2"></button> </div> </section> <script>
    let currentSlide = 1;
    const slideDuration = 3000; // 3 segundos

    function showSlide(n) {
        // Actualizar estado visual
        document.getElementById('slide1').style.opacity = n === 1 ? '1' : '0';
        document.getElementById('slide2').style.opacity = n === 2 ? '1' : '0';

        // Actualizar controles
        document.querySelectorAll('[onclick^="showSlide"]').forEach((btn, i) => {
        btn.classList.toggle('bg-amber-500', i+1 === n);
        btn.classList.toggle('bg-neutral-600', i+1 !== n);
        btn.classList.toggle('w-3', i+1 !== n);
        btn.classList.toggle('w-6', i+1 === n);
        });

        currentSlide = n;
        resetTimer();
    }

    function nextSlide() {
        currentSlide = currentSlide === 1 ? 2 : 1;
        showSlide(currentSlide);
    }

    let slideInterval;
    function startTimer() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startTimer();
    }

    // Iniciar carrusel autom\xE1tico
    document.addEventListener('DOMContentLoaded', () => {
        startTimer();

        // Pausar al hacer hover
        const hero = document.querySelector('.relative.overflow-hidden');
        hero.addEventListener('mouseenter', () => clearInterval(slideInterval));
        hero.addEventListener('mouseleave', startTimer);
    });
<\/script> `])), maybeRenderHead(), renderComponent($$result, "Image", $$Image, { "src": heroImage, "alt": "Persona disfrutando de hobbies geek (videojuegos, c\xF3mics, tecnolog\xEDa)", "format": "avif", "loading": "eager", "class": "h-full w-full object-cover object-center", "widths": [600, 800, 1200], "sizes": "(max-width: 768px) 100vw, 50vw" }), renderComponent($$result, "Icon", $$Icon, { "name": "mdi:rocket", "class": "h-5 w-5" }));
}, "/Users/draexx/Proyecto/geekeando-main/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro();
const $$CategoryPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CategoryPill;
  const { category } = Astro2.props;
  const categoryStyles = {
    Arduino: "bg-purple-500/10 text-purple-400",
    "Paper Craft": "bg-amber-500/10 text-amber-400",
    "3D Print": "bg-blue-500/10 text-blue-400",
    Music: "bg-pink-500/10 text-pink-400"
  };
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${categoryStyles[category] || "bg-neutral-800 text-neutral-400"}`, "class")}> ${renderComponent($$result, "Icon", $$Icon, { "name": category === "Arduino" ? "mdi:chip" : category === "Paper Craft" ? "mdi:paper-cut-vertical" : category === "3D Print" ? "mdi:printer-3d" : "mdi:music", "class": "h-3.5 w-3.5" })} ${category} </span>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/CategoryPill.astro", void 0);

const $$Astro = createAstro();
const $$BlogPostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { title, excerpt, category, date, slug, image, readingTime } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"../../assets/images/posts/cloud-tags.png": () => import('../chunks/cloud-tags_DIvao_fJ.mjs'),"../../assets/images/posts/css-grid-layout-tutorial.png": () => import('../chunks/css-grid-layout-tutorial_DmrgybVA.mjs'),"../../assets/images/posts/flexbox-guia-completa-diseno-responsive.png": () => import('../chunks/flexbox-guia-completa-diseno-responsive_BVTrIYC0.mjs'),"../../assets/images/posts/menu-despegable.png": () => import('../chunks/menu-despegable_DH9Be08Q.mjs'),"../../assets/images/posts/menu-navegacion-html-css-hover-efectos.png": () => import('../chunks/menu-navegacion-html-css-hover-efectos_mYAyq0Ah.mjs'),"../../assets/images/posts/postgres-backup-restore-guide.png": () => import('../chunks/postgres-backup-restore-guide_CzHjUWES.mjs'),"../../assets/images/posts/tag-cloud-tutorial.png": () => import('../chunks/tag-cloud-tutorial_3HKdCm4Q.mjs')});
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
  return renderTemplate`${maybeRenderHead()}<article class="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 hover:border-purple-500/30 transition-all duration-300"> <a${addAttribute(`${slug}`, "href")} class="block hover:no-underline"> <!-- Imagen del post --> <div class="aspect-[16/9] overflow-hidden"> ${renderComponent($$result, "CustomImage", $$CustomImage, { "src": imageLocalUrl, "alt": title, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })} </div> <!-- Contenido --> <div class="p-6"> <div class="flex justify-between items-center mb-3 text-sm"> <span class="inline-flex items-center gap-1 text-purple-400"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:book-open", "class": "h-4 w-4" })} ${category} </span> <span class="text-neutral-500 flex items-center gap-1"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:clock-outline", "class": "h-4 w-4" })} ${readingTime} </span> </div> <h3 class="text-xl font-bold text-neutral-200 mb-2 group-hover:text-purple-400 transition-colors line-clamp-2"> ${title} </h3> <p class="text-neutral-400 line-clamp-2 mb-4">${excerpt}</p> <div class="flex items-center justify-between text-sm"> <span class="text-neutral-500"> ${new Date(date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })} </span> <span class="text-purple-400 hover:text-purple-300 flex items-center gap-1 transition-colors">
Leer más
${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "h-4 w-4 transition-transform group-hover:translate-x-1" })} </span> </div> </div> </a> </article>`;
}, "/Users/draexx/Proyecto/geekeando-main/src/components/ui/BlogPostCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const featuredProjects = [
    {
      category: "Arduino",
      title: "Sistema de Riego Inteligente",
      image: "/projects/arduino-irrigation.png",
      description: "Control autom\xE1tico de riego con IoT y sensores de humedad",
      slug: "riego-inteligente",
      tags: ["IoT", "Automatizaci\xF3n"],
      difficulty: "Intermedio"
    }
    // ... 2-3 proyectos más
  ];
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
  const featuredPosts = allPosts.sort(
    (a, b) => (b?.pubDate?.getTime() || 0) - (a?.pubDate?.getTime() || 0)
  );
  const projectCategories = [
    {
      id: "arduino",
      name: "Arduino",
      icon: "mdi:chip",
      description: "Proyectos de electr\xF3nica y automatizaci\xF3n con Arduino",
      projects: [
        {
          title: "Sistema de Riego Autom\xE1tico",
          slug: "riego-automatico",
          image: "/images/projects/arduino-irrigation.jpg",
          tags: ["IoT", "Automatizaci\xF3n", "Jardiner\xEDa"],
          date: "2023-10-15",
          difficulty: "Intermedio",
          components: ["Arduino Uno", "Sensor humedad"],
          featured: true
        }
      ]
    },
    {
      id: "paper-craft",
      name: "Paper Craft",
      icon: "mdi:paper-cut-vertical",
      description: "Creaciones art\xEDsticas en papel y cart\xF3n",
      projects: [
        {
          title: "Maqueta de Ciudad Futurista",
          slug: "ciudad-futurista",
          image: "/images/projects/paper-city.jpg",
          tags: ["Escala 1:100", "Arquitectura"],
          date: "2023-11-05",
          difficulty: "Principiante",
          materials: ["Cartulina", "Pegamento"]
        }
      ]
    },
    {
      id: "3d-print",
      name: "3D Print",
      icon: "mdi:printer-3d",
      description: "Dise\xF1o e impresi\xF3n 3D de objetos y prototipos",
      projects: [
        {
          title: "Brazo Rob\xF3tico Modular",
          slug: "brazo-robotico",
          image: "/images/projects/robotic-arm.jpg",
          tags: ["Rob\xF3tica", "Open Source"],
          date: "2023-09-18",
          difficulty: "Intermedio",
          stlFiles: ["/downloads/arm.stl"]
        }
      ]
    },
    {
      id: "music",
      name: "Music",
      icon: "mdi:music",
      description: "Proyectos musicales y de audio tecnolog\xEDa",
      projects: [
        {
          title: "Sintetizador DIY",
          slug: "sintetizador-diy",
          image: "/images/projects/diy-synth.jpg",
          tags: ["Electr\xF3nica", "M\xFAsica"],
          date: "2023-07-30",
          difficulty: "Avanzado",
          schematics: "/downloads/synth-circuit.pdf"
        }
      ]
    }
  ];
  const stats = {
    projects: 124,
    categories: 8,
    community: 2300
  };
  const imagesProjects = /* #__PURE__ */ Object.assign({"../assets/images/projects/arduino-irrigation-cover.png": () => import('../chunks/arduino-irrigation-cover_BlnTgPQA.mjs'),"../assets/images/projects/arduino-irrigation.png": () => import('../chunks/arduino-irrigation_YZWHT3wX.mjs'),"../assets/images/projects/default.png": () => import('../chunks/default_BatziFXU.mjs'),"../assets/images/projects/diy-synth.png": () => import('../chunks/diy-synth_BeiAzndy.mjs'),"../assets/images/projects/irrigation-1.png": () => import('../chunks/irrigation-1_DYLjIzJL.mjs'),"../assets/images/projects/paper-city.png": () => import('../chunks/paper-city_BqeER1lc.mjs'),"../assets/images/projects/robotic-arm.png": () => import('../chunks/robotic-arm_CUtuHpWW.mjs'),"../assets/images/projects/weather-station.png": () => import('../chunks/weather-station_Ct63REoX.mjs')});
  const getImageProjectUrl = async (imagePath) => {
    if (!imagePath) return null;
    const imageFileName = imagePath.split("/").pop() ?? "default.png";
    const imageKey = Object.keys(imagesProjects).find((key) => key.endsWith(imageFileName));
    if (imageKey) {
      try {
        const module = await imagesProjects[imageKey]();
        return module.default;
      } catch (e) {
        console.error(`Error cargando la imagen: ${imageKey}`, e);
        return null;
      }
    } else {
      try {
        const imageDefault = Object.keys(imagesProjects).find((key) => key.endsWith("default.png"));
        if (imageDefault) {
          const module = await imagesProjects[imageDefault]();
          return module.default;
        }
        return null;
      } catch (e) {
        console.error(`Error cargando la imagen por defecto`, e);
        return null;
      }
    }
    return null;
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to GeekEando" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$Hero, {})}  ${maybeRenderHead()}<section class="py-12 border-b border-neutral-800"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-neutral-800"> <div class="text-center p-6"> <p class="text-4xl font-bold text-purple-400">${stats.projects}+</p> <p class="mt-2 text-neutral-400">Proyectos publicados</p> </div> <div class="text-center p-6"> <p class="text-4xl font-bold text-pink-400">${stats.categories}</p> <p class="mt-2 text-neutral-400">Categorías diferentes</p> </div> <div class="text-center p-6"> <p class="text-4xl font-bold text-blue-400">${stats.community}+</p> <p class="mt-2 text-neutral-400">Miembros activos</p> </div> </div> </div> </section>  <section class="py-16"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"> <div> <h2 class="text-2xl font-bold text-neutral-200 sm:text-3xl">Proyectos Destacados</h2> <p class="text-neutral-400 mt-2">Selección de nuestras creaciones más populares</p> </div> <a href="/projects" class="text-purple-400 hover:text-purple-300 flex items-center gap-1">
Ver todos los proyectos
${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "h-5 w-5" })} </a> </div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${featuredProjects.map((project) => renderTemplate`<a${addAttribute(`/projects/${project.category.toLowerCase()}/${project.slug}`, "href")} class="group block hover:no-underline"> <div class="relative rounded-xl overflow-hidden border border-neutral-800 bg-neutral-900/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"> <div class="aspect-[4/3] overflow-hidden"> ${renderComponent($$result2, "CustomImage", $$CustomImage, { "src": getImageProjectUrl(project.image), "alt": project.title, "class": "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" })} </div> <div class="p-6"> <div class="flex justify-between items-start mb-3"> ${renderComponent($$result2, "CategoryPill", $$CategoryPill, { "category": project.category })} <span${addAttribute(`text-xs px-2 py-1 rounded-full border ${project.difficulty === "Principiante" ? "bg-green-900/50 text-green-400 border-green-800" : project.difficulty === "Intermedio" ? "bg-amber-900/50 text-amber-400 border-amber-800" : "bg-red-900/50 text-red-400 border-red-800"}`, "class")}> ${project.difficulty} </span> </div> <h3 class="text-xl font-bold text-neutral-200 mb-2 group-hover:text-purple-400 transition-colors"> ${project.title} </h3> <p class="text-neutral-400 line-clamp-2">${project.description}</p> <div class="mt-4 flex flex-wrap gap-2"> ${project.tags.map((tag) => renderTemplate`<span class="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-400"> ${tag} </span>`)} </div> </div> </div> </a>`)} </div> </div> </section>  <section class="py-16 bg-gradient-to-br from-neutral-900/50 to-purple-900/10"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="text-center mb-12"> <h2 class="text-2xl font-bold text-neutral-200 sm:text-3xl">Explora por Categorías</h2> <p class="text-neutral-400 mt-2 max-w-2xl mx-auto">
Encuentra proyectos que se ajusten a tus intereses y habilidades
</p> </div> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"> ${projectCategories.map((category) => renderTemplate`<a${addAttribute(`/proyectos/${category.id}`, "href")} class="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-6 hover:border-purple-500/30 transition-all duration-300"> <div class="flex items-center gap-4"> <div class="flex items-center justify-center rounded-lg bg-purple-500/10 p-3 text-purple-400 group-hover:bg-purple-500/20 transition-colors"> ${renderComponent($$result2, "Icon", $$Icon, { "name": category.icon, "class": "h-6 w-6" })} </div> <div> <h3 class="font-bold text-neutral-200 group-hover:text-purple-400 transition-colors"> ${category.name} </h3> <p class="text-sm text-neutral-500">${category.projects.length} proyectos</p> </div> </div> <p class="mt-4 text-sm text-neutral-400 line-clamp-2">${category.description}</p> </a>`)} </div> </div> </section>  <section class="py-16"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="rounded-xl bg-[url('src/assets/images/cta-bg.png')] bg-cover bg-center border border-neutral-800 overflow-hidden"> <div class="bg-neutral-900/80 backdrop-blur-sm p-12 text-center"> <h2 class="text-2xl font-bold text-neutral-200 sm:text-3xl mb-4">¿Listo para compartir tu proyecto?</h2> <p class="text-neutral-400 max-w-2xl mx-auto mb-6">
Únete a nuestra comunidad de creadores y muestra al mundo tus inventos
</p> <div class="flex flex-wrap justify-center gap-4"> <a href="/comunidad/registro" class="inline-flex items-center justify-center gap-x-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-bold text-neutral-100 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
Crear cuenta gratis
</a> <a href="/projetcs/subir" class="inline-flex items-center justify-center gap-x-2 rounded-lg border border-neutral-700 px-6 py-3 font-medium text-neutral-300 hover:bg-neutral-800 transition-colors">
Subir proyecto
</a> </div> </div> </div> </div> </section> <section class="py-16 border-t border-neutral-800"> <div class="mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8"> <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"> <div> <h2 class="text-2xl font-bold text-neutral-200 sm:text-3xl">Artículos Recientes</h2> <p class="text-neutral-400 mt-2">Tutoriales, guías y contenido técnico para makers</p> </div> <a href="/blog" class="text-purple-400 hover:text-purple-300 flex items-center gap-1">
Ver todos los artículos
${renderComponent($$result2, "Icon", $$Icon, { "name": "mdi:arrow-right", "class": "h-5 w-5" })} </a> </div> <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"> ${featuredPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPostCard", $$BlogPostCard, { "title": post.frontmatter?.title || "Sin t\xEDtulo", "excerpt": post.frontmatter?.description, "tags": post.frontmatter?.tags, "date": post.frontmatter?.pubDate, "slug": post.url, "image": post.frontmatter?.image, "readingTime": "8 min" })}`)} </div> </div> </section> ` })}`;
}, "/Users/draexx/Proyecto/geekeando-main/src/pages/index.astro", void 0);

const $$file = "/Users/draexx/Proyecto/geekeando-main/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
