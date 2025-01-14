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
import { Avatar, Button, Heading, List } from '@chakra-ui/react'
import { FaLinkedin, FaCode } from 'react-icons/fa'

export const Timeline = () => {
  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/collinkleest/', '_blank')
  }

  return (
    <>
      <Heading textStyle={'4xl'} my={8}>
        Experience
      </Heading>
      <TimelineRoot variant={'solid'} size="lg" maxWidth={'2xl'}>
        {experience.experienceBlocks.map(
          (block: IExperienceBlock, index: number) => {
            return (
              <TimelineItem key={index}>
                <TimelineConnector>{block.avatar}</TimelineConnector>
                <TimelineContent>
                  <TimelineTitle>{block.companyName}</TimelineTitle>
                  <TimelineDescription>{block.timeline}</TimelineDescription>
                  <TimelineRoot variant={'solid'} size={'lg'}>
                    {block.roles.map((role: IExperienceRole, index: number) => {
                      return (
                        <TimelineItem key={index}>
                          <TimelineConnector>
                            {role.avatar ?? <FaCode />}
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
            <FaLinkedin />
          </TimelineConnector>
          <TimelineContent>
            <Button variant="outline" onClick={openLinkedin}>
              View More Experience on Linkedin
            </Button>
          </TimelineContent>
        </TimelineItem>
      </TimelineRoot>
    </>
  )
}
