'use client'

import { CloseButton } from '@/ui/close-button'
import { Box, Button, Flex, IconButton, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { HiBeaker } from 'react-icons/hi'
import { IoIosDocument } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'
import { ColorModeButton } from '../../color-mode'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // TODO: abstract into content and clean up
  // TODO: add responsive mobile design
  return (
    <Box borderBottom={'1px solid #eaeaea'}>
      <Flex
        mx={{ base: 2, md: 30, lg: 50, xl: 70 }}
        align={'center'}
        justify={'between'}
        py={4}>
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
          <ColorModeButton />
          {!isOpen && (
            <IconButton variant={'outline'}>
              <GiHamburgerMenu onClick={() => setIsOpen(true)} />
            </IconButton>
          )}
          {isOpen && <CloseButton onClick={() => setIsOpen(false)} />}
        </Box>
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
        {/* </Flex> */}
      </Flex>
      {isOpen && (
        <Box display={{ base: 'block', md: 'none' }}>
          <Stack direction={{ base: 'column', md: 'row' }}>
            <a href="#about">
              <Button size={'sm'} variant={'ghost'}>
                <IoPerson />
                <Text textStyle="sm" fontWeight={'bold'}>
                  About
                </Text>
              </Button>
            </a>
            <a href="#experience">
              <Button size={'sm'} variant={'ghost'}>
                <MdWork />

                <Text textStyle="sm" fontWeight={'bold'}>
                  Experience
                </Text>
              </Button>
            </a>
            <a href="#resume">
              <Button size={'sm'} variant={'ghost'}>
                <IoIosDocument />
                <Text textStyle="sm" fontWeight={'bold'}>
                  Resume
                </Text>
              </Button>
            </a>
            <a href="#projects">
              <Button size={'sm'} variant={'ghost'}>
                <HiBeaker />

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
