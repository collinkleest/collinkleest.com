import { Box, Text } from '@chakra-ui/react'

export const Copyright = () => {
  return (
    <Box>
      <Text textStyle={'xs'}>
        Copyright © Collin Kleest {new Date().getFullYear()} All rights
        Reserved
      </Text>
    </Box>
  )
}
