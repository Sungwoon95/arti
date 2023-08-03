export const secToMin = (num) => {
  const parse = parseInt(num)
  const min = parse / 60
  const sec = parse % 60
  const ca = Math.floor(min) + '분' + sec + '초'
  return ca
}