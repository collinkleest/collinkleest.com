'use client'

import { Box, Button, Flex, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { ThemeType, useColorMode } from '../../color-mode'

const getGithubCalendarYears = (
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

export const GithubCalendar = () => {
  const { colorMode } = useColorMode()
  const [selectedYear, setSelectedYear] = useState(2025)
  const years = getGithubCalendarYears(new Date().getFullYear(), 2018)

  return (
    <>
      <Flex my={4} gap={4} h={'10rem'} direction={'row'}>
        <Box>
          <GitHubCalendar
            username="collinkleest"
            colorScheme={colorMode as ThemeType}
            year={selectedYear}
          />
        </Box>
        <Box h={'10rem'} display="flex" alignItems="stretch">
          <VStack maxH={'full'} overflowY={'auto'}>
            {years.map((year) => {
              return (
                <Button
                  key={year}
                  variant={year == selectedYear ? 'solid' : 'outline'}
                  size={'xs'}
                  onClick={() => setSelectedYear(year)}>
                  {year}
                </Button>
              )
            })}
          </VStack>
        </Box>
      </Flex>
    </>
  )
}
