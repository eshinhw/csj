import './globals.css'

export const metadata = {
  title: 'The Yonge Street Journal',
  description: 'Fair and Balanced News in Yonge Street, Canada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='mx-2 lg:mx-2'>
      <body>{children}</body>
    </html>
  )
}
