'use client'

import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import { Logo } from './logo'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Flex>
      <Logo />
    </Flex>
  )
}
