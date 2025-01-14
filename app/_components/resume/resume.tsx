import { Button, Flex, Heading, Text } from '@chakra-ui/react'

export const Resume = () => {
  return (
    <>
      <Heading textStyle={'4xl'} my={8}>
        Resume
      </Heading>
      <Text textStyle="md" my={4}>
        My resume is built in LaTex and is from a template called
        <a href="https://github.com/posquit0/Awesome-CV">
          {' '}
          <b>Awesome-CV</b>
        </a>
        . My resume is available for download in PDF format or you can view it
        in a new tab.
      </Text>
      <Flex gap={{ base: 2, md: 6 }}>
        <a href="docs/resume.pdf" target="_blank">
          <Button variant={'subtle'}>View resume in new tab</Button>
        </a>
        <a href="docs/resume.pdf" download>
          <Button variant={'subtle'}>Download Resume PDF</Button>
        </a>
      </Flex>
    </>
  )
}
