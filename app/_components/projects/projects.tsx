'use client'

import {
  Flex,
  Heading,
  Spinner,
  VStack,
  Text,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  SimpleGrid,
  CardDescription,
  CardFooter
} from '@chakra-ui/react'
import { IProjectDTO } from '../../_types'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export const Projects = () => {
  const githubApi = 'https://api.github.com/users/collinkleest/repos'
  const [projects, setProjects] = useState<IProjectDTO[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(githubApi)
      .then((response) => response.json())
      .then((data) => {
        const mappedProjects = data.map((repo) => {
          return {
            name: repo.name,
            description: repo.description,
            url: repo.html_url,
            language: repo.language,
            liveHomepage: repo.homepage
          }
        })
        setProjects(mappedProjects)
        setLoading(false)
      })
  }, [])

  return (
    <>
      <Heading textStyle={'4xl'} my={8}>
        Projects
      </Heading>
      {loading && (
        <VStack>
          <Spinner />
          <Text>Loading...</Text>
        </VStack>
      )}
      {!loading && projects && (
        <SimpleGrid columns={3} gap={10}>
          {projects.map((project) => {
            return (
              <Card.Root key={project.name}>
                <CardHeader>{project.language}</CardHeader>
                <CardBody>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardBody>
                <CardFooter>
                  <a href={project.url} target="_blank">
                    <FaGithub />
                  </a>
                  {project.liveHomepage && (
                    <a href={project.liveHomepage} target="_blank">
                      <TbWorldWww />
                    </a>
                  )}
                </CardFooter>
              </Card.Root>
            )
          })}
        </SimpleGrid>
      )}
    </>
  )
}
