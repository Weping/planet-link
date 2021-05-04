import rssParser from 'rss-parser'

import { externalSources } from '../constants/external-sources'

export function getAllRssFeedSlugs() {
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       slug: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'pre-rendering'
  //     }
  //   }
  // ]
  return externalSources.map(feed => {
    return {
      params: {
        slug: feed.slug
      }
    }
  })
}

export async function getRssFeed(url) {
  // Use rss-parser to parse the feed metadata
  const rss = new rssParser()
  const feed = await rss.parseURL(url)

  return feed
}
