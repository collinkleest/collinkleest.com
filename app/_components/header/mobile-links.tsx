import { Box, Button, Stack, Text } from '@chakra-ui/react'
import { HiBeaker } from 'react-icons/hi'
import { IoIosDocument } from 'react-icons/io'
import { IoPerson } from 'react-icons/io5'
import { MdWork } from 'react-icons/md'

export const MobileLinks = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <>
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
    </>
  )
}
