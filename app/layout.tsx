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
        <link
          rel="icon"
          id="default-scheme-icon"
          href="images/CK_Logo_500x500_WHITE.png"
          type="image/x-icon"
        />
        <link
          rel="icon"
          id="light-scheme-icon"
          href="images/CK_Logo_500x500.png"
          media="(prefers-color-scheme: light)"
          type="image/x-icon"
        />
        <link
          rel="icon"
          id="dark-scheme-icon"
          media="(prefers-color-scheme: dark)"
          href="images/CK_Logo_500x500_WHITE.png"
          type="image/x-icon"
        />
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
