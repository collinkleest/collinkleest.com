'use client'

import { Box, Collapsible, Flex } from '@chakra-ui/react'
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
      <Collapsible.Root>
        <Flex
          mx={{
            base: '2rem',
            md: '5rem',
            lg: '10rem',
            xl: '15rem',
            '2xl': '25rem'
          }}
          align={'center'}
          justify={'space-between'}
          py={4}>
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
    </Box>
  )
}
