import { header } from '@_content'
import { Box, Button, Stack, Text } from '@chakra-ui/react'

export const MobileLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
      {isOpen && (
        <Box display={{ base: 'block', md: 'none' }}>
          <Stack direction={{ base: 'column', md: 'row' }}>
            {header?.navLinks?.map((navLink) => {
              return (
                <a key={navLink.text} href={navLink.href}>
                  <Button size={'sm'} variant={'ghost'}>
                    {navLink.icon}
                    <Text textStyle="sm" fontWeight={'bold'}>
                      {navLink.text}
                    </Text>
                  </Button>
                </a>
              )
            })}
          </Stack>
        </Box>
      )}
    </>
  )
}
