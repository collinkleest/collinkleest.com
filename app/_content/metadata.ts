import { Metadata } from 'next'

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
  openGraph: {
    title: 'Collin Kleest - Tech Lead',
    description: 'Software Engineer based in Philadelphia',
    emails: 'collinkleest@gmail.com',
    siteName: 'collinkleest.com',
    url: 'https://collinkleest.com',
    images: ['images/philly.jpeg']
  },
  authors: [{ name: 'Collin Kleest', url: 'https://collinkleest.com' }],
  creator: 'Collin Kleest',
  publisher: 'Collin Kleest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}
