import { IIntroHeadshot } from '@_types'
import { Image as ChakraImage } from '@chakra-ui/react'
import NextImage from 'next/image'

export const Headshot = (props: { headshot: IIntroHeadshot }) => {
  return (
    <ChakraImage boxSize="250px" borderRadius="full" fit="cover" asChild>
      <NextImage src={props.headshot.image} alt={props.headshot.alt} />
    </ChakraImage>
  )
}
