import { IIntroDescription } from '@_types'
import { Heading, Highlight, Text } from '@chakra-ui/react'

export const Description = (props: { description: IIntroDescription }) => {
  return (
    <>
      <Heading textStyle="6xl" fontWeight={'bold'} as={'h1'}>
        {props.description.name}
      </Heading>
      <Heading textStyle="2xl" fontWeight={'semibold'} as={'h2'}>
        {props.description.title}
      </Heading>
      <Text textStyle="md">
        <Highlight
          query={props.description.blurbQuery}
          styles={{ px: '0.5', bg: 'gray.muted' }}
          matchAll={true}>
          {props.description.blurb}
        </Highlight>
      </Text>
    </>
  )
}
