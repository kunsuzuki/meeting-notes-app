export const metadata = {
  title: 'meetingーnotes',
  description: 'We save you from tedious minute-taking and task management.',
}

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
