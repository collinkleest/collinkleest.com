import { Box, Flex } from '@chakra-ui/react'
import { BuiltWith } from './built-with'
import { FooterLinks } from './footer-links'
import { Copyright } from './copyright'

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
          <BuiltWith />
          <FooterLinks />
          <Copyright />
        </Flex>
      </Box>
    </>
  )
}
