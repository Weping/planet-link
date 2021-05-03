import Head from 'next/head'
import Link from 'next/link'

import Layout, { blogTitle } from '../../components/blog-layout'
import Date from '../../components/blog-date'

import { getSortedPostsData } from '../../lib/blog-posts'
import utilStyles from '../../styles/blog-utils.module.css'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{blogTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis aliquet nibh. Etiam sit amet sem eu neque convallis venenatis at lobortis lectus.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/blog/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
