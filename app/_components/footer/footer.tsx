import { RiNextjsFill } from 'react-icons/ri'
import { FaDev, FaGithub, FaLinkedin, FaReact, FaSpotify } from 'react-icons/fa'
import { SiChakraui } from 'react-icons/si'
import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react'

export const Footer = () => {
  return (
    <>
      <Box borderTop={'1px solid #eaeaea'}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify={'center'}
          align={'center'}
          gap={{ base: 4, md: 14 }}
          py={4}>
          <Box>
            <Text textStyle={'xs'}>
              Built With:{' '}
              <Button size={'xs'} variant={'plain'}>
                <RiNextjsFill /> NextJs
              </Button>{' '}
              <Button size={'xs'} variant={'plain'}>
                <FaReact /> React
              </Button>{' '}
              <Button size={'xs'} variant={'plain'}>
                <SiChakraui />
                ChakraUI
              </Button>
            </Text>
          </Box>

          <Box display={'flex'} gap={4}>
            <a href="https://github.com/collinkleest" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/collinkleest" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://dev.to/collinkleest" target="_blank">
              <FaDev />
            </a>

            <a href="https://linkedin.com/in/collinkleest" target="_blank">
              <FaSpotify />
            </a>
          </Box>
          <Box>
            <Text textStyle={'xs'}>
              Copyright © Collin Kleest {new Date().getFullYear()} All rights
              Reserved
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
