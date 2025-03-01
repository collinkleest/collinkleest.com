import { Box, Text } from '@chakra-ui/react'

export const Copyright = ({ copyrightText }: { copyrightText: string }) => {
  return (
    <Box>
      <Text textStyle={'xs'}>{copyrightText}</Text>
    </Box>
  )
}
