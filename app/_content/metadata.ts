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
    'Collin',
    'Kleest',
    'Tech Lead',
    'Collin Kleest',
    'Portfolio',
    'Personal Portfolio',
    'Software Engineer',
    'Collin Kleest Software Engineer',
    'Collin Kleest Tech Lead',
    'Collin Kleest website',
    'Collin Kleest portfolio',
    'collinkleest.com'
  ],
  openGraph: {
    title: 'Collin Kleest - Tech Lead',
    description: 'Software Engineer based in Philadelphia',
    emails: 'collinkleest@gmail.com',
    siteName: 'collinkleest.com',
    url: 'https://collinkleest.com',
    images: ['https://collinkleest.com/images/philly.jpeg'],
    type: 'website',
    locale: 'en_US'
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
