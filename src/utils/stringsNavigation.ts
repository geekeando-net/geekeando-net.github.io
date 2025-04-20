const navBarLinks = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Blog', url: '/blogs' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'About', url: '/about' },
    // { name: 'Portfolio', url: '/portfolio' },
    // { name: 'FAQ', url: '/faq' },
    // { name: 'Support', url: '/support' },
    { name: 'Contact', url: '/contact' },
    ];
const footerLinks = [
    {
        section: 'Information',
        icon: 'mdi:information',
        links:[
            { name: 'About Us', url: '/about', icon: 'mdi:account-group',external: false },
            { name: 'Blog', url: '/blog', icon: 'mdi:post',external: false },
            { name: 'FAQ', url: '/faq', icon: 'mdi:comment-question-outline',external: false },
            { name: 'Contact Us', url: '/contact', icon: 'mdi:email',external: false },
        ],
    },
    {
        section: 'Projects',
        icon: 'mdi:folder-multiple',
        links:[
            { name: 'Arduino', url: '/projects/arduino', icon: 'mdi:chip',external: false },
            { name: 'Paper Craft', url: '/projects/paper-craft', icon: 'mdi:file-document',external: false },
            { name: '3D Print', url: '/projects/print3d', icon: 'mdi:printer-3d',external: false },
            { name: 'Music', url: '/projects/music', icon: 'mdi:music',external: false },
        ],
    },
];
const socialLinks = [
        {name: 'mdi:facebook', url: 'https://www.facebook.com/'},
        {name: 'mdi:twitter', url: 'https://twitter.com/draexx'},
        {name: 'mdi:github', url: 'https://github.com/draexx'},
        {name: 'mdi:instagram', url: 'https://www.instagram.com/draexx'},
        {name: 'mdi:dev-to', url: 'https://dev.to/draexx'},
        {name: 'mdi:linkedin', url: 'https://linkedin.com/draexx'},
    ];
export default {
    navBarLinks,
    socialLinks,
    footerLinks
};