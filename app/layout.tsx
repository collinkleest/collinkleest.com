import Header from './_components'
// These styles apply to every route in the application
import './global.css'

export { metadata } from './_content'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
