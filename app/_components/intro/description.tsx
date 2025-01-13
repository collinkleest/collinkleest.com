import { Text } from '@chakra-ui/react'
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
      <Text textStyle="md">{props.description.blurb}</Text>
    </>
  )
}
