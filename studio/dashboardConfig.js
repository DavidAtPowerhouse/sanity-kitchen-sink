export default {
  widgets: [
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
                  buildHookId: '635b6503735f3e382ed1811b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-bb5vvarx',
                  apiId: '16b45e5a-0ea0-4bff-b7d5-b1f8e32fe27d'
                },
                {
                  buildHookId: '635b6503735f3e382ed1811c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jwhhx85x',
                  apiId: '893accc3-f016-45db-99f8-7ca44dcc4330'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DavidAtPowerhouse/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jwhhx85x.netlify.app', category: 'apps'}
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
