'use client'

import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Logo } from './logo'
import { MobileLinks } from './mobile-links'
import { MobileToggle } from './mobile-toggle'
import { NavLinks } from './nav-links'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Box borderBottom={'1px solid #eaeaea'}>
      <Flex
        mx={{ base: 2, md: 30, lg: 50, xl: 70 }}
        align={'center'}
        justify={'between'}
        py={4}>
        <Logo />
        <MobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavLinks />
      </Flex>
      <MobileLinks isOpen={isOpen} />
    </Box>
  )
}
