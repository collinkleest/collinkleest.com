'use client'

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/ui/menu'
import { Box, Button, Flex, Heading, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import { ThemeType, useColorMode, useColorModeValue } from '../../color-mode'

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
  const bgColor = useColorModeValue('gray.100', 'gray.800')
  const [selectedYear, setSelectedYear] = useState(2025)
  const years = getGithubCalendarYears(new Date().getFullYear(), 2018)

  return (
    <>
      <Flex justify={'space-between'}>
        <Heading textStyle={'2xl'}>Github Contributions</Heading>
        <Box display={{ base: 'block', md: 'none' }}>
          <MenuRoot>
            <MenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Text>Year:</Text>{' '}
                <Text fontWeight={'bold'}>{selectedYear}</Text>
              </Button>
            </MenuTrigger>
            <MenuContent>
              {years.map((year) => {
                return (
                  <MenuItem
                    onClick={() => setSelectedYear(year)}
                    key={year}
                    bg={year == selectedYear ? bgColor : ''}
                    value={year.toString()}>
                    {year}
                  </MenuItem>
                )
              })}
            </MenuContent>
          </MenuRoot>
        </Box>
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
        <Box
          display={{ base: 'none', md: 'block' }}
          h={'10rem'}
          overflow="hidden"
          flex="0 0 auto"
          maxWidth="150px"
          alignItems="stretch">
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
