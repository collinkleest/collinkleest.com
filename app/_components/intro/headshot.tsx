import { Image } from '@chakra-ui/react'

export const Headshot = () => {
  return (
    <Image
      src="images/headshot.jpeg"
      boxSize="250px"
      borderRadius="full"
      fit="cover"
      alt="Collin Kleest Headshot"
    />
  )
}
