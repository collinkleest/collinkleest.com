import content from '@_content'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import { Description } from './description'
import { Headshot } from './headshot'

export const Intro = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 6 }} gap={4}>
      <GridItem colSpan={{ base: 1, md: 2 }}>
        <Headshot headshot={content.intro.headshot} />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 4 }}>
        <Description description={content.intro.description} />
      </GridItem>
    </SimpleGrid>
  )
}
