export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d241290a86b76c38107531b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-fz56shwm',
                  apiId: '1b379144-282a-442e-8277-6ea97ceabec4'
                },
                {
                  buildHookId: '5d241290243c9eb80cded6b1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-4ou9k65x',
                  apiId: '017c3b36-5974-45bc-8463-0d3382166a27'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jmssmth/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-4ou9k65x.netlify.com', category: 'apps'}
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
