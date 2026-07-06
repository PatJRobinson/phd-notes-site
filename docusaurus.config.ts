import type {Config} from '@docusaurus/types';
import type {Options as DocsOptions} from '@docusaurus/plugin-content-docs';

const config: Config = {
  title: 'PhD Notes',
  tagline: 'Compiled research notes and wiki',
  favicon: 'img/favicon.ico',

  url: 'https://patjrobinson.github.io',
  baseUrl: '/phd-notes-site/',

  organizationName: 'patjrobinson',
  projectName: 'phd-notes-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'compiled',
        path: 'pages',
        routeBasePath: 'compiled',
        sidebarPath: './sidebarsCompiled.ts',
      } satisfies DocsOptions,
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'wiki',
        path: 'wiki',
        routeBasePath: 'wiki',
        sidebarPath: './sidebarsWiki.ts',
      } satisfies DocsOptions,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'PhD Notes',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'compiledSidebar',
          docsPluginId: 'compiled',
          position: 'left',
          label: 'Compiled Notes',
        },
        {
          type: 'docSidebar',
          sidebarId: 'wikiSidebar',
          docsPluginId: 'wiki',
          position: 'left',
          label: 'Wiki',
        },
        {
          href: 'https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPO_NAME',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
  },
};

export default config;
