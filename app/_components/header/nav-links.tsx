import { header } from '@_content'
import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { ColorModeButton } from '../../color-mode'

export const NavLinks = () => {
  return (
    <>
      <Box display={{ base: 'none', md: 'block' }}>
        <Stack direction={{ base: 'column', md: 'row' }} gap={4}>
          {header?.navLinks?.map((navLink) => {
            return (
              <a key={navLink.text} href={navLink.href}>
                <Button size={'sm'} variant={'ghost'}>
                  <Text textStyle="sm" fontWeight={'bold'}>
                    {navLink.text}
                  </Text>
                </Button>
              </a>
            )
          })}
        </Stack>
      </Box>
      <ColorModeButton display={{ base: 'none', md: 'inline-flex' }} />
    </>
  )
}
