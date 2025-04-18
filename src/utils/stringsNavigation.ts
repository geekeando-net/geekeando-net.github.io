const navBarLinks = [
    { name: 'Home', url: '/' },
    { name: 'Project', url: '/project' },
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
        section: 'Projects',
        links:[
            { name: 'Arduino', url: '/arduino' },
            { name: 'Paper Craft', url: '/paper-craft' },
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
const socialLinks = [
        {name: 'facebook', url: 'https://www.facebook.com/'},
        {name: 'x', url: 'https://twitter.com/draexx'},
        {name: 'github', url: 'https://github.com/draexx'},
        {name: 'instagram', url: 'https://www.instagram.com/draexx'},
        {name: 'dev', url: 'https://dev.to/draexx'},
        {name: 'linkedIn', url: 'https://linkedin.com/draexx'},
    ];
export default {
    navBarLinks,
    socialLinks,
    footerLinks
};