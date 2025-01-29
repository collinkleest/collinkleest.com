import GitHubCalendar from 'react-github-calendar'
import { ThemeType, useColorMode } from '../../color-mode'

export const GithubCalendar = () => {
  const { colorMode } = useColorMode()
  return (
    <GitHubCalendar
      username="collinkleest"
      colorScheme={colorMode as ThemeType}
    />
  )
}
