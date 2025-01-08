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
  description: 'Software Engineer based in Philadelphia',
  generator: 'Next.js',
  applicationName: 'collinkleest.com',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Collin Kleest',
    'Portfolio',
    'Personal Portfolio',
    'Software Engineer',
    'Tech Lead',
    'Developer',
    'Next.js',
    'React',
    'JavaScript'
  ],
  authors: [{ name: 'Collin Kleest', url: 'https://collinkleest.com' }],
  creator: 'Collin Kleest',
  publisher: 'Collin Kleest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}
