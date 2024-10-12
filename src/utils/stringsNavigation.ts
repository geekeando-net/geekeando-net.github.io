const navBarLinks = [
    { name: 'Home', url: '/' },
    { name: 'Project', url: '/project' },
    { name: 'Blog', url: '/blog' },
    { name: 'About', url: '/about' },
    // { name: 'Services', url: '/services' },
    // { name: 'Portfolio', url: '/portfolio' },
    // { name: 'FAQ', url: '/faq' },
    // { name: 'Support', url: '/support' },
    { name: 'Contact', url: '/contact' },
    ];
const footerLinks = [
    {
        section: 'Projects',
        links:[
            { name: 'Arduino', url: '/arduino' },
            { name: 'Paper Craft', url: '/papercraft' },
            { name: '3D Print', url: '/print3d' },
            { name: 'Music', url: '/music' },
        ],
    },
    {
        section: 'Information',
        links:[
            { name: 'About Us', url: '/about' },
            { name: 'Blog', url: '/blog' },
            { name: 'FAQ', url: '/faq' },
            { name: 'Contact Us', url: '/contact' },
        ],
    }
    ];
const socialLinks = {
        facebook: "https://www.facebook.com/",
        x: "https://twitter.com/draexx",
        github: "https://github.com/draexx",
        instagram: "https://www.google.com/draexx",
        dev: "https://dev.to/draexx",
    };
export default {
    navBarLinks,
    socialLinks,
    footerLinks
};