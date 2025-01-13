import { GridItem, SimpleGrid } from '@chakra-ui/react'
import { Headshot } from './headshot'
import { Description } from './description'

export const Intro = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 4 }}>
      <GridItem colSpan={{ base: 1, md: 1 }}>
        <Headshot />
      </GridItem>
      <GridItem colSpan={{ base: 1, md: 3 }}>
        <Description />
      </GridItem>
    </SimpleGrid>
  )
}
