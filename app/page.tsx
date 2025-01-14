import { Box, Container } from '@chakra-ui/react'
import { Intro, LinkButton, LinkList, Resume, Timeline } from './_components'
import { FaLinkedin } from 'react-icons/fa'
import content from './_content'
import { Projects } from './_components/projects'

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
