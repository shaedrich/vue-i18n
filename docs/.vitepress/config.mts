import type { HeadConfig } from 'vitepress'
import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

const head: HeadConfig[] = [['link', { rel: 'icon', href: '/vue-i18n-logo.png' }]]

export default defineConfig({
  title: 'Vue I18n',
  description: 'Internationalization plugin for Vue.js',

  lang: 'en-US',
  lastUpdated: true,
  head,

  markdown: { attrs: { disable: true } },

  vite: {
    plugins: [llmstxt()]
  },

  themeConfig: {
    logo: '/vue-i18n-logo.svg',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/intlify/vue-i18n' },
      { icon: 'twitter', link: 'https://twitter.com/intlify' }
    ],

    editLink: {
      pattern:
        'https://github.com/intlify/vue-i18n/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2015-present kazuya kawaguchi'
    },

    carbonAds: {
      code: 'CWYDVK37',
      placement: 'vue-i18nintlifydev'
    },

    search: {
      provider: 'local',
    },

    nav: nav(),

    sidebar: {
      '/guide/': sidebarGuide(),
      '/api/': sidebarApi(),
      // NOTE: if we need to support multiple versions, we can be enble the following sidebar items
      // '/api/v11/': sidebarApi('v11/'),
      '/ecosystem/': sidebarEcosystem()
    }
  }
})

function nav() {
  return [
    {
      text: 'Guide',
      link: '/guide/installation'
    },
    {
      text: 'API',
      link: '/api/general',
      // NOTE: if we need to support multiple versions, we can be enble the following navigation items
      // items: [{ text: 'latest', link: '/api/general' }, { text: 'v9 ~ v11', link: '/api/v11/general' }]
    },
    {
      text: 'Ecosystem',
      link: '/ecosystem/official'
    },
    {
      text: 'Version',
      items: [{ text: 'Maintenance Status', link: '/guide/maintenance' }, { text: 'v8.x', link: 'https://kazupon.github.io/vue-i18n/' }]
    },
    {
      text: 'Changelog',
      link: 'https://github.com/intlify/vue-i18n/blob/master/CHANGELOG.md'
    }
  ]
}

function sidebarGuide() {
  return [
    {
      text: 'Introduction',
      collapsible: true,
      items: [
        {
          text: 'What is Vue I18n?',
          link: '/guide/introduction'
        },
        {
          text: 'Installation',
          link: '/guide/installation'
        },
        {
          text: 'Maintenance Status',
          link: '/guide/maintenance'
        },
      ]
    },
    {
      text: 'Essentials',
      collapsible: true,
      items: [
        {
          text: 'Getting Started',
          link: '/guide/essentials/started',
        },
        {
          text: 'Message Format Syntax',
          link: '/guide/essentials/syntax'
        },
        {
          text: 'Pluralization',
          link: '/guide/essentials/pluralization'
        },
        {
          text: 'Datetime Formatting',
          link: '/guide/essentials/datetime'
        },
        {
          text: 'Number Formatting',
          link: '/guide/essentials/number'
        },
        {
          text: 'Scope and Locale Changing',
          link: '/guide/essentials/scope'
        },
        {
          text: 'Fallbacking',
          link: '/guide/essentials/fallback'
        },
        {
          text: 'Local Scope Based Localization',
          link: '/guide/essentials/local'
        }
      ]
    },
    {
      text: 'Advanced',
      collapsible: true,
      items: [
        {
          text: 'Component Interpolation',
          link: '/guide/advanced/component'
        },
        {
          text: 'Single File Components',
          link: '/guide/advanced/sfc'
        },
        {
          text: 'Lazy Loading',
          link: '/guide/advanced/lazy'
        },
        {
          text: 'Message Functions',
          link: '/guide/advanced/function'
        },
        {
          text: 'Composition API',
          link: '/guide/advanced/composition'
        },
        {
          text: 'TypeScript Support',
          link: '/guide/advanced/typescript'
        },
        {
          text: 'Web components',
          link: '/guide/advanced/wc'
        },
        {
          text: 'Optimization',
          link: '/guide/advanced/optimization'
        },
        {
          text: 'Custom Message Format',
          link: '/guide/advanced/format'
        },
        {
          text: 'Petite Vue I18n',
          link: '/guide/advanced/lite'
        },
        {
          text: 'Custom Directive',
          link: '/guide/advanced/directive'
        }
      ]
    },
    {
      text: 'Frameworks Integration',
      collapsible: false,
      items: [
        {
          text: 'Nuxt 3',
          link: '/guide/integrations/nuxt3'
        }
      ]
    },
    {
      text: 'Migrations',
      collapsible: true,
      items: [
        {
          text: 'Breaking Changes in v12',
          link: '/guide/migration/breaking12'
        },
        {
          text: 'Breaking Changes in v11',
          link: '/guide/migration/breaking11'
        },
        {
          text: 'Breaking Changes in v10',
          link: '/guide/migration/breaking10'
        },
        {
          text: 'Breaking Changes in v9',
          link: '/guide/migration/breaking'
        },
        {
          text: 'New Features in v9',
          link: '/guide/migration/features'
        },
        {
          text: 'Migration in Vue 3',
          link: '/guide/migration/vue3'
        }
      ]
    },
    {
      text: 'Extra Topics',
      collapsible: true,
      items: [
        {
          text: 'Different Distribution files',
          link: '/guide/extra/dist'
        },
        {
          text: 'Migration from Vue 2',
          link: '/guide/migration/vue2'
        }
      ]
    }
  ]
}

function sidebarApi(ns = '') {
  return [
    {
      text: 'API Reference',
      items: [
        {
          text: 'General',
          link: `/api/${ns}general`
        },
        {
          text: 'Legacy API',
          link: `/api/${ns}legacy`
        },
        {
          text: 'Composition API',
          link: `/api/${ns}composition`
        },
        {
          text: 'Components',
          link: `/api/${ns}component`
        },
        {
          text: 'Directives',
          link: `/api/${ns}directive`
        },
        {
          text: 'Component Injections',
          link: `/api/${ns}injection`
        }
      ]
    }
  ]
}
function sidebarEcosystem() {
  return [
    {
      text: 'Ecosystem',
      items: [
        {
          text: 'Official Tooling',
          link: '/ecosystem/official'
        },
        {
          text: '3rd Party Integrations',
          link: '/ecosystem/integrations'
        },
        {
          text: '3rd Party Tooling',
          link: '/ecosystem/tools'
        }
      ]
    }
  ]
}
