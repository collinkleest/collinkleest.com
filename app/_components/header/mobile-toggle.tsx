import { Box, CollapsibleTrigger } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLargeLine } from 'react-icons/ri'
import { ColorModeButton } from '../../color-mode'

export const MobileToggle = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <Box display={{ base: 'flex', md: 'none' }} ml={4}>
      <ColorModeButton mr={'2'} />
      <CollapsibleTrigger>
        {!isOpen && <GiHamburgerMenu onClick={() => setIsOpen(true)} />}
        {isOpen && <RiCloseLargeLine onClick={() => setIsOpen(false)} />}
      </CollapsibleTrigger>
    </Box>
  )
}
