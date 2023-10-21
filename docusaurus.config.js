// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MyServers',
  tagline: '一个App监控管理个人所有的服务器和应用',
  favicon: 'img/newMyServer1024.png',

  // Set the production url of your site here
  url: 'https://myservers.codeloverme.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  scripts: [
    {src: 'https://www.googletagmanager.com/gtag/js?id=G-4966Y3DK52', async: true},
    {src: '/google.js', async: true},
    {src: '/app.js', async: true, type='application/ld+json'},
  ],

  plugins: [
    function () {
      return {
        name: 'docusaurus-plugin-scss',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.scss$/,
                  use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 1,
                        modules: {
                          localIdentName: '[local]__[hash:base64:5]',
                        },
                      },
                    },
                    'sass-loader',
                  ],
                },
              ],
            },
          };
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**','/blog/**'],
          filename: 'sitemap.xml',
        },
        googleAnalytics: {
          trackingID: 'G-3X2XHTPPFL',
        },
        googleTagManager: {
          containerId: 'AW-11371629200',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MyServers',
        logo: {
          alt: 'My Site Logo',
          src: 'img/newMyServer1024.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: '文档',
            className: 'custom-nav'
          },
          {
            href: 'https://github.com/my-servers',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '链接',
            items: [
              {
                label: '主页',
                href: 'https://myservers.codeloverme.cn/',
              }
            ],
          },
          {
            title: '其他',
            items: [
              {
                label: 'Email',
                href: 'mailto:codeloverql@gmail.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MyServers`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
