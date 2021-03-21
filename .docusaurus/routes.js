
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','f5a'),
  
  routes: [
{
  path: '/docs/component-docs/Alert',
  component: ComponentCreator('/docs/component-docs/Alert','a85'),
  exact: true,
},
{
  path: '/docs/component-docs/Avatar',
  component: ComponentCreator('/docs/component-docs/Avatar','711'),
  exact: true,
},
{
  path: '/docs/component-docs/Badge',
  component: ComponentCreator('/docs/component-docs/Badge','8e5'),
  exact: true,
},
{
  path: '/docs/component-docs/Button',
  component: ComponentCreator('/docs/component-docs/Button','bfe'),
  exact: true,
},
{
  path: '/docs/component-docs/Checkbox',
  component: ComponentCreator('/docs/component-docs/Checkbox','42b'),
  exact: true,
},
{
  path: '/docs/component-docs/Input',
  component: ComponentCreator('/docs/component-docs/Input','da3'),
  exact: true,
},
{
  path: '/docs/component-docs/Modal',
  component: ComponentCreator('/docs/component-docs/Modal','cff'),
  exact: true,
},
{
  path: '/docs/component-docs/Popover',
  component: ComponentCreator('/docs/component-docs/Popover','737'),
  exact: true,
},
{
  path: '/docs/component-docs/SideSheet',
  component: ComponentCreator('/docs/component-docs/SideSheet','e56'),
  exact: true,
},
{
  path: '/docs/component-docs/Spinner',
  component: ComponentCreator('/docs/component-docs/Spinner','d3c'),
  exact: true,
},
{
  path: '/docs/component-docs/TextArea',
  component: ComponentCreator('/docs/component-docs/TextArea','f51'),
  exact: true,
},
{
  path: '/docs/component-docs/Toast',
  component: ComponentCreator('/docs/component-docs/Toast','547'),
  exact: true,
},
{
  path: '/docs/component-docs/ToolTip',
  component: ComponentCreator('/docs/component-docs/ToolTip','fa9'),
  exact: true,
},
{
  path: '/docs/getting-started/overview',
  component: ComponentCreator('/docs/getting-started/overview','d64'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
