import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { ColorModeButton } from '../../color-mode'

export const NavLinks = () => {
  return (
    <>
      <Box display={{ base: 'none', md: 'block' }}>
        <Stack direction={{ base: 'column', md: 'row' }} gap={4}>
          <a href="#about">
            <Button size={'sm'} variant={'ghost'}>
              <Text textStyle="sm" fontWeight={'bold'}>
                About
              </Text>
            </Button>
          </a>
          <a href="#experience">
            <Button size={'sm'} variant={'ghost'}>
              <Text textStyle="sm" fontWeight={'bold'}>
                Experience
              </Text>
            </Button>
          </a>
          <a href="#resume">
            <Button size={'sm'} variant={'ghost'}>
              <Text textStyle="sm" fontWeight={'bold'}>
                Resume
              </Text>
            </Button>
          </a>
          <a href="#projects">
            <Button size={'sm'} variant={'ghost'}>
              <Text textStyle="sm" fontWeight={'bold'}>
                Projects
              </Text>
            </Button>
          </a>
        </Stack>
      </Box>
      <ColorModeButton display={{ base: 'none', md: 'inline-flex' }} />
    </>
  )
}
