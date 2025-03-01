'use client'

import { GithubCalendar } from '@_components'
import {
  GITHUB_API_ROOT,
  GITHUB_REPOS_PER_PAGE_DESKTOP,
  GITHUB_REPOS_PER_PAGE_MOBILE,
  GITHUB_USERNAME
} from '@_constants'
import { excludedProjects } from '@_content'
import { IProjectDTO, Repo } from '@_types'
import { createArray, getMoreProjects, repoSorter } from '@_utils'
import {
  Box,
  Heading,
  SimpleGrid,
  Skeleton,
  useBreakpointValue
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { ProjectCard } from './project-card'
import { ShowMore } from './show-more'

export const Projects = () => {
  const [projects, setProjects] = useState<IProjectDTO[]>([])
  const initialProjectsDisplayCount = useBreakpointValue(
    {
      base: GITHUB_REPOS_PER_PAGE_MOBILE,
      md: GITHUB_REPOS_PER_PAGE_DESKTOP
    },
    { fallback: 'base' }
  )
  const [url, setUrl] = useState<string>(
    `${GITHUB_API_ROOT}/users/${GITHUB_USERNAME}/repos?per_page=${initialProjectsDisplayCount}&page=1`
  )
  const [visibleProjects, setVisibleProjects] = useState<IProjectDTO[]>([])
  const [loading, setLoading] = useState(true)

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
          .map((repo: Repo) => {
            return {
              name: repo.name,
              description: repo.description,
              url: repo.html_url,
              language: repo.language,
              liveHomepage: repo.homepage,
              topics: repo.topics
            }
          })
      ])

      if (visibleProjects.length < initialProjectsDisplayCount) {
        setVisibleProjects(projects.slice(0, initialProjectsDisplayCount))
      }

      if (loading) {
        setLoading(false)
      }

      if (pagesRemaining) {
        setUrl(linkHeader.match(nextPattern)[0])
      } else {
        setProjects(projects.sort(repoSorter))
        setVisibleProjects(projects.slice(0, initialProjectsDisplayCount))
      }
    }

    fetchData()
  }, [url])

  return (
    <>
      <Heading textStyle={'4xl'} my={8} as={'h3'}>
        Projects
      </Heading>
      <Box my={12}>
        <GithubCalendar />
      </Box>
      {loading && (
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          {createArray(initialProjectsDisplayCount).map((index) => {
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
                topics={project.topics}
              />
            )
          })}
        </SimpleGrid>
      )}
      {!loading &&
        visibleProjects &&
        visibleProjects.length !== projects.length && (
          <ShowMore
            showMoreProjects={() =>
              setVisibleProjects(
                getMoreProjects(
                  projects,
                  visibleProjects,
                  initialProjectsDisplayCount
                )
              )
            }
          />
        )}
    </>
  )
}
