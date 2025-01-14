'use client'

import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Logo } from './logo'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CloseButton } from '@/ui/close-button'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  // TODO: abstract into content and clean up
  // TODO: add responsive mobile design
  return (
    <Box borderBottom={'1px solid #eaeaea'}>
      <Flex mx={{ base: 2, md: 60 }} align={'center'} justify={'center'} py={4}>
        {/* <Flex justify={'flex-start'}> */}
        <Box marginEnd={'auto'}>
          <a href="#">
            <Button size={'sm'} variant={'ghost'}>
              <Text textStyle="sm" fontWeight={'bold'}>
                Collin Kleest
              </Text>
            </Button>
          </a>
        </Box>
        {/* </Flex> */}
        {/* <Flex justify={'flex-end'} marginEnd={'auto'}> */}
        <Box display={{ base: 'block', md: 'none' }} ml={4}>
          {!isOpen && <GiHamburgerMenu onClick={() => setIsOpen(true)} />}
          {isOpen && <CloseButton onClick={() => setIsOpen(false)} />}
        </Box>
        <Box display={{ base: 'none', md: 'block' }}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
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
        {/* </Flex> */}
      </Flex>
      {isOpen && (
        <Box display={{ base: 'block', md: 'none' }}>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
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
      )}
    </Box>
  )
}
