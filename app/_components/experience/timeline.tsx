'use client'

import { experience } from '@_content'
import { IExperienceBlock, IExperienceRole } from '@_types'
import { Button, Heading, List } from '@chakra-ui/react'
import { useState } from 'react'
import { BsBook } from 'react-icons/bs'
import { FaCode } from 'react-icons/fa'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineItem,
  TimelineRoot,
  TimelineTitle
} from '../../../components/ui/timeline'

export const Timeline = () => {
  const [shownExperience, setShownExperience] = useState<IExperienceBlock[]>(
    experience.experienceBlocks.slice(0, 2)
  )

  const viewMoreExperience = () => {
    setShownExperience([
      ...shownExperience,
      ...experience.experienceBlocks.slice(
        shownExperience.length,
        shownExperience.length + 1
      )
    ])
  }

  return (
    <>
      <Heading textStyle={'4xl'} my={8}>
        Experience
      </Heading>
      <TimelineRoot variant={'solid'} size="lg" maxWidth={'6xl'}>
        {shownExperience.map((block: IExperienceBlock, index: number) => {
          return (
            <TimelineItem key={index}>
              <TimelineConnector>{block.avatar}</TimelineConnector>
              <TimelineContent>
                <TimelineTitle textStyle={'lg'}>
                  {block.companyName}
                </TimelineTitle>
                <TimelineDescription>{block.timeline}</TimelineDescription>
                <TimelineRoot variant={'solid'} size={'lg'}>
                  {block.roles.map((role: IExperienceRole, index: number) => {
                    return (
                      <TimelineItem key={index}>
                        <TimelineConnector>
                          {role.avatar ?? <FaCode />}
                        </TimelineConnector>
                        <TimelineContent>
                          <TimelineTitle textStyle={'md'}>
                            {role.roleTitle}
                          </TimelineTitle>
                          {block.roles.length > 1 && (
                            <TimelineDescription>
                              {role.roleTimeline}
                            </TimelineDescription>
                          )}
                          <List.Root>
                            {role.roleBullets.map((bullet, index) => {
                              return (
                                <List.Item textStyle={'md'} key={index}>
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
        })}
        {experience.experienceBlocks.length > shownExperience.length && (
          <TimelineItem>
            <TimelineConnector>
              <BsBook />
            </TimelineConnector>
            <TimelineContent>
              <Button variant="outline" onClick={viewMoreExperience}>
                Show more experience
              </Button>
            </TimelineContent>
          </TimelineItem>
        )}
      </TimelineRoot>
    </>
  )
}
