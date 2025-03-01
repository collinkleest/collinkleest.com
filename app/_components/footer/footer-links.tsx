import { Box } from '@chakra-ui/react'
import { FaDev, FaGithub, FaLinkedin, FaSpotify } from 'react-icons/fa'
import { TfiEmail } from 'react-icons/tfi'

// TODO: abstract into content
export const FooterLinks = () => {
  return (
    <Box display={'flex'} gap={4}>
      <a
        href="https://github.com/collinkleest"
        target="_blank"
        title="Github profile link">
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/collinkleest"
        target="_blank"
        title="Linkedin profile link">
        <FaLinkedin />
      </a>

      <a
        href="https://dev.to/collinkleest"
        target="_blank"
        title="Dev.to profile link">
        <FaDev />
      </a>

      <a
        href="https://open.spotify.com/user/1270362442?si=cc668d077a924196"
        target="_blank"
        title="Spotify profile link">
        <FaSpotify />
      </a>
      <a
        href="mailto:collinkleest@gmail.com"
        target="_blank"
        title="Collin Kleest email link">
        <TfiEmail />
      </a>
    </Box>
  )
}
