export const metadata = {
  title: 'meeting-notes',
  description: 'We save you from tedious minute-taking and task management.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* ✅ ここに <link> を記述 */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body>{children}</body>
    </html>
  );
}
