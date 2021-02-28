const queryString = ({ queryObj }) => {
  if (!queryObj || typeof queryObj !== 'object') return
  const str = Object.keys(queryObj).map(el => `${el}=${queryObj[el]}`).join('&')
  return '?'.concat(str)
}

export default queryString
