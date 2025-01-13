'use client'

import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { Logo } from './logo'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box borderBottom={'1px solid #eaeaea'}>
      <Flex mx={60} align={'center'} justify={'center'} py={4}>
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
        <Box>
          <Stack direction={'row'} spacing={4}>
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
    </Box>
  )
}
