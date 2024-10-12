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
            { name: 'Project 1', url: '/project1' },
            { name: 'Project 2', url: '/project2' },
            { name: 'Project 3', url: '/project3' },
            { name: 'Project 4', url: '/project4' },
        ],
    },
    {
        section: 'Services',
        links:[
            { name: 'About Us', url: '/about' },
            { name: 'Blog', url: '/blog' },
            { name: 'Service 3', url: '/service3' },
            { name: 'Service 4', url: '/service4' },
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