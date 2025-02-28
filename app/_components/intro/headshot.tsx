import { IIntroHeadshot } from '@_types'
import { Image as ChakraImage } from '@chakra-ui/react'
import NextImage from 'next/image'
import headshot from '../../../public/images/headshot.jpeg'

export const Headshot = (props: { headshot: IIntroHeadshot }) => {
  return (
    <ChakraImage boxSize="250px" borderRadius="full" fit="cover" asChild>
      <NextImage src={headshot} alt={props.headshot.alt} />
    </ChakraImage>
  )
}
