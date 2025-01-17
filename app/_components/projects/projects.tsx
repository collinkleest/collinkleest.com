'use client'

import {
  GITHUB_API_ROOT,
  GITHUB_REPOS_PER_PAGE,
  GITHUB_USERNAME
} from '@_constants'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Center,
  Flex,
  Heading,
  SimpleGrid,
  Skeleton
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
import {
  excludedProjects,
  langMappings,
  priorityProjects,
  priorityProjectsArr
} from '../../_content'
import { IProjectDTO, Repo } from '../../_types'

export const Projects = () => {
  const [projects, setProjects] = useState<IProjectDTO[]>([])
  const [url, setUrl] = useState<string>(
    `${GITHUB_API_ROOT}/users/${GITHUB_USERNAME}/repos?per_page=${GITHUB_REPOS_PER_PAGE}&page=1`
  )
  const [visibleProjects, setVisibleProjects] = useState<IProjectDTO[]>([])
  const [loading, setLoading] = useState(true)

  const showMoreProjects = () => {
    const newVisibleProjects = projects.slice(
      visibleProjects.length,
      visibleProjects.length + 6
    )
    setVisibleProjects([...visibleProjects, ...newVisibleProjects])
  }

  const repoSorter = (repoA: IProjectDTO, repoB: IProjectDTO) => {
    const isRepoAPriority = priorityProjects.has(repoA.name)
    const isRepoBPriority = priorityProjects.has(repoB.name)

    if (isRepoAPriority && isRepoBPriority) {
      const repoAIndex = priorityProjectsArr.indexOf(repoA.name)
      const repoBIndex = priorityProjectsArr.indexOf(repoB.name)
      if (repoBIndex < repoAIndex) {
        return 1
      }
      return -1
    } else if (isRepoBPriority) {
      return 1
    } else if (isRepoAPriority) {
      return -1
    }

    return 0
  }

  useEffect(() => {
    const fetchData = async () => {
      const nextPattern = /(?<=<)([\S]*)(?=>; rel="Next")/i
      const response = await fetch(url)
      const linkHeader = response.headers.get('Link')
      const pagesRemaining = linkHeader && linkHeader.includes(`rel=\"next\"`)
      const data = (await response.json()) as Repo[]
      setProjects([
        ...projects,
        ...data
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
      ])

      if (visibleProjects.length < 6) {
        setVisibleProjects(projects.slice(0, 6))
      }

      if (loading) {
        setLoading(false)
      }

      if (pagesRemaining) {
        setUrl(linkHeader.match(nextPattern)[0])
      } else {
        setProjects(projects.sort(repoSorter))
        setVisibleProjects(projects.slice(0, 6))
      }
    }

    fetchData()
  }, [url])

  return (
    <>
      <Heading textStyle={'4xl'} my={8}>
        Projects
      </Heading>
      {loading && (
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          {[0, 1, 2, 3, 4, 5].map((index) => {
            return <Skeleton h={207} key={index}></Skeleton>
          })}
        </SimpleGrid>
      )}
      {!loading && visibleProjects && (
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
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
              <Button onClick={showMoreProjects} variant={'outline'}>
                Show More
              </Button>
            </Center>
          </Box>
        )}
    </>
  )
}
