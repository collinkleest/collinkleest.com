import { Avatar as ChakraAvatar } from '@chakra-ui/react'

export const Avatar = (props: { src: string; alt?: string }) => {
  return (
    <ChakraAvatar.Root size="xs">
      <ChakraAvatar.Image src={props.src} alt={props.alt} />
    </ChakraAvatar.Root>
  )
}
