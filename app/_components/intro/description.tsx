import { Text } from '@chakra-ui/react'

export const Description = () => {
  return (
    <>
      <Text textStyle="6xl" fontWeight={'bold'}>
        Collin Kleest
      </Text>
      <Text textStyle="2xl" fontWeight={'semibold'}>
        Software Engineer & Technical Lead
      </Text>
      <Text textStyle="md">
        {
          'Hello, I’m Collin Kleest, currently a Software Engineer at Vanguard. My programming journey began in high school, and I’ve been passionate about it ever since. With over 4 years of experience in full-time software engineering and technical lead roles, I specialize in full-stack development. I thrive on solving challenging problems and continuously pushing my boundaries. '
        }
      </Text>
    </>
  )
}
