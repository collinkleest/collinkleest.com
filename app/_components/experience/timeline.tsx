'use client'

import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle
} from '../../../components/ui/timeline'
import { PiBooks } from 'react-icons/pi'
import { experience } from '../../_content'
import { IExperienceBlock, IExperienceRole } from '../../_types'
import { Button, List } from '@chakra-ui/react'

export const Timeline = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/collinkleest/', '_blank')
  }

  return (
    <TimelineRoot variant={'solid'} size="lg" maxWidth={'2xl'}>
      {experience.experienceBlocks.map(
        (block: IExperienceBlock, index: number) => {
          return (
            <TimelineItem key={index}>
              <TimelineConnector>
                <PiBooks />
              </TimelineConnector>
              <TimelineContent>
                <TimelineTitle>{block.companyName}</TimelineTitle>
                <TimelineDescription>{block.timeline}</TimelineDescription>
                <TimelineRoot variant={'solid'} size={'lg'}>
                  {block.roles.map((role: IExperienceRole, index: number) => {
                    return (
                      <TimelineItem key={index}>
                        <TimelineConnector>
                          <PiBooks />
                        </TimelineConnector>
                        <TimelineContent>
                          <TimelineTitle>{role.roleTitle}</TimelineTitle>
                          <TimelineDescription>
                            {role.roleTimeline}
                          </TimelineDescription>
                          <List.Root>
                            {role.roleBullets.map((bullet, index) => {
                              return (
                                <List.Item textStyle={'xs'} key={index}>
                                  {bullet}
                                </List.Item>
                              )
                            })}
                          </List.Root>
                        </TimelineContent>
                      </TimelineItem>
                    )
                  })}
                </TimelineRoot>
              </TimelineContent>
            </TimelineItem>
          )
        }
      )}
      <TimelineItem>
        <TimelineConnector>
          <PiBooks />
        </TimelineConnector>
        <TimelineContent>
          <Button variant="outline" onClick={openLinkedin}>
            View More Experience on Linkedin
          </Button>
        </TimelineContent>
      </TimelineItem>
    </TimelineRoot>
  )
}
