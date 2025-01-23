import { Box, Button, Center } from '@chakra-ui/react'

export const ShowMore = ({
  showMoreProjects
}: {
  showMoreProjects: () => void
}) => {
  return (
    <Box my={4}>
      <Center>
        <Button onClick={showMoreProjects} variant={'outline'}>
          Show More
        </Button>
      </Center>
    </Box>
  )
}
