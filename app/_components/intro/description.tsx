import { Text, Highlight } from '@chakra-ui/react'
import { IIntroDescription } from '../../_types'

export const Description = (props: { description: IIntroDescription }) => {
  return (
    <>
      <Text textStyle="6xl" fontWeight={'bold'}>
        {props.description.name}
      </Text>
      <Text textStyle="2xl" fontWeight={'semibold'}>
        {props.description.title}
      </Text>
      <Text textStyle="md">
        <Highlight
          query={[
            'Software Technical Lead',
            'four',
            'full-stack development',
            'Dallas-Fort Worth'
          ]}
          styles={{ px: '0.5', bg: 'gray.muted' }}
          matchAll={true}>
          {props.description.blurb}
        </Highlight>
      </Text>
    </>
  )
}
