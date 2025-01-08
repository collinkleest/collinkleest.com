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
      <body className="bg-slate-950">
        <div className="container mx-auto text-slate-300">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
