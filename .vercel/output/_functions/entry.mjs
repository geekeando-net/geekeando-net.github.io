import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_FyOM-sUF.mjs';
import { manifest } from './manifest_ClxmwihE.mjs';

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
const _page9 = () => import('./pages/gallery/_category_.astro.mjs');
const _page10 = () => import('./pages/gallery.astro.mjs');
const _page11 = () => import('./pages/posts/css-grid-layout-tutorial.astro.mjs');
const _page12 = () => import('./pages/posts/flexbox-guia-completa-diseno-responsive.astro.mjs');
const _page13 = () => import('./pages/posts/menu-navegacion-html-css-hover-efectos.astro.mjs');
const _page14 = () => import('./pages/posts/postgres-backup-restore-guide.astro.mjs');
const _page15 = () => import('./pages/posts/tag-cloud-tutorial.astro.mjs');
const _page16 = () => import('./pages/robots.txt.astro.mjs');
const _page17 = () => import('./pages/tags/_tag_.astro.mjs');
const _page18 = () => import('./pages/tags.astro.mjs');
const _page19 = () => import('./pages/index.astro.mjs');
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
    ["src/pages/gallery/[category].astro", _page9],
    ["src/pages/gallery/index.astro", _page10],
    ["src/pages/posts/css-grid-layout-tutorial.md", _page11],
    ["src/pages/posts/flexbox-guia-completa-diseno-responsive.md", _page12],
    ["src/pages/posts/menu-navegacion-html-css-hover-efectos.md", _page13],
    ["src/pages/posts/postgres-backup-restore-guide.md", _page14],
    ["src/pages/posts/tag-cloud-tutorial.md", _page15],
    ["src/pages/robots.txt.ts", _page16],
    ["src/pages/tags/[tag].astro", _page17],
    ["src/pages/tags/index.astro", _page18],
    ["src/pages/index.astro", _page19]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "22a079dc-10e5-4b24-8d66-dbef5cdc8696",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
