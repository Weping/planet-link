import { externalSources } from '../../constants/external-sources'
import { getAllRssFeedSlugs, getRssFeed } from '../../lib/core-parser'

export async function getStaticProps({ params }) {
  const feed = externalSources.find((feed) => feed.slug === params.slug)
  const detailedFeed = await getRssFeed(feed.url)
  return {
    props: {
      feed,
      items: detailedFeed.items
    },
    revalidate: 1
  }
}

export async function getStaticPaths() {
  const paths = getAllRssFeedSlugs()
  return {
    paths,
    fallback: false
  }
}

export default function Feed({ feed, items }) {
  return (
    <div>
      <h1>{feed.title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.link}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
