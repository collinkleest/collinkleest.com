'use client'

import { Box, Collapsible, Container, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { ColorModeButton } from '../../color-mode'
import { Logo } from './logo'
import { MobileLinks } from './mobile-links'
import { MobileToggle } from './mobile-toggle'
import { NavLinks } from './nav-links'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box borderBottom={'1px solid'}>
      <Container maxW={'6xl'}>
        <Collapsible.Root>
          <Flex align={'center'} justify={'space-between'} py={4}>
            <Logo />
            <Flex flex="1" justify={'center'}>
              <NavLinks />
            </Flex>
            <MobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
            <ColorModeButton display={{ base: 'none', md: 'inline-flex' }} />
          </Flex>
          <Collapsible.Content>
            <MobileLinks />
          </Collapsible.Content>
        </Collapsible.Root>
      </Container>
    </Box>
  )
}
