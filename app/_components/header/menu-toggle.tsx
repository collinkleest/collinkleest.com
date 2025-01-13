import React from 'react'
import { Box } from '@chakra-ui/react'
import { IoIosMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

export const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <IoClose /> : <IoIosMenu />}
    </Box>
  )
}
