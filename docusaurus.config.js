module.exports = {
  title: 'North Offaly CoderDojo Docs',
  tagline: 'Get answers to most frequently asked questions from North Offaly Dojo.',
  url: 'https://docs.northoffalydojo.xyz',
  baseUrl: '/',
  favicon: 'http://northoffalydojo.com/wp-content/uploads/2021/09/North-Offaly-Roundel-Sept-2021.png',
  organizationName: 'northoffalydojo', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'North Offaly CoderDojo',
      logo: {
        alt: 'North Offaly Dojo Roundel',
        src: 'http://northoffalydojo.com/wp-content/uploads/2021/09/North-Offaly-Roundel-Sept-2021.png',
      },
      links: [
        {
          to: 'docs/what-is-north-offaly-dojo',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'https://northoffalydojo.com', label: 'Main website', position: 'left'},
        {to: 'https://northoffalydojo.freshdesk.com/support/tickets/new', label: 'Submit a request', position: 'left'},
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
              href: 'https://northoffalydojo.com',
            },
            {
              label: 'Submit a request',
              href: 'https://northoffalydojo.freshdesk.com/support/tickets/new',
            },
            {
              label: 'Book a ticket',
              href: 'https://events.humanitix.com/north-offaly-coderdojo-2022-sessions',
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
            'https://github.com/northoffalydojo/docs/edit/master/website/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/northoffalydojo/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
