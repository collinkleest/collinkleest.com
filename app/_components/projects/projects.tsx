'use client'

import {
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
  CardFooter,
  Button,
  Box,
  Center,
  Flex
} from '@chakra-ui/react'
import { IProjectDTO } from '../../_types'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import { langMappings, excludedProjects } from '../../_content'

export const Projects = () => {
  const githubApi = 'https://api.github.com/users/collinkleest/repos'
  const [projects, setProjects] = useState<IProjectDTO[]>([])
  const [visibleProjects, setVisibleProjects] = useState<IProjectDTO[]>([])
  const [loading, setLoading] = useState(true)

  const showMoreProjects = () => {
    const newVisibleProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + 6
    )
    setVisibleProjects([...visibleProjects, ...newVisibleProjects])
  }

  useEffect(() => {
    fetch(githubApi)
      .then((response) => response.json())
      .then((data) => {
        const mappedProjects = data
          .filter((data) => !data.archived && !excludedProjects.has(data.name))
          .map((repo) => {
            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              language: repo.language,
              liveHomepage: repo.homepage
            }
          })
        setProjects(mappedProjects)
        setVisibleProjects(mappedProjects.slice(0, 6))
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
      {!loading && visibleProjects && (
        <SimpleGrid columns={3} gap={10}>
          {visibleProjects.map((project) => {
            return (
              <Card.Root key={project.name}>
                <CardHeader>
                  <Flex gap={2} align={'center'}>
                    {langMappings[project?.language?.toLowerCase()]}
                    {project.language}
                  </Flex>
                </CardHeader>
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
      {!loading &&
        visibleProjects &&
        visibleProjects.length !== projects.length && (
          <Box my={4}>
            <Center>
              <Button onClick={showMoreProjects} variant={'subtle'}>
                Show More
              </Button>
            </Center>
          </Box>
        )}
    </>
  )
}
