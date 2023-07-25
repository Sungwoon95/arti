export const calcYears = (timestamp) => {
  const years = Math.floor((Date.now() - parseInt(timestamp)) / (1000 * 60 * 60 * 24 * 365))
  return years
}

export const calcDays = (timestamp) => {
  const days = Math.floor((Date.now() - parseInt(timestamp)) / (1000 * 60 * 60 * 24))
  return days
}

export const calcDate = (timestamp, delimeter) => {
  const date = parseInt(timestamp)
  const dateTime = new Date(date)
  const years = dateTime.getFullYear()
  const month = dateTime.getMonth() + 1
  const day = dateTime.getDate()
  const type = years + delimeter + month + delimeter + day
  // console.log(dateTime, type)
  return { dateTime, type }
}