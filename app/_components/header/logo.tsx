import { Box, Image } from '@chakra-ui/react'

export const Logo = () => {
  return (
    <Box marginEnd={'auto'}>
      <a href="#">
        <Image
          rounded="md"
          src="images/CK_Logo_500x500_WHITE.png"
          alt="Collin Kleest Logo"
          boxSize="50px"
        />
      </a>
    </Box>
  )
}
