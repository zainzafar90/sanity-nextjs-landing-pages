export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620d225a0ee8612b4a441d27',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6u1gkzut',
                  apiId: '50b8bff5-9403-4a61-acd2-0ae11d874c02'
                },
                {
                  buildHookId: '620d225aae959523f12529db',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-metyqxz4',
                  apiId: 'f23b9e81-e7d4-4141-b121-1f411892bd0a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/zainzafar90/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-metyqxz4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
