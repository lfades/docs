export default [
  {
    name: 'Introduction',
    href: '/docs/v2/introduction',
    aliases: ['/docs/v2', '/docs'],
    sidebarSeparator: true
  },
  {
    name: 'Deployment',
    highlightCategory: true,
    posts: [
      {
        name: 'Deployment Basics',
        href: '/docs/v2/deployment/deployment-basics'
      },
      {
        name: 'Serverless Functions',
        href: '/docs/v2/deployment/serverless-functions'
      },
      {
        name: 'Environment Variables and Secrets',
        href: '/docs/v2/deployment/environment-variables-and-secrets'
      }
    ]
  },
  {
    name: 'Domains and Aliases',
    highlightCategory: true,
    posts: [
      {
        name: 'Adding a Domain',
        href: '/docs/v2/domains-and-aliases/adding-a-domain'
      },
      {
        name: 'Aliasing a Project',
        href: '/docs/v2/domains-and-aliases/aliasing-a-deployment'
      },
      {
        name: 'Buying a Domain',
        href: '/docs/v2/domains-and-aliases/buying-a-domain'
      },
      {
        name: 'CDN and Caching',
        href: '/docs/v2/domains-and-aliases/cdn'
      },
      {
        name: 'Managing DNS',
        href: '/docs/v2/domains-and-aliases/dns'
      },
      {
        name: 'Transferring a Domain',
        href: '/docs/v2/domains-and-aliases/transferring-a-domain'
      }
    ]
  },
  {
    name: 'Integrations',
    sidebarSeparator: true,
    highlightCategory: true,
    posts: [
      {
        name: 'Now for GitHub',
        href: '/docs/v2/integrations/now-for-github'
      },
      {
        name: 'Now for GitLab',
        href: '/docs/v2/integrations/now-for-gitlab'
      }
    ]
  },
  {
    name: 'Network',
    posts: [
      {
        name: 'Overview',
        href: '/docs/v2/network/overview'
      },
      {
        name: 'Caching',
        href: '/docs/v2/network/caching'
      },
      {
        name: 'Headers',
        href: '/docs/v2/network/headers'
      },
      {
        name: 'Encryption',
        href: '/docs/v2/network/encryption'
      },
      {
        name: 'Status Codes',
        href: '/docs/v2/network/status-codes'
      },
      {
        name: 'Directory Listing',
        href: '/docs/v2/network/directory-listing'
      },
      {
        name: 'Compression',
        href: '/docs/v2/network/compression'
      }
    ]
  },
  {
    name: 'Advanced',
    posts: [
      {
        name: 'Configuration',
        href: '/docs/v2/advanced/configuration'
      },
      {
        name: 'Routes',
        href: '/docs/v2/advanced/routes'
      },
      {
        name: 'Builds',
        href: '/docs/v2/advanced/builds'
      },
      {
        name: 'Builders',
        overview: '/docs/v2/advanced/builders/overview',
        posts: [
          {
            name: 'Overview',
            href: '/docs/v2/advanced/builders/overview'
          },
          {
            name: 'Developer Guide',
            href: '/docs/v2/advanced/builders/developer-guide'
          },
          {
            name: 'Static',
            href: '/docs/v2/advanced/builders/static-now-static'
          },
          {
            name: 'Static Builds',
            href: '/docs/v2/advanced/builders/static-build-now-static-build'
          },
          {
            name: 'Node.js',
            href: '/docs/v2/advanced/builders/node-js-now-node'
          },
          {
            name: 'Next.js',
            href: '/docs/v2/advanced/builders/next-js-now-next'
          },
          {
            name: 'Go',
            href: '/docs/v2/advanced/builders/go-now-go'
          },
          {
            name: 'PHP',
            href: '/docs/v2/advanced/builders/php-now-php'
          },
          {
            name: 'Python',
            href: '/docs/v2/advanced/builders/python-now-python'
          },
          {
            name: 'Ruby',
            href: '/docs/v2/advanced/builders/ruby-now-ruby'
          },
          {
            name: 'Rust',
            href: '/docs/v2/advanced/builders/now-rust'
          },
          {
            name: 'Bash',
            href: '/docs/v2/advanced/builders/bash-now-bash'
          }
        ]
      },
      {
        name: 'Deployment Concepts',
        overview: '/docs/v2/advanced/concepts/overview',
        posts: [
          {
            name: 'Overview',
            href: '/docs/v2/advanced/concepts/overview'
          },
          {
            name: 'Lifecycle',
            href: '/docs/v2/advanced/concepts/lifecycle'
          },
          {
            name: 'Immutability',
            href: '/docs/v2/advanced/concepts/immutability'
          },
          {
            name: 'URLs',
            href: '/docs/v2/advanced/concepts/urls'
          },
          {
            name: 'Special Paths',
            href: '/docs/v2/advanced/concepts/special-paths'
          },
          {
            name: 'Lambdas',
            href: '/docs/v2/advanced/concepts/lambdas'
          },
          {
            name: 'CDN and Global Distribution',
            href: '/docs/v2/advanced/concepts/cdn-and-global-distribution'
          }
        ]
      },
      {
        name: 'Global Configuration',
        href: '/docs/v2/advanced/global-configuration'
      },
      {
        name: 'Platform',
        posts: [
          {
            name: 'Overview',
            href: '/docs/v2/advanced/platform/overview'
          },
          {
            name: 'Regions and Providers',
            href: '/docs/v2/advanced/platform/regions-and-providers'
          },
          {
            name: 'Projects',
            href: '/docs/v2/advanced/platform/projects'
          },
          {
            name: 'Users and Teams',
            href: '/docs/v2/advanced/platform/users-and-teams'
          },
          {
            name: 'Add-Ons',
            href: '/docs/v2/advanced/platform/add-ons'
          },
          {
            name: 'Glossary',
            href: '/docs/v2/advanced/platform/glossary'
          }
        ]
      }
    ]
  }
]
