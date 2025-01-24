'use client'

import { Box, Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
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
          <Image
            rounded="md"
            src="images/CK_Logo_500x500_WHITE.png"
            alt="Collin Kleest Logo"
            boxSize="50px"
          />
        ) : (
          <Image
            rounded="md"
            src="images/CK_Logo_500x500.png"
            alt="Collin Kleest Logo"
            boxSize="50px"
          />
        )}
      </a>
    </Box>
  )
}
