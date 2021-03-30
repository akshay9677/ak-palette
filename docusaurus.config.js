module.exports = {
  title: 'Palette',
  tagline: 'The tagline of my site',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'akshay', // Usually your GitHub org/user name.
  projectName: 'palette', // Usually your repo name.
  themeConfig: {
    sidebarCollapsible: false,
    colorMode:{
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Palette',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/getting-started/overview',
          activeBasePath: 'docs',
          label: 'Getting Started',
          position: 'left',
        },
        {to: 'docs/component-docs/button', label: 'Components', position: 'left'},
        {
          href: 'https://github.com/akshay9677/palette',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      // links: [
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'About',
      //     items: [
      //       {
      //         label: 'Akshay',
      //         to: 'https://akshay-personal-web.netlify.app/',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/akshay9677',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Akshay 🤙`,
    },
  },plugins: ['docusaurus-plugin-sass'],
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
          customCss: require.resolve('./static/custom.css'),
        },
      },
    ],
  ],
};
