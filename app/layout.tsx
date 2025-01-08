import { Provider } from './provider'
import Header from './_components'
// These styles apply to every route in the application
import './global.css'
import { Inter } from 'next/font/google'
export { metadata } from './_content'

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
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
