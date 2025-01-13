import { Box, Container } from '@chakra-ui/react'
import { Intro, Timeline } from './_components'

export default function Page() {
  return (
    <>
      <Container>
        <Box my={12}>
          <Intro />
        </Box>
        <Box my={12}>
          <Timeline />
        </Box>
      </Container>
    </>
  )
}
