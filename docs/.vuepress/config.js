module.exports = {
    title:'Palette',
    base: '/',
    description: 'A refreshed design library for the Freshworks Developers.',
    themeConfig: {
      lastUpdated: 'Last Updated',
      smoothScroll: true,
      sidebar: [
        {
          title: 'Introduction',
          collapsable: true,
          sidebarDepth: 1,
        },
        {
            title: 'Components',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              '/button.html',
            ]
          },
      ],
    },
}