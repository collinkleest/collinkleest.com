'use client'

import { AnalyticButton } from '@_components'
import content from '@_content'
import { Flex, Heading, Text } from '@chakra-ui/react'

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
          <AnalyticButton
            ctaTitle="resumeNewTab"
            ctaHref={content.resume.resumeHref}
            size={'sm'}
            variant={'outline'}>
            {content.resume.viewInTabBtnText}
          </AnalyticButton>
        </a>
        <a href={content.resume.resumeHref} download>
          <AnalyticButton
            ctaTitle="downloadResume"
            ctaHref={content.resume.resumeHref}
            size={'sm'}
            variant={'outline'}>
            {content.resume.downloadBtnText}
          </AnalyticButton>
        </a>
      </Flex>
    </>
  )
}
