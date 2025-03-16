import { priorityProjects, priorityProjectsArr } from '@_content'
import { IProjectDTO } from '@_types'

export const getGithubCalendarYears = (
  currentYear: number,
  endYear: number
): number[] => {
  const numberOfYears = currentYear - endYear
  const years = []
  for (let i = 0; i < numberOfYears + 1; i++) {
    years.push(currentYear - i)
  }
  return years
}

export const repoSorter = (repoA: IProjectDTO, repoB: IProjectDTO) => {
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

export const getMoreProjects = (
  projects: IProjectDTO[],
  visibleProjects: IProjectDTO[],
  numberOfProjects: number
): IProjectDTO[] => {
  const newVisibleProjects = projects.slice(
    visibleProjects.length,
    visibleProjects.length + numberOfProjects
  )
  return [...visibleProjects, ...newVisibleProjects]
}

export const getLessProjects = (
  visibleProjects: IProjectDTO[],
  initialDisplayCount: number
): IProjectDTO[] => {
  const projectsLength = visibleProjects.length
  const projectCountRemainder = projectsLength % initialDisplayCount
  const endIndex =
    projectCountRemainder === 0
      ? projectsLength - initialDisplayCount
      : projectsLength - projectCountRemainder
  return [...visibleProjects.slice(0, endIndex)]
}
