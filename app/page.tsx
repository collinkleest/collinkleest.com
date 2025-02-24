import { Intro, LinkList, Projects, Resume, Timeline } from '@_components'
import content from '@_content'
import { Box, Container } from '@chakra-ui/react'

export default function Page() {
  return (
    <>
      <Container maxW={'6xl'}>
        <Box id="about" my={12}>
          <Intro />
        </Box>
        <LinkList links={content.linkList.links} />
        <Box id="experience" my={12}>
          <Timeline />
        </Box>
        <Box id="resume" my={12}>
          <Resume />
        </Box>
        <Box id="projects" my={12}>
          <Projects />
        </Box>
      </Container>
    </>
  )
}
