'use client'

import content from '@_content'
import { sentAnalyticEvent } from '@_utils'
import { Button, Flex, Heading, Text } from '@chakra-ui/react'

export const Resume = () => {
  return (
    <>
      <Heading textStyle={'4xl'} my={8} as={'h3'}>
        {content.resume.heading}
      </Heading>
      <Text
        textStyle="md"
        my={4}
        dangerouslySetInnerHTML={{ __html: content.resume.mainContentRichText }}
      />
      <Flex gap={{ base: 2, md: 6 }} wrap={'wrap'}>
        <a href={content.resume.resumeHref} target="_blank">
          <Button
            onClick={() =>
              sentAnalyticEvent({
                buttonTitle: 'resumeNewTab',
                buttonText: content.resume.viewInTabBtnText
              })
            }
            size={'sm'}
            variant={'outline'}>
            {content.resume.viewInTabBtnText}
          </Button>
        </a>
        <a href={content.resume.resumeHref} download>
          <Button
            onClick={() =>
              sentAnalyticEvent({
                buttonTitle: 'downloadResume',
                buttonText: content.resume.downloadBtnText
              })
            }
            size={'sm'}
            variant={'outline'}>
            {content.resume.downloadBtnText}
          </Button>
        </a>
      </Flex>
    </>
  )
}
