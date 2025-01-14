import { Avatar as ChakraAvatar } from '@chakra-ui/react'

export const Avatar = (props: { src: string }) => {
  return (
    <ChakraAvatar.Root size="xs">
      <ChakraAvatar.Image src={props.src} />
    </ChakraAvatar.Root>
  )
}
