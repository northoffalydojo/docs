module.exports = {
  title: 'North Offaly CoderDojo Docs',
  tagline: 'Get answers to most frequently asked questions from North Offaly Dojo.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'https://northoffalydojo.xyz/app/uploads/2021/05/NorthOffalyDojoNEW-Roundel.png',
  organizationName: 'northoffalydojo', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'North Offaly CoderDojo',
      logo: {
        alt: 'North Offaly Dojo Roundel',
        src: 'https://northoffalydojo.xyz/app/uploads/2021/05/NorthOffalyDojoNEW-Roundel.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/northoffalydojo/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/doc1',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Main website',
              href: 'https://northoffalydojo.xyz',
            },
            {
              label: 'Submit a request',
              href: 'https://portal.northoffalydojo.xyz/support/#/tickets/new',
            },
            {
              label: 'Book a ticket',
              href: 'https://northoffalydojo.xyz/sessions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Status',
              to: 'https://status.northoffalydojo.xyz',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/northoffalydojo/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} North Offaly Dojo. Built with Docusaurus and powered by Vercel.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
