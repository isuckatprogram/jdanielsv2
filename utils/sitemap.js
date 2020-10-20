const fs = require('fs')
const globby = require('globby')

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    'public/*'
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
              const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
              var route = path === '/index' ? '' : path
              if(route[0] == '/'){
                route = route.replace('/', '')
              }

              if(route.startsWith('/public')){
                route = route.replace('/public', '')
              }

              return `
                 <url>
                  <loc>${`https://jdaniels.me/${route}`}</loc>
                </url>
                  `
            })
            .join('')}
      </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()