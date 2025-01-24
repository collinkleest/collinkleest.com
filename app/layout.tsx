import { Provider } from './provider'
// These styles apply to every route in the application
import { Footer, Header } from '@_components'
import { Inter } from 'next/font/google'
import './global.css'
export { metadata } from '@_content'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="images/CK_Logo_500x500_GREY.png" />
      </head>
      <body>
        <Provider>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
