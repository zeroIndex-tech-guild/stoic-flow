/*
 * Get daily stoic based on the day of the year
 * if it's Jan 1, get day=1 content and so on
 */
export const getCurrentDayOfYear = () => {
  const today = new Date()
  const startOfYear = new Date(today.getFullYear(), 0, 1)

  const diffInMilliseconds = today.getTime() - startOfYear.getTime()

  const dayOfYear = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24)) + 1

  return Number(dayOfYear)
}

/* Get current year */
export const getCurrentYear = () => Number(new Date().getFullYear())
