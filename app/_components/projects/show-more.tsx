import { Box, Button, Center } from '@chakra-ui/react'

export const ShowMoreOrLess = ({
  initialDisplayCount,
  visibleProjectsCount,
  projectsCount,
  showMoreProjects,
  showLessProjects
}: {
  initialDisplayCount: number
  visibleProjectsCount: number
  projectsCount: number
  showMoreProjects: () => void
  showLessProjects?: () => void
}) => {
  return (
    <Box my={4}>
      <Center>
        {projectsCount !== visibleProjectsCount && (
          <Button onClick={showMoreProjects} variant={'outline'} mr={1}>
            Show More
          </Button>
        )}
        {visibleProjectsCount > initialDisplayCount && (
          <Button onClick={showLessProjects} variant={'outline'} ml={1}>
            Show Less
          </Button>
        )}
      </Center>
    </Box>
  )
}
