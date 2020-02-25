let { languages } = require('./package.json')
let { supportedLanguages, defaultLanguage } = languages

let { createServer } = require('http')
let { parse } = require('url')
let next = require('next')

let dev = process.env.NODE_ENV !== 'production'
let app = next({ dev })
let handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    let parsedUrl = parse(req.url, true)
    let { pathname, query } = parsedUrl

    if (pathname.startsWith(`/${defaultLanguage}`)) {
      res.writeHead(301, {
        // the fallback is for the root (`/en`)
        Location: pathname.substring(3) || '/'
      })

      res.end()
    }

    let REGEXpattern = supportedLanguages.reduce(
      (pattern, lang, index) =>
        index + 1 < supportedLanguages.length
          ? `${pattern}(\/${lang}\/?)|`
          : `${pattern}(\/${lang}\/?)`,
      ''
    )

    let langREGEX = new RegExp(`^${REGEXpattern}`)
    let matchedLang = pathname.match(langREGEX)

    if (matchedLang === null) {
      app.render(req, res, `/en${pathname.length > 1 ? pathname : ''}`, query)
      return
    }

    switch (matchedLang[0]) {
      case `/${defaultLanguage}`:
      case `/${defaultLanguage}/`:
        handle(req, res, parsedUrl)
        break

      default:
        app.render(
          req,
          res,
          pathname.endsWith('/')
            ? pathname.substring(0, pathname.length - 1)
            : pathname,
          query
        )
        break
    }
  }).listen(3000, err => {
    if (err) throw err
    console.log('\n❯ Ready on http://localhost:3000\n')
  })
})
