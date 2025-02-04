export const getGithubCalendarYears = (
  currentYear: number,
  endYear: number
): number[] => {
  const numberOfYears = currentYear - endYear
  const years = []
  for (let i = 0; i < numberOfYears + 1; i++) {
    years.push(currentYear - i)
  }
  return years
}
