import './globals.css'

export const metadata = {
  title: 'The Canada Street Journal',
  description: 'Fair and Balanced News in Canada',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='mx-2 md:mx-40'>
      <body>{children}</body>
    </html>
  )
}
