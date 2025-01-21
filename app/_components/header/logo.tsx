import { Box, Button, Text } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box marginEnd={'auto'}>
      <a href="#">
        <Button size={'sm'} variant={'ghost'}>
          <Text textStyle="sm" fontWeight={'bold'}>
            Collin Kleest
          </Text>
        </Button>
      </a>
    </Box>
  )
}
