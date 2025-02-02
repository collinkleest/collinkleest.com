'use client'

import { Button, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
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
      <SimpleGrid columns={8} gap={0}>
        <GridItem colSpan={6}>
          <GitHubCalendar
            username="collinkleest"
            colorScheme={colorMode as ThemeType}
            year={selectedYear}
          />
        </GridItem>
        <GridItem colSpan={2}>
          <VStack>
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
        </GridItem>
      </SimpleGrid>
    </>
  )
}
