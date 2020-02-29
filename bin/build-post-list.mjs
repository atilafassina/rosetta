import { writeFileSync, readdirSync } from 'fs'
import config from '../config/main.js'
import path from 'path'
import { fileURLToPath } from 'url'

let { languages } = config

let __dirname = path.dirname(fileURLToPath(import.meta.url))

let FRONTMATTER_DIR = (lang, postName) =>
  path.resolve(
    __dirname,
    '../',
    `pages/${lang}/posts/${postName}/frontmatter.mjs`
  )

let POSTS_DIR = lang => path.resolve(__dirname, '../', `pages/${lang}/posts`)

let getPostInfo = async (postName, lang) => {
  let module = await import(FRONTMATTER_DIR(lang, postName))

  return module.default
}

let getPostsInfo = async (list, language) => {
  let postsInfo = await Promise.all(
    list.map(post => getPostInfo(post, language))
  )

  postsInfo.sort((post1, post2) => post2.date.getTime() - post1.date.getTime())

  return postsInfo
}

let getPostsArray = async lang => {
  let postList = readdirSync(POSTS_DIR(lang))
  let postArray = await getPostsInfo(postList, lang)

  return postArray
}

Promise.all(languages.supportedLanguages.map(getPostsArray)).then(
  postsPerLang => {
    let final = {}
    languages.supportedLanguages.forEach((language, index) => {
      final[language] = postsPerLang[index]
    })

    writeFileSync(
      path.resolve(__dirname, '../', 'config/posts-list.js'),
      `export default ${JSON.stringify(final)}`
    )
  }
)
