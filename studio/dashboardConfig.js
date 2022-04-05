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
                  buildHookId: '624c8a7f7f6f8e195b1f7a84',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-2n5t26wb',
                  apiId: 'dfaa2d9c-dca3-4713-95bd-f1015592d3c8'
                },
                {
                  buildHookId: '624c8a7f318db417cc50fbb7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-quw33tfu',
                  apiId: 'e3b17123-c651-4f6c-bfef-00460cad0081'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/canberry-developer/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-quw33tfu.netlify.app', category: 'apps' }
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
