import { Box, Container } from '@chakra-ui/react'
import { Intro, LinkButton, LinkList, Timeline } from './_components'
import { FaLinkedin } from 'react-icons/fa'
import content from './_content'

export default function Page() {
  return (
    <>
      <Container>
        <Box id="about" my={12}>
          <Intro />
        </Box>
        <LinkList links={content.linkList.links} />
        <Box id="experience" my={12}>
          <Timeline />
        </Box>
      </Container>
    </>
  )
}
