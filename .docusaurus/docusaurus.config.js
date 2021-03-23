export default {
  "title": "Palette",
  "tagline": "The tagline of my site",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "akshay",
  "projectName": "palette",
  "themeConfig": {
    "sidebarCollapsible": false,
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "Palette",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/getting-started/installation",
          "activeBasePath": "docs",
          "label": "Getting Started",
          "position": "left"
        },
        {
          "to": "docs/component-docs/alert",
          "label": "Components",
          "position": "left"
        },
        {
          "href": "https://github.com/akshay9677/palette",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "light",
      "copyright": "Copyright © 2021 Akshay 🤙",
      "links": []
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "plugins": [
    "docusaurus-plugin-sass"
  ],
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/test/Desktop/palette/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/test/Desktop/palette/static/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};