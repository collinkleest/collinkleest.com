import { IIntroHeadshot } from '@_types'
import { Image } from '@chakra-ui/react'

export const Headshot = (props: { headshot: IIntroHeadshot }) => {
  return (
    <Image
      src={props.headshot.src}
      boxSize="250px"
      borderRadius="full"
      fit="cover"
      alt={props.headshot.alt}
    />
  )
}
