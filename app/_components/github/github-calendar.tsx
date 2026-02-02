'use client'

import { getGithubCalendarYears } from '@_utils'
import { Box, Flex, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { ThemeType, useColorMode } from '../../color-mode'
import { MobileYearSelect } from './mobile-year-select'
import { YearSelect } from './year-select'

export const GithubCalendar = () => {
  const { colorMode } = useColorMode()

  const [selectedYear, setSelectedYear] = useState(2026)
  const years = getGithubCalendarYears(new Date().getFullYear(), 2018)

  return (
    <>
      <Flex justify={'space-between'}>
        <Heading textStyle={'2xl'}>Github Contributions</Heading>
        <MobileYearSelect
          selectedYear={selectedYear}
          years={years}
          setSelectedYear={setSelectedYear}
        />
      </Flex>
      <Flex
        my={4}
        gap={4}
        h={'10rem'}
        direction={'row'}
        align="stretch"
        justifyContent="flex-start"
        wrap="wrap">
        <Box flex="1" minWidth="0" maxWidth="900px">
          <GitHubCalendar
            username="collinkleest"
            colorScheme={colorMode as ThemeType}
            year={selectedYear}
          />
        </Box>
        <YearSelect
          years={years}
          setSelectedYear={setSelectedYear}
          selectedYear={selectedYear}
        />
      </Flex>
    </>
  )
}
