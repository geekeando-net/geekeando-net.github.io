import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_FyOM-sUF.mjs';
import { manifest } from './manifest_DulbWRbE.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/send-email.astro.mjs');
const _page5 = () => import('./pages/blog.astro.mjs');
const _page6 = () => import('./pages/blogs.astro.mjs');
const _page7 = () => import('./pages/contact.astro.mjs');
const _page8 = () => import('./pages/contacto.astro.mjs');
const _page9 = () => import('./pages/cookies.astro.mjs');
const _page10 = () => import('./pages/faq.astro.mjs');
const _page11 = () => import('./pages/gallery/_category_.astro.mjs');
const _page12 = () => import('./pages/gallery.astro.mjs');
const _page13 = () => import('./pages/politica-privacidad.astro.mjs');
const _page14 = () => import('./pages/posts/css-grid-layout-tutorial.astro.mjs');
const _page15 = () => import('./pages/posts/flexbox-guia-completa-diseno-responsive.astro.mjs');
const _page16 = () => import('./pages/posts/menu-navegacion-html-css-hover-efectos.astro.mjs');
const _page17 = () => import('./pages/posts/postgres-backup-restore-guide.astro.mjs');
const _page18 = () => import('./pages/posts/tag-cloud-tutorial.astro.mjs');
const _page19 = () => import('./pages/projects/_category_.astro.mjs');
const _page20 = () => import('./pages/projects.astro.mjs');
const _page21 = () => import('./pages/robots.txt.astro.mjs');
const _page22 = () => import('./pages/tags/_tag_.astro.mjs');
const _page23 = () => import('./pages/tags.astro.mjs');
const _page24 = () => import('./pages/terminos-condiciones.astro.mjs');
const _page25 = () => import('./pages/terminos-servicio.astro.mjs');
const _page26 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/send-email.ts", _page4],
    ["src/pages/blog.astro", _page5],
    ["src/pages/blogs.astro", _page6],
    ["src/pages/contact.astro", _page7],
    ["src/pages/contacto.astro", _page8],
    ["src/pages/cookies.astro", _page9],
    ["src/pages/faq.astro", _page10],
    ["src/pages/gallery/[category].astro", _page11],
    ["src/pages/gallery/index.astro", _page12],
    ["src/pages/politica-privacidad.astro", _page13],
    ["src/pages/posts/css-grid-layout-tutorial.md", _page14],
    ["src/pages/posts/flexbox-guia-completa-diseno-responsive.md", _page15],
    ["src/pages/posts/menu-navegacion-html-css-hover-efectos.md", _page16],
    ["src/pages/posts/postgres-backup-restore-guide.md", _page17],
    ["src/pages/posts/tag-cloud-tutorial.md", _page18],
    ["src/pages/projects/[category].astro", _page19],
    ["src/pages/projects/index.astro", _page20],
    ["src/pages/robots.txt.ts", _page21],
    ["src/pages/tags/[tag].astro", _page22],
    ["src/pages/tags/index.astro", _page23],
    ["src/pages/terminos-condiciones.astro", _page24],
    ["src/pages/terminos-servicio.astro", _page25],
    ["src/pages/index.astro", _page26]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "006da4c5-da2e-42a2-81a7-ff148e69c99c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
