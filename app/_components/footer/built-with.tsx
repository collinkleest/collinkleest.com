'use client'

import { openLink } from '@_utils'
import { Box, Button, Text } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { SiChakraui } from 'react-icons/si'

// TODO: abstract into content
export const BuiltWith = () => {
  const nextJsUrl = 'https://nextjs.org'
  const reactUrl = 'https://reactjs.dev'
  const chakraUiUrl = 'https://chakra-ui.com'
  return (
    <Box>
      <Text textStyle={'xs'}>
        Built With:{' '}
        <Button
          onClick={() => openLink(nextJsUrl)}
          size={'xs'}
          variant={'plain'}>
          <RiNextjsFill /> NextJs
        </Button>{' '}
        <Button
          onClick={() => openLink(reactUrl)}
          size={'xs'}
          variant={'plain'}>
          <FaReact /> React
        </Button>{' '}
        <Button
          onClick={() => openLink(chakraUiUrl)}
          size={'xs'}
          variant={'plain'}>
          <SiChakraui />
          ChakraUI
        </Button>
      </Text>
    </Box>
  )
}
