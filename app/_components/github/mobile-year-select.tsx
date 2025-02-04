import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/ui/menu'
import { Box, Button, Text } from '@chakra-ui/react'
import { useColorModeValue } from '../../color-mode'

interface IMobileYearSelectProps {
  selectedYear: number
  years: number[]
  setSelectedYear: (year: number) => void
}

export const MobileYearSelect = ({
  selectedYear,
  years,
  setSelectedYear
}: IMobileYearSelectProps) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800')
  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            <Text>Year:</Text> <Text fontWeight={'bold'}>{selectedYear}</Text>
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
  )
}
