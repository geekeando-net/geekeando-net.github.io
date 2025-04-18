import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dy4PxNN-.mjs';
import { manifest } from './manifest_B6rf8xYN.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/gallery.astro.mjs');
const _page7 = () => import('./pages/posts/css-grid-layout-tutorial.astro.mjs');
const _page8 = () => import('./pages/posts/flexbox-guia-completa-diseno-responsive.astro.mjs');
const _page9 = () => import('./pages/posts/menu-navegacion-html-css-hover-efectos.astro.mjs');
const _page10 = () => import('./pages/posts/postgres-backup-restore-guide.astro.mjs');
const _page11 = () => import('./pages/posts/tag-cloud-tutorial.astro.mjs');
const _page12 = () => import('./pages/robots.txt.astro.mjs');
const _page13 = () => import('./pages/tags/_tag_.astro.mjs');
const _page14 = () => import('./pages/tags.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/blog.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/gallery.astro", _page6],
    ["src/pages/posts/css-grid-layout-tutorial.md", _page7],
    ["src/pages/posts/flexbox-guia-completa-diseno-responsive.md", _page8],
    ["src/pages/posts/menu-navegacion-html-css-hover-efectos.md", _page9],
    ["src/pages/posts/postgres-backup-restore-guide.md", _page10],
    ["src/pages/posts/tag-cloud-tutorial.md", _page11],
    ["src/pages/robots.txt.ts", _page12],
    ["src/pages/tags/[tag].astro", _page13],
    ["src/pages/tags/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "0e3aac7d-9661-4bdb-8848-2f3df9506c65",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
