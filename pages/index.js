/** @jsx jsx */
import Head from 'next/head'
import { Global, jsx } from '@emotion/core'
import {
  container,
  main,
  code,
  grid,
  card,
  globalStyles,
  header,
  headerLink,
  description
} from '../components/index/styles'

const Home = () => (
  <div css={container}>
    <Global styles={globalStyles} />
    <Head>
      <title>Getting started</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main css={main}>
      <h1 css={header}>
        Welcome to{' '}
        <a css={headerLink} href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p css={description}>
        Get started by editing{' '}
        <code css={code}>pages/{'{{ lang }}'}/index.js</code>
      </p>

      <p css={description}>You can navigate between pages and langs</p>

      <div css={grid}>
        <a href="/" css={card}>
          <h3>
            <code css={code}>/en/index</code>
          </h3>
          <p>You're here!</p>
        </a>
        <a href="/en/page2" css={card}>
          <h3>
            <code css={code}>/en/page2</code>
          </h3>
          <p>
            Another <strong>EN</strong> page.
          </p>
        </a>
        <a href="/eo/" css={card}>
          <h3>
            <code css={code}>/eo/index</code>
          </h3>
          <p>
            Go to <strong>EO</strong> index page
          </p>
        </a>
        <a href="/eo/page2" css={card}>
          <h3>
            <code css={code}>/eo/page2</code>
          </h3>
          <p>
            Another <strong>EO</strong> page.
          </p>
        </a>
      </div>

      <div css={grid}>
        <a
          href="https://nextjs.org/docs"
          css={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Next.JS Docs ↗</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" css={card}>
          <h3>Starter Docs &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          css={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Examples ↗</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://zeit.co/new?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          css={card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>Deploy ↗</h3>
          <p>
            Instantly deploy your Next.js site to a public URL with ZEIT Now.
          </p>
        </a>
      </div>
    </main>
  </div>
)

export default Home
