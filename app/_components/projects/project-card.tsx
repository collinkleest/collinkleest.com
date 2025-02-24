import { langMappings } from '@_content'
import {
  Box,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Flex,
  Tag
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

interface IProjectCardProps {
  name: string
  language?: string
  description: string
  url: string
  liveHomepage: string
  topics: string[]
}

export const ProjectCard = (props: IProjectCardProps) => {
  const handleCardClick = (githubLink: string, liveSiteLink?: string) => {
    const url = liveSiteLink ?? githubLink
    window.open(url, '_blank')
  }
  return (
    <Card.Root h="100%">
      <Box
        as={'a'}
        // @ts-ignore
        href={props.liveHomepage ?? props.url}
        target="_blank"
        rel="noopener noreferrer"
        transition="all 0.3s ease-in-out"
        _hover={{
          transform: 'translate(10px, -10px)', // Moves the card up slightly
          boxShadow: 'xl' // Adds a stronger shadow for a lifting effect
        }}
        _focus={{ outline: 'none' }}
        cursor="pointer"
        h="100%">
        <CardHeader
          onClick={() => handleCardClick(props.url, props.liveHomepage)}>
          <Flex gap={2} align={'center'}>
            {langMappings[props?.language?.toLowerCase()]}
            {props?.language}
            <Flex ml="auto" gap={2} align={'center'}>
              <a
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}>
                <Box
                  as={FaGithub}
                  transition="all 0.2s ease-in-out"
                  boxSize={4}
                  _hover={{ color: 'blue.500', transform: 'scale(1.2)' }}
                />
              </a>
              {props.liveHomepage && (
                <a
                  href={props.liveHomepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}>
                  <Box
                    as={TbWorldWww}
                    transition="all 0.2s ease-in-out"
                    boxSize={5}
                    _hover={{ color: 'blue.500', transform: 'scale(1.2)' }}
                  />
                </a>
              )}
            </Flex>
          </Flex>
        </CardHeader>
        <CardBody
          onClick={() => handleCardClick(props.url, props.liveHomepage)}>
          <CardTitle>{props.name}</CardTitle>
          <CardDescription>{props.description}</CardDescription>
        </CardBody>
        <CardFooter>
          {props.topics &&
            props.topics.map((topic: string) => {
              return (
                <Tag.Root key={topic}>
                  <Tag.Label>{topic}</Tag.Label>
                </Tag.Root>
              )
            })}
        </CardFooter>
      </Box>
    </Card.Root>
  )
}
