export const scrollTo = (top) => window.scrollTo({ top: top, behavior: 'smooth' })

export const to = ({ history, url }) => {
  scrollTo(0)
  history.push(url)
}

export const millisToString = ({ date = new Date(Date.now()), showHours = true }) => {
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const month = date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()
  let string = `${day}.${month}.${date.getFullYear()}.`
  if (showHours) {
    string.append(` ${hours}:${minutes}:${seconds}`)
  }
  return string
}

export const extractDistinctTags = (notes) => {
  const tags = notes.reduce((acc, note, index) => {
    note.tags.forEach(tag => {
      if (!acc.includes(tag)) {
        acc.push(tag)
      }
    })
    return acc
  }, [])
  return tags.sort()
}

export const buildQuery = (params) => {
  let first = true
  const url = Object.entries(params).reduce((url, [key, value]) => {
    if (value.length === 0) {
      return url
    }
    if (first) {
      first = false
      url += `?${key}=${value.join(',')}`
    } else {
      url += `&${key}=${value.join(',')}`
    }
    return url
  }, '')
  return url
}

export const parseQuery = (query) => {
  let params = {
    tags: [],
    words: []
  }
  let queryTags = query.get('tags')
  if (queryTags) {
    if (queryTags.includes(',')) {
      params.tags = queryTags.split(',')
    } else {
      params.tags = [queryTags]
    }
  }
  let queryWords = query.get('words')
  if (queryWords) {
    if (queryWords.includes(',')) {
      params.words = queryWords.split(',')
    } else {
      params.words = [queryWords]
    }
  }
  return params
}
