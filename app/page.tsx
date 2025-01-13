import { Container } from '@chakra-ui/react'
import { Header, Intro, Timeline } from './_components'

export default function Page() {
  return (
    <>
      <Container>
        <Intro />
        <Timeline />
      </Container>
    </>
  )
}
