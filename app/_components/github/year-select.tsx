import { Box, Button, VStack } from '@chakra-ui/react'

interface YearSelectProps {
  years: number[]
  selectedYear: number
  setSelectedYear: (year: number) => void
}

export const YearSelect = ({
  years,
  selectedYear,
  setSelectedYear
}: YearSelectProps) => {
  return (
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
  )
}
