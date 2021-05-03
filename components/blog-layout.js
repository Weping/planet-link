import Head from 'next/head'
import Link from 'next/link'

import styles from './blog-layout.module.css'
import utilStyles from '../styles/blog-utils.module.css'

const name = 'Author Name'
export const blogTitle = 'Blog Title'

export default function BlogLayout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={blogTitle} />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/blog">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/blog">
            <a>← Back to blog</a>
          </Link>
        </div>
      )}
    </div>
  )
}
