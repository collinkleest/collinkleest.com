import { CloseButton } from '@/ui/close-button'
import { Box, CollapsibleTrigger, IconButton } from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ColorModeButton } from '../../color-mode'

export const MobileToggle = ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} ml={4}>
      <ColorModeButton />
      <CollapsibleTrigger>
        {!isOpen && (
          <IconButton variant={'outline'}>
            <GiHamburgerMenu onClick={() => setIsOpen(true)} />
          </IconButton>
        )}
        {isOpen && <CloseButton onClick={() => setIsOpen(false)} />}
      </CollapsibleTrigger>
    </Box>
  )
}
