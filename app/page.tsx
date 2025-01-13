import { Box, Container } from '@chakra-ui/react'
import { Intro, LinkButton, Timeline } from './_components'
import { FaLinkedin } from 'react-icons/fa'

export default function Page() {
  return (
    <>
      <Container>
        <Box my={12}>
          <Intro />
        </Box>
        <LinkButton
          text="LinkedIn"
          url="https://linkedin.com/in/collinkleest"
          icon={<FaLinkedin />}
        />
        <Box my={12}>
          <Timeline />
        </Box>
      </Container>
    </>
  )
}
