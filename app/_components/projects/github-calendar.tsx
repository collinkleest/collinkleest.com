'use client'

import { Button, GridItem, SimpleGrid, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { ThemeType, useColorMode } from '../../color-mode'

export const GithubCalendar = () => {
  const { colorMode } = useColorMode()
  const [selectedYear, setSelectedYear] = useState(2025)

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
            <Button onClick={() => setSelectedYear(2025)}>2025</Button>
            <Button onClick={() => setSelectedYear(2024)}>2024</Button>
            <Button onClick={() => setSelectedYear(2023)}>2023</Button>
          </VStack>
        </GridItem>
      </SimpleGrid>
    </>
  )
}
