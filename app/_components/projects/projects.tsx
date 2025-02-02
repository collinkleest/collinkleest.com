'use client'

import {
  GITHUB_API_ROOT,
  GITHUB_REPOS_PER_PAGE,
  GITHUB_USERNAME
} from '@_constants'
import {
  excludedProjects,
  priorityProjects,
  priorityProjectsArr
} from '@_content'
import { IProjectDTO, Repo } from '@_types'
import { Box, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { GithubCalendar } from './github-calendar'
import { ProjectCard } from './project-card'
import { ShowMore } from './show-more'

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
      <Box my={12}>
        <GithubCalendar />
      </Box>
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
              <ProjectCard
                key={project.name}
                name={project.name}
                description={project.description}
                liveHomepage={project.liveHomepage}
                url={project.url}
                language={project.language}
              />
            )
          })}
        </SimpleGrid>
      )}
      {!loading &&
        visibleProjects &&
        visibleProjects.length !== projects.length && (
          <ShowMore showMoreProjects={showMoreProjects} />
        )}
    </>
  )
}
