import { langMappings } from '@_content'
import {
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
  return (
    <Card.Root>
      <CardHeader>
        <Flex gap={2} align={'center'}>
          {langMappings[props?.language?.toLowerCase()]}
          {props?.language}
        </Flex>
      </CardHeader>
      <CardBody>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
      </CardBody>
      <CardFooter>
        <a href={props.url} target="_blank">
          <FaGithub />
        </a>
        {props.liveHomepage && (
          <a href={props.liveHomepage} target="_blank">
            <TbWorldWww />
          </a>
        )}
        {props.topics &&
          props.topics.map((topic: string) => {
            return (
              <Tag.Root key={topic}>
                <Tag.Label>{topic}</Tag.Label>
              </Tag.Root>
            )
          })}
      </CardFooter>
    </Card.Root>
  )
}
