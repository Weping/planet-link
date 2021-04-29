import { parseISO, format } from 'date-fns'

export default function DateBlog({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}
