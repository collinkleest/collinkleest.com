'use client'

import { Box, Image as ChakraImage } from '@chakra-ui/react'
import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import logoDark from '../../../public/images/CK_Logo_500x500.png'
import logoLight from '../../../public/images/CK_Logo_500x500_WHITE.png'
import { useColorMode } from '../../color-mode'

export const Logo = () => {
  const [currentMode, setCurrentMode] = useState('dark')
  const mode = useColorMode()

  useEffect(() => {
    setCurrentMode(mode.colorMode)
  }, [mode.colorMode])

  return (
    <Box marginEnd={'auto'}>
      <a href="#">
        {currentMode == 'dark' ? (
          <ChakraImage rounded="md" boxSize="30px" asChild>
            <NextImage src={logoLight} alt="Collin Kleest Logo Light" />
          </ChakraImage>
        ) : (
          <ChakraImage rounded="md" boxSize="30px" asChild>
            <NextImage src={logoDark} alt="Collin Kleest Logo Dark" />
          </ChakraImage>
        )}
      </a>
    </Box>
  )
}
