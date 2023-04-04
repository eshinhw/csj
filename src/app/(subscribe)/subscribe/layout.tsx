import "../../globals.css"

export const metadata = {
  title: "The Yonge Street Journal",
  description: "Fair and Balanced News in Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
