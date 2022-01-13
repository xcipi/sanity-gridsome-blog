export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61dfe5914ff34fe5f1143e27',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-4g5faxto',
                  apiId: '763ff30d-8073-494a-b22c-b881e61908fe'
                },
                {
                  buildHookId: '61dfe591bb57fb0ba449da2d',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-u8th4avg',
                  apiId: 'db0ff18d-81f1-45ae-b33a-131c3204351a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xcipi/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-u8th4avg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
