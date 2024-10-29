import { Metadata } from 'next'

export const experienceMetadata: Metadata = {
  title: 'Experience'
}

export const projectsMetadata: Metadata = {
  title: 'Projects'
}

export const resumeMetadata: Metadata = {
  title: 'Resume'
}

export const metadata: Metadata = {
  title: {
    template: '%s - Collin Kleest',
    default: 'Collin Kleest - Tech Lead'
  },
  description: 'Software Engineer based in Philadelphia'
}
