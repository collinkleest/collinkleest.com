import { IProjectDTO } from '@_types'
import { getLessProjects, getMoreProjects } from '@_utils'
import { Box, Button, Center } from '@chakra-ui/react'
import { Dispatch, SetStateAction } from 'react'

export const PaginateProjects = ({
  projects,
  visibleProjects,
  initialDisplayCount,
  setVisibleProjects
}: {
  projects: IProjectDTO[]
  visibleProjects: IProjectDTO[]
  initialDisplayCount: number
  setVisibleProjects: Dispatch<SetStateAction<IProjectDTO[]>>
}) => {
  return (
    <Box my={4}>
      <Center>
        {projects.length !== visibleProjects.length && (
          <Button
            onClick={() =>
              setVisibleProjects(
                getMoreProjects(projects, visibleProjects, initialDisplayCount)
              )
            }
            variant={'outline'}
            mr={1}>
            Show More
          </Button>
        )}
        {visibleProjects.length > initialDisplayCount && (
          <Button
            onClick={() =>
              setVisibleProjects(
                getLessProjects(visibleProjects, initialDisplayCount)
              )
            }
            variant={'outline'}
            ml={1}>
            Show Less
          </Button>
        )}
      </Center>
    </Box>
  )
}
